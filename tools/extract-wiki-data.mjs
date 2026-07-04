import fs from "node:fs";
import path from "node:path";

const workspaceRoot = process.cwd();
const modRoot = path.resolve(process.argv[2] || path.join(workspaceRoot, "..", "battle-valkyries"));
const sourceRoot = path.join(modRoot, "src", "battle-valkyries");

const outDataDir = path.join(workspaceRoot, "data");
const outAssetsDir = path.join(workspaceRoot, "assets");

function readUtf8(...parts) {
  return fs.readFileSync(path.join(...parts), "utf8");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findMatching(text, openIndex, openChar, closeChar) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openIndex; i < text.length; i += 1) {
    const ch = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === "\"") {
        inString = false;
      }
      continue;
    }

    if (ch === "\"") {
      inString = true;
      continue;
    }

    if (ch === openChar) {
      depth += 1;
    } else if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) {
        return i;
      }
    }
  }

  throw new Error(`No matching ${closeChar} found.`);
}

function assignedBlock(text, name) {
  const re = new RegExp(`${escapeRegExp(name)}\\s*<-\\s*\\{`);
  const match = re.exec(text);
  if (!match) return "";
  const open = text.indexOf("{", match.index);
  const close = findMatching(text, open, "{", "}");
  return text.slice(open, close + 1);
}

function assignedArray(text, name) {
  const re = new RegExp(`${escapeRegExp(name)}\\s*<-\\s*\\[`);
  const match = re.exec(text);
  if (!match) return "";
  const open = text.indexOf("[", match.index);
  const close = findMatching(text, open, "[", "]");
  return text.slice(open, close + 1);
}

function objectField(text, name) {
  const re = new RegExp(`\\b${escapeRegExp(name)}\\s*=\\s*\\{`);
  const match = re.exec(text);
  if (!match) return "";
  const open = text.indexOf("{", match.index);
  const close = findMatching(text, open, "{", "}");
  return text.slice(open, close + 1);
}

function arrayField(text, name) {
  const re = new RegExp(`\\b${escapeRegExp(name)}\\s*=\\s*\\[`);
  const match = re.exec(text);
  if (!match) return "";
  const open = text.indexOf("[", match.index);
  const close = findMatching(text, open, "[", "]");
  return text.slice(open, close + 1);
}

function namedObject(rootBlock, id) {
  const re = new RegExp(`\\b${escapeRegExp(id)}\\s*=\\s*\\{`);
  const match = re.exec(rootBlock);
  if (!match) return "";
  const open = rootBlock.indexOf("{", match.index);
  const close = findMatching(rootBlock, open, "{", "}");
  return rootBlock.slice(open, close + 1);
}

function stringField(text, name) {
  const re = new RegExp(`\\b${escapeRegExp(name)}\\s*=\\s*"([^"]*)"`);
  const match = re.exec(text);
  return match ? match[1] : "";
}

function numberConstant(text, name, fallback = 0) {
  const re = new RegExp(`${escapeRegExp(name)}\\s*<-\\s*(-?\\d+)`);
  const match = re.exec(text);
  return match ? Number(match[1]) : fallback;
}

function stringsIn(text) {
  return Array.from(text.matchAll(/"([^"]*)"/g), (match) => match[1]);
}

function numberMap(text) {
  const entries = Array.from(text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(-?\d+(?:\.\d+)?)/g));
  return Object.fromEntries(entries.map(([, key, value]) => [key, Number(value)]));
}

function rangeMap(text) {
  const entries = Array.from(text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*\[\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\]/g));
  return Object.fromEntries(entries.map(([, key, min, max]) => [key, [Number(min), Number(max)]]));
}

function booleanMap(text) {
  const entries = Array.from(text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(true|false)/g));
  return Object.fromEntries(entries.map(([, key, value]) => [key, value === "true"]));
}

function topLevelObjectKeys(block) {
  const keys = [];
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = 0; i < block.length; i += 1) {
    const ch = block[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === "\"") {
        inString = false;
      }
      continue;
    }

    if (ch === "\"") {
      inString = true;
      continue;
    }

    if (ch === "{") {
      depth += 1;
      continue;
    }

    if (ch === "}") {
      depth -= 1;
      continue;
    }

    if (depth === 1 && /[A-Za-z_]/.test(ch)) {
      const start = i;
      let end = i + 1;
      while (/[A-Za-z0-9_]/.test(block[end] || "")) end += 1;

      let cursor = end;
      while (/\s/.test(block[cursor] || "")) cursor += 1;
      if (block[cursor] === "=") {
        cursor += 1;
        while (/\s/.test(block[cursor] || "")) cursor += 1;
        if (block[cursor] === "{") {
          keys.push(block.slice(start, end));
        }
      }

      i = end - 1;
    }
  }

  return keys;
}

function resolveToken(token, dictionary) {
  if (!token) return "";
  return token.replace(/\$bv\{([^}]+)\}/g, (_match, key) => dictionary[key] || "");
}

function translate(dictionary, key, fallback = "") {
  return dictionary[key] || fallback;
}

function tooltipTokens(block) {
  const tooltip = arrayField(block, "Tooltip");
  return Array.from(tooltip.matchAll(/\bText\s*=\s*"([^"]*)"/g), (match) => match[1]);
}

function collectTraitTips(dictionary, id, specBlock) {
  const traitTooltip = stringField(specBlock, "TraitTooltip");
  if (traitTooltip) {
    return [resolveToken(traitTooltip, dictionary)].filter(Boolean);
  }

  const prefix = `valkyrie.${id}.trait.tooltip`;
  return Object.entries(dictionary)
    .filter(([key]) => key === prefix || key.startsWith(`${prefix}.`))
    .map(([, value]) => value)
    .filter(Boolean);
}

function collectFallbackSkillTips(dictionary, key) {
  const prefix = `skill.${key}.tooltip`;
  return Object.entries(dictionary)
    .filter(([entryKey]) => (entryKey === prefix || entryKey.startsWith(`${prefix}.`))
      && !entryKey.endsWith("_prefix")
      && !entryKey.endsWith("_suffix")
      && !entryKey.endsWith(".spent"))
    .map(([, value]) => value)
    .filter(Boolean);
}

function buildSkillText(dictionary, key, block) {
  const nameToken = stringField(block, "Name");
  const descriptionToken = stringField(block, "Description");
  const tokens = tooltipTokens(block);
  const tooltip = tokens.length > 0
    ? tokens.map((token) => resolveToken(token, dictionary)).filter(Boolean)
    : collectFallbackSkillTips(dictionary, key);

  return {
    name: resolveToken(nameToken, dictionary) || translate(dictionary, `skill.${key}.name`, key),
    description: resolveToken(descriptionToken, dictionary) || translate(dictionary, `skill.${key}.description`, ""),
    tooltip,
  };
}

function copyAsset(from, to) {
  if (!fs.existsSync(from)) {
    console.warn(`Missing asset: ${from}`);
    return false;
  }
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
  return true;
}

const en = JSON.parse(readUtf8(modRoot, "i18n", "en.json"));
const zh = JSON.parse(readUtf8(modRoot, "i18n", "zh_CN.json"));
const dictionaries = { en, zh };

const valkyrieData = readUtf8(sourceRoot, "battle-valkyries", "config", "valkyrie_data.nut");
const skillData = readUtf8(sourceRoot, "battle-valkyries", "config", "valkyrie_skill_data.nut");
const settingsData = readUtf8(sourceRoot, "battle-valkyries", "config", "mod_settings.nut");
const skinData = readUtf8(sourceRoot, "battle-valkyries", "config", "skin_data.nut");
const summonData = readUtf8(sourceRoot, "battle-valkyries", "hooks", "valkyrie_summon.nut");
const equipmentData = readUtf8(sourceRoot, "battle-valkyries", "equipment", "equipment_data.nut");

const order = stringsIn(assignedArray(valkyrieData, "ValkyrieOrder"));
const valkyriesRoot = assignedBlock(valkyrieData, "Valkyries");
const specsRoot = assignedBlock(skillData, "ValkyrieSkillSpecs");
const overridesRoot = assignedBlock(summonData, "ValkyrieDetailSkillOverrides");

const costSteps = Array.from(summonData.matchAll(/\{\s*Max\s*=\s*(\d+)\s*,\s*Cost\s*=\s*(\d+)\s*\}/g), (match) => ({
  max: Number(match[1]),
  cost: Number(match[2]),
}));

const statKeys = [
  "Hitpoints",
  "Bravery",
  "Stamina",
  "MeleeSkill",
  "RangedSkill",
  "MeleeDefense",
  "RangedDefense",
  "Initiative",
];

const statLabels = {
  en: {
    Hitpoints: "Hitpoints",
    Bravery: "Resolve",
    Stamina: "Fatigue",
    MeleeSkill: "Melee Skill",
    RangedSkill: "Ranged Skill",
    MeleeDefense: "Melee Defense",
    RangedDefense: "Ranged Defense",
    Initiative: "Initiative",
    MentalMorale: "Mental Morale",
  },
  zh: {
    Hitpoints: "生命值",
    Bravery: "决心",
    Stamina: "疲劳值",
    MeleeSkill: "近战技能",
    RangedSkill: "远程技能",
    MeleeDefense: "近战防御",
    RangedDefense: "远程防御",
    Initiative: "主动值",
    MentalMorale: "精神士气抗性",
  },
};

const settingDefaults = booleanMap(assignedBlock(skinData, "Settings"));
const settingsOptions = Array.from(settingsData.matchAll(
  /^\s*local\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*page\.addBooleanSetting\("([^"]+)"\s*,[^,]+,\s*"([^"]+)"\);\s*\r?\n\s*\1\.setDescription\("([^"]+)"\);/gm,
), (match) => {
  const [, , id, nameToken, descriptionToken] = match;
  return {
    id,
    type: "boolean",
    default: settingDefaults[id] === true,
    text: {
      en: {
        name: resolveToken(nameToken, en),
        description: resolveToken(descriptionToken, en),
      },
      zh: {
        name: resolveToken(nameToken, zh),
        description: resolveToken(descriptionToken, zh),
      },
    },
  };
});

function buildSkill(id, type, fallbackKey, specBlock, overrideBlock) {
  const sourceBlock = objectField(overrideBlock, type) || objectField(specBlock, type);
  const key = stringField(sourceBlock, "Key") || stringField(sourceBlock, "Icon") || fallbackKey;
  const icon = stringField(sourceBlock, "Icon") || key;

  return {
    key,
    icon,
    image: `assets/skills/${icon}.png`,
    text: {
      en: buildSkillText(en, key, sourceBlock),
      zh: buildSkillText(zh, key, sourceBlock),
    },
  };
}

const valkyries = order.map((id, index) => {
  const block = namedObject(valkyriesRoot, id);
  const specBlock = namedObject(specsRoot, id);
  const overrideBlock = namedObject(overridesRoot, id);
  const skillPaths = stringsIn(arrayField(block, "Skills"));
  const passivePath = skillPaths.find((item) => item.includes("/passives/")) || "";
  const activePath = skillPaths.find((item) => item.includes("/actives/")) || "";
  const passiveKey = (passivePath.match(/\/passives\/([^/"]+)_skill/) || [])[1] || "";
  const activeKey = (activePath.match(/\/actives\/([^/"]+)_skill/) || [])[1] || "";
  const skinId = stringField(block, "SkinID");
  const baseAttributes = numberMap(objectField(block, "BaseAttributes"));
  const talents = numberMap(objectField(block, "Talents"));
  const traitBonuses = numberMap(objectField(specBlock, "TraitBonuses"));

  return {
    id,
    order: index + 1,
    skinId,
    level: Number(stringField(block, "Level")) || 1,
    dailyWage: Number(stringField(block, "DailyWage")) || 1,
    baseAttributes,
    talents,
    traitBonuses,
    images: {
      card: `assets/valkyries/${id}_card.png`,
      skin: `assets/valkyries/${id}_skin_preview.png`,
      trait: `assets/traits/${id}_trait_icon.png`,
    },
    text: {
      en: {
        name: translate(en, `valkyrie.${id}.name`, stringField(block, "Name")),
        backgroundName: translate(en, `valkyrie.${id}.background.name`, stringField(block, "BackgroundName")),
        backgroundDescription: translate(en, `valkyrie.${id}.background.description`, stringField(block, "BackgroundDescription")),
        traitName: translate(en, `valkyrie.${id}.trait.name`, stringField(block, "TraitName")),
        traitDescription: translate(en, `valkyrie.${id}.trait.description`, stringField(block, "TraitDescription")),
        traitTooltip: collectTraitTips(en, id, specBlock),
      },
      zh: {
        name: translate(zh, `valkyrie.${id}.name`, translate(en, `valkyrie.${id}.name`, stringField(block, "Name"))),
        backgroundName: translate(zh, `valkyrie.${id}.background.name`, translate(en, `valkyrie.${id}.background.name`, "")),
        backgroundDescription: translate(zh, `valkyrie.${id}.background.description`, translate(en, `valkyrie.${id}.background.description`, "")),
        traitName: translate(zh, `valkyrie.${id}.trait.name`, translate(en, `valkyrie.${id}.trait.name`, "")),
        traitDescription: translate(zh, `valkyrie.${id}.trait.description`, translate(en, `valkyrie.${id}.trait.description`, "")),
        traitTooltip: collectTraitTips(zh, id, specBlock),
      },
    },
    skills: {
      passive: buildSkill(id, "Passive", passiveKey, specBlock, overrideBlock),
      active: buildSkill(id, "Active", activeKey, specBlock, overrideBlock),
    },
  };
});

ensureDir(outDataDir);
ensureDir(outAssetsDir);

for (const valkyrie of valkyries) {
  copyAsset(
    path.join(sourceRoot, "gfx", "ui", "valkyries", `${valkyrie.id}_card.png`),
    path.join(outAssetsDir, "valkyries", `${valkyrie.id}_card.png`),
  );
  copyAsset(
    path.join(sourceRoot, "gfx", "ui", "valkyries", `${valkyrie.id}_skin_preview.png`),
    path.join(outAssetsDir, "valkyries", `${valkyrie.id}_skin_preview.png`),
  );
  copyAsset(
    path.join(sourceRoot, "gfx", "ui", "traits", "battle-valkyries", `${valkyrie.id}_trait_icon.png`),
    path.join(outAssetsDir, "traits", `${valkyrie.id}_trait_icon.png`),
  );
  for (const skill of Object.values(valkyrie.skills)) {
    copyAsset(
      path.join(sourceRoot, "gfx", "skills", "battle-valkyries", `${skill.icon}.png`),
      path.join(outAssetsDir, "skills", `${skill.icon}.png`),
    );
  }
}

copyAsset(
  path.join(sourceRoot, "gfx", "ui", "backgrounds", "battle-valkyries", "valkyrie_background_icon.png"),
  path.join(outAssetsDir, "ui", "valkyrie_background_icon.png"),
);
copyAsset(
  path.join(sourceRoot, "gfx", "ui", "items", "battle-valkyries", "valkyries_hub_icon.png"),
  path.join(outAssetsDir, "ui", "valkyries_hub_icon.png"),
);

function localized(enValue, zhValue) {
  return { en: enValue, zh: zhValue };
}

function localizedList(enItems, zhItems) {
  return { en: enItems, zh: zhItems };
}

const equipmentRarityOrder = stringsIn(assignedArray(equipmentData, "EquipmentRarityOrder"));
const equipmentRaritiesRoot = assignedBlock(equipmentData, "EquipmentRarities");
const equipmentRarities = equipmentRarityOrder.map((id) => {
  const block = namedObject(equipmentRaritiesRoot, id);
  const numbers = numberMap(block);
  const nameToken = stringField(block, "Name");

  return {
    id,
    rank: numbers.Rank || 0,
    affixCount: numbers.AffixCount || 0,
    color: stringField(block, "Color"),
    text: {
      en: {
        name: resolveToken(nameToken, en) || translate(en, `equipment.rarity.${id}`, id),
      },
      zh: {
        name: resolveToken(nameToken, zh) || translate(zh, `equipment.rarity.${id}`, id),
      },
    },
  };
});
const equipmentRarityByRank = new Map(equipmentRarities.map((rarity) => [rarity.rank, rarity]));

const percentAffixEffects = new Set([
  "weapon_damage_percent",
  "armor_damage_percent",
  "direct_damage_percent",
  "shield_damage_percent",
  "durability_percent",
  "armor_max_percent",
]);
const negativePercentAffixEffects = new Set([
  "armor_damage_received_percent",
  "head_damage_received_percent",
  "ranged_damage_reduction",
  "shieldwall_shield_damage_reduction",
]);
const negativeFlatAffixEffects = new Set([
  "direct_damage_reduction_flat",
  "shield_skill_fatigue_reduction",
]);
const affixKindLabels = {
  basic: localized("Basic", "基础"),
  advanced: localized("Advanced", "进阶"),
  legendary: localized("Legendary", "传奇"),
};

function formatAffixValue(effect, value) {
  if (value === null || value === undefined || value === "") return "";
  if (negativePercentAffixEffects.has(effect)) return `-${value}%`;
  if (negativeFlatAffixEffects.has(effect)) return `-${value}`;
  if (percentAffixEffects.has(effect)) return `+${value}%`;
  return `+${value}`;
}

function formatAffixRange(effect, range) {
  if (!Array.isArray(range) || range.length < 2) return "";
  const [min, max] = range;
  const minText = formatAffixValue(effect, min);
  const maxText = formatAffixValue(effect, max);
  return min === max ? minText : `${minText}~${maxText}`;
}

function rarityName(id, lang) {
  const rarity = equipmentRarities.find((item) => item.id === id);
  return rarity?.text?.[lang]?.name || rarity?.text?.en?.name || id;
}

function affixUnlockText(kind, minRarityRank, lang) {
  if (kind === "basic") {
    return lang === "zh" ? "全部稀有度" : "Any rarity";
  }

  const rarity = equipmentRarityByRank.get(minRarityRank);
  const name = rarity?.text?.[lang]?.name || rarity?.text?.en?.name || `Rank ${minRarityRank}`;
  return `${name}+`;
}

function affixEffectLabel(dictionary, effect) {
  return translate(dictionary, `equipment.affix_effect.${effect}`, effect).replace(/\s+/g, " ").trim();
}

function affixSummary(definition, dictionary, lang) {
  const label = affixEffectLabel(dictionary, definition.effect);
  const rangeEntries = equipmentRarityOrder
    .filter((id) => definition.ranges && definition.ranges[id])
    .map((id) => [id, definition.ranges[id]]);

  if (rangeEntries.length > 0) {
    const [firstId, firstRange] = rangeEntries[0];
    const [lastId, lastRange] = rangeEntries[rangeEntries.length - 1];
    const firstText = `${rarityName(firstId, lang)} ${formatAffixRange(definition.effect, firstRange)}`;
    const lastText = `${rarityName(lastId, lang)} ${formatAffixRange(definition.effect, lastRange)}`;
    return firstId === lastId ? `${label}: ${firstText}` : `${label}: ${firstText} / ${lastText}`;
  }

  if (definition.value !== null && definition.value !== undefined) {
    return `${label} ${formatAffixValue(definition.effect, definition.value)}`;
  }

  if (definition.chance !== null && definition.chance !== undefined && definition.chance < 100) {
    return `${label} (${definition.chance}%)`;
  }

  return label;
}

function buildEquipmentAffix(id, block) {
  const numbers = numberMap(block);
  const kind = stringField(block, "Kind") || "basic";
  const effect = stringField(block, "Effect");
  const minRarityRank = numbers.MinRarityRank || (kind === "legendary" ? 5 : kind === "advanced" ? 4 : 1);
  const definition = {
    id,
    parts: stringsIn(arrayField(block, "Parts")),
    kind,
    effect,
    minRarityRank,
    value: Object.hasOwn(numbers, "Value") ? numbers.Value : null,
    chance: Object.hasOwn(numbers, "Chance") ? numbers.Chance : null,
    ranges: rangeMap(objectField(block, "Values")),
  };

  const nameToken = stringField(block, "Name");
  return {
    ...definition,
    kindText: affixKindLabels[kind] || localized(kind, kind),
    unlockText: {
      en: affixUnlockText(kind, minRarityRank, "en"),
      zh: affixUnlockText(kind, minRarityRank, "zh"),
    },
    text: {
      en: {
        name: resolveToken(nameToken, en) || translate(en, `equipment.affix.${id}.name`, id),
        effect: affixEffectLabel(en, effect),
        summary: affixSummary(definition, en, "en"),
      },
      zh: {
        name: resolveToken(nameToken, zh) || translate(zh, `equipment.affix.${id}.name`, id),
        effect: affixEffectLabel(zh, effect),
        summary: affixSummary(definition, zh, "zh"),
      },
    },
  };
}

const equipmentAffixesRoot = assignedBlock(equipmentData, "EquipmentAffixes");
const equipmentSpecialAffixesRoot = assignedBlock(equipmentData, "EquipmentSpecialAffixes");
const equipmentAffixes = [
  ...topLevelObjectKeys(equipmentAffixesRoot).map((id) => buildEquipmentAffix(id, namedObject(equipmentAffixesRoot, id))),
  ...topLevelObjectKeys(equipmentSpecialAffixesRoot).map((id) => buildEquipmentAffix(id, namedObject(equipmentSpecialAffixesRoot, id))),
];

const xilianBondStageValues = [20, 40, 60, 80, 100];
const xilianBondStages = xilianBondStageValues.map((value) => ({
  value,
  rewardMoney: 100,
  rewardPerkPoints: value >= 100 ? 2 : 1,
  text: {
    en: {
      stage: translate(en, `event.xilian_bond.${value}.stage`, ""),
      eventTitle: translate(en, `event.xilian_bond.${value}.title`, ""),
    },
    zh: {
      stage: translate(zh, `event.xilian_bond.${value}.stage`, ""),
      eventTitle: translate(zh, `event.xilian_bond.${value}.title`, ""),
    },
  },
}));

const systems = {
  intro: localized(
    "Current content goes beyond the 20-character roster: it includes the Valkyrie hub, identity-driven skins, Xilian's bond events, enemy tooltip upgrades, a test origin, save recovery helpers, and an optional equipment system.",
    "当前内容不止 20 名女武神名册：还包括女武神 Hub、身份驱动皮肤、昔涟羁绊事件、敌人 tooltip 增强、测试开局、存档恢复辅助，以及一个可选装备系统。",
  ),
  baselineNote: localized(
    "The current gameplay and future design baseline does not assume the optional equipment system unless the player or maintainer explicitly enables or extends it.",
    "当前游玩和后续设计默认不以可选装备系统为前提；只有玩家或维护者明确启用、维护或扩展它时才纳入考虑。",
  ),
  cards: [
    {
      id: "hub",
      title: localized("Valkyrie Hub", "女武神 Hub"),
      body: localized(
        "Ctrl + M opens the main interface for summoning, character details, skin item grants, tasks, and the optional alchemy tab.",
        "按 Ctrl + M 打开主界面，用于召唤、查看角色详情、授予皮肤物品、承载任务页，以及进入可选炼金页。",
      ),
      bullets: localizedList(
        ["Tabs: Summon, Tasks, Alchemy.", "The summon detail view shows portrait art, skin preview, background, trait, passive skill, active skill, and the current price."],
        ["顶部标签：召唤、任务、炼金。", "召唤详情会展示立绘、皮肤预览、背景、人物特性、被动技能、主动技能和当前价格。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/hooks/hub_backend.nut",
        "src/battle-valkyries/ui/mods/battle-valkyries/valkyries_hub.js",
      ],
    },
    {
      id: "skins",
      title: localized("Identity-driven Skins", "身份驱动皮肤"),
      body: localized(
        "Each summoned Valkyrie stores identity and skin IDs on actor flags. Appearance is reapplied after summon, load, combat entry, world refresh, and equipment changes.",
        "每名召唤女武神都会把身份和皮肤 ID 写入 actor flags。召唤、读档、进入战斗、回到大地图和装备变化后都会重新应用外观。",
      ),
      bullets: localizedList(
        ["Whole-bust skins hide the original body, head, hair, helmet, armor, quiver, injuries, and related layers.", "Dedicated death brushes keep Valkyries from falling back to vanilla corpse visuals."],
        ["整张 bust 皮肤会隐藏原版身体、头、头发、头盔、盔甲、箭袋、伤痕等图层。", "专属死亡 brush 会避免女武神死亡后退回原版尸体外观。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
        "src/battle-valkyries/battle-valkyries/hooks/skin_appearance.nut",
        "src/battle-valkyries/battle-valkyries/hooks/death_state_fix.nut",
      ],
    },
    {
      id: "voice",
      title: localized("Selective Voice Replacement", "选择性语音替换"),
      body: localized(
        "Voice hooks replace hurt, death, fatigue, and flee sounds only for actors carrying a supported Valkyrie skin.",
        "语音 hook 只会替换拥有对应女武神皮肤角色的受击、死亡、疲劳和逃跑音效。",
      ),
      bullets: localizedList(
        ["Supported skins: Chisaki, Changli, Jinhsi, Yuno, Feixue, Cartethyia."],
        ["已接入皮肤：千咲、长离、今汐、尤诺、绯雪、卡提希娅。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/hooks/valkyrie_voice_sounds.nut",
      ],
    },
    {
      id: "bond",
      title: localized("Xilian Bond", "昔涟羁绊"),
      body: localized(
        "Xilian has the first implemented character growth track: battle progress, a bond item, and five world-event milestones.",
        "昔涟拥有第一套已落地的角色养成线：战斗进度、羁绊道具和五段世界事件。",
      ),
      bullets: localizedList(
        ["Surviving a battle grants +2 bond.", "Xilian Memory Shards grant +20 bond when a valid Xilian is in the roster.", "The bond cap is 100."],
        ["昔涟参战并存活后羁绊 +2。", "队伍中有有效昔涟时，昔涟记忆碎晶提供 +20 羁绊。", "羁绊上限为 100。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/hooks/bond_system.nut",
        "src/battle-valkyries/scripts/events/events/battle_valkyries_xilian_bond_event.nut",
        "src/battle-valkyries/scripts/items/misc/xilian_bond_crystal_item.nut",
      ],
    },
    {
      id: "enemy_tooltip",
      title: localized("Enemy Tooltip Upgrade", "敌人信息增强"),
      body: localized(
        "Enemy tactical tooltips show concrete head armor, body armor, hitpoint, fatigue, and equipment values.",
        "战斗中的敌人 tooltip 会显示头部护甲、身体护甲、生命、疲劳和装备的具体数值。",
      ),
      bullets: localizedList(
        ["If the equipment system is enabled, equipment names are colored by rarity."],
        ["如果装备系统开启，装备名称会按稀有度颜色显示。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/hooks/tactical_enemy_tooltip.nut",
      ],
    },
    {
      id: "test_origin",
      title: localized("Test Origin", "测试开局"),
      body: localized(
        "The Battle Valkyries test company exists for rapid validation of summons, equipment, strong enemies, and Xilian bond items.",
        "战斗女武神测试战团用于快速验证召唤、装备、强敌和昔涟羁绊物品。",
      ),
      bullets: localizedList(
        ["Starts with three basic brothers, 3,000,000 Crowns, food, fixed legendary equipment, and 10 Xilian Memory Shards.", "Spawns five legendary locations plus nearby strong beast, orc, and mercenary parties that actively chase the player."],
        ["开局提供 3 名基础队员、3,000,000 克朗、粮食、固定传奇装备和 10 个昔涟记忆碎晶。", "会在附近生成 5 个传奇地点，以及主动追击玩家的野兽、兽人和雇佣兵强队。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/hooks/test_origin.nut",
        "src/battle-valkyries/scripts/scenarios/world/battle_valkyries_test_company_scenario.nut",
      ],
    },
    {
      id: "save_compat",
      title: localized("Save Recovery", "存档兼容"),
      body: localized(
        "Template skills are restored from Valkyrie identity rather than serialized as permanent custom skill state.",
        "模板技能通过女武神身份恢复，而不是作为长期自定义 skill 状态写入存档。",
      ),
      bullets: localizedList(
        ["Key helpers sync identity, restore template skills, refresh roster state, and protect death-state edge cases."],
        ["关键 helper 会同步身份、补回模板技能、刷新名册状态，并兜底死亡状态异常。"],
      ),
      sourceFiles: [
        "src/battle-valkyries/battle-valkyries/hooks/skill_msu_compat.nut",
        "src/battle-valkyries/battle-valkyries/hooks/valkyrie_summon.nut",
        "src/battle-valkyries/battle-valkyries/hooks/death_state_fix.nut",
      ],
    },
  ],
  bond: {
    title: localized("Xilian Bond Stages", "昔涟羁绊阶段"),
    item: {
      en: translate(en, "item.xilian_bond_crystal.name", "Xilian Memory Shard"),
      zh: translate(zh, "item.xilian_bond_crystal.name", "昔涟记忆碎晶"),
    },
    gainPerBattle: 2,
    itemGain: 20,
    max: 100,
    stages: xilianBondStages,
  },
  equipment: {
    title: localized("Optional Equipment System", "可选装备系统"),
    body: localized(
      "When enabled for a new campaign, eligible weapons, helmets, armor, and shields gain rarity, affix slots, alchemy enchanting, removal stones, disassembly rewards, and enemy gear generation.",
      "新战役启用后，符合条件的武器、头盔、盔甲和盾牌会获得稀有度、词条槽、炼金附魔、消除石、拆解奖励和敌人装备生成。",
    ),
    rules: localizedList(
      ["Named items migrate to red rarity and legendary items migrate to prismatic rarity.", "Basic affixes can roll on any rarity; advanced affixes unlock from purple rarity, and legendary affixes unlock from red rarity.", "Enchanting adds a non-duplicate affix while slots remain; once full, it replaces the last affix.", "Weapon on-hit affixes only trigger from weapon attack skills and still respect target immunities.", "Disassemble, enchant, and remove-affix actions each cost 100 Crowns before material costs."],
      ["原版 Named 装备迁移为红装，Legendary 装备迁移为彩装。", "基础词条可出现在全部稀有度；进阶词条从紫装开始，传奇词条从红装开始。", "附魔在词条未满时新增不重复词条；词条满后会替换最后一条。", "武器命中触发类词条只由武器攻击技能触发，并仍会遵守目标免疫。", "拆解、附魔、删除词条都会先消耗 100 克朗，再计算材料消耗。"],
    ),
    affixIntro: localized(
      "The table below is generated from the current equipment affix definitions. Basic affixes show the lowest and highest possible tier ranges; special affixes show fixed values or trigger chances.",
      "下表由当前装备词条定义生成。基础词条展示最低与最高词条等级的数值区间；特殊词条展示固定数值或触发概率。",
    ),
    rarities: equipmentRarities,
    affixes: equipmentAffixes,
  },
};

const data = {
  meta: {
    title: "Battle Valkyries Wiki",
    source: "battle-valkyries mod",
    updatedAt: "2026-07-04",
    sourceDocument: "文档/游戏mod内容介绍/index.md",
    contentSource: [
      "文档/游戏mod内容介绍/index.md",
      "文档/装备词条系统设计.md",
      "src/battle-valkyries/battle-valkyries/load.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_skill_data.nut",
      "src/battle-valkyries/battle-valkyries/config/mod_settings.nut",
      "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
      "src/battle-valkyries/battle-valkyries/hooks/valkyrie_summon.nut",
      "src/battle-valkyries/battle-valkyries/hooks/bond_system.nut",
      "src/battle-valkyries/battle-valkyries/hooks/tactical_enemy_tooltip.nut",
      "src/battle-valkyries/battle-valkyries/hooks/test_origin.nut",
      "src/battle-valkyries/battle-valkyries/equipment/equipment_data.nut",
      "src/battle-valkyries/battle-valkyries/equipment/equipment_system.nut",
      "i18n/en.json",
      "i18n/zh_CN.json",
    ],
  },
  statKeys,
  statLabels,
  summon: {
    rosterMax: numberConstant(summonData, "ValkyrieSummonRosterMax", 20),
    formationSlots: numberConstant(summonData, "ValkyrieSummonFormationSlots", 27),
    combatSlots: numberConstant(summonData, "ValkyrieSummonCombatSlots", 18),
    costSteps,
  },
  settings: {
    modName: {
      en: translate(en, "mod.name", "Battle Valkyries"),
      zh: translate(zh, "mod.name", translate(en, "mod.name", "Battle Valkyries")),
    },
    pageTitle: {
      en: translate(en, "settings.page_title", "Valkyries"),
      zh: translate(zh, "settings.page_title", translate(en, "settings.page_title", "Valkyries")),
    },
    sectionTitle: {
      en: translate(en, "settings.system_title", "Summon System"),
      zh: translate(zh, "settings.system_title", translate(en, "settings.system_title", "Summon System")),
    },
    screenshot: "assets/ui/mod-settings.jpg",
    options: settingsOptions,
  },
  systems,
  valkyries,
};

fs.writeFileSync(
  path.join(outDataDir, "wiki-data.js"),
  `window.BV_WIKI_DATA = ${JSON.stringify(data, null, 2)};\n`,
  "utf8",
);

console.log(`Generated ${valkyries.length} Valkyries and copied assets into ${path.relative(workspaceRoot, outAssetsDir)}.`);

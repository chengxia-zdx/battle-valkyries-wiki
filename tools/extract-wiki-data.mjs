import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspaceRoot = process.cwd();
const modRoot = path.resolve(process.argv[2] || path.join(workspaceRoot, "..", "battle-valkyries"));
const valkyrieRoot = path.join(modRoot, "src", "battle-valkyries");
const valkyrieCodeRoot = path.join(valkyrieRoot, "battle-valkyries");
const alchemyRoot = path.join(modRoot, "src", "alchemy-enchantment-system");
const alchemyCodeRoot = path.join(alchemyRoot, "alchemy-enchantment-system");
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
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === "\"") inString = false;
      continue;
    }
    if (ch === "\"") {
      inString = true;
      continue;
    }
    if (ch === openChar) depth += 1;
    else if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error(`No matching ${closeChar} found.`);
}

function assignedContainer(text, name, openChar, closeChar) {
  const re = new RegExp(`${escapeRegExp(name)}\\s*<-\\s*\\${openChar}`);
  const match = re.exec(text);
  if (!match) return "";
  const open = text.indexOf(openChar, match.index);
  const close = findMatching(text, open, openChar, closeChar);
  return text.slice(open, close + 1);
}

const assignedBlock = (text, name) => assignedContainer(text, name, "{", "}");
const assignedArray = (text, name) => assignedContainer(text, name, "[", "]");

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
  if (!rootBlock) return "";
  const re = new RegExp(`\\b${escapeRegExp(id)}\\s*=\\s*\\{`);
  const match = re.exec(rootBlock);
  if (!match) return "";
  const open = rootBlock.indexOf("{", match.index);
  const close = findMatching(rootBlock, open, "{", "}");
  return rootBlock.slice(open, close + 1);
}

function stringField(text, name) {
  const re = new RegExp(`\\b${escapeRegExp(name)}\\s*=\\s*\"((?:\\\\.|[^\"\\\\])*)\"`);
  const match = re.exec(text);
  return match ? match[1].replace(/\\n/g, "\n").replace(/\\\"/g, "\"") : "";
}

function numberField(text, name, fallback = 0) {
  const re = new RegExp(`\\b${escapeRegExp(name)}\\s*=\\s*(-?\\d+(?:\\.\\d+)?)`);
  const match = re.exec(text);
  return match ? Number(match[1]) : fallback;
}

function numberConstant(text, name, fallback = 0) {
  const re = new RegExp(`${escapeRegExp(name)}\\s*<-\\s*(-?\\d+(?:\\.\\d+)?)`);
  const match = re.exec(text);
  return match ? Number(match[1]) : fallback;
}

function stringsIn(text) {
  return Array.from(text.matchAll(/"((?:\\.|[^"\\])*)"/g), (match) => match[1].replace(/\\n/g, "\n"));
}

function numberMap(text) {
  return Object.fromEntries(Array.from(text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(-?\d+(?:\.\d+)?)/g),
    ([, key, value]) => [key, Number(value)]));
}

function booleanMap(text) {
  return Object.fromEntries(Array.from(text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(true|false)/g),
    ([, key, value]) => [key, value === "true"]));
}

function rangeMap(text) {
  return Object.fromEntries(Array.from(text.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*=\s*\[\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\]/g),
    ([, key, min, max]) => [key, [Number(min), Number(max)]]));
}

function topLevelObjectKeys(block) {
  const keys = [];
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = 0; i < block.length; i += 1) {
    const ch = block[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === "\"") inString = false;
      continue;
    }
    if (ch === "\"") { inString = true; continue; }
    if (ch === "{") { depth += 1; continue; }
    if (ch === "}") { depth -= 1; continue; }
    if (depth === 1 && /[A-Za-z_]/.test(ch)) {
      const start = i;
      let end = i + 1;
      while (/[A-Za-z0-9_]/.test(block[end] || "")) end += 1;
      let cursor = end;
      while (/\s/.test(block[cursor] || "")) cursor += 1;
      if (block[cursor] === "=") {
        cursor += 1;
        while (/\s/.test(block[cursor] || "")) cursor += 1;
        if (block[cursor] === "{") keys.push(block.slice(start, end));
      }
      i = end - 1;
    }
  }
  return keys;
}

function resolveToken(token, dictionary) {
  return String(token || "").replace(/\$bv\{([^}]+)\}/g, (_match, key) => dictionary[key] || key);
}

function translate(dictionary, key, fallback = "") {
  return dictionary[key] || fallback;
}

function localized(enValue, zhValue) {
  return { en: enValue, zh: zhValue };
}

function localizedList(enItems, zhItems) {
  return { en: enItems, zh: zhItems };
}

function copyAsset(from, to) {
  if (!from || !fs.existsSync(from)) return false;
  ensureDir(path.dirname(to));
  fs.copyFileSync(from, to);
  return true;
}

function normalizeSourcePath(value, iconPrefix = "battle-valkyries") {
  return String(value || "")
    .replace(/\$bvvar\{iconPrefix\}/g, iconPrefix)
    .replace(/\\/g, "/");
}

function copyGfxAsset(sourceBase, gfxPath, outputPath) {
  const normalized = normalizeSourcePath(gfxPath);
  if (!normalized) return false;
  return copyAsset(path.join(sourceBase, "gfx", ...normalized.split("/")), path.join(workspaceRoot, ...outputPath.split("/")));
}

function collectPrefixValues(dictionary, prefix) {
  return Object.entries(dictionary)
    .filter(([key]) => key === prefix || key.startsWith(`${prefix}.`))
    .filter(([key]) => !/(spent|unavailable|disabled|current|ready|prefix|suffix)$/.test(key))
    .map(([, value]) => value)
    .filter(Boolean);
}

const en = JSON.parse(readUtf8(modRoot, "i18n", "en.json"));
const zh = JSON.parse(readUtf8(modRoot, "i18n", "zh_CN.json"));
const variants = {
  valkyries: JSON.parse(readUtf8(modRoot, "variants", "en.json")),
  alchemy: JSON.parse(readUtf8(modRoot, "variants", "alchemy_en.json")),
};

const valkyrieData = readUtf8(valkyrieCodeRoot, "config", "valkyrie_data.nut");
const lilyValkyrieData = readUtf8(valkyrieCodeRoot, "config", "lily_valkyrie_data.nut");
const skillCatalogData = readUtf8(valkyrieCodeRoot, "config", "valkyrie_skill_catalog.nut");
const lilySkillCatalogData = readUtf8(valkyrieCodeRoot, "config", "lily_skill_catalog.nut");
const traitData = readUtf8(valkyrieCodeRoot, "config", "valkyrie_trait_data.nut");
const lilyTraitData = readUtf8(valkyrieCodeRoot, "config", "lily_trait_data.nut");
const skinData = readUtf8(valkyrieCodeRoot, "config", "skin_data.nut");
const lilySkinData = readUtf8(valkyrieCodeRoot, "config", "lily_skin_data.nut");
const summonData = readUtf8(valkyrieCodeRoot, "hooks", "valkyrie_summon.nut");
const settingsData = readUtf8(valkyrieCodeRoot, "config", "mod_settings.nut");
const equipmentData = readUtf8(alchemyCodeRoot, "equipment_data.nut");

const order = [...stringsIn(assignedArray(valkyrieData, "ValkyrieOrder")), "lily"];
const valkyriesRoot = assignedBlock(valkyrieData, "Valkyries");
const skillsRoot = assignedBlock(skillCatalogData, "ValkyrieSkillCatalog");
const traitsRoot = assignedBlock(traitData, "ValkyrieTraitData");
const skinsRoot = assignedBlock(skinData, "Skins");

function valkyrieBlock(id) {
  return id === "lily" ? assignedBlock(lilyValkyrieData, "Valkyries.lily") : namedObject(valkyriesRoot, id);
}

function traitBlock(id) {
  return id === "lily" ? assignedBlock(lilyTraitData, "ValkyrieTraitData.lily") : namedObject(traitsRoot, id);
}

function skinBlock(id) {
  return namedObject(skinsRoot, id) || assignedBlock(lilySkinData, `Skins.${id}`);
}

function skillBlock(id) {
  return namedObject(skillsRoot, id) || assignedBlock(lilySkillCatalogData, `ValkyrieSkillCatalog.${id}`);
}

const statKeys = ["Hitpoints", "Bravery", "Stamina", "MeleeSkill", "RangedSkill", "MeleeDefense", "RangedDefense", "Initiative"];
const statLabels = {
  en: { Hitpoints: "Hitpoints", Bravery: "Resolve", Stamina: "Fatigue", MeleeSkill: "Melee Skill", RangedSkill: "Ranged Skill", MeleeDefense: "Melee Defense", RangedDefense: "Ranged Defense", Initiative: "Initiative", MentalMorale: "Mental Morale", ActionPoints: "Action Points", Vision: "Vision" },
  zh: { Hitpoints: "生命值", Bravery: "决心", Stamina: "疲劳值", MeleeSkill: "近战技能", RangedSkill: "远程技能", MeleeDefense: "近战防御", RangedDefense: "远程防御", Initiative: "主动值", MentalMorale: "精神士气抗性", ActionPoints: "行动点", Vision: "视野" },
};

const copiedSkillIcons = new Set();
function buildSkill(key) {
  const block = skillBlock(key);
  const icon = stringField(block, "Icon") || key;
  const specBlock = objectField(block, "Spec");
  const image = `assets/skills/${icon}.png`;
  if (!copiedSkillIcons.has(icon)) {
    copyAsset(path.join(valkyrieRoot, "gfx", "skills", "battle-valkyries", `${icon}.png`), path.join(outAssetsDir, "skills", `${icon}.png`));
    copiedSkillIcons.add(icon);
  }
  return {
    key,
    icon,
    image,
    kind: stringField(block, "Kind") || "active",
    lifetime: stringField(block, "Lifetime") || "persistent",
    spec: { ...numberMap(specBlock), ...booleanMap(specBlock) },
    text: {
      en: {
        name: translate(en, `skill.${key}.name`, resolveToken(stringField(block, "Name"), en) || key),
        description: translate(en, `skill.${key}.description`, resolveToken(stringField(block, "Description"), en)),
        tooltip: collectPrefixValues(en, `skill.${key}.tooltip`),
      },
      zh: {
        name: translate(zh, `skill.${key}.name`, translate(en, `skill.${key}.name`, key)),
        description: translate(zh, `skill.${key}.description`, translate(en, `skill.${key}.description`, "")),
        tooltip: collectPrefixValues(zh, `skill.${key}.tooltip`),
      },
    },
  };
}

function buildSkin(id, template, valkyrieID) {
  const block = skinBlock(id);
  const portraitPath = normalizeSourcePath(stringField(block, "Portrait") || stringField(template, "Portrait"));
  const previewPath = normalizeSourcePath(stringField(block, "Preview") || `ui/valkyries/${valkyrieID}_skin_preview.png`);
  const portraitName = path.basename(portraitPath || `${valkyrieID}_card.png`);
  const previewName = path.basename(previewPath || `${valkyrieID}_skin_preview.png`);
  const portraitOut = `assets/valkyries/${portraitName}`;
  const previewOut = `assets/valkyries/${previewName}`;
  const previewCopied = copyGfxAsset(valkyrieRoot, previewPath, previewOut);
  copyGfxAsset(valkyrieRoot, portraitPath, portraitOut);
  if (!previewCopied) {
    const brush = stringField(block, "Brush");
    copyAsset(
      path.join(valkyrieRoot, "unpacked_brushes", "entity_battle_valkyries", "entity", "battle_valkyries", `${brush}.png`),
      path.join(workspaceRoot, ...previewOut.split("/")),
    );
  }
  return {
    id,
    images: { portrait: portraitOut, preview: previewOut },
    text: {
      en: { name: resolveToken(stringField(block, "Name"), en) || id, description: resolveToken(stringField(block, "Description"), en) },
      zh: { name: resolveToken(stringField(block, "Name"), zh) || id, description: resolveToken(stringField(block, "Description"), zh) },
    },
  };
}

const valkyries = order.map((id, index) => {
  const block = valkyrieBlock(id);
  if (!block) throw new Error(`Missing Valkyrie template: ${id}`);
  const tBlock = traitBlock(id);
  const defaultSkinId = stringField(block, "SkinID");
  const skinIDs = stringsIn(arrayField(block, "SkinIDs"));
  if (!skinIDs.includes(defaultSkinId)) skinIDs.unshift(defaultSkinId);
  const traitIconPath = normalizeSourcePath(stringField(block, "TraitIcon"));
  const traitIconName = path.basename(traitIconPath || `${id}_trait_icon.png`);
  const traitOut = `assets/traits/${traitIconName}`;
  copyGfxAsset(valkyrieRoot, traitIconPath, traitOut);
  const skills = stringsIn(arrayField(block, "SkillLoadout")).map(buildSkill);
  const skins = skinIDs.filter(Boolean).map((skinID) => buildSkin(skinID, block, id));
  return {
    id,
    order: index + 1,
    level: numberField(block, "Level", 1),
    dailyWage: numberField(block, "DailyWage", 1),
    legendsPerkProfile: stringField(block, "LegendsPerkProfile"),
    detailLayout: stringField(block, "DetailLayout") || "classic",
    baseAttributes: numberMap(objectField(block, "BaseAttributes")),
    talents: numberMap(objectField(block, "Talents")),
    traitBonuses: numberMap(objectField(tBlock, "TraitBonuses")),
    images: { card: skins[0]?.images.portrait || "", skin: skins[0]?.images.preview || "", trait: traitOut },
    skins,
    skills,
    text: {
      en: {
        name: resolveToken(stringField(block, "Name"), en) || id,
        backgroundName: resolveToken(stringField(block, "BackgroundName"), en),
        backgroundDescription: resolveToken(stringField(block, "BackgroundDescription"), en),
        traitName: resolveToken(stringField(block, "TraitName"), en),
        traitDescription: resolveToken(stringField(block, "TraitDescription"), en),
        traitTooltip: collectPrefixValues(en, `valkyrie.${id}.trait.tooltip`),
      },
      zh: {
        name: resolveToken(stringField(block, "Name"), zh) || id,
        backgroundName: resolveToken(stringField(block, "BackgroundName"), zh),
        backgroundDescription: resolveToken(stringField(block, "BackgroundDescription"), zh),
        traitName: resolveToken(stringField(block, "TraitName"), zh),
        traitDescription: resolveToken(stringField(block, "TraitDescription"), zh),
        traitTooltip: collectPrefixValues(zh, `valkyrie.${id}.trait.tooltip`),
      },
    },
  };
});

copyAsset(path.join(valkyrieRoot, "gfx", "ui", "items", "battle-valkyries", "valkyries_hub_icon.png"), path.join(outAssetsDir, "ui", "valkyries_hub_icon.png"));

const settingDefaults = booleanMap(assignedBlock(skinData, "Settings"));
const settingsOptions = Array.from(settingsData.matchAll(/^\s*local\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*page\.addBooleanSetting\("([^"]+)"\s*,[^,]+,\s*"([^"]+)"\);\s*\r?\n\s*[A-Za-z_][A-Za-z0-9_]*\.setDescription\("([^"]+)"\);/gm),
  ([, id, nameToken, descriptionToken]) => ({
    id,
    type: "boolean",
    default: settingDefaults[id] === true,
    text: {
      en: { name: resolveToken(nameToken, en), description: resolveToken(descriptionToken, en) },
      zh: { name: resolveToken(nameToken, zh), description: resolveToken(descriptionToken, zh) },
    },
  }));

const costSteps = Array.from(summonData.matchAll(/\{\s*Max\s*=\s*(\d+)\s*,\s*Cost\s*=\s*(\d+)\s*\}/g), ([, max, cost]) => ({ max: Number(max), cost: Number(cost) }));
const gachaCostSteps = Array.from(summonData.matchAll(/\{\s*MaxGuarantees\s*=\s*(\d+)\s*,\s*Cost\s*=\s*(\d+)\s*\}/g), ([, maxGuarantees, cost]) => ({ maxGuarantees: Number(maxGuarantees), cost: Number(cost) }));

const rarityOrder = stringsIn(assignedArray(equipmentData, "EquipmentRarityOrder"));
const raritiesRoot = assignedBlock(equipmentData, "EquipmentRarities");
const rarities = rarityOrder.map((id) => {
  const block = namedObject(raritiesRoot, id);
  return {
    id,
    rank: numberField(block, "Rank"),
    affixCount: numberField(block, "AffixCount"),
    color: stringField(block, "Color"),
    text: { en: { name: resolveToken(stringField(block, "Name"), en) }, zh: { name: resolveToken(stringField(block, "Name"), zh) } },
  };
});
const rarityByRank = new Map(rarities.map((item) => [item.rank, item]));

const percentEffects = new Set(["weapon_damage_percent", "armor_damage_percent", "direct_damage_percent", "shield_damage_percent", "durability_percent", "armor_max_percent"]);
const negativePercentEffects = new Set(["armor_damage_received_percent", "head_damage_received_percent", "ranged_damage_reduction", "shieldwall_shield_damage_reduction"]);
const negativeFlatEffects = new Set(["direct_damage_reduction_flat", "shield_skill_fatigue_reduction"]);

function formatValue(effect, value) {
  if (value === null || value === undefined) return "";
  if (negativePercentEffects.has(effect)) return `-${value}%`;
  if (negativeFlatEffects.has(effect)) return `-${value}`;
  if (percentEffects.has(effect)) return `+${value}%`;
  return `+${value}`;
}

function formatRange(effect, range) {
  if (!range) return "";
  return range[0] === range[1] ? formatValue(effect, range[0]) : `${formatValue(effect, range[0])}~${formatValue(effect, range[1])}`;
}

function buildAffix(id, block) {
  const kind = stringField(block, "Kind") || "basic";
  const effect = stringField(block, "Effect");
  const ranges = rangeMap(objectField(block, "Values"));
  const valueMatch = /\bValue\s*=\s*(-?\d+(?:\.\d+)?)/.exec(block);
  const chanceMatch = /\bChance\s*=\s*(-?\d+(?:\.\d+)?)/.exec(block);
  const minRarityRank = numberField(block, "MinRarityRank", kind === "mythic" ? 6 : kind === "legendary" ? 5 : kind === "advanced" ? 4 : 1);
  const definition = { id, kind, effect, parts: stringsIn(arrayField(block, "Parts")), minRarityRank, ranges, value: valueMatch ? Number(valueMatch[1]) : null, chance: chanceMatch ? Number(chanceMatch[1]) : null };
  function summary(dictionary, lang) {
    const label = translate(dictionary, `equipment.affix_effect.${effect}`, effect);
    const rangeEntries = rarityOrder.filter((rarity) => ranges[rarity]).map((rarity) => [rarity, ranges[rarity]]);
    if (rangeEntries.length) {
      const [firstId, firstRange] = rangeEntries[0];
      const [lastId, lastRange] = rangeEntries.at(-1);
      const rarityName = (rid) => rarities.find((item) => item.id === rid)?.text?.[lang]?.name || rid;
      return `${label}: ${rarityName(firstId)} ${formatRange(effect, firstRange)} / ${rarityName(lastId)} ${formatRange(effect, lastRange)}`;
    }
    if (definition.value !== null) return `${label} ${formatValue(effect, definition.value)}`;
    if (definition.chance !== null) return `${label} (${definition.chance}%)`;
    return label;
  }
  const kindText = {
    basic: localized("Basic", "基础"), advanced: localized("Advanced", "进阶"), legendary: localized("Legendary", "传奇"), mythic: localized("Mythic", "神话"),
  }[kind] || localized(kind, kind);
  function unlock(lang) {
    if (kind === "basic") return lang === "zh" ? "全部品质" : "Any rarity";
    const rarity = rarityByRank.get(minRarityRank);
    return `${rarity?.text?.[lang]?.name || rarity?.id || minRarityRank}+`;
  }
  return {
    ...definition,
    kindText,
    unlockText: { en: unlock("en"), zh: unlock("zh") },
    text: {
      en: { name: translate(en, `equipment.affix.${id}.name`, id), effect: translate(en, `equipment.affix_effect.${effect}`, effect), summary: summary(en, "en") },
      zh: { name: translate(zh, `equipment.affix.${id}.name`, id), effect: translate(zh, `equipment.affix_effect.${effect}`, effect), summary: summary(zh, "zh") },
    },
  };
}

const baseAffixesRoot = assignedBlock(equipmentData, "EquipmentAffixes");
const specialAffixesRoot = assignedBlock(equipmentData, "EquipmentSpecialAffixes");
const affixes = [
  ...topLevelObjectKeys(baseAffixesRoot).map((id) => buildAffix(id, namedObject(baseAffixesRoot, id))),
  ...topLevelObjectKeys(specialAffixesRoot).map((id) => buildAffix(id, namedObject(specialAffixesRoot, id))),
];

const reforgeRoot = assignedBlock(equipmentData, "EquipmentReforgeRules");
const reforgeRules = topLevelObjectKeys(reforgeRoot).map((from) => {
  const block = namedObject(reforgeRoot, from);
  return { from, to: stringField(block, "NextRarity"), materialTier: stringField(block, "MaterialTier"), materialCost: numberField(block, "MaterialCost"), moneyCost: numberField(block, "MoneyCost") };
});

const disassembleRoot = assignedBlock(equipmentData, "AlchemyDisassembleRules");
const disassembleRules = topLevelObjectKeys(disassembleRoot).map((rarity) => {
  const block = namedObject(disassembleRoot, rarity);
  return {
    rarity,
    moneyCost: numberField(block, "MoneyCost"),
    stoneCountMin: numberField(block, "StoneCountMin"),
    stoneCountMax: numberField(block, "StoneCountMax"),
    extraStoneChance: numberField(block, "ExtraStoneChance"),
    removalStoneChance: numberField(block, "RemovalStoneChance"),
  };
});

const systems = {
  intro: localized(
    "The current release is two cooperating mods: Battle Valkyries 2.0.0 and the optional Alchemy & Enchantment System 1.0.1.",
    "当前版本由两个可配合使用的模组组成：Battle Valkyries 2.0.0，以及可选的附魔炼金系统 1.0.1。",
  ),
  cards: [
    {
      id: "hub_gacha",
      title: localized("Hub & Gacha Summoning", "Hub 与抽卡召唤"),
      body: localized("Ctrl + M opens five tabs for summoning, bounties, memory inscription, the memory shop, and archived biographies.", "按 Ctrl + M 打开 Hub，包含召唤、悬赏、记忆铭刻、记忆商店和忆海生平五个标签页。"),
      bullets: localizedList(["Gacha mode is enabled by default.", "A selected target is guaranteed after four failed pulls; pull costs scale with completed guarantees."], ["抽卡模式默认开启。", "连续 4 次未命中后可定向保底；完成的保底次数越多，后续抽取消耗越高。"]),
      sourceFiles: ["config/mod_settings.nut", "hooks/valkyrie_summon.nut", "ui/mods/battle-valkyries/valkyries_hub.js"],
    },
    {
      id: "skins",
      title: localized("Skins & Fullscreen Profiles", "皮肤与全屏档案"),
      body: localized("Identity flags restore skins and runtime skills after loading, entering combat, and equipment refreshes. Selected characters also have animated fullscreen dossier layouts.", "身份 flags 会在读档、进入战斗和装备刷新后恢复皮肤与运行期技能；部分角色已接入带动态背景的全屏档案页。"),
      bullets: localizedList(["Multi-skin characters expose ordered skin tabs.", "A chosen Valkyrie skin can also become the world-map leader appearance."], ["多皮肤角色会显示有序皮肤标签。", "已选择的女武神皮肤还可以设为世界地图领队外观。"]),
      sourceFiles: ["config/skin_data.nut", "hooks/skin_appearance.nut", "hooks/world_party_appearance.nut"],
    },
    {
      id: "bounties",
      title: localized("Valkyrie Bounties", "女武神悬赏"),
      body: localized("Every registered Valkyrie receives a bounty card. Difficulty scales from one to three stars by owned Valkyries, with 3,000 / 6,000 / 12,000 Crown rewards.", "每名已登记女武神都有对应悬赏卡。难度按已拥有角色数从一星成长到三星，奖励分别为 3,000 / 6,000 / 12,000 克朗。"),
      bullets: localizedList(["Escort budget scales from 180 to 1,200.", "A completed bounty can leave the Valkyrie waiting to be recruited when the roster is full."], ["护卫预算会从 180 平滑增长到 1,200。", "名册已满时，完成悬赏的女武神会保留为待招募状态。"]),
      sourceFiles: ["config/valkyrie_bounty_data.nut", "systems/valkyrie_bounty_service.nut"],
    },
    {
      id: "memory",
      title: localized("Memory Archive & Shop", "记忆铭刻与商店"),
      body: localized("Ordinary brothers can be archived into biographies and four memory currencies, then exchanged for ten permanent-growth keepsakes.", "普通战团成员可以被铭刻为生平记录与四类记忆资源，并在商店兑换 10 种永久成长信物。"),
      bullets: localizedList(["Eight attributes use three achievement thresholds.", "Archive rank also reflects elite and legendary enemy victories."], ["八项属性各有三档达成阈值。", "铭刻评价还会统计精英与传奇敌人的击杀记录。"]),
      sourceFiles: ["config/memory_archive_data.nut", "config/memory_shop_data.nut"],
    },
    {
      id: "bonds",
      title: localized("Character Bond Campaigns", "角色羁绊战役"),
      body: localized("Xilian, Firefly, Himeko, and Jeanne have dedicated bond systems with staged events, challenge camps, and character-specific rewards.", "昔涟、流萤、姬子与贞德拥有独立羁绊系统，包括阶段事件、挑战营地和角色专属奖励。"),
      bullets: localizedList(["Bond stages use 20 / 40 / 60 / 80 / 100.", "Camp completion, not merely reading the event, authoritatively completes a stage."], ["羁绊阶段统一为 20 / 40 / 60 / 80 / 100。", "阶段完成以击破对应营地为准，而不是仅阅读事件。"]),
      sourceFiles: ["hooks/bond_system.nut", "hooks/liuying_bond_system.nut", "hooks/himeko_bond_system.nut", "hooks/jeanne_bond_system.nut"],
    },
    {
      id: "lily",
      title: localized("Lily Spirit Loadout", "莉莉灵魂编成"),
      body: localized("Lily carries a dedicated blight resource and a six-slot spirit loadout drawn from 26 unlockable main and sub spirits.", "莉莉拥有独立的秽蚀资源，以及从 26 个可解锁主灵魂/副灵魂中配置的六槽灵魂编成。"),
      bullets: localizedList(["Six spirits are available in the initial loadout.", "Spirit skills are transient runtime skills and are rebuilt by the skill service."], ["初始编成直接提供 6 个灵魂。", "灵魂技能属于临时运行期技能，由技能服务统一重建。"]),
      sourceFiles: ["config/lily_spirit_data.nut", "systems/lily_spirit_service.nut"],
    },
    {
      id: "the_herta",
      title: localized("The Herta Research", "大黑塔研究"),
      body: localized("When both mods are enabled and The Herta is in the roster, her research tab can upgrade enchanted gear while either retaining or rerolling its affixes.", "同时启用两个模组并召唤大黑塔后，研究页可以为附魔装备升阶，并选择保留词条或全部重算。"),
      bullets: localizedList(["Purple-to-red research gains one charge every 5 days, up to 3.", "Red-to-prismatic research gains one charge every 15 days, up to 1."], ["紫升红研究每 5 天恢复 1 次，最多储存 3 次。", "红升彩研究每 15 天恢复 1 次，最多储存 1 次。"]),
      sourceFiles: ["systems/the_herta_research_service.nut", "alchemy-enchantment-system/the_herta_research_api.nut"],
    },
  ],
  equipment: {
    title: localized("Alchemy & Enchantment System", "附魔炼金系统"),
    version: variants.alchemy.version,
    enabledByDefault: false,
    body: localized("This is an independent optional mod. When enabled for a new campaign, weapons, helmets, armor, and shields receive rarity, affixes, enchanting, reforging, locking, affix removal, and single or batch disassembly.", "这是独立的可选模组。新战役启用后，武器、头盔、铠甲和盾牌会获得品质、词条、附魔、重铸、锁定、词条移除以及单件/批量拆解功能。"),
    rules: localizedList(
      ["The equipment switch is off by default and is fixed when a campaign is created.", "Enchanting costs 100 Crowns and one stone of the chosen tier; a full item replaces its last affix.", "Removing an affix costs 100 Crowns and one removal stone.", "Locked items cannot be reforged or disassembled.", "Prismatic items always receive one mythic affix and can never hold more than one."],
      ["装备系统默认关闭，并在创建战役时锁定开关状态。", "附魔消耗 100 克朗和 1 个所选等级附魔石；词条已满时替换最后一条。", "移除词条消耗 100 克朗和 1 个消除石。", "锁定装备不能重铸或拆解。", "彩色装备固定拥有 1 条神话词条，且同一件装备至多 1 条。"],
    ),
    rarities,
    affixes,
    reforgeRules,
    disassembleRules,
  },
};

let revision = "working-tree";
try {
  revision = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: modRoot, encoding: "utf8" }).trim();
  const worktreeChanges = execFileSync("git", ["status", "--porcelain"], { cwd: modRoot, encoding: "utf8" }).trim();
  if (worktreeChanges) revision += "+working-tree";
} catch {}

const data = {
  meta: {
    title: "Battle Valkyries Wiki",
    source: "battle-valkyries source",
    updatedAt: new Date().toISOString().slice(0, 10),
    sourceRevision: revision,
    valkyrieVersion: variants.valkyries.version,
    alchemyVersion: variants.alchemy.version,
    contentSource: [
      "src/battle-valkyries/battle-valkyries/config/valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/lily_valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_skill_catalog.nut",
      "src/battle-valkyries/battle-valkyries/config/lily_skill_catalog.nut",
      "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
      "src/alchemy-enchantment-system/alchemy-enchantment-system/equipment_data.nut",
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
    gacha: { enabledByDefault: settingDefaults.GachaMode === true, progressMax: numberConstant(summonData, "ValkyrieGachaProgressMax", 4), costSteps: gachaCostSteps },
  },
  settings: {
    modName: { en: translate(en, "mod.name", "Battle Valkyries"), zh: translate(zh, "mod.name", "Battle Valkyries") },
    pageTitle: { en: translate(en, "settings.page_title", "Valkyries"), zh: translate(zh, "settings.page_title", "女武神") },
    options: settingsOptions,
  },
  systems,
  valkyries,
};

ensureDir(outDataDir);
ensureDir(outAssetsDir);
fs.writeFileSync(path.join(outDataDir, "wiki-data.js"), `window.BV_WIKI_DATA = ${JSON.stringify(data, null, 2)};\n`, "utf8");

console.log(JSON.stringify({
  valkyries: valkyries.length,
  skills: valkyries.reduce((sum, item) => sum + item.skills.length, 0),
  skins: valkyries.reduce((sum, item) => sum + item.skins.length, 0),
  rarities: rarities.length,
  affixes: affixes.length,
  revision,
}, null, 2));

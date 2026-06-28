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
const summonData = readUtf8(sourceRoot, "battle-valkyries", "hooks", "valkyrie_summon.nut");

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

const data = {
  meta: {
    title: "Battle Valkyries Wiki",
    source: "battle-valkyries mod",
    contentSource: [
      "src/battle-valkyries/battle-valkyries/config/valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_skill_data.nut",
      "src/battle-valkyries/battle-valkyries/hooks/valkyrie_summon.nut",
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
  valkyries,
};

fs.writeFileSync(
  path.join(outDataDir, "wiki-data.js"),
  `window.BV_WIKI_DATA = ${JSON.stringify(data, null, 2)};\n`,
  "utf8",
);

console.log(`Generated ${valkyries.length} Valkyries and copied assets into ${path.relative(workspaceRoot, outAssetsDir)}.`);

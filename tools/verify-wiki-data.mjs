import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.runInNewContext(fs.readFileSync("data/wiki-data.js", "utf8"), context);
const data = context.window.BV_WIKI_DATA;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const unique = (items) => new Set(items).size === items.length;
const skills = data.valkyries.flatMap((item) => item.skills);
const skins = data.valkyries.flatMap((item) => item.skins);
const affixes = data.systems?.equipment?.affixes || [];
const referencedAssets = data.valkyries.flatMap((item) => [
  item.images.card,
  item.images.skin,
  item.images.trait,
  ...item.skills.map((skill) => skill.image),
  ...item.skins.flatMap((skin) => [skin.images.portrait, skin.images.preview]),
]);

assert(data.valkyries.length === 41, "expected the 41-character built-in roster, including Lily");
assert(unique(data.valkyries.map((item) => item.id)), "Valkyrie IDs must be unique");
assert(data.valkyries.every((item) => item.skills.length > 0), "every Valkyrie must expose a loadout");
assert(skills.length === 120, "expected 120 skills across built-in loadouts");
assert(skins.length === 46, "expected 46 selectable skins");
assert(data.valkyries.some((item) => item.id === "the_herta"), "expected The Herta");
assert(data.valkyries.some((item) => item.id === "lily"), "expected Lily");
assert(data.settings.options.some((option) => option.id === "GachaMode" && option.default === true), "expected default-on GachaMode");
assert(data.summon.gacha.progressMax === 4, "expected four-pull target guarantee");
assert(data.systems.cards.length === 7, "expected current system overview cards");
assert(data.systems.equipment.version === "1.0.1", "expected Alchemy & Enchantment 1.0.1");
assert(data.systems.equipment.enabledByDefault === false, "equipment system must be disabled by default");
assert(data.systems.equipment.rarities.length === 6, "expected six equipment rarities");
assert(data.systems.equipment.reforgeRules.length === 3, "expected three standard reforge recipes");
assert(data.systems.equipment.disassembleRules.length === 6, "expected one disassembly rule per rarity");
assert(affixes.length === 72, "expected the current 72-affix catalog");
assert(affixes.filter((item) => item.kind === "mythic").length === 16, "expected 16 mythic affixes");
assert(affixes.some((item) => item.id === "heavenly_judgment" && item.parts.includes("weapon")), "expected Heavenly Judgment weapon affix");

const missingAssets = [...new Set(referencedAssets)].filter((asset) => !asset || !fs.existsSync(asset));
assert(missingAssets.length === 0, `missing referenced assets: ${missingAssets.join(", ")}`);

console.log(JSON.stringify({
  valkyries: data.valkyries.length,
  skills: skills.length,
  skins: skins.length,
  settings: data.settings.options.map((option) => option.id),
  systems: data.systems.cards.length,
  rarities: data.systems.equipment.rarities.length,
  affixes: affixes.length,
  mythicAffixes: affixes.filter((item) => item.kind === "mythic").length,
  sourceRevision: data.meta.sourceRevision,
  updatedAt: data.meta.updatedAt,
}, null, 2));

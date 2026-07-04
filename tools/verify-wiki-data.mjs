import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.runInNewContext(fs.readFileSync("data/wiki-data.js", "utf8"), context);

const data = context.window.BV_WIKI_DATA;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

let previousMax = 0;
const totalSummonCost = data.summon.costSteps.reduce((total, step) => {
  const count = step.max - previousMax;
  previousMax = step.max;
  return total + count * step.cost;
}, 0);

const affixes = data.systems?.equipment?.affixes || [];

assert(data.valkyries.length === 20, "expected 20 Valkyries");
assert(totalSummonCost === 476000, "expected full summon cost to be 476000");
assert(data.settings.options.some((option) => option.id === "EnableEquipmentSystem"), "expected equipment-system setting");
assert(data.systems.cards.length === 7, "expected 7 system overview cards");
assert(data.systems.bond.stages.length === 5, "expected 5 Xilian bond stages");
assert(data.systems.equipment.rarities.length === 6, "expected 6 equipment rarities");
assert(affixes.length >= 40, "expected equipment affix overview");
assert(affixes.some((affix) => affix.id === "sharp" && affix.parts.includes("weapon")), "expected Sharp weapon affix");
assert(affixes.some((affix) => affix.kind === "advanced"), "expected advanced affixes");
assert(affixes.some((affix) => affix.kind === "legendary"), "expected legendary affixes");

console.log(JSON.stringify({
  valkyries: data.valkyries.length,
  totalSummonCost,
  settings: data.settings.options.map((option) => option.id),
  systems: data.systems.cards.length,
  bondStages: data.systems.bond.stages.length,
  rarities: data.systems.equipment.rarities.length,
  affixes: affixes.length,
  updatedAt: data.meta.updatedAt,
}, null, 2));

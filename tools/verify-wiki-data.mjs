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
referencedAssets.push(...data.skillCatalog.map(skill => skill.image), ...data.chapters.flatMap(chapter => [chapter.poster, ...chapter.gallery.map(cg => cg.image)]));
referencedAssets.push(...data.bonds.flatMap(bond => bond.stages.flatMap(stage => [stage.introImage, stage.cgImage].filter(Boolean))), ...data.items.map(item => item.image).filter(Boolean));

assert(data.valkyries.length === 49, "expected the 49-character source snapshot, including Lily");
assert(unique(data.valkyries.map((item) => item.id)), "Valkyrie IDs must be unique");
assert(data.valkyries.every((item) => item.skills.length > 0), "every Valkyrie must expose a loadout");
assert(skills.length === 164, "expected 164 skills across built-in loadouts");
assert(skins.length === 69, "expected 69 skins including chapter registrations");
assert(data.valkyries.some((item) => item.id === "the_herta"), "expected The Herta");
assert(data.valkyries.some((item) => item.id === "lily"), "expected Lily");
assert(data.settings.options.some((option) => option.id === "GachaMode" && option.default === true), "expected default-on GachaMode");
assert(data.summon.gacha.progressMax === 4, "expected four-pull target guarantee");
assert(data.systems.cards.some(card => card.id === "chapters") && data.systems.cards.some(card => card.id === "enemy_scaling"), "chapter and scaling guides must be present");
assert(data.systems.equipment.version === "1.0.1", "expected Alchemy & Enchantment 1.0.1");
assert(data.systems.equipment.enabledByDefault === false, "equipment system must be disabled by default");
assert(data.systems.equipment.rarities.length === 6, "expected six equipment rarities");
assert(data.systems.equipment.reforgeRules.length === 3, "expected three standard reforge recipes");
assert(data.systems.equipment.disassembleRules.length === 6, "expected one disassembly rule per rarity");
assert(affixes.length === 72, "expected the current 72-affix catalog");
assert(affixes.filter((item) => item.kind === "mythic").length === 16, "expected 16 mythic affixes");
assert(affixes.some((item) => item.id === "heavenly_judgment" && item.parts.includes("weapon")), "expected Heavenly Judgment weapon affix");

const actorIDs = new Set(data.valkyries.map(actor => actor.id));
const skillIDs = new Set(data.skillCatalog.map(skill => skill.key));
const skinIDs = new Set(skins.map(skin => skin.id));
const chapterIDs = new Set(data.chapters.map(chapter => chapter.id));
assert(data.skillCatalog.length === 226 && unique(data.skillCatalog.map(skill => skill.key)), "expected 226 unique player-facing registered skills");
assert(data.chapters.length === 8 && unique(data.chapters.map(chapter => chapter.id)), "expected eight loaded chapters");
assert(data.chapters.every(chapter => chapter.stages.length === 8), "expected eight stages per chapter");
assert(data.chapters.flatMap(chapter => chapter.gallery).length === 28, "expected 28 CG unlocks");
for (const chapter of data.chapters) {
  assert(chapter.actors.every(actor => actorIDs.has(actor)), `unknown chapter actor in ${chapter.id}`);
  assert(chapter.skillRewards.every(reward => skillIDs.has(reward.key) && chapter.actors.includes(reward.actor)), `unresolved skill reward in ${chapter.id}`);
  assert(chapter.skinRewards.every(reward => skinIDs.has(reward.skin) && chapter.actors.includes(reward.actor)), `unresolved skin reward in ${chapter.id}`);
  assert([...chapter.gallery, ...chapter.skillRewards, ...chapter.skinRewards].every(reward => reward.stage >= 1 && reward.stage <= chapter.stages.length), `invalid unlock stage in ${chapter.id}`);
  assert(chapter.stages.every(stage => stage.name.en && stage.name.zh && stage.materials.every(material => material.count > 0)), `incomplete stage in ${chapter.id}`);
}
assert(skins.every(skin => !skin.unlockChapter || chapterIDs.has(skin.unlockChapter)), "every skin chapter must resolve");
assert(data.bonds.length === 5 && data.bonds.every(bond => bond.stages.length === 5), "expected the five loaded five-stage bond campaigns");
const yeBond = data.bonds.find(bond => bond.actor === "ye_shunguang");
assert(JSON.stringify(yeBond) === JSON.stringify(data.valkyries.find(actor => actor.id === "ye_shunguang").bond), "Ye Shunguang profile and bond catalog must agree");
assert(yeBond.stages.every(stage => stage.introImage && stage.cgImage && ["en", "zh"].every(lang => stage.story?.[lang] && stage.reveal?.[lang] && stage.victory?.[lang] && stage.location?.[lang])), "Ye Shunguang needs five complete bilingual stories and image pairs");
assert(yeBond.stages.every(stage => !stage.item || data.items.some(item => item.id === stage.item && item.image && item.owner?.en && item.owner?.zh && item.bonus?.en && item.bonus?.zh)), "bond equipment rewards must resolve with art and effects");
const enemies = data.enemyGroups.flatMap(group => group.enemies);
assert(enemies.length === 78 && unique(enemies.map(enemy => enemy.id)), "expected 78 registered expanded enemies, not the planned 100");
assert(enemies.every(enemy => enemy.hpMultiplier > 0 && enemy.damageMultiplier > 0), "invalid enemy multipliers");
assert(data.bounty.rules.length === 3 && data.bounty.themes.length === 17, "expected three bounty tiers and 17 themes");
assert(data.shop.length === 10 && data.shop.every(item => Object.keys(item.cost).every(key => data.currencies[key]?.en && data.currencies[key]?.zh)), "all shop currencies must be translated");
assert(data.spirits.length === 26 && data.spirits.every(spirit => spirit.name.en && spirit.name.zh), "expected 26 translated spirits");
assert(data.settings.options.filter(option => option.type === "range").length === 2, "expected separate voice and skill-sound sliders");
assert(data.settings.options.every(option => option.type !== "range" || (option.default >= option.min && option.default <= option.max)), "invalid slider default");
assert(!JSON.stringify(data).includes("$bv{"), "unresolved translation tokens");

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
  catalogSkills: data.skillCatalog.length,
  chapters: data.chapters.length,
  chapterCGs: data.chapters.flatMap(chapter => chapter.gallery).length,
  enemies: enemies.length,
  bountyThemes: data.bounty.themes.length,
  spirits: data.spirits.length,
  items: data.items.length,
  sourceRevision: data.meta.sourceRevision,
  updatedAt: data.meta.updatedAt,
}, null, 2));

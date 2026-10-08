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

assert(data.valkyries.length === 57, "expected 57 loaded characters, including Lily and the eight supplemental registrations");
assert(unique(data.valkyries.map((item) => item.id)), "Valkyrie IDs must be unique");
assert(data.valkyries.every((item) => item.skills.length > 0), "every Valkyrie must expose a loadout");
assert(skills.length === 197, "expected 197 skills across built-in loadouts");
assert(skins.length === 77, "expected 77 skins including chapter registrations");
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
assert(data.skillCatalog.length === 259 && unique(data.skillCatalog.map(skill => skill.key)), "expected 259 unique player-facing registered skills");
assert(skills.every(skill => skillIDs.has(skill.key)), "every loadout skill must resolve in the complete catalog");
assert(data.skillCatalog.every(skill => ["en", "zh"].every(lang => skill.text[lang].name && skill.text[lang].description)), "every registered skill needs bilingual names and descriptions");
for (const id of ["suisui", "misono_mika", "sorasaki_hina", "xin", "shizuna", "lumiore", "argente", "sekka"]) {
  const actor = data.valkyries.find(actor => actor.id === id);
  assert(actor && actor.combatResource && actor.skills.length >= 4 && actor.skins.length === 1, `incomplete supplemental character ${id}`);
  assert(actor.skills.filter(skill => skill.kind === "active").every(skill => Number.isFinite(skill.spec.AP) && Number.isFinite(skill.spec.Fatigue)), `missing skill costs for ${id}`);
  assert(["en", "zh"].every(lang => actor.text[lang].traitDescription && actor.text[lang].backgroundDescription), `missing character translation for ${id}`);
}
assert(data.chapters.length === 8 && unique(data.chapters.map(chapter => chapter.id)), "expected eight loaded chapters");
assert(data.chapters.every(chapter => chapter.stages.length === 8), "expected eight stages per chapter");
assert(data.chapters.flatMap(chapter => chapter.gallery).length === 28, "expected 28 CG unlocks");
for (const chapter of data.chapters) {
  assert(chapter.actors.every(actor => actorIDs.has(actor)), `unknown chapter actor in ${chapter.id}`);
  assert(chapter.skillRewards.every(reward => skillIDs.has(reward.key) && chapter.actors.includes(reward.actor)), `unresolved skill reward in ${chapter.id}`);
  assert(chapter.skinRewards.every(reward => skinIDs.has(reward.skin) && chapter.actors.includes(reward.actor)), `unresolved skin reward in ${chapter.id}`);
  assert([...chapter.gallery, ...chapter.skillRewards, ...chapter.skinRewards].every(reward => reward.stage >= 1 && reward.stage <= chapter.stages.length), `invalid unlock stage in ${chapter.id}`);
  assert(chapter.stages.every(stage => stage.name.en && stage.name.zh && stage.materials.every(material => material.count > 0)), `incomplete stage in ${chapter.id}`);
  for (const stage of chapter.stages) {
    const goals = new Set(stage.goals.map(goal => goal.id));
    assert(stage.goals.every(goal => goal.requires.every(id => goals.has(id))), `unresolved prerequisite in ${chapter.id}/${stage.number}`);
    assert(stage.materials.every(material => !material.sourceGoal || goals.has(material.sourceGoal)), `unresolved supply source in ${chapter.id}/${stage.number}`);
    assert(stage.requiredEvidence.every(id => chapter.evidence.some(entry => entry.id === id && entry.stage <= stage.number)), `unresolved evidence in ${chapter.id}/${stage.number}`);
  }
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
assert(enemies.filter(enemy => enemy.tier === "t25").every(enemy => enemy.hpMultiplier === 0.81 && enemy.damageMultiplier === 0.9 && enemy.bonuses.MeleeSkill === -8 && enemy.bonuses.MeleeDefense === -5), "T2.5 must use the current tier table, including penalties");
assert(enemies.every(enemy => enemy.legendsHpMultiplier > 0 && enemy.legendsBonuses), "every enemy needs Legends values");
assert(data.bounty.rules.length === 3 && data.bounty.themes.length === 17, "expected three bounty tiers and 17 themes");
assert(data.shop.length === 10 && data.shop.every(item => Object.keys(item.cost).every(key => data.currencies[key]?.en && data.currencies[key]?.zh)), "all shop currencies must be translated");
assert(data.spirits.length === 26 && data.spirits.every(spirit => spirit.name.en && spirit.name.zh), "expected 26 translated spirits");
assert(data.settings.options.length === 8 && unique(data.settings.options.map(option => option.id)), "expected eight player settings, including all three roster controls");
assert(data.settings.options.filter(option => option.type === "range").length === 3, "expected roster capacity plus separate voice and skill-sound sliders");
assert(data.settings.options.every(option => option.type !== "range" || (option.default >= option.min && option.default <= option.max)), "invalid slider default");
const roster = data.settings.options.find(option => option.id === "RosterCapacity");
const combat = data.settings.options.find(option => option.id === "CombatCapacity");
const voice = data.settings.options.find(option => option.id === "VoiceVolumePercent");
assert(roster.default === 200 && roster.min === 50 && roster.max === 200 && roster.step === 25 && roster.unit === "", "roster capacity must use people, not percent");
assert(combat.default === 0 && JSON.stringify(combat.values) === "[0,16,18,20,22,24,26,27]", "combat must default to origin rules and offer the seven current fixed limits");
assert(["en", "zh"].every(lang => combat.labels[lang].length === combat.values.length), "combat option labels must be bilingual");
assert(voice.default === 300 && voice.unit === "%", "current voice volume defaults to 300 percent");
assert(data.summon.rosterMax === roster.default && data.summon.rosterExpansion.enabledByDefault, "summon guide must follow default roster expansion");
assert(data.items.length === 21 && ["mika_quis_ut_deus", "hina_the_end_destroyer"].every(id => data.items.some(item => item.id === id && item.image && item.stats.RegularDamage > 0 && item.tooltip.zh && item.acquisition.en)), "new signature guns need art, stats, effects and acquisition");
assert(data.hunt.milestones.length === 6 && data.hunt.milestones.every(stage => skillIDs.has(stage.key)), "hunt unlocks must resolve to registered skills");
assert(data.memoryAttributes.length === 8 && data.memoryAttributes.every(attribute => attribute.thresholds.length === 3), "expected all eight three-tier memory thresholds");
assert(data.meta.missingConfigFiles.length === 0, "all included configs must exist for this snapshot");
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

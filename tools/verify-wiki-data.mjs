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
referencedAssets.push(...data.bonds.flatMap(bond => bond.stages.flatMap(stage => [stage.introImage, stage.cgImage, stage.victoryImage].filter(Boolean))), ...data.items.map(item => item.image).filter(Boolean));

assert(data.valkyries.length === 85, "expected 85 loaded characters, including the October Trails and Kanade additions");
assert(unique(data.valkyries.map((item) => item.id)), "Valkyrie IDs must be unique");
assert(data.valkyries.every((item) => item.skills.length > 0), "every Valkyrie must expose a loadout");
assert(skills.length === 379, "expected 379 skills across built-in loadouts");
assert(skins.length === 120, "expected 120 skins including chapter and personal-stage registrations");
assert(data.valkyries.some((item) => item.id === "the_herta"), "expected The Herta");
assert(data.valkyries.some((item) => item.id === "lily"), "expected Lily");
assert(data.settings.options.some((option) => option.id === "GachaMode" && option.default === true), "expected default-on GachaMode");
assert(data.summon.gacha.progressMax === 4, "expected four-pull target guarantee");
assert(data.summon.poolSize === 75 && data.valkyries.filter(actor => actor.chapterRecruitOnly).length === 10, "expected 75 summonable characters and ten chapter-only recruits");
assert(data.systems.cards.some(card => card.id === "chapters") && data.systems.cards.some(card => card.id === "enemy_scaling"), "chapter and scaling guides must be present");
assert(data.systems.equipment.version === "1.14.0", "expected Alchemy & Enchantment 1.14.0");
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
assert(data.skillCatalog.length === 484 && unique(data.skillCatalog.map(skill => skill.key)), "expected 484 unique player-facing registered skills");
assert(skills.every(skill => skillIDs.has(skill.key)), "every loadout skill must resolve in the complete catalog");
assert(data.skillCatalog.every(skill => ["en", "zh"].every(lang => skill.text[lang].name && skill.text[lang].description)), "every registered skill needs bilingual names and descriptions");
for (const id of ["suisui", "misono_mika", "sorasaki_hina", "xin", "shizuna", "lumiore", "argente", "sekka"]) {
  const actor = data.valkyries.find(actor => actor.id === id);
  assert(actor && actor.combatResource && actor.skills.length >= 4 && actor.skins.length === 1, `incomplete supplemental character ${id}`);
  assert(actor.skills.filter(skill => skill.kind === "active").every(skill => Number.isFinite(skill.spec.AP) && Number.isFinite(skill.spec.Fatigue)), `missing skill costs for ${id}`);
  assert(["en", "zh"].every(lang => actor.text[lang].traitDescription && actor.text[lang].backgroundDescription), `missing character translation for ${id}`);
}
assert(data.chapters.length === 16 && unique(data.chapters.map(chapter => chapter.id)), "expected sixteen loaded chapters");
assert(data.chapters.every(chapter => chapter.stages.length === ({ shu_granary: 1, ryza_fieldwork: 1, septium_mine: 1, tenka_goken_festival: 11 }[chapter.id] || 8)), "expected chapter-specific stage counts, including repeatable and festival chapters");
assert(data.chapters.flatMap(chapter => chapter.gallery).length === 55, "expected 55 chapter CG unlocks");
for (const chapter of data.chapters) {
  assert(chapter.actors.every(actor => actorIDs.has(actor)), `unknown chapter actor in ${chapter.id}`);
  assert(!chapter.requiredChapter || (chapterIDs.has(chapter.requiredChapter) && chapter.requiredChapter !== chapter.id), `invalid required chapter in ${chapter.id}`);
  assert(chapter.recruitActors.every(actor => actorIDs.has(actor) && data.valkyries.find(entry => entry.id === actor).recruitmentChapter === chapter.id), `unresolved chapter recruitment in ${chapter.id}`);
  assert(chapter.recruitActors.every(actor => data.valkyries.find(entry => entry.id === actor).chapterRecruitOnly), `chapter recruits must be excluded from summons: ${chapter.id}`);
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
for (const [id, prior, recruits] of [
  ["black_city_falls", "", ["chloe", "olga"]],
  ["seven_shields_upper", "black_city_falls", ["alicia", "prim", "kaguya"]],
  ["seven_shields_lower", "seven_shields_upper", ["maia", "luu_luu", "claudia", "celestine"]],
]) {
  const chapter = data.chapters.find(chapter => chapter.id === id);
  assert(chapter.actors.length === 0 && chapter.requiredChapter === prior, `conquest chapter requirements are wrong for ${id}`);
  assert(JSON.stringify(chapter.recruitActors) === JSON.stringify(recruits), `conquest chapter recruits are wrong for ${id}`);
  assert(chapter.stages.every(stage => stage.perksEach === 0), `conquest chapters must not grant participant perks: ${id}`);
}
assert(data.progressions.length === 9 && unique(data.progressions.map(entry => entry.actor)), "expected nine independent personal progression campaigns");
for (const entry of data.progressions) {
  const actor = data.valkyries.find(actor => actor.id === entry.actor);
  assert(actor && JSON.stringify(actor.progression) === JSON.stringify(entry), `progression profile mismatch: ${entry.actor}`);
  assert(JSON.stringify(entry.stages.map(stage => stage.value)) === "[20,40,60,80,100]", `invalid progression thresholds: ${entry.actor}`);
  assert(["en", "zh"].every(lang => entry.name[lang] && entry.rules[lang] && entry.prologue[lang]), `missing progression translations: ${entry.actor}`);
  for (const stage of entry.stages) {
    assert(["en", "zh"].every(lang => stage.name[lang] && stage.location[lang] && stage.challenge[lang]), `incomplete progression stage: ${entry.actor}/${stage.number}`);
    assert(stage.skills.every(key => actor.skills.some(skill => skill.key === key && skill.unlockProgressionStage === stage.number)), `invalid personal skill unlock: ${entry.actor}/${stage.number}`);
    assert(stage.skins.every(id => actor.skins.some(skin => skin.id === id && skin.unlockProgressionStage === stage.number)), `invalid personal skin unlock: ${entry.actor}/${stage.number}`);
  }
  assert(actor.skills.filter(skill => skill.unlockProgressionStage > 0).every(skill => entry.stages.some(stage => stage.skills.includes(skill.key))), `missing personal skill reward: ${entry.actor}`);
  assert(entry.stages[4].skins.length === 1, `missing final skin: ${entry.actor}`);
}
assert(data.recruitGuide.version === "2026-10-12" && data.recruitGuide.entries.length === 85 && unique(data.recruitGuide.entries.map(entry => entry.actor)), "expected all 85 current recruitment assessments");
for (const guide of data.recruitGuide.entries) {
  const actor = data.valkyries.find(actor => actor.id === guide.actor), labels = data.recruitGuide.labels;
  assert(actor && JSON.stringify(actor.recruitGuide) === JSON.stringify(guide), `recruit guide profile mismatch: ${guide.actor}`);
  assert(["en", "zh"].every(lang => guide.summary[lang] && guide.analysis[lang]), `missing recruitment assessment: ${guide.actor}`);
  assert(guide.reviewedSkills.every(key => skillIDs.has(key)), `unknown reviewed skill: ${guide.actor}`);
  for (const [category, keys] of [["role", guide.roles], ["tag", guide.tags], ["stage", [guide.stage]], ["investment", [guide.investment]]]) {
    assert(keys.length > 0 && keys.every(key => ["en", "zh"].every(lang => labels[category][key]?.[lang])), `missing recruitment labels: ${guide.actor}/${category}`);
  }
}
for (const id of ["yakumo_yukari", "tokisaki_kurumi", "cirno", "shana", "tohsaka_rin"]) {
  const actor = data.valkyries.find(actor => actor.id === id);
  assert(actor && actor.combatResource && actor.skills.length >= 5 && actor.skins.length === 1 && !actor.recruitmentChapter, `incomplete new character: ${id}`);
}
assert(data.bonds.length === 7 && data.bonds.every(bond => bond.stages.length === 5), "expected the seven loaded five-stage bond campaigns");
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
assert(data.items.length === 40 && ["mika_quis_ut_deus", "hina_the_end_destroyer"].every(id => data.items.some(item => item.id === id && item.image && item.stats.RegularDamage > 0 && item.tooltip.zh && item.acquisition.en)), "new signature guns need art, stats, effects and acquisition");
assert(data.hunt.milestones.length === 6 && data.hunt.milestones.every(stage => skillIDs.has(stage.key)), "hunt unlocks must resolve to registered skills");
assert(data.memoryAttributes.length === 8 && data.memoryAttributes.every(attribute => attribute.thresholds.length === 3), "expected all eight three-tier memory thresholds");
assert(data.meta.missingConfigFiles.length === 0, "all included configs must exist for this snapshot");
assert(!JSON.stringify(data).includes("$bv{"), "unresolved translation tokens");

// Supplement registrations and non-eight-stage chapters must survive every refresh.
for (const id of ["shu", "ryza", "onigawara_rin", "kikakujo_mary", "tamaba_satori", "hanasaka_warabi", "inaba_tsukuyo"]) {
  const actor = data.valkyries.find(actor => actor.id === id);
  assert(actor && actor.recruitGuide && actor.skills.length >= 5 && actor.skins.length === 1 && !actor.chapterRecruitOnly, `incomplete new character: ${id}`);
}
const loops = data.chapters.filter(chapter => chapter.repeatable);
assert(loops.length === 3 && loops.every(chapter => chapter.cooldownHours === 72 && chapter.rules.en && chapter.rules.zh && chapter.stages.length === 1), "repeatable chapters need their own rules and cooldown");
const granary = loops.find(chapter => chapter.id === "shu_granary");
assert(JSON.stringify(granary.difficulties.map(route => [route.minimum, route.days])) === "[[600,1.5],[1200,3],[1800,4.5]]", "granary reward tiers must match the food budget");
const fieldwork = loops.find(chapter => chapter.id === "ryza_fieldwork");
assert(fieldwork.difficulties.length === 5 && fieldwork.difficulties.every(route => route.name.en && route.name.zh && route.enemies.en && route.enemies.zh && route.rewards.length > 0 && route.rewards.every(reward => reward.count > 0 && reward.name.en && reward.name.zh)), "fieldwork routes need translated fixed rewards");
assert(fieldwork.difficulties.find(route => route.id === "rescue").rewards[0].key === "wolf" && fieldwork.gallery.find(cg => cg.id === "rescue").unlockNote.zh, "rescue must grant a wolf and have its own CG condition");
const festival = data.chapters.find(chapter => chapter.id === "tenka_goken_festival");
assert(festival.actors.length === 0 && festival.recruitActors.length === 0 && festival.relatedActors.length === 5, "festival cast is not a recruitment prerequisite or reward");
assert(festival.relatedActors.every(id => data.valkyries.find(actor => actor.id === id).chapters.includes(festival.id)), "festival must be linked to the five profiles");
assert(data.items.filter(item => item.skills).length === 5 && data.items.filter(item => item.skills).every(item => item.image && item.stats.RegularDamage > 0 && item.skills.length === 2 && item.skills.every(key => skillIDs.has(key))), "festival swords need stats, art and both techniques");
const workshop = data.gameplay.workshop;
referencedAssets.push(...workshop.pets.map(pet => pet.image));
const petIDs = new Set(workshop.pets.map(pet => pet.id)), materialIDs = new Set(workshop.materials.map(material => material.id));
assert(workshop.pets.length === 20 && petIDs.size === 20 && workshop.recipes.length === 68 && unique(workshop.recipes.map(recipe => recipe.id)), "expected 20 companion species and 68 distinct recipes");
assert(workshop.augments.length === 17 && workshop.augments.filter(augment => augment.core).length === 3, "expected 17 permanent traits including three cores");
assert(workshop.inheritance.length === 8 && workshop.inheritance.every(row => row.name.en && row.name.zh && row.bands.every((band, index) => band.length === 2 && band[1] > 0 && (index === 0 || band[0] > row.bands[index - 1][0]))), "inheritance needs eight translated ascending threshold tables");
for (const pet of workshop.pets) {
  assert(["en", "zh"].every(lang => pet.name[lang] && pet.description[lang] && pet.role[lang]), `missing pet translations: ${pet.id}`);
  if (pet.parent) assert(petIDs.has(pet.parent) && pet.inherits.length === 3 && pet.inherits.every(key => workshop.inheritance.some(row => row.id === key)) && pet.fusionMaterials.length > 0, `incomplete brother-fusion registration: ${pet.id}`);
}
for (const recipe of [...workshop.recipes, ...workshop.augments]) {
  assert(petIDs.has(recipe.species) && recipe.cost > 0 && recipe.materials.length > 0 && unique(recipe.materials.map(row => row.key)) && recipe.materials.every(row => materialIDs.has(row.key) && row.count > 0), `invalid recipe or materials: ${recipe.id}`);
  if (recipe.inputs) assert(recipe.inputs.every(input => input.tier === 0 ? !!workshop.bases[input.species] : workshop.recipes.some(row => row.species === input.species && row.tier === input.tier)), `unresolved recipe input: ${recipe.id}`);
  else assert(recipe.days > 0 && ["en", "zh"].every(lang => recipe.name[lang] && recipe.description[lang]), `invalid permanent trait: ${recipe.id}`);
}
assert(workshop.recipes.filter(recipe => recipe.brother).length === 6, "only the six T3 fusion recipes consume brothers");
const fusion = workshop.recipes.find(recipe => recipe.id === "oath_mastiff_t3");
assert(fusion.brother && fusion.cost === 5000 && JSON.stringify(fusion.materials) === '[{"key":"unhold_bones","count":2},{"key":"unhold_heart","count":1}]', "T3 fusion materials must survive <- array registration");
const cerberus = workshop.recipes.find(recipe => recipe.id === "cerberus_t3");
assert(cerberus.materials.length === 1 && cerberus.materials[0].key === "unhold_heart" && cerberus.materials[0].count === 4, "duplicate material requirements must be combined");
assert(data.systems.cards.every(card => ["en", "zh"].every(lang => card.title[lang] && card.body[lang] && card.bullets[lang].every(Boolean))), "system guides need complete bilingual copy");

// Dynamic registrations must retain real costs, owners and progression requirements.
for (const id of ["si", "tio", "renne", "alisa", "aemeath", "fate_harlaown", "kanade_tachibana"]) {
  const actor = data.valkyries.find(actor => actor.id === id);
  assert(actor?.recruitGuide && actor.skills.every(skill => skillIDs.has(skill.key)), `incomplete October character ${id}`);
}
const kanade = data.valkyries.find(actor => actor.id === "kanade_tachibana");
assert(JSON.stringify(kanade.skins.map(skin => skin.unlockBond)) === "[0,20,40,60,80,100]", "Kanade's six row-registered outfits need ordered unlocks");
assert(kanade.skills.filter(skill => skill.kind === "active").length === 8 && kanade.skills.filter(skill => skill.kind === "active").every(skill => Number.isFinite(skill.spec.AP) && Number.isFinite(skill.spec.Fatigue)), "Kanade's table-registered skills must retain their specs");
assert(kanade.additionalSkills.some(skill => skill.key === "kanade_sonic_rotation" && skill.spec.AP === 6 && skill.lifetime === "transient"), "bond 100 Sonic Rotation must be linked to Kanade");
assert(kanade.bond.stages.every(stage => stage.objective.en && stage.objective.zh && stage.victoryImage && (!stage.item || data.items.some(item => item.id === stage.item && item.upgradeNote?.zh))), "Kanade needs mission objectives, finale art and equipment progression");
for (const bond of data.bonds.slice(-2)) assert(bond.stages.every(stage => ["en", "zh"].every(lang => stage.story[lang] && stage.reveal[lang] && stage.victory[lang]) && (!stage.skin || skinIDs.has(stage.skin))), "new bond stories and skins must resolve");
const orbments = data.gameplay.orbments;
referencedAssets.push(...orbments.forms.map(form => form.image), ...orbments.gems.map(gem => gem.image));
assert(orbments.forms.length === 6 && orbments.gems.length === 14 && orbments.recipes.length === 28, "expected six forms, fourteen dual-rank quartz and twenty-eight recipes");
assert(orbments.forms.every(form => form.lines.every(line => line[0] === 0 && line.every(slot => slot >= 0 && slot < 7)) && new Set(form.lines.flat()).size === 7 && form.activeSlots > 0 && form.passiveCapacity > 0), "orbment lines and capacities must match seven physical sockets");
assert(orbments.recipes.every(recipe => skillIDs.has(recipe.id) && recipe.cost > 0 && Object.entries(recipe.requirements).every(([element, value]) => orbments.elements[element]?.zh && value > 0)), "orbment recipes require registered skills and translated elemental thresholds");
assert(orbments.gems.every(gem => gem.name.en && gem.name.zh && orbments.bonusNames[gem.bonus]?.zh && gem.tiers.length === 2 && gem.tiers.every(tier => tier.value > 0 && Object.keys(tier.elements).every(element => orbments.elements[element]?.en))), "quartz tiers need names, bonuses and valid elements");
for (const starter of orbments.starters) {
  const form = orbments.forms.find(form => form.id === starter.form);
  assert(actorIDs.has(starter.actor) && form && starter.slots.length === 7 && unique(starter.active) && unique(starter.passive), "starter ownership and sockets must resolve");
  const counts = {};
  const slots = starter.slots.map(code => { const [id, rank] = code.split(":"); counts[id] = (counts[id] || 0) + 1; return orbments.gems.find(gem => gem.id === id)?.tiers.find(tier => tier.rank === +rank); });
  assert(slots.every(Boolean) && Object.values(counts).every(count => count <= 2), "starter quartz must respect the two-per-type limit");
  const lines = form.lines.map(line => line.reduce((sum, index) => { for (const [element, value] of Object.entries(slots[index].elements)) sum[element] = (sum[element] || 0) + value; return sum; }, {}));
  const skills = [...starter.active, ...starter.passive].map(id => orbments.recipes.find(recipe => recipe.id === id));
  assert(skills.every(recipe => recipe && lines.some(line => Object.entries(recipe.requirements).every(([element, value]) => (line[element] || 0) >= value))), "each starter skill must unlock on a single circuit line");
  assert(starter.active.length <= form.activeSlots && starter.passive.reduce((sum, id) => sum + orbments.recipes.find(recipe => recipe.id === id).cost, 0) <= form.passiveCapacity, "starter skills must fit form capacity");
}
const mine = data.chapters.find(chapter => chapter.id === "septium_mine");
assert(mine.requiredChapter === "septium_workshop" && mine.difficulties.length === 21 && mine.allocationNote.en && mine.allocationNote.zh, "mine needs prerequisite and allocation rules for all 21 routes");
assert(mine.difficulties.every(route => route.allocation.pair.length === 2 && route.allocation.pair.every(id => orbments.gems.some(gem => gem.id === id)) && route.rewards.length === 0 && ["en", "zh"].every(lang => route.name[lang] && route.enemies[lang])), "mine allocation must not be misrepresented as fixed rewards");
assert(JSON.stringify(mine.difficulties.slice(0,3).map(route => [route.allocation.normal, route.allocation.rare, route.allocation.sand, route.allocation.enemies])) === "[[3,0,10,8],[3,1,20,12],[4,2,35,16]]", "mine tier budgets must match source");
assert(data.valkyries.find(actor => actor.id === "tio").recruitmentChapter === "septium_workshop", "Tio's runtime-only recruitment must be linked");

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
  personalProgressions: data.progressions.length,
  recruitmentAssessments: data.recruitGuide.entries.length,
  enemies: enemies.length,
  bountyThemes: data.bounty.themes.length,
  spirits: data.spirits.length,
  items: data.items.length,
  workshopPets: workshop.pets.length,
  workshopRecipes: workshop.recipes.length,
  permanentTraits: workshop.augments.length,
  sourceRevision: data.meta.sourceRevision,
  updatedAt: data.meta.updatedAt,
}, null, 2));

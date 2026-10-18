// Current gameplay catalogs whose data is registered outside the base roster.
export function buildGameplayData(h) {
  const { chapters, items, valkyries, pair, text, config, objects, asset, card, en, zh,
    assignedBlock, assignedArray, arrayField, namedObject, topLevelObjectKeys, stringField, numberField,
    numberMap, stringsIn } = h;
  const keyText = key => pair(en[key], zh[key]);
  const petSource = config("ryza_pet_data.nut"), extension = config("ryza_extension_data.nut");
  const materialRoot = assignedBlock(petSource, "RyzaMaterials");
  const materials = topLevelObjectKeys(materialRoot).map(id => ({ id, name: text(namedObject(materialRoot, id), "Name") }));
  const quantities = block => objects(arrayField(block, "Materials")).map(row => ({ key: stringField(row, "Key"), count: numberField(row, "Count") }));
  const pets = [...petSource.matchAll(/RyzaPets\.(\w+)\s*<-/g)].map(([, id]) => {
    const block = assignedBlock(petSource, `RyzaPets.${id}`);
    return { id, name: text(block, "Name"), description: text(block, "Description"), role: text(block, "RoleName"),
      bases: stringsIn(arrayField(block, "Bases")), material: stringField(block, "Material"), stats: numberMap(h.objectField(block, "Stats")),
      parent: "", inherits: [], image: asset(`ui/items/battle-valkyries/ryza_pets/${id}.png`, "workshop") };
  });
  for (const block of objects(extension)) {
    const parent = /clone bv\.RyzaPets\.(\w+)/.exec(block)?.[1];
    const id = /bv\.RyzaPets\.(\w+)\s*<-\s*d/.exec(block)?.[1];
    if (!parent || !id) continue;
    const base = pets.find(pet => pet.id === parent);
    if (!base) throw new Error(`Missing Ryza fusion parent: ${parent}`);
    pets.push({ ...base, id, parent, name: text(block, "Name"),
      description: pair(`${base.description.en} ${en[`ryza.ext.pet.${id}.description`]}`, `${base.description.zh} ${zh[`ryza.ext.pet.${id}.description`]}`),
      inherits: stringsIn(assignedArray(block, "Inherits")),
      fusionMaterials: objects(assignedArray(block, "FusionMaterials")).map(row => ({ key: stringField(row, "Key"), count: numberField(row, "Count") })),
      image: asset(`ui/items/battle-valkyries/ryza_pets/${id}.png`, "workshop") });
  }
  // Mirror RyzaAlchemy.recipes: base pets have T1–T4; brother fusions T3–T4.
  const recipes = pets.flatMap(pet => Array.from({ length: pet.parent ? 2 : 4 }, (_, index) => {
    const tier = index + (pet.parent ? 3 : 1);
    const inputs = pet.parent && tier === 3 ? [{ species: pet.parent, tier: 2 }]
      : tier === 1 ? pet.bases.map(species => ({ species, tier: 0 })) : [{ species: pet.id, tier: tier - 1 }];
    let required = [{ key: pet.material, count: tier }];
    if (tier === 2) required.push({ key: "unhold_hide", count: 1 });
    if (tier === 3) required.push({ key: "unhold_heart", count: 1 });
    if (tier === 4) required.push({ key: "lindwurm_bones", count: 2 }, { key: "lindwurm_scales", count: 2 });
    if (pet.parent) required = tier === 3 ? pet.fusionMaterials : [{ key: "unhold_heart", count: 2 }, { key: "lindwurm_bones", count: 2 }, { key: "lindwurm_scales", count: 2 }];
    const merged = new Map();
    for (const row of required) merged.set(row.key, (merged.get(row.key) || 0) + row.count);
    return { id: `${pet.id}_t${tier}`, species: pet.id, tier, inputs, brother: !!pet.parent && tier === 3,
      materials: [...merged].map(([key, count]) => ({ key, count })),
      cost: pet.parent ? (tier === 3 ? 5000 : 10000) : tier === 1 ? (pet.bases.length === 1 ? 600 : 800) : [0, 0, 1000, 3000, 8000][tier] };
  }));
  const augments = [...extension.matchAll(/RyzaAugments\.(\w+)\s*<-/g)].map(([, id]) => {
    const block = assignedBlock(extension, `RyzaAugments.${id}`);
    return { id, name: text(block, "Name"), description: text(block, "Description"), species: stringField(block, "Species"), tier: numberField(block, "Tier"),
      core: /Core\s*=\s*true/.test(block), cost: numberField(block, "Cost"), days: numberField(block, "Days"), materials: quantities(block) };
  });
  const bands = assignedBlock(extension, "RyzaInheritanceBands");
  const inheritance = [...bands.matchAll(/(\w+)\s*=\s*(\[\[[^;]+?\]\])/g)].map(([, id, values]) => ({ id, name: keyText(`ryza.ext.stat.${id}`), bands: JSON.parse(values) }));
  const bases = Object.fromEntries(["wardog", "warhound", "wolf", "falcon"].map(id => [id, keyText(`ryza.base.${id}`)]));

  const fieldRewards = assignedBlock(config("ryza_fieldwork_chapter_data.nut"), "RyzaFieldRewards");
  for (const chapter of chapters.filter(entry => ["shu_granary", "ryza_fieldwork"].includes(entry.id))) {
    chapter.rules = keyText(`chapter.${chapter.id}.rules`);
    chapter.cooldownHours = 72;
    for (const difficulty of chapter.difficulties) {
      for (const reward of difficulty.rewards) reward.name = text(namedObject(fieldRewards, reward.key), "Name");
    }
    if (chapter.id === "ryza_fieldwork") chapter.gallery.find(cg => cg.id === "rescue").unlockNote = pair("Clear the rescue route.", "完成救援路线后解锁。");
  }

  const weapons = assignedBlock(config("tenka_goken_weapons.nut"), "TenkaGokenWeapons");
  const festival = chapters.find(chapter => chapter.id === "tenka_goken_festival");
  festival.relatedActors = topLevelObjectKeys(weapons);
  for (const id of festival.relatedActors) {
    const block = namedObject(weapons, id), item = items.find(item => item.id === stringField(block, "Key"));
    if (!item) throw new Error(`Missing festival sword for ${id}`);
    item.stats = { RegularDamage: numberField(block, "Low"), RegularDamageMax: numberField(block, "High"), ArmorDamageMult: numberField(block, "Armor"),
      DirectDamageMult: numberField(block, "Pierce"), StaminaModifier: -numberField(block, "Weight"), ConditionMax: 100, Value: 15000, RangeMin: 1, RangeMax: 1 };
    item.image = asset(`ui/items/battle-valkyries/${item.id}.png`, "items");
    item.acquisition = pair("Complete all 11 stages of the Tenka Goken festival to receive all five swords; a full stash preserves pending deliveries. Recruitment provides a normal starter weapon instead.", "完成天下五剑武艺祭全部 11 节后获得全部五把名剑；仓库满时保留待发奖励。角色入队配发的是普通起步武器。");
    item.tooltip = keyText("tenka.legendary_tooltip");
    item.skills = [`${id}_weapon`, stringField(block, "Secondary")];
    valkyries.find(actor => actor.id === id).chapters.push(festival.id);
  }
  valkyries.find(actor => actor.id === "ryza").combatResource = { Start: 3, Cap: 6, Slots: 0 };

  card("shu", "Shu: protection and harvest", "黍：守护与丰收", en["valkyrie.shu.trait.description"], zh["valkyrie.shu.trait.description"],
    [en["skill.shu_bountiful_harvest.description"], "A living Shu in the roster, including reserves, unlocks the repeatable granary. Choose easy, normal or hard; all share a 72-hour game-time cooldown after victory.", "Rice is locked on first battle entry using company food consumption. Minimum rewards are 600 / 1,200 / 1,800; the scaling budgets cover 1.5 / 3 / 4.5 days. Claim it in the chapter panel; it keeps for 10 days after delivery."],
    [zh["skill.shu_bountiful_harvest.description"], "存活的黍在名册中即可开启重复粮仓，后备也算。简单、普通、困难三档共享胜利后的 72 游戏小时冷却。", "首次进入战斗时按全名册耗粮锁定奖励，三档最低 600 / 1200 / 1800，预算分别覆盖 1.5 / 3 / 4.5 天。奖励返回篇章面板领取，交付后保鲜 10 天。"],
    ["config/shu_skill_catalog.nut", "systems/shu.nut", "config/shu_granary_chapter_data.nut", "systems/shu_granary_chapter.nut"]);
  card("ryza_workshop", "Ryza's alchemy workshop", "莱莎炼金工坊", en["ryza.alchemy.description"], zh["ryza.alchemy.description"],
    ["Open the workshop from the Hub with Ryza alive and outside combat. Pets and materials must be in the stash; unequip pets first. The first pet supplies the retained name. Inputs are consumed on confirmation.", "Four tiers for 14 base species, plus T3/T4 for six brother-fusion species. T3 brother fusion consumes an eligible ordinary brother and returns their equipment to the stash. Valkyries and protected characters cannot be donors.", "Inheritance uses base attributes and native traits, excluding equipment, perks, potions and injuries; T4 upgrades retain it without granting it again.", "17 permanent traits: at most six per recipient, including at most one core trait. Adaptation lasts 3 / 5 / 7 game days according to the recipe. No duplicate trait or new operation during adaptation.", "Repair costs 150 × tier. Vitality or precision training has two ranks and costs 500 × next rank × tier; reset costs 1,000 Crowns."],
    ["莱莎存活且不在战斗中时，从 Hub 打开工坊。宠物与材料需放入仓库，已装备宠物先卸下；第一只主宠保留名字，确认后消耗配方投入。", "14 种基础伙伴各有 T1–T4，另有 6 种兄弟融合伙伴的 T3/T4。T3 兄弟融合会消耗一名符合条件的普通佣兵，并把其装备退回仓库；女武神和受保护人物不能作供体。", "继承读取基础属性与原生特性，不计装备、Perk、药水和伤势；升到 T4 保留继承，不重复增加。", "17 种永久特征，每人最多 6 种且核心最多 1 种；按配方需适应 3 / 5 / 7 个游戏日。不能重复获取同一特征，适应期内不能再次改造。", "修复花费 150 × 阶级；活力或精准训练最多两级，花费 500 × 下一级训练等级 × 阶级；重置花费 1000 克朗。"],
    ["config/ryza_pet_data.nut", "config/ryza_extension_data.nut", "systems/ryza_alchemy.nut", "systems/ryza_transmutation.nut"]);
  card("ryza_fieldwork", "Ryza's fieldwork", "莱莎野外调查", en["chapter.ryza_fieldwork.rules"], zh["chapter.ryza_fieldwork.rules"],
    ["Choose rescue, hunting, silk, giants or dragon. The chapter tables list the fixed rewards for each route; these are separate from random combat loot.", "Rewards wait in the delivery ledger if the stash is full. The rescue CG specifically requires clearing rescue; the other two unlock on a successful route.", "You may change routes before entering combat. Cancelling after the first battle entry also starts the shared 72-hour cooldown."],
    ["可选救援、狩猎、蛛丝、巨人、龙类五条路线，篇章表列出每条路线固定奖励，与随机战利品分开结算。", "仓库满时保留未发奖励。救援 CG 需要单独完成救援路线，另外两张在完成任一路线后开放。", "首次进战前可以更换路线；进战后放弃本轮也会开始共享的 72 游戏小时冷却。"],
    ["config/ryza_fieldwork_chapter_data.nut", "systems/ryza_fieldwork_chapter.nut"]);
  card("tenka_festival", "Tenka Goken martial festival", "天下五剑武艺祭", en["chapter.tenka_festival.description"], zh["chapter.tenka_festival.description"],
    ["An 11-stage campaign with five CGs; owning the five characters is not required. They remain available through ordinary recruitment.", "Move the current examiner out of the deployed formation before challenging them. Sparring restores participant HP, equipment condition and newly acquired injuries after the battle.", "Complete the final stage to receive all five transferable legendary swords, each with two weapon techniques. These techniques belong to the equipped sword; the characters' personal techniques remain separate."],
    ["共 11 节、5 张 CG，无需预先招募五人；五人仍通过普通招募途径获取。", "挑战时须将当场考官身份的己方角色移出出战阵容。切磋结束后恢复参赛者原有生命、装备耐久，并清除本次新增伤势。", "完成终章获得全部五把可转交的传奇名剑，每把附带两种武器技。武器技随装备授予，与角色自身技艺分开。"],
    ["config/tenka_goken_festival_chapter_data.nut", "systems/tenka_goken_festival.nut", "config/tenka_goken_weapons.nut", "items/tenka_goken_sword.nut"]);
  return { workshop: { pets, recipes, augments, materials, bases, inheritance } };
}

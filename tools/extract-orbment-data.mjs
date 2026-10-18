// Orbment registrations and runtime-only grants from the loaded game source.
export function buildOrbmentData(h) {
  const { pair, text, config, objects, asset, card, chapters, items, valkyries, en, zh,
    assignedBlock, assignedArray, objectField, arrayField, namedObject, topLevelObjectKeys,
    stringField, numberField, numberMap, stringsIn, readUtf8, valkyrieCodeRoot } = h;
  const source = config("orbment_data.nut"), duo = config("trails_duo_orbments.nut"), ui = config("orbment_ui_data.nut");
  const entries = (root, build) => topLevelObjectKeys(root).map(id => build(id, namedObject(root, id)));
  const labels = key => Object.fromEntries([...assignedBlock(ui, key).matchAll(/(\w+)\s*=\s*"/g)].map(([, id]) => [id, text(assignedBlock(ui, key), id)]));
  const itemImage = block => asset(`ui/items/${stringField(block, "Icon")}`, "orbments");
  const form = (id, block) => ({ id, name: text(block, "Name"), lines: JSON.parse(arrayField(block, "Lines")), activeSlots: numberField(block, "ActiveSlots"), passiveCapacity: numberField(block, "PassiveCapacity"), image: itemImage(block) });
  const forms = entries(assignedBlock(source, "OrbmentForms"), form);
  for (const [, id] of duo.matchAll(/OrbmentForms\.(\w+)\s*<-/g)) forms.push(form(id, assignedBlock(duo, `OrbmentForms.${id}`)));
  const gems = entries(assignedBlock(source, "OrbmentGems"), (id, block) => ({ id, name: text(block, "Name"), bonus: stringField(block, "Bonus"), image: itemImage(block),
    tiers: [1, 2].map(rank => ({ rank, elements: numberMap(objectField(block, `Elements${rank}`)), value: numberField(block, `Value${rank}`) })) }));
  const recipes = entries(assignedBlock(source, "OrbmentRecipes"), (id, block) => ({ id, name: text(block, "Name"), description: text(block, "Description"), kind: stringField(block, "Kind"), cost: numberField(block, "Cost"), requirements: numberMap(objectField(block, "Requirements")) }));
  const starters = entries(assignedBlock(duo, "TrailsStarterConfigs"), (actor, block) => ({ actor, form: stringField(block, "Form"), slots: stringsIn(arrayField(block, "Slots")), active: stringsIn(arrayField(block, "Active")), passive: stringsIn(arrayField(block, "Passive")) }));
  const rewards = readUtf8(valkyrieCodeRoot, "systems", "septium_rewards.nut");
  const reader = rewards.slice(rewards.indexOf("bv.Orbments.starReader <-"), rewards.indexOf("bv.Orbments.trailsAward <-"));
  starters.unshift({ actor: "tio", form: "star_reader", slots: stringsIn(arrayField(reader, "Slots")), active: stringsIn(arrayField(reader, "Active")), passive: stringsIn(arrayField(reader, "Passive")) });
  const acquisition = {
    starrail: pair("Septium Workshop, stage 8.", "异乡的导力工房第 8 节。"), twinwing: pair("Septium Workshop stage 8; Shizuna also receives one on recruitment.", "异乡的导力工房第 8 节；静名入队也配发一台。"), triskelion: pair("Septium Workshop, stage 8.", "异乡的导力工房第 8 节。"),
    star_reader: pair("Tio's starter equipment, delivered after Septium Workshop stage 8.", "异乡的导力工房第 8 节后随缇欧配发。"), renne_aster: pair("Equipped on Renne's recruitment, with a configured circuit.", "玲入队配发，附带已装配回路。"), alisa_blazing_wing: pair("Equipped on Alisa's recruitment, with a configured circuit.", "亚莉莎入队配发，附带已装配回路。"),
  };
  const generic = items.find(item => item.id === "orbment_item");
  if (!generic) throw new Error("Missing orbment equipment script");
  items.splice(items.indexOf(generic), 1);
  for (const entry of forms) {
    entry.acquisition = acquisition[entry.id];
    items.push({ ...generic, id: `orbment_${entry.id}`, name: entry.name, image: entry.image, acquisition: entry.acquisition });
  }
  for (const [id, value] of Object.entries({
    tio_orbal_staff: acquisition.star_reader,
    renne_annihilation_scythe: pair("Renne's starter weapon on recruitment.", "玲入队时配发的专属武器。"),
    alisa_orbal_bow: pair("Alisa's starter weapon on recruitment.", "亚莉莎入队时配发的专属武器。"),
  })) items.find(item => item.id === id).acquisition = value;
  const workshop = chapters.find(chapter => chapter.id === "septium_workshop"), mine = chapters.find(chapter => chapter.id === "septium_mine");
  workshop.relatedActors = ["tio", "renne", "alisa", "shizuna"];
  for (const id of workshop.relatedActors) {
    const actor = valkyries.find(actor => actor.id === id);
    if (!actor.chapters.includes(workshop.id)) actor.chapters.push(workshop.id);
  }
  mine.requiredChapter = workshop.id;
  mine.cooldownHours = 72;
  mine.rules = pair(en["chapter.septium.mine.rules"], zh["chapter.septium.mine.rules"]);
  mine.allocationNote = pair("Allocate each rank's total between the two listed quartz types before first battle entry. Entry freezes the allocation; the table shows totals, not two full sets of rewards. All 21 routes share a 72-hour cooldown after victory.", "首次进战前，将各阶回路总数分配给所列的两种回路；进战即锁定。表中是可分配总量，不是每种都获得一整份。21 条路线共享胜利后的 72 游戏小时冷却。");
  const mineBlock = assignedBlock(config("septium_chapter_data.nut"), "ChapterDefinitions.septium_mine");
  for (const block of objects(arrayField(mineBlock, "Difficulties"))) {
    const route = mine.difficulties.find(route => route.id === stringField(block, "ID"));
    route.allocation = { pair: stringsIn(arrayField(block, "Pair")), normal: numberField(block, "Normal"), rare: numberField(block, "Rare"), sand: numberField(block, "Sand"), enemies: numberField(block, "Count") };
    route.rewards = []; // Config contains a default allocation, not the player's eventual rewards.
  }
  card("orbments", "Trails orbments and quartz", "轨迹系列：导力器与结晶回路", "Equip an orbment in the accessory slot and configure its seven sockets and prepared skills.", "导力器装备在饰品栏，可配置七个孔位与预备技能。", [
    "Complete all eight Septium Workshop stages to recruit Tio, receive her configured Star Reader and staff, three generic orbment forms and three rank-I quartz of each of the seven pure elements. Full roster/stash deliveries remain pending.",
    "Open the orbment workshop outside combat. Unequip the orbment into the stash before configuring it; quartz must also be in the stash. Eight template slots save layouts, but applying them still requires the actual quartz.",
    "Socket 0 contributes to every connected line; each physical quartz grants its stat bonus once. At most two quartz of the same type across both ranks. A single line must satisfy an entire skill recipe; totals from different lines cannot be pooled.",
    "Unlocking a recipe does not prepare it automatically. Choose active skills up to the form's slot limit and passive skills within its capacity; advanced passives cost two. Unequipping removes the orbment effects.",
    "After workshop stage 8, upgrade two identical rank-I quartz with 300 Crowns and 10 sand into one rank-II quartz. Recycle rank I / II for 2 / 6 sand. The same milestone unlocks the repeatable Septium Mine.",
  ], [
    "完成异乡的导力工房全部 8 节后招募缇欧，配发装好回路的星读导力器与魔导杖，另发三种通用导力器及七种纯属性 I 阶回路各 3 枚。名册或仓库满时保留待发奖励。",
    "战斗外打开导力工房；先将导力器卸下放入仓库，所需回路也须在仓库。可保存 8 份模板，套用模板仍须实际持有所需回路。",
    "中心孔 0 参与每条连线，但每枚实物回路的属性加成只计一次。同种回路两阶合计最多装 2 枚。每项技能要求须由一条线路独立满足，不可把不同线路的属性合并。",
    "达到配方仅代表可选，仍需手动预备技能。主动技能占机型槽位，被动技能占容量，高级被动消耗 2 点；卸下导力器后移除其效果。",
    "工房第 8 节后开放加工：2 枚同种 I 阶回路 + 300 克朗 + 10 七曜砂升级成 1 枚 II 阶；回收 I / II 阶分别获得 2 / 6 七曜砂。同时开启可重复七曜矿区。",
  ], ["config/orbment_data.nut", "config/trails_duo_orbments.nut", "systems/orbment_model.nut", "systems/orbment_workshop.nut", "systems/septium_rewards.nut", "systems/septium_mine.nut"]);
  return { forms, gems, recipes, starters, elements: labels("OrbmentElementNames"), bonusNames: labels("OrbmentBonusNames") };
}

export function addNewBonds(h, bonds) {
  const { config, objects, assignedArray, numberField, stringField, text, asset, pair, readUtf8, valkyrieCodeRoot, arrayField } = h;
  const equipment = objects(arrayField(readUtf8(valkyrieCodeRoot, "systems", "kanade_tachibana.nut"), "Equipment"));
  const missions = {
    20: pair("Win while keeping at least two of the three supply carts alive.", "获胜且三辆补给车至少存活两辆。"),
    40: pair("Eliminate all enemies; the rescue is narrative, with no escort objective.", "消灭全部敌人；营救属于剧情描述，无额外护送目标。"),
    60: pair("Destroy all three nodes, then defeat the overloaded echo. Each surviving node can spawn two echoes.", "摧毁三个节点，再击败出现的过载分身；每个存活节点最多生成两个分身。"),
    80: pair("Eliminate all enemies and win; no separate wounded-ally rescue check.", "消灭全部敌人并获胜，无额外伤员救援判定。"),
    100: pair("Destroy three anchors and the terminal, and clear all enemies. The terminal summons two reinforcements every three rounds, up to six.", "摧毁三个锚点与终端，并消灭全部敌人；终端每三回合召唤两个增援，最多六个。"),
  };
  for (const [actor, prefix] of [["saber", "Saber"], ["kanade_tachibana", "Kanade"]]) {
    const stages = objects(assignedArray(config(`${actor}_bond_data.nut`), `${prefix}BondStages`)).map(block => {
      const value = numberField(block, "Value"), gear = actor === "kanade_tachibana" ? equipment.find(row => numberField(row, "Stage") === value) : null;
      return { value, name: text(block, "Name"), challenge: text(block, "RewardText"), location: text(block, "LocationName"), locationDescription: text(block, "LocationDescription"),
        story: text(block, "Text"), reveal: text(block, "RevealText"), victory: text(block, "VictoryText"),
        introImage: asset(stringField(block, "FirstCG") || stringField(block, "Image"), "bonds"), cgImage: asset(stringField(block, "CGImage"), "bonds"), victoryImage: asset(stringField(block, "VictoryImage"), "bonds"),
        item: gear ? `kanade_tachibana_${stringField(gear, "Key")}` : stringField(block, "Item").split("/").pop(),
        skin: stringField(block, "Skin") || (actor === "saber" && value === 100 ? "saber_royal_bunny_skin" : ""),
        objective: actor === "kanade_tachibana" ? missions[value] : null,
        money: numberField(block, "Money"), tools: numberField(block, "Tools"), medicine: numberField(block, "Medicine"),
      };
    });
    bonds.push({ actor, source: `config/${actor}_bond_data.nut`, stages,
      progression: actor === "kanade_tachibana" ? pair("Participate, survive and win to gain 4 bond. Complete the 20 / 40 / 60 / 80 / 100 stories and camps in order with Kanade participating and surviving. Each cleared stage unlocks an outfit; stage 100 adds Sonic Rotation. Reaching a number alone does not grant rewards.", "本人参战、存活并获胜，每场获得 4 点羁绊。按 20 / 40 / 60 / 80 / 100 顺序完成故事与营地，立华奏须亲自参战并存活获胜。每阶段解锁一套服装，100 阶段追加音速回旋；仅达到数值不发奖励。") : pair("Complete the five bond story challenges in order. Stage 60 grants Oath Excalibur; stage 100 grants Mana Release and the Royal Bunny outfit.", "按顺序完成五阶段羁绊故事挑战。60 阶段获得誓约胜利之剑；100 阶段获得魔力解放与皇家兔女郎皮肤。") });
  }
}

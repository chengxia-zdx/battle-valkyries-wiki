// Source-derived reference catalogs beyond the initial character loadouts.
export function buildReferenceData(h) {
  const { fs, path, valkyrieRoot, valkyrieCodeRoot, workspaceRoot, loadedConfigs, en, zh, valkyries, systems,
    buildSkill, supplementalSkills, skillsRoot, lilySkillCatalogData, readUtf8, findMatching, assignedBlock,
    assignedArray, objectField, arrayField, namedObject, stringField, numberField, numberMap, stringsIn,
    topLevelObjectKeys, resolveToken, copyGfxAsset } = h;
  const pair = (en, zh) => ({ en, zh });
  const text = (block, field) => pair(resolveToken(stringField(block, field), en), resolveToken(stringField(block, field), zh));
  const config = (file) => readUtf8(valkyrieCodeRoot, "config", file);
  function objects(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '"') { i++; while (i < array.length && array[i] !== '"') { if (array[i] === "\\") i++; i++; } }
      else if (array[i] === "{") { const end = findMatching(array, i, "{", "}"); result.push(array.slice(i, end + 1)); i = end; }
    }
    return result;
  }
  function asset(source, category) {
    if (!source) return "";
    source = source.replace(/^gfx\//, "").replaceAll("$bvvar{iconPrefix}", "battle-valkyries");
    const target = `assets/${category}/${source.replace(/^ui\//, "")}`;
    if (!copyGfxAsset(valkyrieRoot, source, target)) throw new Error(`Missing reference art: ${source}`);
    return target;
  }
  const chapterCG = config("chapter_cg_data.nut");
  const chapters = [];
  for (const { file, source } of loadedConfigs.filter(({ file }) => file.endsWith("chapter_data.nut"))) {
    const initial = assignedBlock(source, "ChapterDefinitions");
    const entries = initial ? topLevelObjectKeys(initial).map(id => [id, namedObject(initial, id)])
      : [...source.matchAll(/ChapterDefinitions\.(\w+)\s*<-/g)].map(match => [match[1], assignedBlock(source, `ChapterDefinitions.${match[1]}`)]);
    for (const [id, block] of entries) {
      const stages = objects(arrayField(block, "Stages")).map((stage, index) => ({
        number: index + 1, name: text(stage, "Name"), brief: text(stage, "Brief"), reward: text(stage, "Special"),
        money: numberField(stage, "Money"), medicine: numberField(stage, "Medicine"), tools: numberField(stage, "Tools"), perksEach: numberField(stage, "PerksEach", 1),
        goals: objects(arrayField(stage, "Goals")).map(goal => ({ id: stringField(goal, "Key"), name: text(goal, "Name"), battle: /Battle\s*=\s*true/.test(goal) })),
        materials: objects(arrayField(stage, "Materials")).map(material => ({ id: stringField(material, "Key"), name: text(material, "Name"), source: text(material, "Source"), count: numberField(material, "Count") })),
      }));
      chapters.push({ id, name: text(block, "Name"), description: text(block, "Description"), actors: stringsIn(arrayField(block, "Actors")),
        poster: asset(stringField(block, "Poster"), "story"), stages, source: `config/${file}`,
        gallery: objects(assignedArray(chapterCG, `ChapterDefinitions.${id}.Gallery`) || arrayField(block, "Gallery")).map(cg => ({ id: stringField(cg, "ID"), stage: numberField(cg, "Stage"), title: text(cg, "Title"), caption: text(cg, "Caption"), image: asset(stringField(cg, "Image"), "story") })),
        skillRewards: objects(arrayField(block, "SkillRewards")).map(reward => ({ actor: stringField(reward, "Actor"), stage: numberField(reward, "Stage"), key: stringField(reward, "Key") })),
        skinRewards: objects(arrayField(block, "SkinRewards")).map(reward => ({ actor: stringField(reward, "Actor"), stage: numberField(reward, "Stage"), skin: stringField(reward, "Skin") })),
      });
    }
  }
  const enemySource = config("enemy_expansion_catalog.nut");
  const profiles = assignedBlock(config("enemy_expansion_combat.nut"), "ExpandedEnemyCombatProfiles");
  const spawn = config("enemy_expansion_spawn.nut");
  const naturalGroups = new Set(objects(arrayField(assignedBlock(spawn, "ExpandedEnemySpawnConfig"), "Sources")).map(block => stringField(block, "Group")));
  const enemyGroups = objects(assignedArray(enemySource, "ExpandedEnemyGroups")).map(group => ({
    id: stringField(group, "ID"), name: text(group, "Label"), naturalSpawn: naturalGroups.has(stringField(group, "ID")),
    enemies: objects(arrayField(group, "Enemies")).map(enemy => {
      const id = stringField(enemy, "Key"), tier = stringField(enemy, "Tier"), profile = namedObject(profiles, id);
      return { id, name: text(enemy, "Name"), tier, troop: stringField(enemy, "Troop"),
        hpMultiplier: tier === "t25" ? 0.9 : numberField(profile, "Hitpoints", 1), damageMultiplier: tier === "t25" ? 0.95 : numberField(profile, "Damage", 1),
        bonuses: numberMap(objectField(profile, "Add")), perks: stringsIn(arrayField(profile, "Perks")) };
    }),
  }));
  const campSource = config("valkyrie_bounty_camps.nut");
  const bounty = {
    rules: objects(assignedArray(campSource, "BountyCampRules")).map(block => numberMap(block)),
    themes: [...campSource.matchAll(/^add\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)"[^\n]+/gm)].map(([, id, token, group]) => ({ id, name: pair(resolveToken(token, en), resolveToken(token, zh)), group })),
    rewards: [3000, 6000, 12000],
  };
  const shop = objects(assignedArray(config("memory_shop_data.nut"), "MemoryShopProducts")).map(block => ({ id: stringField(block, "ID"), name: text(block, "Name"), description: text(block, "Description"), effect: text(block, "EffectLabel"), cost: numberMap(objectField(block, "Cost")) }));
  const currencies = Object.fromEntries(["Fragment", "Crystal", "Eternal", "Emblem"].map(key => [key, pair(en[`memory.resource.${key.toLowerCase()}`], zh[`memory.resource.${key.toLowerCase()}`])]));
  const bonds = [["xilian", "bond_system.nut", "Xilian"], ["liuying", "liuying_bond_system.nut", "Liuying"], ["himeko", "himeko_bond_system.nut", "Himeko"], ["jeanne", "jeanne_bond_system.nut", "Jeanne"]].map(([actor, file, prefix]) => {
    const source = readUtf8(valkyrieCodeRoot, "hooks", file);
    return { actor, source: `hooks/${file}`, stages: objects(assignedArray(source, `${prefix}BondStages`)).map(block => ({ value: numberField(block, "Value"), name: text(block, "Name"), challenge: text(block, "ChallengeText") })) };
  });
  const yeBondConfig = loadedConfigs.find(entry => entry.file === "ye_shunguang_bond_data.nut");
  if (yeBondConfig) {
    const localizedKey = key => pair(en[key], zh[key]);
    bonds.push({
      actor: "ye_shunguang", source: "config/ye_shunguang_bond_data.nut",
      name: localizedKey("valkyrie.ye_shunguang.bond.name"),
      description: localizedKey("valkyrie.ye_shunguang.bond.description"),
      rules: localizedKey("event.ye_shunguang_bond.challenge_rules"),
      delivery: localizedKey("event.ye_shunguang_bond.pending"),
      progression: pair("Progress through 20 / 40 / 60 / 80 / 100 bond in order. Each stage has two story pages and one camp; an unfinished earlier challenge blocks the next. This campaign does not require the Yunki chapter. Story rings are keepsakes, not equipment rewards.", "羁绊按 20 / 40 / 60 / 80 / 100 顺序推进，每阶段两页剧情与一座营地；前一挑战未完成时不能越级。无需先完成《云岿山伏魔录》。剧情中的戒指是纪念物，不是装备奖励。"),
      stages: objects(assignedArray(yeBondConfig.source, "YeShunguangBondStages")).map(block => ({
        value: numberField(block, "Value"), name: text(block, "Name"), challenge: text(block, "RewardText"),
        location: text(block, "LocationName"), locationDescription: text(block, "LocationDescription"),
        story: text(block, "Text"), reveal: text(block, "RevealText"), victory: text(block, "VictoryText"),
        introImage: asset(stringField(block, "Image"), "bonds"), cgImage: asset(stringField(block, "CGImage"), "bonds"),
        item: path.posix.basename(stringField(block, "Item")),
        money: numberField(block, "Money"), tools: numberField(block, "Tools"), medicine: numberField(block, "Medicine"),
      })),
    });
  }
  const spirits = objects(assignedArray(config("lily_spirit_data.nut"), "LilySpirits")).map(block => {
    const id = stringField(block, "Key");
    return { id, type: stringField(block, "Type"), stats: numberMap(block), name: pair(en[`skill.lily_spirit_${id}.name`], zh[`skill.lily_spirit_${id}.name`]), description: pair(en[`skill.lily_spirit_${id}.description`], zh[`skill.lily_spirit_${id}.description`]) };
  });
  const skillKeys = new Set([...topLevelObjectKeys(skillsRoot), ...supplementalSkills.keys(), ...lilySkillCatalogData.matchAll(/ValkyrieSkillCatalog\.(\w+)\s*<-/g)].map(value => typeof value === "string" ? value : value[1]));
  const skillCatalog = [...skillKeys].filter(key => !key.startsWith("xilian_test_")).map(buildSkill);
  for (const spirit of spirits) skillCatalog.push(buildSkill(`lily_spirit_${spirit.id}`));
  // Keep chapter/weapon/transform skills visible from the owning profile as well.
  for (const actor of valkyries) {
    const rewardKeys = chapters.flatMap(chapter => chapter.skillRewards.filter(reward => reward.actor === actor.id).map(reward => reward.key));
    if (actor.id === "ye_shunguang") rewardKeys.push("qingming_casket_strike", "qingming_unsheathe");
    actor.additionalSkills = skillCatalog.filter(skill => !actor.skills.some(base => base.key === skill.key) && (skill.key.startsWith(`${actor.id}_`) || rewardKeys.includes(skill.key)));
    actor.chapters = chapters.filter(chapter => chapter.actors.includes(actor.id)).map(chapter => chapter.id);
    actor.bond = bonds.find(bond => bond.actor === actor.id) || null;
  }

  // Equipment reference uses only concrete item scripts, never orphaned i18n text.
  const acquisition = {
    ye_shunguang_heartbound_circlet: pair("Ye Shunguang bond 20: defeat the first challenge camp.", "叶瞬光羁绊 20：击破第一座挑战营地。"),
    ye_shunguang_homeward_vestment: pair("Ye Shunguang bond 60: defeat the third challenge camp.", "叶瞬光羁绊 60：击破第三座挑战营地。"),
    four_oaths_grail: pair("Complete stage 8 of The Unclaimed Grail and Four Oaths; choose one wish.", "完成《无主圣杯与四骑誓约》第 8 节后获得，可选择一个愿望。"),
    xilian_infinite_oath_bow: pair("Xilian bond 60: defeat the challenge camp.", "昔涟羁绊 60：击破挑战营地。"),
    liuying_sam_core_item: pair("Firefly bond 60: defeat the challenge camp.", "流萤羁绊 60：击破挑战营地。"),
    jeanne_eternal_standard: pair("Jeanne bond 20: defeat the challenge camp.", "贞德羁绊 20：击破挑战营地。"),
    himeko_astral_lance: pair("Himeko bond 20: defeat the challenge camp.", "姬子羁绊 20：击破挑战营地。"),
    himeko_navigator_circlet: pair("Himeko bond 40: defeat the challenge camp.", "姬子羁绊 40：击破挑战营地。"),
    himeko_navigator_armor: pair("Himeko bond 60: defeat the challenge camp.", "姬子羁绊 60：击破挑战营地。"),
    himeko_trailblazer_summoner: pair("Himeko bond 80: defeat the challenge camp.", "姬子羁绊 80：击破挑战营地。"),
    m4a1_homecoming_rifle: pair("Granted when recruiting M4A1.", "招募 M4A1 时配发。"),
    enterprise_dauntless_wings: pair("Granted when recruiting Enterprise; existing saves have a delivery repair path.", "招募企业时配发；已有存档设有补发逻辑。"),
    castorice_liuchun: pair("Spring Will Pass Through Here, stage 7.", "《春天会经过这里》第 7 节。"),
    hysilens_returning_oath: pair("The Royal Banner and Returning Tide, stage 7.", "《王旗与归潮》第 7 节。"),
    ye_shunguang_qingming_casket: pair("Yunki chapter, stage 1; permanently restored as Qingming Sword at stage 7.", "《云岿山伏魔录》第 1 节；第 7 节永久恢复为完整青溟剑。"),
  };
  for (const key of ["grail_gungnir", "grail_court_armor", "grail_court_helmet", "grail_oath_ring"]) acquisition[key] = pair("Use the Four Oaths Grail after chapter stage 8 and choose the valor wish; one of four fixed legendary pieces.", "篇章第 8 节后使用四誓圣杯并选择武勇愿望，获得四件固定传奇装备中的一件。");
  const items = [];
  function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]); }
  for (const file of walk(path.join(valkyrieRoot, "scripts", "items")).filter(file => file.endsWith(".nut"))) {
    const source = fs.readFileSync(file, "utf8"), description = stringField(source, "Description"), name = stringField(source, "Name");
    if (!description || (!/\/(weapons|armor|helmets|accessory)\//.test(file.replaceAll("\\", "/")) && !file.endsWith("four_oaths_grail.nut"))) continue;
    const id = path.basename(file, ".nut");
    const fallbackName = id === "ye_shunguang_qingming_casket" ? "$bv{item.qingming_casket.name}" : id;
    const values = Object.fromEntries([...source.matchAll(/this\.m\.(ConditionMax|StaminaModifier|RegularDamage|RegularDamageMax|ArmorDamageMult|DirectDamageMult|Value|RangeMin|RangeMax)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/g)].map(([, key, value]) => [key, +value]));
    const details = id === "ye_shunguang_heartbound_circlet" || id === "ye_shunguang_homeward_vestment" ? {
      owner: pair(en[`item.${id}.owner`], zh[`item.${id}.owner`]),
      bonus: pair(en[`item.${id}.bonus`], zh[`item.${id}.bonus`]),
      image: asset(`ui/items/battle-valkyries/${id}.png`, "bonds"),
    } : {};
    items.push({ id, name: pair(resolveToken(name || fallbackName, en), resolveToken(name || fallbackName, zh)), description: text(source, "Description"), acquisition: acquisition[id] || pair("See the in-game reward details.", "请查看游戏内奖励说明。"), stats: values, ...details, source: path.relative(valkyrieRoot, file).replaceAll("\\", "/") });
  }

  systems.intro = pair("Reference snapshot of the development working tree. The downloadable release may differ; disabled videos and design-only rewards are not listed as available.", "本文对应开发中工作区的源码快照，下载版本可能不同；未启用的视频和仅有设计稿的奖励不列为可用内容。");
  const replaceCard = (id, fields) => Object.assign(systems.cards.find(card => card.id === id), fields);
  replaceCard("hub_gacha", { body: pair("Ctrl + M opens the Hub for summoning, camp bounties, chapters, memory inscription, the memory shop and biographies; character-specific panels appear when their requirements are met.", "Ctrl + M 打开 Hub，可进入召唤、营地悬赏、篇章、记忆铭刻、记忆商店与忆海生平；角色专属面板按条件开放。") });
  if (yeBondConfig) replaceCard("bonds", { body: pair("Xilian, Firefly, Himeko, Jeanne and Ye Shunguang have five-stage bond campaigns. Character profiles list the challenge and reward for every stage.", "昔涟、流萤、姬子、贞德和叶瞬光拥有五阶段羁绊战役，角色详情列出每阶段挑战与奖励。"), sourceFiles: [...systems.cards.find(card => card.id === "bonds").sourceFiles, "config/ye_shunguang_bond_data.nut", "systems/ye_shunguang_bond.nut"] });
  replaceCard("bounties", {
    body: pair("Accepting a bounty creates a dedicated camp. Win the linked camp battle to claim the Crown reward and recruit the target Valkyrie; fleeing enemies do not need to be hunted down.", "接受悬赏后直接生成专属营地。攻破对应营地即可领取克朗并招募目标女武神，不需要追杀所有逃走的敌人。"),
    bullets: pair(["Owned Valkyries 0–3 / 4–7 / 8–12: rewards 3,000 / 6,000 / 12,000 Crowns.", "17 camp themes use expanded enemies; budgets and sizes are shown below. Theme multipliers, DLC and terrain affect the actual encounter.", "A full roster leaves the reward pending recruitment; a retreat or an unrelated battle does not complete the bounty."], ["持有 0–3 / 4–7 / 8–12 名女武神分别对应一至三星，奖励 3,000 / 6,000 / 12,000 克朗。", "17 种营地主题加入扩展敌人；下方列出基础预算与规模，实际配置还受主题倍率、DLC 和地形影响。", "名册满员时保留待招募状态；撤退或攻打无关营地不算完成悬赏。"]),
    sourceFiles: ["config/valkyrie_bounty_camps.nut", "systems/valkyrie_bounty_camps.nut", "systems/valkyrie_bounty_service.nut", "scripts/contracts/contracts/battle_valkyries/valkyrie_bounty_contract.nut"],
  });
  const card = (id, enTitle, zhTitle, enBody, zhBody, enBullets, zhBullets, sourceFiles) => systems.cards.push({ id, title: pair(enTitle, zhTitle), body: pair(enBody, zhBody), bullets: pair(enBullets, zhBullets), sourceFiles });
  card("chapters", "Chapter campaigns", "篇章任务", "Recruit every required character, then start a chapter in the Hub. Complete its objectives and submit the requested materials to advance and claim stage rewards.", "招募篇章所需的全部角色后，在 Hub 开启任务。完成当节调查或战斗目标，并提交所需材料，推进剧情并领取奖励。", [`${chapters.length} registered chapters include stage objectives, materials, perk points, character upgrades, weapons, skins and unlockable CG galleries.`, "Rewards follow saved stage completion. Full-stash deliveries can be retried after making room."], [`当前登记 ${chapters.length} 个篇章，涵盖分节任务、材料、Perk 点、角色强化、专武、皮肤及可解锁 CG 画廊。`, "奖励按已完成阶段保存；仓库满时的物品发放可在腾出空间后补领。"], ["config/*_chapter_data.nut", "config/chapter_cg_data.nut", "systems/valkyrie_chapter_service.nut"]);
  const enemyCount = enemyGroups.reduce((sum, group) => sum + group.enemies.length, 0);
  card("enemy_scaling", "Dynamic difficulty & expanded enemies", "动态难度与扩展敌人", `The current catalog registers ${enemyCount} enemies. Natural spawns use approved host templates and depend on campaign day, Valkyrie count and levels.`, `当前目录登记 ${enemyCount} 个扩展敌人。自然生成按战役天数、女武神人数与等级，在支持的原版编队中替换部分单位。`, ["Threat uses the 12 highest-level living Valkyries: 1 + 0.05 × min(level − 1, 10) per character, capped at 12 total.", "The time multiplier reaches full strength on day 30. Contract / roamer / location budget caps are 3.0× / 2.5× / 2.2×.", "No natural custom units on days 1–10. The quality budget share becomes 35% / 50% / 60% on days 11–20 / 21–30 / 31+. This is a budget share, not an enemy spawn probability.", "Some catalog groups are reserved for dedicated encounters; catalog inclusion alone does not enable natural spawning."], ["威胁取存活女武神中等级最高的 12 人：每人 1 + 0.05 × min(等级 − 1, 10)，总威胁上限 12。", "时间倍率在第 30 天达到完整值。合同 / 游荡队 / 地点预算倍率上限为 3.0 / 2.5 / 2.2。", "第 1–10 天不自然生成扩展单位；第 11–20 / 21–30 / 31 天起，额外预算的品质份额为 35% / 50% / 60%。这不是单个敌人的刷新概率。", "部分目录分组仅供专属遭遇使用；在目录中登记不代表已加入自然生成。"], ["hooks/valkyrie_enemy_scaling.nut", "config/enemy_expansion_catalog.nut", "config/enemy_expansion_spawn.nut", "systems/enemy_expansion_spawn.nut"]);
  card("ye_shunguang", "Ye Shunguang progression & cinematic", "叶瞬光成长与战斗动画", "Yunki Demon Chronicle starts with Yixuan and Ye Shunguang recruited. Stage 1 awards the Qingming Casket; stage 7 restores the permanent Qingming Sword and Unsheathe; stage 8 grants Yixuan upgrades and a skin.", "《云岿山伏魔录》需要仪玄与叶瞬光入队。第 1 节获得青溟剑匣，第 7 节恢复完整青溟剑并解锁青溟出匣，第 8 节奖励仪玄强化技能和皮肤。", ["Entering the enlightened state plays the combat cinematic at most once per battle, with character voices and combat effects.", "Current source calls the weapon Qingming Sword. Ye Shunguang bond files are being written, but their loading and reward chain are not yet connected in this snapshot."], ["进入明心境时播放战斗 CG 动画，每场战斗最多一次，并接入人物语音与战斗特效。", "当前源码名称为“青溟剑”。已发现正在编写的叶瞬光羁绊文件，但本次快照的加载与奖励链路尚未完整接入，暂不将两件防具列为可获取奖励。"], ["systems/valkyrie_combat_cinematic.nut", "config/ye_shunguang_voice_data.nut", "systems/yunki_equipment.nut"]);
  card("audio", "Voice and skill sound controls", "语音与技能音效", "Character voices and skill sounds have separate volume controls in MSU settings.", "人物语音与技能音效在 MSU 设置中分别调节音量。", ["Voice volume: 0–300%; skill sounds: 0–200%. Both default to 100%.", "Character dialogue, combat effects and fullscreen profiles are refreshed from the current assets."], ["人物语音范围 0–300%，技能音效范围 0–200%，默认均为 100%。", "角色台词、战斗表现与全屏档案资源随当前源码更新。"], ["config/mod_settings.nut", "systems/valkyrie_voice_service.nut", "systems/valkyrie_skill_audio.nut"]);
  card("fixes", "Current gameplay and UI fixes", "当前玩法与界面修复", "This snapshot includes Reimu spirit-power round resets, Jeanne buff-duration handling, and Alchemy typography changes.", "本次源码包含灵梦灵力回合重置、贞德大招持续时间处理与炼金附魔字体调整。", ["Reimu resets spirit gain claims at the start of each global round; direct damage and dodging use their own gain conditions.", "Jeanne's holy buffs count normal turns and remove themselves at expiration, avoiding repeated ticks during waiting or extra turns.", "These entries describe code changes; this Wiki update is not an in-game acceptance test."], ["灵梦每个全局新回合重置灵力获取标记，直接伤害与闪避按各自条件获得灵力。", "贞德圣旗增益按正常行动回合计时，到期清除，避免等待或额外行动导致重复结算。", "这里记录源码变更；本次 Wiki 更新不代表游戏内验收。"], ["skills/passives/hakurei_reimu_inborn_intuition_skill.nut", "systems/jeanne_holy_banner.nut", "src/alchemy-enchantment-system/ui/mods/alchemy-enchantment-system/alchemy_enchantment_system.css"]);
  card("signature_equipment", "Signature equipment & character subsystems", "专属装备与角色机制", "The equipment index includes bond and chapter items plus M4A1's Homecoming rifle and Enterprise's Dauntless Wings. Their character skills are listed on each profile.", "装备索引补充羁绊与篇章物品，以及 M4A1 的“归途”步枪、企业的“无畏之翼”；角色详情同时列出武器、变身及篇章扩展技能。", ["Lily's 26 spirits and all ten memory shop products now have dedicated reference tables.", "Additional characters since the previous Wiki snapshot: Abigail Williams, Katsushika Hokusai, C.C., Enterprise, Sakiko Togawa, M4A1, Morgan and Meltryllis."], ["莉莉的 26 个灵魂与记忆商店全部 10 种商品均补充了独立索引。", "相较旧 Wiki 新增：阿比盖尔、葛饰北斋、C.C.、企业、丰川祥子、M4A1、摩根和梅尔特莉莉丝。"], ["config/valkyrie_data.nut", "config/lily_spirit_data.nut", "config/memory_shop_data.nut", "scripts/items/"]);
  if (yeBondConfig) replaceCard("ye_shunguang", { bullets: pair([
    "Entering the enlightened state plays the combat cinematic at most once per battle, with character voices and combat effects.",
    "Bond 20 / 60 awards Heartbound Circlet / Homeward Vestment. Bond 40 gives 1,000 Crowns and 30 tools; bond 80 gives 1,500 Crowns and 30 medicine.",
    "Win the bond-100 challenge to unlock Heart Recalled: once per battle, 2 AP and 10 fatigue, restore Sword Stance to 6 without automatically entering Enlightened State or resetting its spent stance or block. Its use is independent of Qingming Unsheathed.",
    "A Heart at Home has five two-page stories and five CGs. Gain 4 bond by participating and surviving a victory; Ye Shunguang must also participate and survive each camp victory, but need not land the killing blow. Clear each stage before advancing. A full stash preserves pending rewards.",
    "Heartbound Circlet: 240 armor, −4 maximum fatigue, +10 Resolve. Homeward Vestment: 300 armor, −8 maximum fatigue, +10 Initiative. Only Ye Shunguang may equip them.",
  ], [
    "进入明心境时播放战斗 CG 动画，每场战斗最多一次，并接入人物语音与战斗特效。",
    "羁绊 20 / 60 奖励系心额 / 归途衣；40 阶段奖励 1000 克朗与 30 工具，80 阶段奖励 1500 克朗与 30 药品。",
    "击破 100 阶段营地解锁一念归真：每战一次，2 AP、10 疲劳，将剑势补至 6 层；不自动进入明心境，不重置已消耗剑势与格挡，与青溟出匣次数独立。",
    "《此心有归》包含五阶段双页剧情与五张 CG。亲自参战、存活且获胜增加 4 羁绊；营地结算同样要求叶瞬光参战并存活，无需最后一击。阶段依次完成，仓库满时保留待领奖励。",
    "系心额：240 防护、最大疲劳 −4、决心 +10；归途衣：300 防护、最大疲劳 −8、主动值 +10。两件防具仅限叶瞬光装备。",
  ]), sourceFiles: ["config/ye_shunguang_bond_data.nut", "systems/ye_shunguang_bond.nut", "systems/valkyrie_combat_cinematic.nut", "config/ye_shunguang_voice_data.nut"] });
  if (chapters.some(chapter => chapter.id === "unclaimed_grail_four_oaths")) card("grail_wishes", "Four Oaths Grail wishes", "四誓圣杯许愿", "Finish stage 8 with Saber, Morgan, Jeanne and Jeanne Alter to receive the unique Grail. Confirm one wish; the choice is permanent for that campaign.", "Saber、摩根、贞德与黑贞的篇章完成第 8 节后获得唯一圣杯。确认一个愿望后，该战役的选择固定。", ["Wealth: 500,000 Crowns.", "Valor: Gungnir, Court Armor, Court Helmet and Oath Ring; all four pieces can be transferred to ordinary brothers or Valkyries.", "Companionship: select one living actor of each required identity; each receives 2 perk points and the corresponding permanent blessing.", "A full stash leaves deliveries pending; it does not allow selecting another wish."], ["财富：500,000 克朗。", "武勇：冈格尼尔、圣杯王庭甲、圣杯王庭盔、四骑誓约戒，可交给普通佣兵或女武神使用。", "同行：分别选择四个身份各一名存活角色，各得 2 点 Perk 与对应永久祝福。", "仓库满时保留待发奖励，不会重新开放选择。"], ["config/grail_chapter_data.nut", "systems/grail_chapter.nut", "systems/grail_equipment.nut"]);
  return { chapters, enemyGroups, bounty, shop, currencies, bonds, spirits, items, skillCatalog };
}

(function () {
  "use strict";

  const data = window.BV_WIKI_DATA;
  const downloadUrl = "https://www.nexusmods.com/battlebrothers/mods/1053";
  if (!data || !Array.isArray(data.valkyries)) {
    document.body.innerHTML = '<main class="empty-state">Battle Valkyries wiki data is missing.</main>';
    return;
  }

  const copy = {
    en: {
      brandSub: "Source-driven Mod Wiki", navOverview: "Overview", navValkyries: "Valkyries", navChapters: "Chapters", navMechanics: "Summoning", navSystems: "Systems", navAlchemy: "Alchemy", navSettings: "Settings", navDownload: "Download",
      rosterEyebrow: "Current roster", rosterTitle: "Valkyrie Index", searchPlaceholder: "Search names, traits, and skills", overviewTitle: "The current Battle Valkyries reference", overviewBody: "A bilingual wiki generated from the latest local source tree, covering every built-in Valkyrie, full skill loadouts, summoning, progression systems, and the standalone Alchemy & Enchantment mod.",
      downloadLabel: "Download on Nexus Mods", downloadHint: "Public releases and optional files are hosted on Nexus Mods.", metricValkyries: "built-in Valkyries", metricSkills: "loadout skills", metricSkins: "selectable skins", metricAffixes: "equipment affixes",
      sourceRevision: "Source revision", updated: "Generated", selectedPrefix: "No.", idLabel: "ID", wageLabel: "Daily wage", levelLabel: "Level", profileLabel: "Legends profile", layoutLabel: "Detail layout", skinsLabel: "Skins", skillsLabel: "Skills", summonArt: "Summon art", skinArt: "Battlefield preview", statsTitle: "Base Attributes", talentsTitle: "Talent Stars", traitTitle: "Character Trait", skillsTitle: "Complete Loadout", passiveTitle: "Passive", activeTitle: "Active", transientTitle: "Transient", skinCollection: "Skin Collection", traitBonuses: "Trait bonuses",
      mechanicsTitle: "Summoning & Gacha", mechanicsBody: "There are more available Valkyries than the active roster cap. Direct summoning follows the Crown cost ladder; gacha mode is enabled by default and uses a four-pull target guarantee.", rosterMax: "Roster cap", formationSlots: "Formation slots", combatSlots: "Combat slots", availableRoster: "Available Valkyries", directCosts: "Direct summon costs", summonNumber: "Summon number", crowns: "Crowns", gachaCosts: "Gacha costs", completedGuarantees: "Completed guarantees", guaranteeProgress: "Target guarantee", pulls: "pulls",
      systemsTitle: "Implemented Systems", systemsBody: "These are implemented code paths in the current source tree, not roadmap items.", sourceFiles: "Source files",
      alchemyTitle: "Alchemy & Enchantment", optionalStandalone: "Optional standalone mod", defaultOff: "Disabled by default", alchemyBody: "The equipment system is packaged separately from Battle Valkyries. Its setting is read for a new campaign and should remain stable for that save.", rarityTitle: "Rarity & slots", rarity: "Rarity", rank: "Rank", affixSlots: "Affix slots", color: "Color", workflowsTitle: "Workshop operations", enchant: "Enchant", enchantBody: "Spend 100 Crowns and one enchantment stone. Add a non-duplicate affix while a slot is open; otherwise replace the final affix.", removeAffix: "Remove affix", removeAffixBody: "Spend 100 Crowns and one removal stone to delete any removable affix.", reforge: "Quality reforge", reforgeBody: "Upgrade white to green, green to blue, or blue to purple. The item stays the same, but all affixes are rerolled.", disassemble: "Disassemble", disassembleBody: "Destroy eligible unlocked equipment for enchantment stones and a chance at a removal stone. Batch mode validates the entire selection first.", reforgeTable: "Reforge recipes", from: "From", to: "To", materials: "Materials", cost: "Cost", disassembleTable: "Disassembly yields", stoneYield: "Stone yield", removalChance: "Removal-stone chance", affixTitle: "All affixes", affixIntro: "Values and availability below are generated from equipment_data.nut. Basic affixes show the lowest and highest tier values; special affixes use their implemented effect text.", affixName: "Affix", affixKind: "Type", affixParts: "Parts", affixUnlock: "Unlock", affixEffect: "Effect", partWeapon: "Weapon", partHelmet: "Helmet", partArmor: "Armor", partShield: "Shield",
      settingsTitle: "Battle Valkyries Settings", settingsBody: "Player-facing options in MSU Mod Settings. Debug switches that are commented out in source are intentionally omitted.", settingDefault: "Default", enabled: "Enabled", disabled: "Disabled", settingType: "Checkbox", noSettings: "No player-facing settings.", settingHideWeaponsNote: "Visual only: equipment remains equipped and keeps its combat effects.", settingGachaNote: "When enabled, direct summoning is disabled and the gacha panel is used instead.", settingScalingNote: "Controls the optional enemy scaling path for Valkyrie encounters.",
      matrixTitle: "Roster Skill Matrix", matrixName: "Valkyrie", matrixTrait: "Trait", matrixSkills: "Loadout", noResults: "No Valkyries match this search.", noTooltip: "See the in-game tooltip for runtime details.",
    },
    zh: {
      brandSub: "源码驱动 Mod 百科", navOverview: "总览", navValkyries: "女武神", navChapters: "篇章", navMechanics: "召唤", navSystems: "系统", navAlchemy: "附魔炼金", navSettings: "设置", navDownload: "下载",
      rosterEyebrow: "当前名册", rosterTitle: "女武神索引", searchPlaceholder: "搜索角色、特性与技能", overviewTitle: "最新 Battle Valkyries 内容百科", overviewBody: "这是一份从当前本地源码直接生成的双语 Wiki，覆盖全部内置女武神、完整技能编成、召唤与养成系统，以及独立的附魔炼金模组。",
      downloadLabel: "前往 Nexus Mods 下载", downloadHint: "公开版本与可选文件发布在 Nexus Mods 页面。", metricValkyries: "名内置女武神", metricSkills: "项编成技能", metricSkins: "套可选皮肤", metricAffixes: "条装备词条",
      sourceRevision: "源码版本", updated: "生成日期", selectedPrefix: "序号", idLabel: "ID", wageLabel: "日薪", levelLabel: "等级", profileLabel: "Legends 定位", layoutLabel: "详情页布局", skinsLabel: "皮肤", skillsLabel: "技能", summonArt: "召唤立绘", skinArt: "战场预览", statsTitle: "基础属性", talentsTitle: "天赋星级", traitTitle: "人物特性", skillsTitle: "完整技能编成", passiveTitle: "被动", activeTitle: "主动", transientTitle: "临时", skinCollection: "皮肤收藏", traitBonuses: "特性加成",
      mechanicsTitle: "召唤与抽卡", mechanicsBody: "可选女武神数量已经超过实际名册上限。直接召唤按克朗阶梯计价；抽卡模式默认开启，并使用四抽定向保底。", rosterMax: "名册上限", formationSlots: "阵型槽位", combatSlots: "战斗槽位", availableRoster: "可选女武神", directCosts: "直接召唤费用", summonNumber: "召唤序号", crowns: "克朗", gachaCosts: "抽卡费用", completedGuarantees: "已完成保底", guaranteeProgress: "定向保底", pulls: "抽",
      systemsTitle: "已实现系统", systemsBody: "以下内容均来自当前源码中的已实现路径，不包含仅停留在规划阶段的功能。", sourceFiles: "对应源码",
      alchemyTitle: "附魔炼金系统", optionalStandalone: "独立可选模组", defaultOff: "默认关闭", alchemyBody: "装备系统已从 Battle Valkyries 拆成独立包。开关在新战役创建时读取，此后应在该存档中保持不变。", rarityTitle: "品质与词条槽", rarity: "品质", rank: "等级", affixSlots: "词条槽", color: "颜色", workflowsTitle: "炼金操作", enchant: "附魔", enchantBody: "消耗 100 克朗与 1 个所选等级附魔石。有空位时添加不重复词条，词条已满时替换最后一条。", removeAffix: "移除词条", removeAffixBody: "消耗 100 克朗与 1 个消除石，可删除任意可移除词条。", reforge: "品质重铸", reforgeBody: "可将白升绿、绿升蓝、蓝升紫。保留原装备实例，但重新生成全部词条。", disassemble: "拆解", disassembleBody: "销毁符合条件且未锁定的装备，获得附魔石并有概率得到消除石。批量模式会先统一校验全部选择。", reforgeTable: "重铸配方", from: "原品质", to: "目标品质", materials: "材料", cost: "费用", disassembleTable: "拆解产出", stoneYield: "附魔石数量", removalChance: "消除石概率", affixTitle: "全部词条", affixIntro: "下列数值与解锁条件直接由 equipment_data.nut 生成。基础词条显示最低/最高词条等级数值，特殊词条显示当前实现效果。", affixName: "词条", affixKind: "类型", affixParts: "部位", affixUnlock: "解锁", affixEffect: "效果", partWeapon: "武器", partHelmet: "头盔", partArmor: "铠甲", partShield: "盾牌",
      settingsTitle: "Battle Valkyries 设置", settingsBody: "以下是 MSU Mod Settings 中真实开放给玩家的选项；源码中已注释的调试开关不会列入。", settingDefault: "默认", enabled: "开启", disabled: "关闭", settingType: "勾选项", noSettings: "当前没有玩家设置。", settingHideWeaponsNote: "仅影响外观；装备仍然生效并保留战斗效果。", settingGachaNote: "开启后禁用直接召唤，改用抽卡面板。", settingScalingNote: "控制女武神遭遇中的可选敌人强度缩放逻辑。",
      matrixTitle: "名册技能矩阵", matrixName: "女武神", matrixTrait: "特性", matrixSkills: "技能编成", noResults: "没有匹配当前搜索的女武神。", noTooltip: "运行期细节请以游戏内 Tooltip 为准。",
    },
  };

  const refs = {
    search: document.getElementById("searchInput"), rosterList: document.getElementById("rosterList"), rosterCount: document.getElementById("rosterCount"), overview: document.getElementById("overview"), detail: document.getElementById("detail"), mechanics: document.getElementById("mechanics"), systems: document.getElementById("systems"), alchemy: document.getElementById("alchemy"), settings: document.getElementById("settings"), matrix: document.getElementById("matrix"),
  };
  Object.assign(copy.zh, {
    chaptersTitle: "篇章攻略与奖励", enemiesTitle: "扩展敌人目录", bountyTitle: "悬赏营地", itemsTitle: "专属装备", spiritsTitle: "莉莉灵魂", shopTitle: "记忆商店", catalogTitle: "扩展技能目录",
    requirements: "开启条件：以下角色均已入队且存活", stages: "阶段", objectives: "目标与提交材料", rewards: "奖励", medicine: "药品", tools: "工具", perksEach: "每名参与角色 Perk 点", gallery: "CG 解锁一览（含剧透）", fullImage: "查看完整原图", relatedChapters: "关联篇章", bondTitle: "羁绊阶段与奖励", additionalSkills: "武器、变身与篇章技能", additionalNote: "以下技能可能需要装备、变身、篇章进度或灵魂编成条件，并非入队时全部拥有。", unlockedBy: "篇章解锁", group: "分组", tier: "阶级", enemy: "敌人", multiplier: "生命 / 伤害倍率", naturalSpawn: "支持自然生成", dedicatedSpawn: "专属遭遇", owned: "持有女武神", budget: "基础预算", size: "目标规模", unlock: "解锁秽蚀", effect: "效果", costLabel: "费用", referenceIntro: "数值和登记条目来自本页所示源码快照。任务与奖励详情含剧透。", snapshot: "开发中源码快照；内容可能领先于下载版本。", itemsNote: "下列物品来自实际装备脚本；获取途径、阶段升级与角色专属效果分别列出，最终面板以游戏内为准。", enemyNote: "倍率相对于该单位所用的原版模板，不能直接当成最终面板数值。自然生成还受开关、天数、预算、兵种与场景限制。", rangeSetting: "音量滑块", skillFilter: "筛选技能名称或描述", allSkills: "已登记技能（含条件技能）", spiritsNote: "解锁列为累计秽蚀要求；初始拥有 6 个灵魂，最多同时配置 6 个。", currencyFragment: "记忆碎片", currencyCrystal: "记忆结晶", currencyRadiance: "记忆光辉", currencyEcho: "记忆回响"
  });
  Object.assign(copy.en, {
    chaptersTitle: "Chapter guides & rewards", enemiesTitle: "Expanded enemy catalog", bountyTitle: "Bounty camps", itemsTitle: "Signature equipment", spiritsTitle: "Lily spirits", shopTitle: "Memory shop", catalogTitle: "Additional skill catalog",
    requirements: "Unlock: recruit all these characters and keep them alive", stages: "Stage", objectives: "Objectives & materials to submit", rewards: "Rewards", medicine: "Medicine", tools: "Tools", perksEach: "Perk points per participant", gallery: "CG unlocks (spoilers)", fullImage: "View full image", relatedChapters: "Related chapters", bondTitle: "Bond stages & rewards", additionalSkills: "Weapon, transformation & chapter skills", additionalNote: "These skills may require equipment, transformation, chapter progress or a spirit loadout; they are not all available on recruitment.", unlockedBy: "Chapter unlock", group: "Group", tier: "Tier", enemy: "Enemy", multiplier: "HP / damage multiplier", naturalSpawn: "Natural spawn support", dedicatedSpawn: "Dedicated encounters", owned: "Owned Valkyries", budget: "Base budget", size: "Target size", unlock: "Blight to unlock", effect: "Effect", costLabel: "Cost", referenceIntro: "Values and registrations follow this source snapshot. Quest and reward details contain spoilers.", snapshot: "Development source snapshot; content may precede the downloadable release.", itemsNote: "These items come from concrete equipment scripts. Acquisition, progression and character-specific effects are listed below; final stats follow the game.", enemyNote: "Multipliers are relative to each unit's host template, not final stats. Natural spawning also depends on settings, day, budget, unit role and encounter type.", rangeSetting: "Volume slider", skillFilter: "Filter skills by name or description", allSkills: "Registered skills (including conditional skills)", spiritsNote: "Unlock is the cumulative blight requirement. Six spirits are initially available; up to six can be equipped.", currencyFragment: "Memory Fragments", currencyCrystal: "Memory Crystals", currencyRadiance: "Memory Radiance", currencyEcho: "Memory Echoes"
  });

  Object.assign(copy.zh, { bondStory: "剧情与 CG（含剧透）", bondCamp: "挑战营地", bondIntro: "日常故事", bondReveal: "挑战发布", bondVictory: "胜利后续", armorValue: "防护", fatigueModifier: "最大疲劳修正" });
  Object.assign(copy.en, { bondStory: "Story & CG (spoilers)", bondCamp: "Challenge camp", bondIntro: "Daily life", bondReveal: "The challenge", bondVictory: "After victory", armorValue: "Armor", fatigueModifier: "Maximum fatigue modifier" });

  const normalizeLang = (value) => String(value || "").toLowerCase().replace("_", "-").startsWith("zh") ? "zh" : String(value || "").toLowerCase().startsWith("en") ? "en" : "";
  const params = new URLSearchParams(window.location.search);
  Object.assign(copy.zh, {
    mechanicsBody: "直接召唤按克朗阶梯计价；抽卡默认开启，成功随机招募四次后，下一抽定向保底。编队扩容默认开启，总人数与实际出战上限分别设置。",
    guaranteeProgress: "随机招募进度上限", rosterMax: "默认总人数容量", nativeCombat: "跟随起源", rangeSetting: "数值滑块", selectSetting: "档位选择", availableValues: "可选档位", optionalGoal: "可选", prerequisite: "前置", localSupply: "现场材料", legendsHP: "Legends 生命倍率", legendsBonuses: "Legends 属性增量", cooldown: "基础冷却", fatigueCost: "基础疲劳", range: "射程", resource: "专属战斗资源（初始 / 上限）", inGameAnimation: "游戏内动态档案", itemStats: "脚本基础数值", damage: "武器伤害", armorDamage: "对甲倍率", penetration: "穿甲比例", durability: "耐久 / 防护", value: "价值", huntTitle: "剑之圣女狩猎成长", points: "点数", memoryAttributesTitle: "记忆铭刻属性阈值", thresholds: "一 / 二 / 三档阈值", baseAP: "基础 AP",
  });
  Object.assign(copy.en, {
    mechanicsBody: "Direct summoning uses Crown tiers. Gacha is enabled by default; four successful random pulls make the following pull guaranteed. Roster expansion is enabled by default, with separate company and combat limits.",
    guaranteeProgress: "Random-pull progress cap", rosterMax: "Default company capacity", nativeCombat: "Origin rules", rangeSetting: "Numeric slider", selectSetting: "Choice slider", availableValues: "Choices", optionalGoal: "Optional", prerequisite: "Requires", localSupply: "Local supplies", legendsHP: "Legends HP multiplier", legendsBonuses: "Legends stat additions", cooldown: "Base cooldown", fatigueCost: "Base fatigue", range: "Range", resource: "Combat resource (start / cap)", inGameAnimation: "Animated in-game profile", itemStats: "Base script values", damage: "Weapon damage", armorDamage: "Armor multiplier", penetration: "Penetration", durability: "Durability / armor", value: "Value", huntTitle: "Sword Maiden hunt progression", points: "Points", memoryAttributesTitle: "Memory archive attribute thresholds", thresholds: "Tier 1 / 2 / 3 thresholds", baseAP: "Base AP",
  });

  const requestedLang = normalizeLang(params.get("lang") || params.get("language"));
  const hashId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const state = {
    lang: requestedLang || normalizeLang(navigator.language) || "zh",
    selectedId: data.valkyries.some((item) => item.id === hashId) ? hashId : data.valkyries[0].id,
    query: "",
  };

  const t = (key) => copy[state.lang][key] || copy.en[key] || key;
  const escapeHtml = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const localizedValue = (value, fallback = "") => value && typeof value === "object" ? (value[state.lang] || value.en || fallback) : (value || fallback);
  const localizedArray = (value) => Array.isArray(value) ? value : value && typeof value === "object" ? (value[state.lang] || value.en || []) : [];
  const textFor = (item) => item.text?.[state.lang] || item.text?.en || {};
  const formatNumber = (value) => new Intl.NumberFormat(state.lang === "zh" ? "zh-CN" : "en-US").format(value);
  const selectedValkyrie = () => data.valkyries.find((item) => item.id === state.selectedId) || data.valkyries[0];
  const totalSkills = () => data.valkyries.reduce((total, item) => total + item.skills.length, 0);
  const totalSkins = () => data.valkyries.reduce((total, item) => total + item.skins.length, 0);
  const statLabel = (key) => data.statLabels?.[state.lang]?.[key] || data.statLabels?.en?.[key] || key;
  const rarityById = (id) => data.systems.equipment.rarities.find((item) => item.id === id);
  const rarityName = (id) => textFor(rarityById(id) || {}).name || id;

  function setUrlLang(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url.toString());
  }

  function searchableText(valkyrie) {
    const txt = textFor(valkyrie);
    return [valkyrie.id, txt.name, txt.backgroundName, txt.backgroundDescription, txt.traitName, txt.traitDescription, ...[...valkyrie.skills, ...(valkyrie.additionalSkills || [])].flatMap((skill) => [skill.key, textFor(skill).name, textFor(skill).description])].join(" ").toLowerCase();
  }

  function visibleValkyries() {
    const query = state.query.trim().toLowerCase();
    return query ? data.valkyries.filter((item) => searchableText(item).includes(query)) : data.valkyries;
  }

  function updateStaticText() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll(".nav-button").forEach((button) => {
      const label = button.querySelector("[data-i18n]")?.textContent;
      if (label) { button.setAttribute("aria-label", label); button.title = label; }
    });
    refs.search.placeholder = t("searchPlaceholder");
    refs.search.setAttribute("aria-label", t("searchPlaceholder"));
    document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("is-active", button.dataset.lang === state.lang));
  }

  function renderOverview() {
    const first = selectedValkyrie();
    refs.overview.innerHTML = `
      <div class="overview-hero">
        <div class="overview-copy">
          <p class="eyebrow">Battle Valkyries ${escapeHtml(data.meta.valkyrieVersion)} + Alchemy ${escapeHtml(data.meta.alchemyVersion)}</p>
          <h2>${escapeHtml(t("overviewTitle"))}</h2>
          <p>${escapeHtml(t("overviewBody"))}</p>
          <div class="source-meta"><span>${escapeHtml(t("sourceRevision"))}: <code>${escapeHtml(data.meta.sourceRevision)}</code></span><span>${escapeHtml(t("updated"))}: ${escapeHtml(data.meta.updatedAt)}</span></div>
          <div class="download-row"><a class="download-button" href="${downloadUrl}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.2l3.6-3.6L17 11l-5 5-5-5 1.4-1.4 3.6 3.6V3h2Zm-7 15h14v2H5v-2Z"/></svg><span>${escapeHtml(t("downloadLabel"))}</span></a><span>${escapeHtml(t("downloadHint"))}</span></div>
        </div>
        <div class="overview-art"><img src="${escapeHtml(first.images.card)}" alt="${escapeHtml(textFor(first).name)}"></div>
      </div>
      <div class="metric-grid">
        <div class="metric"><strong>${data.valkyries.length}</strong><span>${escapeHtml(t("metricValkyries"))}</span></div>
        <div class="metric"><strong>${totalSkills()}</strong><span>${escapeHtml(t("metricSkills"))}</span></div>
        <div class="metric"><strong>${totalSkins()}</strong><span>${escapeHtml(t("metricSkins"))}</span></div>
        <div class="metric"><strong>${data.systems.equipment.affixes.length}</strong><span>${escapeHtml(t("metricAffixes"))}</span></div>
      </div>`;
    refs.overview.insertAdjacentHTML("beforeend", `<p class="snapshot-note">${escapeHtml(t("snapshot"))}</p><nav class="reference-nav overview-links"><a class="chip" href="#chapters">${escapeHtml(t("chaptersTitle"))}</a><a class="chip" href="#enemies">${escapeHtml(t("enemiesTitle"))}</a><a class="chip" href="#items">${escapeHtml(t("itemsTitle"))}</a></nav>`);
  }

  function renderRoster() {
    const items = visibleValkyries();
    refs.rosterCount.textContent = items.length;
    refs.rosterList.innerHTML = items.length ? items.map((valkyrie) => {
      const skill = valkyrie.skills[0];
      return `<button type="button" class="roster-card ${valkyrie.id === state.selectedId ? "is-active" : ""}" data-id="${escapeHtml(valkyrie.id)}"><img class="roster-thumb" src="${escapeHtml(valkyrie.images.card)}" alt="${escapeHtml(textFor(valkyrie).name)}"><span><span class="roster-name">${escapeHtml(textFor(valkyrie).name)}</span><span class="roster-sub">${escapeHtml(valkyrie.skills.map((item) => textFor(item).name).join(" / "))}</span></span>${skill ? `<img class="roster-skill-icon" src="${escapeHtml(skill.image)}" alt="">` : ""}</button>`;
    }).join("") : `<div class="empty-state">${escapeHtml(t("noResults"))}</div>`;
  }

  const renderTag = (label, value) => `<span class="tag">${escapeHtml(label)}: <strong>&nbsp;${escapeHtml(value)}</strong></span>`;

  function renderStatGrid(title, values, maxValue) {
    const cells = data.statKeys.map((key) => {
      const value = Number(values[key] || 0);
      const width = Math.max(5, Math.min(100, Math.round((value / maxValue) * 100)));
      return `<div class="stat-item"><div class="stat-top"><span class="stat-label">${escapeHtml(statLabel(key))}</span><span class="stat-value">${value}</span></div><div class="stat-bar" style="--bar:${width}%"><span></span></div></div>`;
    }).join("");
    return `<div class="section-block"><div class="section-title"><h3>${escapeHtml(title)}</h3></div><div class="stat-grid">${cells}</div></div>`;
  }

  function traitChips(valkyrie) {
    const bonuses = Object.entries(valkyrie.traitBonuses || {});
    if (bonuses.length) return bonuses.map(([key, value]) => `<span class="chip"><strong>${value > 0 ? "+" : ""}${escapeHtml(value)}</strong>&nbsp;${escapeHtml(statLabel(key))}</span>`).join("");
    return (textFor(valkyrie).traitTooltip || []).map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("");
  }

  function renderSkillCard(skill) {
    const txt = textFor(skill);
    const tooltip = (txt.tooltip || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const label = skill.kind === "passive" ? t("passiveTitle") : skill.lifetime === "transient" ? t("transientTitle") : t("activeTitle");
    const spec = skill.spec || {};
    const costs = [["AP", "baseAP"], ["Fatigue", "fatigueCost"], ["Cooldown", "cooldown"]].filter(([key]) => key in spec).map(([key, title]) => renderTag(t(title), spec[key]));
    if ("Min" in spec && "Max" in spec) costs.push(renderTag(t("range"), `${spec.Min}–${spec.Max}`));
    return `<div class="skill-card"><img class="skill-icon" src="${escapeHtml(skill.image)}" alt=""><div><p class="skill-label">${escapeHtml(label)} · <code>${escapeHtml(skill.key)}</code></p><h4>${escapeHtml(txt.name || skill.key)}</h4>${costs.length ? `<div class="tag-row">${costs.join("")}</div>` : ""}<p>${escapeHtml(txt.description || t("noTooltip"))}</p>${tooltip ? `<ul class="bullet-list">${tooltip}</ul>` : ""}</div></div>`;
  }

  function renderItemProperties(item) {
    if (!item) return "";
    const stats = item.stats || {}, values = [];
    if ("RegularDamage" in stats) values.push(renderTag(t("damage"), `${stats.RegularDamage}–${stats.RegularDamageMax ?? stats.RegularDamage}`));
    for (const [key, title, suffix] of [["ConditionMax", "durability", ""], ["StaminaModifier", "fatigueModifier", ""], ["ArmorDamageMult", "armorDamage", "×"], ["DirectDamageMult", "penetration", "%"], ["Value", "value", ""]]) {
      if (key in stats) values.push(renderTag(t(title), `${key === "DirectDamageMult" ? Math.round(stats[key] * 100) : stats[key]}${suffix}`));
    }
    if ("RangeMin" in stats && "RangeMax" in stats) values.push(renderTag(t("range"), `${stats.RangeMin}–${stats.RangeMax}`));
    return `<div class="bond-equipment">${item.image ? `<img loading="lazy" src="${escapeHtml(item.image)}" alt="${escapeHtml(localizedValue(item.name))}">` : ""}<div><strong>${escapeHtml(t("itemStats"))}</strong><div class="tag-row">${values.join("")}</div>${[item.bonus, item.owner, item.tooltip].filter(value => localizedValue(value)).map(value => `<p>${escapeHtml(localizedValue(value))}</p>`).join("")}</div></div>`;
  }

  function renderBond(bond) {
    if (!bond) return "";
    const l = value => escapeHtml(localizedValue(value));
    const story = value => localizedValue(value).split(/\[\/?p\]/).map(paragraph => paragraph.trim()).filter(Boolean).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("");
    const picture = (src, label) => src ? `<a class="bond-picture" href="${escapeHtml(src)}" target="_blank" rel="noopener" title="${escapeHtml(t("fullImage"))}"><img loading="lazy" src="${escapeHtml(src)}" alt="${escapeHtml(label)}"></a>` : "";
    return `<div class="section-block bond-section"><h3>${escapeHtml(t("bondTitle"))}${bond.name ? ` · ${l(bond.name)}` : ""}</h3>${[bond.description, bond.progression, bond.rules, bond.delivery].filter(Boolean).map(value => `<p>${l(value)}</p>`).join("")}${bond.stages.map(stage => `<article class="system-card"><h4>${stage.value} · ${l(stage.name)}</h4>${stage.location ? `<p><strong>${escapeHtml(t("bondCamp"))}:</strong> ${l(stage.location)}</p>` : ""}<p>${l(stage.challenge)}</p>${stage.item ? renderItemProperties(data.items.find(item => item.id === stage.item)) : ""}${stage.story ? `<details class="bond-story"><summary>${escapeHtml(t("bondStory"))}</summary><h5>${escapeHtml(t("bondIntro"))}</h5>${picture(stage.introImage, `${localizedValue(stage.name)} — ${t("bondIntro")}`)}${story(stage.story)}<h5>${escapeHtml(t("bondReveal"))}</h5>${picture(stage.cgImage, `${localizedValue(stage.name)} — CG`)}${story(stage.reveal)}<h5>${escapeHtml(t("bondVictory"))}</h5>${story(stage.victory)}</details>` : ""}</article>`).join("")}</div>`;
  }

  function renderDetail() {
    const valkyrie = selectedValkyrie();
    const txt = textFor(valkyrie);
    const tags = [renderTag(t("selectedPrefix"), valkyrie.order), renderTag(t("idLabel"), valkyrie.id), renderTag(t("levelLabel"), valkyrie.level), renderTag(t("wageLabel"), valkyrie.dailyWage), renderTag(t("skillsLabel"), valkyrie.skills.length), renderTag(t("skinsLabel"), valkyrie.skins.length), renderTag(t("profileLabel"), valkyrie.legendsPerkProfile || "—")].join("");
    const skinGallery = valkyrie.skins.map((skin) => `<figure class="skin-card"><div><a href="${escapeHtml(skin.images.portrait)}" target="_blank" rel="noopener" title="${escapeHtml(t("fullImage"))}"><img class="skin-card-portrait" loading="lazy" src="${escapeHtml(skin.images.portrait)}" alt="${escapeHtml(textFor(skin).name)}"></a><img class="skin-card-preview" loading="lazy" src="${escapeHtml(skin.images.preview)}" alt=""></div><figcaption><strong>${escapeHtml(textFor(skin).name)}</strong><code>${escapeHtml(skin.id)}</code>${skin.detailMedia?.animated ? `<span class="chip">${escapeHtml(t("inGameAnimation"))}</span>` : ""}${textFor(skin).description ? `<span>${escapeHtml(textFor(skin).description)}</span>` : ""}${skin.unlockChapter ? `<a href="#chapter-${escapeHtml(skin.unlockChapter)}">${escapeHtml(t("unlockedBy"))}</a>` : ""}</figcaption></figure>`).join("");
    refs.detail.innerHTML = `
      <div class="detail-header"><div class="detail-title"><p class="eyebrow">${escapeHtml(txt.backgroundName)}</p><h2>${escapeHtml(txt.name)}</h2><p>${escapeHtml(txt.backgroundDescription)}</p><div class="tag-row">${tags}</div></div><div class="detail-art-grid"><figure class="art-frame"><img src="${escapeHtml(valkyrie.images.card)}" alt="${escapeHtml(txt.name)}"><figcaption>${escapeHtml(t("summonArt"))}</figcaption></figure><figure class="art-frame"><img src="${escapeHtml(valkyrie.images.skin)}" alt="${escapeHtml(txt.name)}"><figcaption>${escapeHtml(t("skinArt"))}</figcaption></figure></div></div>
      <div class="detail-body">
        <div class="section-block"><div class="section-title"><h3>${escapeHtml(t("traitTitle"))}</h3></div><div class="trait-block"><img src="${escapeHtml(valkyrie.images.trait)}" alt=""><div><h4>${escapeHtml(txt.traitName)}</h4><p>${escapeHtml(txt.traitDescription)}</p><div class="chip-row">${traitChips(valkyrie)}</div></div></div></div>
        ${valkyrie.combatResource?.Cap > 0 ? `<p>${escapeHtml(t("resource"))}: ${valkyrie.combatResource.Start} / ${valkyrie.combatResource.Cap}</p>` : ""}${renderStatGrid(t("statsTitle"), valkyrie.baseAttributes, 145)}${renderStatGrid(t("talentsTitle"), valkyrie.talents, 3)}
        <div class="section-block"><div class="section-title"><h3>${escapeHtml(t("skinCollection"))}</h3></div><div class="skin-gallery">${skinGallery}</div></div>
        <div class="section-block"><div class="section-title"><h3>${escapeHtml(t("skillsTitle"))}</h3></div><div class="skills-grid skills-grid-all">${valkyrie.skills.map(renderSkillCard).join("")}</div></div>
        ${renderBond(valkyrie.bond)}${valkyrie.id === "sword_maiden" ? `<div class="section-block"><h3>${escapeHtml(t("huntTitle"))}</h3><p>${escapeHtml(localizedValue(data.hunt.description))}</p><p>${escapeHtml(localizedValue(data.hunt.rules))}</p><div class="chip-row">${data.hunt.milestones.map(stage => renderTag(textFor(data.skillCatalog.find(skill => skill.key === stage.key)).name, `${stage.points} ${t("points")}`)).join("")}</div><details><summary>${escapeHtml(t("points"))}</summary><ul>${data.hunt.targets.map(target => `<li>${escapeHtml(localizedValue(target.name))}: ${target.points}</li>`).join("")}</ul></details></div>` : ""}
        ${valkyrie.chapters?.length ? `<div class="section-block"><h3>${escapeHtml(t("relatedChapters"))}</h3><div class="chip-row">${valkyrie.chapters.map(id => `<a class="chip" href="#chapter-${escapeHtml(id)}">${escapeHtml(localizedValue(data.chapters.find(chapter => chapter.id === id).name))}</a>`).join("")}</div></div>` : ""}
        ${valkyrie.additionalSkills?.length ? `<div class="section-block"><h3>${escapeHtml(t("additionalSkills"))}</h3><p>${escapeHtml(t("additionalNote"))}</p><div class="skills-grid">${valkyrie.additionalSkills.map(renderSkillCard).join("")}</div></div>` : ""}
      </div>`;
    refs.detail.querySelectorAll(".art-frame img").forEach(img => {
      const link = document.createElement("a");
      link.href = img.getAttribute("src"); link.target = "_blank"; link.rel = "noopener"; link.title = t("fullImage");
      img.replaceWith(link); link.append(img);
    });
  }

  function renderMechanics() {
    const directRows = data.summon.costSteps.map((step, index, steps) => { const start = index === 0 ? 1 : data.summon.costSteps[index - 1].max + 1; return `<tr><td>${index === steps.length - 1 ? `${start}+` : start === step.max ? start : `${start}–${step.max}`}</td><td>${formatNumber(step.cost)}</td></tr>`; }).join("");
    const gachaRows = data.summon.gacha.costSteps.map((step, index, steps) => {
      const label = index === steps.length - 1 ? `${steps[index - 1].maxGuarantees + 1}+` : step.maxGuarantees;
      return `<tr><td>${label}</td><td>${formatNumber(step.cost)}</td></tr>`;
    }).join("");
    const metrics = [[t("availableRoster"), data.valkyries.length], [t("rosterMax"), data.summon.rosterMax], [t("formationSlots"), data.summon.formationSlots], [t("combatSlots"), data.summon.rosterExpansion?.combatDefault ? data.summon.rosterExpansion.combatDefault : t("nativeCombat")]].map(([label, value]) => `<div class="mechanic-card"><strong>${value}</strong><p>${escapeHtml(label)}</p></div>`).join("");
    refs.mechanics.innerHTML = `<div class="section-title"><div><p class="eyebrow">${escapeHtml(t("guaranteeProgress"))}: ${data.summon.gacha.progressMax} ${escapeHtml(t("pulls"))}</p><h2>${escapeHtml(t("mechanicsTitle"))}</h2></div></div><p>${escapeHtml(t("mechanicsBody"))}</p><div class="mechanic-grid">${metrics}</div><div class="table-pair"><div><h3>${escapeHtml(t("directCosts"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("summonNumber"))}</th><th>${escapeHtml(t("crowns"))}</th></tr></thead><tbody>${directRows}</tbody></table></div><div><h3>${escapeHtml(t("gachaCosts"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("completedGuarantees"))}</th><th>${escapeHtml(t("crowns"))}</th></tr></thead><tbody>${gachaRows}</tbody></table></div></div>`;
  }

  function renderBulletList(value) {
    const items = localizedArray(value);
    return items.length ? `<ul class="bullet-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
  }

  function renderSystems() {
    refs.systems.innerHTML = `<div class="section-title"><div><p class="eyebrow">${escapeHtml(data.meta.updatedAt)}</p><h2>${escapeHtml(t("systemsTitle"))}</h2></div></div><p>${escapeHtml(t("systemsBody"))}</p><p class="baseline-note">${escapeHtml(localizedValue(data.systems.intro))}</p><div class="system-grid">${data.systems.cards.map((card) => `<article class="system-card"><div><p class="skill-label">${escapeHtml(card.id)}</p><h3>${escapeHtml(localizedValue(card.title))}</h3></div><p>${escapeHtml(localizedValue(card.body))}</p>${renderBulletList(card.bullets)}<details class="source-details"><summary>${escapeHtml(t("sourceFiles"))}</summary><ul class="source-list compact-source-list">${card.sourceFiles.map((file) => `<li>${escapeHtml(file)}</li>`).join("")}</ul></details></article>`).join("")}</div>`;
    refs.systems.insertAdjacentHTML("beforeend", renderReference());
    const filter = document.getElementById("skillCatalogFilter");
    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      document.querySelectorAll("#skillCatalogCards .skill-card").forEach(card => { card.hidden = !card.textContent.toLowerCase().includes(query); });
    });
  }

  function renderReference() {
    const e = escapeHtml, l = value => e(localizedValue(value));
    const table = (headers, rows) => `<div class="table-scroll"><table class="matrix-table"><thead><tr>${headers.map(header => `<th>${e(header)}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
    const section = (id, title, body) => `<section id="${id}" class="reference-block"><h3>${e(t(title))}</h3>${body}</section>`;
    const actorName = id => e(textFor(data.valkyries.find(actor => actor.id === id) || {}).name || id);
    const links = [["chapters", "chaptersTitle"], ["bounty-camps", "bountyTitle"], ["enemies", "enemiesTitle"], ["items", "itemsTitle"], ["spirits", "spiritsTitle"], ["memory-shop", "shopTitle"], ["skill-catalog", "catalogTitle"]];
    const navigation = `<nav class="reference-nav" aria-label="${e(t("systemsTitle"))}">${links.map(([id, title]) => `<a class="chip" href="#${id}">${e(t(title))}</a>`).join("")}</nav>`;
    const chapters = data.chapters.map(chapter => `<article id="chapter-${e(chapter.id)}" class="chapter-card">
      <div class="chapter-heading"><img loading="lazy" src="${e(chapter.poster)}" alt="${l(chapter.name)}"><div><h4>${l(chapter.name)}</h4><p>${l(chapter.description)}</p><p>${e(t("requirements"))}: ${chapter.actors.map(actorName).join(" / ")}</p><p>${chapter.stages.length} ${e(t("stages"))} · ${chapter.gallery.length} CG</p></div></div>
      <details><summary>${e(t("objectives"))} / ${e(t("rewards"))}</summary>${table([t("stages"), t("objectives"), t("rewards")], chapter.stages.map(stage => `<tr><td><strong>${stage.number}. ${l(stage.name)}</strong><p>${l(stage.brief)}</p></td><td><ul>${stage.goals.map(goal => `<li>${l(goal.name)}${goal.optional ? ` (${e(t("optionalGoal"))})` : ""}${goal.requires?.length ? `<small>${e(t("prerequisite"))}: ${goal.requires.map(id => l(stage.goals.find(item => item.id === id)?.name || id)).join(" / ")}</small>` : ""}</li>`).join("")}${stage.materials.map(material => `<li>${l(material.name)} × ${material.count}${material.sourceGoal ? `<small>${e(t("localSupply"))}: ${l(stage.goals.find(goal => goal.id === material.sourceGoal)?.name || material.sourceGoal)}</small>` : ""}${localizedValue(material.source) ? `<small>${l(material.source)}</small>` : ""}</li>`).join("")}</ul>${stage.requiredEvidence.length ? `<p>${e(t("prerequisite"))}:</p><ul>${stage.requiredEvidence.map(id => { const evidence = chapter.evidence.find(entry => entry.id === id); return `<li>${l(evidence.name)}<small>${l(evidence.source)}</small></li>`; }).join("")}</ul>` : ""}</td><td><p>${l(stage.reward)}</p><small>${stage.money} ${e(t("crowns"))} · ${stage.medicine} ${e(t("medicine"))} · ${stage.tools} ${e(t("tools"))}<br>${e(t("perksEach"))}: ${stage.perksEach}</small></td></tr>`))}</details>
      <details><summary>${e(t("gallery"))}</summary><div class="cg-grid">${chapter.gallery.map(cg => `<figure><a href="${e(cg.image)}" target="_blank" rel="noopener" title="${e(t("fullImage"))}"><img loading="lazy" src="${e(cg.image)}" alt="${l(cg.title)}"></a><figcaption><strong>${l(cg.title)}</strong> · ${e(t("stages"))} ${cg.stage}<p>${l(cg.caption)}</p></figcaption></figure>`).join("")}</div></details>
      <small class="source-path">${e(chapter.source)}</small></article>`).join("");
    const bounty = table([t("owned"), t("budget"), t("size"), t("rewards")], data.bounty.rules.map((rule, i) => `<tr><td>${rule.MinOwned}–${rule.MaxOwned}</td><td>${rule.MinBudget}–${rule.MaxBudget}</td><td>${rule.MinSize}–${rule.MaxSize}</td><td>${data.bounty.rewards[i]} ${e(t("crowns"))}</td></tr>`)) + `<div class="chip-row">${data.bounty.themes.map(theme => `<span class="chip">${l(theme.name)}</span>`).join("")}</div>`;
    const enemies = `<p>${e(t("enemyNote"))}</p>` + data.enemyGroups.map(group => `<details class="catalog-group"><summary>${l(group.name)} (${group.enemies.length}) · ${e(t(group.naturalSpawn ? "naturalSpawn" : "dedicatedSpawn"))}</summary>${table([t("enemy"), t("tier"), t("multiplier"), t("legendsHP"), t("traitBonuses"), t("legendsBonuses")], group.enemies.map(enemy => `<tr><td>${l(enemy.name)}<small>${e(enemy.id)}</small></td><td>${e(enemy.tier.toUpperCase().replace("25", "2.5"))}</td><td>${formatNumber(Math.round(enemy.hpMultiplier * 100) / 100)}× / ${formatNumber(enemy.damageMultiplier)}×</td><td>${formatNumber(enemy.legendsHpMultiplier)}×</td><td>${Object.entries(enemy.bonuses).filter(([, value]) => value !== 0).map(([key, value]) => `${e(statLabel(key))} ${value > 0 ? "+" : ""}${value}`).join(" / ") || "—"}${enemy.perks.length ? `<small>${enemy.perks.map(e).join(" / ")}</small>` : ""}</td><td>${Object.entries(enemy.legendsBonuses).filter(([, value]) => value !== 0).map(([key, value]) => `${e(statLabel(key))} ${value > 0 ? "+" : ""}${value}`).join(" / ") || "—"}</td></tr>`))}</details>`).join("");
    const items = `<p>${e(t("itemsNote"))}</p><div class="system-grid">${data.items.map(item => `<article class="system-card"><h4>${l(item.name)}</h4><p class="acquisition">${l(item.acquisition)}</p><p>${l(item.description)}</p>${renderItemProperties(item)}<small class="source-path">${e(item.source)}</small></article>`).join("")}</div>`;
    const spirits = `<p>${e(t("spiritsNote"))}</p>` + table([t("matrixName"), t("unlock"), "AP", t("effect")], data.spirits.map(spirit => `<tr><td>${l(spirit.name)}</td><td>${spirit.stats.Unlock}</td><td>${spirit.stats.AP}</td><td>${l(spirit.description)}</td></tr>`));
    const memoryAttributes = `<h4>${e(t("memoryAttributesTitle"))}</h4>` + table([t("matrixName"), t("thresholds")], data.memoryAttributes.map(attribute => `<tr><td>${l(attribute.name)}</td><td>${attribute.thresholds.join(" / ")}</td></tr>`));
    const shop = memoryAttributes + table([t("matrixName"), t("costLabel"), t("effect")], data.shop.map(item => `<tr><td>${l(item.name)}</td><td>${Object.entries(item.cost).map(([key, value]) => `${l(data.currencies[key] || key)} × ${value}`).join(" / ")}</td><td>${l(item.effect)}</td></tr>`));
    const catalog = `<p>${e(t("additionalNote"))}</p><details><summary>${e(t("allSkills"))} (${data.skillCatalog.length})</summary><label class="catalog-filter">${e(t("skillFilter"))}<input id="skillCatalogFilter" type="search"></label><div id="skillCatalogCards" class="skills-grid">${data.skillCatalog.map(renderSkillCard).join("")}</div></details>`;
    return `<p class="baseline-note">${e(t("referenceIntro"))}</p>${navigation}${section("chapters", "chaptersTitle", chapters)}${section("bounty-camps", "bountyTitle", bounty)}${section("enemies", "enemiesTitle", enemies)}${section("items", "itemsTitle", items)}${section("spirits", "spiritsTitle", spirits)}${section("memory-shop", "shopTitle", shop)}${section("skill-catalog", "catalogTitle", catalog)}`;
  }

  function affixPartLabel(part) {
    return t(`part${String(part || "").charAt(0).toUpperCase()}${String(part || "").slice(1)}`);
  }

  function renderAlchemy() {
    const equipment = data.systems.equipment;
    const rarityRows = equipment.rarities.map((rarity) => `<tr><td><span class="rarity-name"><span class="rarity-swatch" style="--rarity-color:${escapeHtml(rarity.color)}"></span>${escapeHtml(textFor(rarity).name)}</span></td><td>${rarity.rank}</td><td>${rarity.affixCount}</td><td><code>${escapeHtml(rarity.color)}</code></td></tr>`).join("");
    const reforgeRows = equipment.reforgeRules.map((rule) => `<tr><td>${escapeHtml(rarityName(rule.from))}</td><td>${escapeHtml(rarityName(rule.to))}</td><td>${rule.materialCost} × ${escapeHtml(rarityName(rule.materialTier))}</td><td>${formatNumber(rule.moneyCost)} ${escapeHtml(t("crowns"))}</td></tr>`).join("");
    const disassembleRows = equipment.disassembleRules.map((rule) => `<tr><td>${escapeHtml(rarityName(rule.rarity))}</td><td>${formatNumber(rule.moneyCost)} ${escapeHtml(t("crowns"))}</td><td>${rule.stoneCountMin === rule.stoneCountMax ? rule.stoneCountMin : `${rule.stoneCountMin}–${rule.stoneCountMax}`}</td><td>${rule.removalStoneChance}%</td></tr>`).join("");
    const affixRows = equipment.affixes.map((affix) => `<tr><td><span class="affix-name"><strong>${escapeHtml(textFor(affix).name)}</strong><code>${escapeHtml(affix.id)}</code></span></td><td><span class="affix-kind affix-kind-${escapeHtml(affix.kind)}">${escapeHtml(localizedValue(affix.kindText))}</span></td><td><span class="part-list">${affix.parts.map((part) => `<span>${escapeHtml(affixPartLabel(part))}</span>`).join("")}</span></td><td>${escapeHtml(localizedValue(affix.unlockText))}</td><td class="affix-summary">${escapeHtml(textFor(affix).summary || textFor(affix).effect)}</td></tr>`).join("");
    const kindCounts = ["basic", "advanced", "legendary", "mythic"].map((kind) => `<span class="chip"><strong>${equipment.affixes.filter((item) => item.kind === kind).length}</strong>&nbsp;${escapeHtml(localizedValue(equipment.affixes.find((item) => item.kind === kind)?.kindText, kind))}</span>`).join("");
    refs.alchemy.innerHTML = `
      <div class="section-title"><div><p class="eyebrow">${escapeHtml(t("optionalStandalone"))} · v${escapeHtml(equipment.version)}</p><h2>${escapeHtml(t("alchemyTitle"))}</h2></div><span class="status-badge">${escapeHtml(t("defaultOff"))}</span></div><p>${escapeHtml(t("alchemyBody"))}</p><p>${escapeHtml(localizedValue(equipment.body))}</p>${renderBulletList(equipment.rules)}
      <div class="subsection-block"><h3>${escapeHtml(t("workflowsTitle"))}</h3><div class="operation-grid"><article><h4>${escapeHtml(t("enchant"))}</h4><p>${escapeHtml(t("enchantBody"))}</p></article><article><h4>${escapeHtml(t("removeAffix"))}</h4><p>${escapeHtml(t("removeAffixBody"))}</p></article><article><h4>${escapeHtml(t("reforge"))}</h4><p>${escapeHtml(t("reforgeBody"))}</p></article><article><h4>${escapeHtml(t("disassemble"))}</h4><p>${escapeHtml(t("disassembleBody"))}</p></article></div></div>
      <div class="table-pair subsection-block"><div><h3>${escapeHtml(t("rarityTitle"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("rarity"))}</th><th>${escapeHtml(t("rank"))}</th><th>${escapeHtml(t("affixSlots"))}</th><th>${escapeHtml(t("color"))}</th></tr></thead><tbody>${rarityRows}</tbody></table></div><div><h3>${escapeHtml(t("reforgeTable"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("from"))}</th><th>${escapeHtml(t("to"))}</th><th>${escapeHtml(t("materials"))}</th><th>${escapeHtml(t("cost"))}</th></tr></thead><tbody>${reforgeRows}</tbody></table></div></div>
      <div class="subsection-block"><h3>${escapeHtml(t("disassembleTable"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("rarity"))}</th><th>${escapeHtml(t("cost"))}</th><th>${escapeHtml(t("stoneYield"))}</th><th>${escapeHtml(t("removalChance"))}</th></tr></thead><tbody>${disassembleRows}</tbody></table></div>
      <div class="subsection-block affix-overview"><div class="section-title"><div><h3>${escapeHtml(t("affixTitle"))}</h3><p>${escapeHtml(t("affixIntro"))}</p></div><div class="chip-row">${kindCounts}</div></div><div class="table-scroll"><table class="matrix-table affix-table"><thead><tr><th>${escapeHtml(t("affixName"))}</th><th>${escapeHtml(t("affixKind"))}</th><th>${escapeHtml(t("affixParts"))}</th><th>${escapeHtml(t("affixUnlock"))}</th><th>${escapeHtml(t("affixEffect"))}</th></tr></thead><tbody>${affixRows}</tbody></table></div></div>`;
  }

  function settingNote(id) {
    if (id === "HideWeapons") return t("settingHideWeaponsNote");
    if (id === "GachaMode") return t("settingGachaNote");
    if (id === "EnableValkyrieEnemyScaling") return t("settingScalingNote");
    return "";
  }

  function renderSettings() {
    const cards = data.settings.options.map((setting) => {
      const txt = textFor(setting), note = settingNote(setting.id), unit = setting.unit || "";
      const labels = localizedArray(setting.labels);
      const value = setting.type === "range" ? `${setting.default}${unit} (${setting.min}–${setting.max}${unit})` : setting.type === "select" ? labels[setting.values.indexOf(setting.default)] : t(setting.default ? "enabled" : "disabled");
      return `<article class="settings-card"><div class="settings-card-top"><div><p class="skill-label">${escapeHtml(setting.id)}</p><h3>${escapeHtml(txt.name || setting.id)}</h3></div><div class="tag-row"><span class="tag">${escapeHtml(t(setting.type === "range" ? "rangeSetting" : setting.type === "select" ? "selectSetting" : "settingType"))}</span>${renderTag(t("settingDefault"), value)}</div></div><p>${escapeHtml(txt.description)}</p>${setting.type === "select" ? `<p>${escapeHtml(t("availableValues"))}: ${labels.map(escapeHtml).join(" / ")}</p>` : ""}${note ? `<p class="setting-note">${escapeHtml(note)}</p>` : ""}</article>`;
    }).join("");
    refs.settings.innerHTML = `<div class="section-title"><div><p class="eyebrow">MSU Mod Settings</p><h2>${escapeHtml(t("settingsTitle"))}</h2></div></div><p>${escapeHtml(t("settingsBody"))}</p><div class="settings-list">${cards || `<div class="empty-state">${escapeHtml(t("noSettings"))}</div>`}</div>`;
  }

  function renderMatrix() {
    const rows = data.valkyries.map((valkyrie) => `<tr><td class="table-name"><a href="#${encodeURIComponent(valkyrie.id)}" data-matrix-id="${escapeHtml(valkyrie.id)}">${escapeHtml(textFor(valkyrie).name)}</a></td><td>${escapeHtml(textFor(valkyrie).traitName)}</td><td><span class="matrix-skill-list">${valkyrie.skills.map((skill) => `<span class="mini-skill"><img src="${escapeHtml(skill.image)}" alt="">${escapeHtml(textFor(skill).name)}</span>`).join("")}</span></td></tr>`).join("");
    refs.matrix.innerHTML = `<div class="section-title"><h2>${escapeHtml(t("matrixTitle"))}</h2></div><div class="table-scroll"><table class="matrix-table"><thead><tr><th>${escapeHtml(t("matrixName"))}</th><th>${escapeHtml(t("matrixTrait"))}</th><th>${escapeHtml(t("matrixSkills"))}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function renderAll() {
    updateStaticText(); renderOverview(); renderRoster(); renderDetail(); renderMechanics(); renderSystems(); renderAlchemy(); renderSettings(); renderMatrix();
  }

  function selectValkyrie(id, shouldScroll) {
    if (!data.valkyries.some((item) => item.id === id)) return;
    state.selectedId = id;
    history.replaceState(null, "", `#${encodeURIComponent(id)}`);
    renderOverview(); renderRoster(); renderDetail();
    if (shouldScroll) refs.detail.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  refs.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    const matches = visibleValkyries();
    if (matches.length && !matches.some((item) => item.id === state.selectedId)) state.selectedId = matches[0].id;
    renderRoster(); renderOverview(); renderDetail();
  });
  refs.rosterList.addEventListener("click", (event) => { const button = event.target.closest("[data-id]"); if (button) selectValkyrie(button.dataset.id, true); });
  refs.matrix.addEventListener("click", (event) => { const link = event.target.closest("[data-matrix-id]"); if (link) { event.preventDefault(); selectValkyrie(link.dataset.matrixId, true); } });
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => { state.lang = button.dataset.lang; setUrlLang(state.lang); renderAll(); }));
  document.querySelectorAll("[data-scroll-target]").forEach((button) => button.addEventListener("click", () => document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" })));
  window.addEventListener("hashchange", () => { const id = decodeURIComponent(window.location.hash.replace(/^#/, "")); if (id && id !== state.selectedId) selectValkyrie(id, false); });
  renderAll();
}());

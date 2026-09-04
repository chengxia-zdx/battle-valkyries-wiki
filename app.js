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
      brandSub: "Source-driven Mod Wiki", navOverview: "Overview", navValkyries: "Valkyries", navMechanics: "Summoning", navSystems: "Systems", navAlchemy: "Alchemy", navSettings: "Settings", navDownload: "Download",
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
      brandSub: "源码驱动 Mod 百科", navOverview: "总览", navValkyries: "女武神", navMechanics: "召唤", navSystems: "系统", navAlchemy: "附魔炼金", navSettings: "设置", navDownload: "下载",
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

  const normalizeLang = (value) => String(value || "").toLowerCase().replace("_", "-").startsWith("zh") ? "zh" : String(value || "").toLowerCase().startsWith("en") ? "en" : "";
  const params = new URLSearchParams(window.location.search);
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
    return [valkyrie.id, txt.name, txt.backgroundName, txt.backgroundDescription, txt.traitName, txt.traitDescription, ...valkyrie.skills.flatMap((skill) => [skill.key, textFor(skill).name, textFor(skill).description])].join(" ").toLowerCase();
  }

  function visibleValkyries() {
    const query = state.query.trim().toLowerCase();
    return query ? data.valkyries.filter((item) => searchableText(item).includes(query)) : data.valkyries;
  }

  function updateStaticText() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
    refs.search.placeholder = t("searchPlaceholder");
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
    return `<div class="skill-card"><img class="skill-icon" src="${escapeHtml(skill.image)}" alt=""><div><p class="skill-label">${escapeHtml(label)} · <code>${escapeHtml(skill.key)}</code></p><h4>${escapeHtml(txt.name || skill.key)}</h4><p>${escapeHtml(txt.description || t("noTooltip"))}</p>${tooltip ? `<ul class="bullet-list">${tooltip}</ul>` : ""}</div></div>`;
  }

  function renderDetail() {
    const valkyrie = selectedValkyrie();
    const txt = textFor(valkyrie);
    const tags = [renderTag(t("selectedPrefix"), valkyrie.order), renderTag(t("idLabel"), valkyrie.id), renderTag(t("levelLabel"), valkyrie.level), renderTag(t("wageLabel"), valkyrie.dailyWage), renderTag(t("skillsLabel"), valkyrie.skills.length), renderTag(t("skinsLabel"), valkyrie.skins.length), renderTag(t("profileLabel"), valkyrie.legendsPerkProfile || "—")].join("");
    const skinGallery = valkyrie.skins.map((skin) => `<figure class="skin-card"><div><img class="skin-card-portrait" src="${escapeHtml(skin.images.portrait)}" alt="${escapeHtml(textFor(skin).name)}"><img class="skin-card-preview" src="${escapeHtml(skin.images.preview)}" alt=""></div><figcaption><strong>${escapeHtml(textFor(skin).name)}</strong><code>${escapeHtml(skin.id)}</code>${textFor(skin).description ? `<span>${escapeHtml(textFor(skin).description)}</span>` : ""}</figcaption></figure>`).join("");
    refs.detail.innerHTML = `
      <div class="detail-header"><div class="detail-title"><p class="eyebrow">${escapeHtml(txt.backgroundName)}</p><h2>${escapeHtml(txt.name)}</h2><p>${escapeHtml(txt.backgroundDescription)}</p><div class="tag-row">${tags}</div></div><div class="detail-art-grid"><figure class="art-frame"><img src="${escapeHtml(valkyrie.images.card)}" alt="${escapeHtml(txt.name)}"><figcaption>${escapeHtml(t("summonArt"))}</figcaption></figure><figure class="art-frame"><img src="${escapeHtml(valkyrie.images.skin)}" alt="${escapeHtml(txt.name)}"><figcaption>${escapeHtml(t("skinArt"))}</figcaption></figure></div></div>
      <div class="detail-body">
        <div class="section-block"><div class="section-title"><h3>${escapeHtml(t("traitTitle"))}</h3></div><div class="trait-block"><img src="${escapeHtml(valkyrie.images.trait)}" alt=""><div><h4>${escapeHtml(txt.traitName)}</h4><p>${escapeHtml(txt.traitDescription)}</p><div class="chip-row">${traitChips(valkyrie)}</div></div></div></div>
        ${renderStatGrid(t("statsTitle"), valkyrie.baseAttributes, 145)}${renderStatGrid(t("talentsTitle"), valkyrie.talents, 3)}
        <div class="section-block"><div class="section-title"><h3>${escapeHtml(t("skinCollection"))}</h3></div><div class="skin-gallery">${skinGallery}</div></div>
        <div class="section-block"><div class="section-title"><h3>${escapeHtml(t("skillsTitle"))}</h3></div><div class="skills-grid skills-grid-all">${valkyrie.skills.map(renderSkillCard).join("")}</div></div>
      </div>`;
  }

  function renderMechanics() {
    const directRows = data.summon.costSteps.map((step, index) => { const start = index === 0 ? 1 : data.summon.costSteps[index - 1].max + 1; return `<tr><td>${start === step.max ? start : `${start}–${step.max}`}</td><td>${formatNumber(step.cost)}</td></tr>`; }).join("");
    const gachaRows = data.summon.gacha.costSteps.map((step, index, steps) => {
      const label = index === steps.length - 1 ? `${steps[index - 1].maxGuarantees + 1}+` : step.maxGuarantees;
      return `<tr><td>${label}</td><td>${formatNumber(step.cost)}</td></tr>`;
    }).join("");
    const metrics = [[t("availableRoster"), data.valkyries.length], [t("rosterMax"), data.summon.rosterMax], [t("formationSlots"), data.summon.formationSlots], [t("combatSlots"), data.summon.combatSlots]].map(([label, value]) => `<div class="mechanic-card"><strong>${value}</strong><p>${escapeHtml(label)}</p></div>`).join("");
    refs.mechanics.innerHTML = `<div class="section-title"><div><p class="eyebrow">${escapeHtml(t("guaranteeProgress"))}: ${data.summon.gacha.progressMax} ${escapeHtml(t("pulls"))}</p><h2>${escapeHtml(t("mechanicsTitle"))}</h2></div></div><p>${escapeHtml(t("mechanicsBody"))}</p><div class="mechanic-grid">${metrics}</div><div class="table-pair"><div><h3>${escapeHtml(t("directCosts"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("summonNumber"))}</th><th>${escapeHtml(t("crowns"))}</th></tr></thead><tbody>${directRows}</tbody></table></div><div><h3>${escapeHtml(t("gachaCosts"))}</h3><table class="matrix-table"><thead><tr><th>${escapeHtml(t("completedGuarantees"))}</th><th>${escapeHtml(t("crowns"))}</th></tr></thead><tbody>${gachaRows}</tbody></table></div></div>`;
  }

  function renderBulletList(value) {
    const items = localizedArray(value);
    return items.length ? `<ul class="bullet-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
  }

  function renderSystems() {
    refs.systems.innerHTML = `<div class="section-title"><div><p class="eyebrow">${escapeHtml(data.meta.updatedAt)}</p><h2>${escapeHtml(t("systemsTitle"))}</h2></div></div><p>${escapeHtml(t("systemsBody"))}</p><p class="baseline-note">${escapeHtml(localizedValue(data.systems.intro))}</p><div class="system-grid">${data.systems.cards.map((card) => `<article class="system-card"><div><p class="skill-label">${escapeHtml(card.id)}</p><h3>${escapeHtml(localizedValue(card.title))}</h3></div><p>${escapeHtml(localizedValue(card.body))}</p>${renderBulletList(card.bullets)}<details class="source-details"><summary>${escapeHtml(t("sourceFiles"))}</summary><ul class="source-list compact-source-list">${card.sourceFiles.map((file) => `<li>${escapeHtml(file)}</li>`).join("")}</ul></details></article>`).join("")}</div>`;
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
    const cards = data.settings.options.map((setting) => { const txt = textFor(setting); const note = settingNote(setting.id); return `<article class="settings-card"><div class="settings-card-top"><div><p class="skill-label">${escapeHtml(setting.id)}</p><h3>${escapeHtml(txt.name || setting.id)}</h3></div><div class="tag-row"><span class="tag">${escapeHtml(t("settingType"))}</span><span class="tag">${escapeHtml(t("settingDefault"))}: <strong>&nbsp;${escapeHtml(setting.default ? t("enabled") : t("disabled"))}</strong></span></div></div><p>${escapeHtml(txt.description)}</p>${note ? `<p class="setting-note">${escapeHtml(note)}</p>` : ""}</article>`; }).join("");
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

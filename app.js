(function () {
  "use strict";

  const data = window.BV_WIKI_DATA;
  const downloadUrl = "https://www.nexusmods.com/battlebrothers/mods/1053";

  if (!data || !Array.isArray(data.valkyries)) {
    document.body.innerHTML = "<main class=\"empty-state\">Battle Valkyries wiki data is missing.</main>";
    return;
  }

  const copy = {
    en: {
      brandSub: "Mod Wiki",
      navOverview: "Overview",
      navValkyries: "Valkyries",
      navMechanics: "Mechanics",
      navSystems: "Systems",
      navSettings: "Settings",
      navDownload: "Download",
      rosterEyebrow: "Roster",
      rosterTitle: "Valkyrie Index",
      searchPlaceholder: "Search Valkyries, traits, skills",
      overviewTitle: "A Battle Brothers roster wiki for summoned Valkyries",
      overviewBody: "Battle Valkyries adds a dedicated summon interface, custom skins, character traits, and two exclusive combat skills for each Valkyrie.",
      downloadLabel: "Download on Nexus Mods",
      downloadHint: "Latest public release and optional files are hosted on Nexus Mods.",
      metricValkyries: "Valkyries",
      metricSkills: "Exclusive skills",
      metricRoster: "Summon roster cap",
      metricTotalCost: "Full roster total",
      selectedPrefix: "No.",
      idLabel: "ID",
      skinLabel: "Skin",
      wageLabel: "Daily wage",
      levelLabel: "Level",
      summonArt: "Summon art",
      skinArt: "Skin art",
      backgroundTitle: "Background",
      statsTitle: "Base Attributes",
      talentsTitle: "Talent Stars",
      traitTitle: "Character Trait",
      passiveTitle: "Passive Skill",
      activeTitle: "Active Skill",
      traitBonuses: "Trait bonuses",
      mechanicsTitle: "Summon Mechanics",
      mechanicsBody: "The in-game hub summons one Valkyrie at a time, scales crown cost by the next summoned count, and keeps Valkyries inside a dedicated roster ceiling.",
      settingsTitle: "Mod Settings",
      settingsBody: "Battle Valkyries settings are available from MSU's Mod Settings menu. Choose Battle Valkyries, open the Valkyries page, then review the options under Summon System.",
      settingsPathLabel: "Path",
      settingDefault: "Default",
      settingEnabled: "Enabled",
      settingDisabled: "Disabled",
      settingTypeBoolean: "Checkbox",
      settingVisualOnly: "This option only changes the Valkyrie appearance layer; the equipped weapon and shield remain equipped and still provide their combat effects.",
      settingEquipmentLockNote: "This option is read once when a new campaign is created, then locked into that save.",
      settingEquipmentBaselineNote: "The current wiki treats the equipment system as optional; core Valkyrie content does not assume it is enabled.",
      settingsScreenshot: "In-game Mod Settings screen",
      noSettings: "No player-facing mod settings are currently exposed.",
      rosterMax: "Roster cap",
      formationSlots: "Formation slots",
      combatSlots: "Combat slots",
      totalSummonCost: "Full roster cost",
      costTableIndex: "Summon number",
      costTableCost: "Crowns",
      systemsTitle: "Implemented Systems",
      systemsUpdated: "Updated",
      bondStageValue: "Bond",
      bondStageName: "Stage",
      bondEventTitle: "Event",
      bondReward: "Reward",
      equipmentRarity: "Rarity",
      equipmentRank: "Rank",
      equipmentAffixes: "Affix slots",
      equipmentColor: "Color",
      equipmentAffixTitle: "Affix Overview",
      equipmentAffixName: "Affix",
      equipmentAffixKind: "Type",
      equipmentAffixParts: "Parts",
      equipmentAffixUnlock: "Unlock",
      equipmentAffixEffect: "Effect",
      equipmentPartWeapon: "Weapon",
      equipmentPartHelmet: "Helmet",
      equipmentPartArmor: "Armor",
      equipmentPartShield: "Shield",
      matrixTitle: "Skill Matrix",
      matrixName: "Valkyrie",
      matrixTrait: "Trait",
      matrixPassive: "Passive",
      matrixActive: "Active",
      sourceTitle: "Source files",
      sourceBody: "Generated from the mod configuration, summon hook, i18n dictionaries, and bundled UI art.",
      noResults: "No Valkyries match the current search.",
    },
    zh: {
      brandSub: "Mod 百科",
      navOverview: "总览",
      navValkyries: "女武神",
      navMechanics: "机制",
      navSystems: "系统",
      navSettings: "配置",
      navDownload: "下载",
      rosterEyebrow: "名册",
      rosterTitle: "女武神索引",
      searchPlaceholder: "搜索女武神、特性、技能",
      overviewTitle: "战场兄弟女武神召唤 Mod 百科",
      overviewBody: "Battle Valkyries 为战场兄弟加入专属召唤界面、角色皮肤、人物特性，以及每名女武神两项专属战斗技能。",
      downloadLabel: "前往 Nexus Mods 下载",
      downloadHint: "公开版本与可选文件发布在 Nexus Mods 页面。",
      metricValkyries: "名女武神",
      metricSkills: "项专属技能",
      metricRoster: "召唤名册上限",
      metricTotalCost: "完整名册总价",
      selectedPrefix: "序号",
      idLabel: "ID",
      skinLabel: "皮肤",
      wageLabel: "日薪",
      levelLabel: "等级",
      summonArt: "召唤立绘",
      skinArt: "皮肤立绘",
      backgroundTitle: "背景",
      statsTitle: "基础属性",
      talentsTitle: "天赋星级",
      traitTitle: "人物特性",
      passiveTitle: "被动技能",
      activeTitle: "主动技能",
      traitBonuses: "特性加成",
      mechanicsTitle: "召唤机制",
      mechanicsBody: "游戏内女武神界面每次召唤一名角色，费用按下一名已召唤序号递增，并使用专门的名册上限控制。",
      settingsTitle: "MOD 配置",
      settingsBody: "Battle Valkyries 的玩家配置位于 MSU 的 Mod Settings 菜单中。选择 Battle Valkyries，进入 Valkyries 页面，即可在 Summon System 下查看当前选项。",
      settingsPathLabel: "路径",
      settingDefault: "默认",
      settingEnabled: "开启",
      settingDisabled: "关闭",
      settingTypeBoolean: "勾选项",
      settingVisualOnly: "该选项只影响女武神外观层；武器和盾牌仍然处于装备状态，并保留原本的战斗效果。",
      settingEquipmentLockNote: "该选项只在新开战役时读取一次，之后会锁定到该存档内。",
      settingEquipmentBaselineNote: "当前 wiki 将装备系统视为可选内容；女武神核心内容不默认假设它已开启。",
      settingsScreenshot: "游戏内 MOD 设置界面",
      noSettings: "当前没有公开给玩家调整的 MOD 配置项。",
      rosterMax: "名册上限",
      formationSlots: "阵型槽位",
      combatSlots: "战斗槽位",
      totalSummonCost: "完整名册总价",
      costTableIndex: "召唤序号",
      costTableCost: "克朗",
      systemsTitle: "已实现系统",
      systemsUpdated: "更新时间",
      bondStageValue: "羁绊",
      bondStageName: "阶段",
      bondEventTitle: "事件",
      bondReward: "奖励",
      equipmentRarity: "稀有度",
      equipmentRank: "等级",
      equipmentAffixes: "词条槽",
      equipmentColor: "颜色",
      equipmentAffixTitle: "词条一览",
      equipmentAffixName: "词条",
      equipmentAffixKind: "类型",
      equipmentAffixParts: "部位",
      equipmentAffixUnlock: "解锁",
      equipmentAffixEffect: "效果",
      equipmentPartWeapon: "武器",
      equipmentPartHelmet: "头盔",
      equipmentPartArmor: "盔甲",
      equipmentPartShield: "盾牌",
      matrixTitle: "技能矩阵",
      matrixName: "女武神",
      matrixTrait: "特性",
      matrixPassive: "被动",
      matrixActive: "主动",
      sourceTitle: "数据来源",
      sourceBody: "由 mod 配置、召唤 hook、i18n 字典和内置 UI 美术生成。",
      noResults: "当前搜索没有匹配的女武神。",
    },
  };

  const refs = {
    search: document.getElementById("searchInput"),
    rosterList: document.getElementById("rosterList"),
    rosterCount: document.getElementById("rosterCount"),
    overview: document.getElementById("overview"),
    detail: document.getElementById("detail"),
    mechanics: document.getElementById("mechanics"),
    systems: document.getElementById("systems"),
    settings: document.getElementById("settings"),
    matrix: document.getElementById("matrix"),
  };

  function normalizeLang(value) {
    const lang = String(value || "").toLowerCase().replace("_", "-");
    if (lang === "cn" || lang.startsWith("zh")) return "zh";
    if (lang.startsWith("en")) return "en";
    return "";
  }

  function getUrlLang() {
    const params = new URLSearchParams(window.location.search);
    return normalizeLang(params.get("lang") || params.get("language"));
  }

  function setUrlLang(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url.toString());
  }

  const hashId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const initialId = data.valkyries.some((item) => item.id === hashId) ? hashId : data.valkyries[0].id;
  const initialLang = getUrlLang() || "en";
  const state = {
    lang: initialLang,
    selectedId: initialId,
    query: "",
  };

  function t(key) {
    return copy[state.lang][key] || copy.en[key] || key;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function textFor(valkyrie) {
    return valkyrie.text[state.lang] || valkyrie.text.en;
  }

  function skillText(skill) {
    return skill.text[state.lang] || skill.text.en;
  }

  function localizedValue(value, fallback = "") {
    if (value && typeof value === "object") {
      return value[state.lang] || value.en || fallback;
    }

    return value || fallback;
  }

  function localizedArray(value) {
    if (Array.isArray(value)) return value;
    if (value && typeof value === "object") {
      return value[state.lang] || value.en || [];
    }

    return [];
  }

  function totalSummonCost() {
    let previousMax = 0;
    return data.summon.costSteps.reduce((total, step) => {
      const count = Math.max(0, step.max - previousMax);
      previousMax = step.max;
      return total + (count * step.cost);
    }, 0);
  }

  function settingText(setting) {
    return (setting.text && (setting.text[state.lang] || setting.text.en)) || {};
  }

  function statLabel(key) {
    return (data.statLabels[state.lang] && data.statLabels[state.lang][key])
      || data.statLabels.en[key]
      || key;
  }

  function formatNumber(value) {
    return new Intl.NumberFormat(state.lang === "zh" ? "zh-CN" : "en-US").format(value);
  }

  function selectedValkyrie() {
    return data.valkyries.find((item) => item.id === state.selectedId) || data.valkyries[0];
  }

  function searchableText(valkyrie) {
    const txt = textFor(valkyrie);
    const passive = skillText(valkyrie.skills.passive);
    const active = skillText(valkyrie.skills.active);
    return [
      valkyrie.id,
      valkyrie.skinId,
      txt.name,
      txt.backgroundName,
      txt.backgroundDescription,
      txt.traitName,
      txt.traitDescription,
      passive.name,
      passive.description,
      active.name,
      active.description,
    ].join(" ").toLowerCase();
  }

  function visibleValkyries() {
    const q = state.query.trim().toLowerCase();
    if (!q) return data.valkyries;
    return data.valkyries.filter((valkyrie) => searchableText(valkyrie).includes(q));
  }

  function updateStaticText() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    refs.search.placeholder = t("searchPlaceholder");
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === state.lang);
    });
  }

  function renderOverview() {
    const first = selectedValkyrie();
    refs.overview.innerHTML = `
      <div class="overview-hero">
        <div class="overview-copy">
          <p class="eyebrow">${escapeHtml(data.meta.source)}</p>
          <h2>${escapeHtml(t("overviewTitle"))}</h2>
          <p>${escapeHtml(t("overviewBody"))}</p>
          <div class="download-row">
            <a class="download-button" href="${escapeHtml(downloadUrl)}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.2l3.6-3.6L17 11l-5 5-5-5 1.4-1.4 3.6 3.6V3h2Zm-7 15h14v2H5v-2Z"/></svg>
              <span>${escapeHtml(t("downloadLabel"))}</span>
            </a>
            <span>${escapeHtml(t("downloadHint"))}</span>
          </div>
        </div>
        <div class="overview-art">
          <img src="${escapeHtml(first.images.card)}" alt="${escapeHtml(textFor(first).name)}">
        </div>
      </div>
      <div class="metric-grid">
        <div class="metric"><strong>${data.valkyries.length}</strong><span>${escapeHtml(t("metricValkyries"))}</span></div>
        <div class="metric"><strong>${data.valkyries.length * 2}</strong><span>${escapeHtml(t("metricSkills"))}</span></div>
        <div class="metric"><strong>${data.summon.rosterMax}</strong><span>${escapeHtml(t("metricRoster"))}</span></div>
        <div class="metric"><strong>${formatNumber(totalSummonCost())}</strong><span>${escapeHtml(t("metricTotalCost"))}</span></div>
      </div>
    `;
  }

  function renderRoster() {
    const items = visibleValkyries();
    refs.rosterCount.textContent = items.length;

    if (items.length === 0) {
      refs.rosterList.innerHTML = `<div class="empty-state">${escapeHtml(t("noResults"))}</div>`;
      return;
    }

    refs.rosterList.innerHTML = items.map((valkyrie) => {
      const txt = textFor(valkyrie);
      const passive = skillText(valkyrie.skills.passive);
      return `
        <button type="button" class="roster-card ${valkyrie.id === state.selectedId ? "is-active" : ""}" data-id="${escapeHtml(valkyrie.id)}">
          <img class="roster-thumb" src="${escapeHtml(valkyrie.images.card)}" alt="${escapeHtml(txt.name)}">
          <span>
            <span class="roster-name">${escapeHtml(txt.name)}</span>
            <span class="roster-sub">${escapeHtml(passive.name)}</span>
          </span>
          <img class="roster-skill-icon" src="${escapeHtml(valkyrie.skills.passive.image)}" alt="">
        </button>
      `;
    }).join("");
  }

  function renderTag(label, value) {
    return `<span class="tag">${escapeHtml(label)}: <strong>&nbsp;${escapeHtml(value)}</strong></span>`;
  }

  function renderStatGrid(valkyrie, title, values, maxValue) {
    const cells = data.statKeys.map((key) => {
      const value = Number(values[key] || 0);
      const width = Math.max(5, Math.min(100, Math.round((value / maxValue) * 100)));
      return `
        <div class="stat-item">
          <div class="stat-top">
            <span class="stat-label">${escapeHtml(statLabel(key))}</span>
            <span class="stat-value">${escapeHtml(value)}</span>
          </div>
          <div class="stat-bar" style="--bar: ${width}%"><span></span></div>
        </div>
      `;
    }).join("");

    return `
      <div class="section-block">
        <div class="section-title"><h3>${escapeHtml(title)}</h3></div>
        <div class="stat-grid">${cells}</div>
      </div>
    `;
  }

  function traitChips(valkyrie) {
    const bonuses = Object.entries(valkyrie.traitBonuses || {});
    if (bonuses.length > 0) {
      return bonuses.map(([key, value]) => `
        <span class="chip"><strong>${escapeHtml(value > 0 ? `+${value}` : value)}</strong>&nbsp;${escapeHtml(statLabel(key))}</span>
      `).join("");
    }

    const tips = textFor(valkyrie).traitTooltip || [];
    return tips.map((tip) => `<span class="chip">${escapeHtml(tip)}</span>`).join("");
  }

  function renderSkillCard(skill, title) {
    const txt = skillText(skill);
    const bullets = (txt.tooltip || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    return `
      <div class="skill-card">
        <img class="skill-icon" src="${escapeHtml(skill.image)}" alt="">
        <div>
          <p class="skill-label">${escapeHtml(title)}</p>
          <h4>${escapeHtml(txt.name)}</h4>
          <p>${escapeHtml(txt.description)}</p>
          ${bullets ? `<ul class="bullet-list">${bullets}</ul>` : ""}
        </div>
      </div>
    `;
  }

  function renderDetail() {
    const valkyrie = selectedValkyrie();
    const txt = textFor(valkyrie);
    const tags = [
      renderTag(t("selectedPrefix"), valkyrie.order),
      renderTag(t("idLabel"), valkyrie.id),
      renderTag(t("skinLabel"), valkyrie.skinId),
      renderTag(t("levelLabel"), valkyrie.level),
      renderTag(t("wageLabel"), valkyrie.dailyWage),
    ].join("");

    refs.detail.innerHTML = `
      <div class="detail-header">
        <div class="detail-title">
          <p class="eyebrow">${escapeHtml(txt.backgroundName)}</p>
          <h2>${escapeHtml(txt.name)}</h2>
          <p>${escapeHtml(txt.backgroundDescription)}</p>
          <div class="tag-row">${tags}</div>
        </div>
        <div class="detail-art-grid">
          <figure class="art-frame">
            <img src="${escapeHtml(valkyrie.images.card)}" alt="${escapeHtml(txt.name)}">
            <figcaption>${escapeHtml(t("summonArt"))}</figcaption>
          </figure>
          <figure class="art-frame">
            <img src="${escapeHtml(valkyrie.images.skin)}" alt="${escapeHtml(txt.name)}">
            <figcaption>${escapeHtml(t("skinArt"))}</figcaption>
          </figure>
        </div>
      </div>
      <div class="detail-body">
        <div class="section-block">
          <div class="section-title"><h3>${escapeHtml(t("traitTitle"))}</h3></div>
          <div class="trait-block">
            <img src="${escapeHtml(valkyrie.images.trait)}" alt="">
            <div>
              <h4>${escapeHtml(txt.traitName)}</h4>
              <p>${escapeHtml(txt.traitDescription)}</p>
              <div class="chip-row">${traitChips(valkyrie)}</div>
            </div>
          </div>
        </div>
        ${renderStatGrid(valkyrie, t("statsTitle"), valkyrie.baseAttributes, 140)}
        ${renderStatGrid(valkyrie, t("talentsTitle"), valkyrie.talents, 3)}
        <div class="section-block">
          <div class="section-title"><h3>${escapeHtml(t("passiveTitle"))} / ${escapeHtml(t("activeTitle"))}</h3></div>
          <div class="skills-grid">
            ${renderSkillCard(valkyrie.skills.passive, t("passiveTitle"))}
            ${renderSkillCard(valkyrie.skills.active, t("activeTitle"))}
          </div>
        </div>
      </div>
    `;
  }

  function costRange(index, step) {
    const prevMax = index === 0 ? 0 : data.summon.costSteps[index - 1].max;
    const start = prevMax + 1;
    return start === step.max ? `${start}` : `${start} - ${step.max}`;
  }

  function renderMechanics() {
    const rows = data.summon.costSteps.map((step, index) => `
      <tr>
        <td>${escapeHtml(costRange(index, step))}</td>
        <td>${escapeHtml(formatNumber(step.cost))}</td>
      </tr>
    `).join("");
    const mechanicCards = [
      [t("rosterMax"), data.summon.rosterMax],
      [t("formationSlots"), data.summon.formationSlots],
      [t("combatSlots"), data.summon.combatSlots],
      [t("totalSummonCost"), formatNumber(totalSummonCost())],
    ].map(([label, value]) => `
      <div class="mechanic-card">
        <strong>${escapeHtml(value)}</strong>
        <p>${escapeHtml(label)}</p>
      </div>
    `).join("");

    refs.mechanics.innerHTML = `
      <div class="section-title">
        <div>
          <p class="eyebrow">${escapeHtml(data.meta.source)}</p>
          <h2>${escapeHtml(t("mechanicsTitle"))}</h2>
        </div>
      </div>
      <p>${escapeHtml(t("mechanicsBody"))}</p>
      <div class="mechanic-grid">${mechanicCards}</div>
      <table class="cost-table">
        <thead><tr><th>${escapeHtml(t("costTableIndex"))}</th><th>${escapeHtml(t("costTableCost"))}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function renderBulletList(items) {
    const bullets = localizedArray(items).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    return bullets ? `<ul class="bullet-list">${bullets}</ul>` : "";
  }

  function renderSourceFiles(files) {
    if (!Array.isArray(files) || files.length === 0) return "";
    const items = files.map((file) => `<li>${escapeHtml(file)}</li>`).join("");
    return `<ul class="source-list compact-source-list">${items}</ul>`;
  }

  function formatBondReward(stage) {
    if (state.lang === "zh") {
      return `${formatNumber(stage.rewardMoney)} 克朗，${formatNumber(stage.rewardPerkPoints)} 技能点`;
    }

    const perkLabel = stage.rewardPerkPoints === 1 ? "perk point" : "perk points";
    return `${formatNumber(stage.rewardMoney)} Crowns, ${formatNumber(stage.rewardPerkPoints)} ${perkLabel}`;
  }

  function affixText(affix) {
    return (affix.text && (affix.text[state.lang] || affix.text.en)) || {};
  }

  function affixPartLabel(part) {
    const key = `equipmentPart${String(part || "").charAt(0).toUpperCase()}${String(part || "").slice(1)}`;
    return t(key);
  }

  function renderAffixParts(parts) {
    const items = Array.isArray(parts) ? parts : [];
    return `<span class="part-list">${items.map((part) => `<span>${escapeHtml(affixPartLabel(part))}</span>`).join("")}</span>`;
  }

  function renderSystems() {
    const systems = data.systems || {};
    const cards = Array.isArray(systems.cards) ? systems.cards : [];
    const systemCards = cards.map((card) => `
      <div class="system-card">
        <div>
          <p class="skill-label">${escapeHtml(card.id || "")}</p>
          <h3>${escapeHtml(localizedValue(card.title, card.id || ""))}</h3>
        </div>
        <p>${escapeHtml(localizedValue(card.body, ""))}</p>
        ${renderBulletList(card.bullets)}
        ${renderSourceFiles(card.sourceFiles)}
      </div>
    `).join("");
    const bond = systems.bond || {};
    const bondRows = Array.isArray(bond.stages) ? bond.stages.map((stage) => {
      const txt = stage.text && (stage.text[state.lang] || stage.text.en) || {};
      return `
        <tr>
          <td>${escapeHtml(stage.value)}</td>
          <td>${escapeHtml(txt.stage || "")}</td>
          <td>${escapeHtml(txt.eventTitle || "")}</td>
          <td>${escapeHtml(formatBondReward(stage))}</td>
        </tr>
      `;
    }).join("") : "";
    const equipment = systems.equipment || {};
    const rarityRows = Array.isArray(equipment.rarities) ? equipment.rarities.map((rarity) => {
      const txt = rarity.text && (rarity.text[state.lang] || rarity.text.en) || {};
      return `
        <tr>
          <td><span class="rarity-name"><span class="rarity-swatch" style="--rarity-color: ${escapeHtml(rarity.color)}"></span>${escapeHtml(txt.name || rarity.id)}</span></td>
          <td>${escapeHtml(rarity.rank)}</td>
          <td>${escapeHtml(rarity.affixCount)}</td>
          <td><code>${escapeHtml(rarity.color)}</code></td>
        </tr>
      `;
    }).join("") : "";
    const affixRows = Array.isArray(equipment.affixes) ? equipment.affixes.map((affix) => {
      const txt = affixText(affix);
      return `
        <tr>
          <td>
            <span class="affix-name">
              <strong>${escapeHtml(txt.name || affix.id)}</strong>
              <code>${escapeHtml(affix.id)}</code>
            </span>
          </td>
          <td><span class="affix-kind affix-kind-${escapeHtml(affix.kind || "basic")}">${escapeHtml(localizedValue(affix.kindText, affix.kind || ""))}</span></td>
          <td>${renderAffixParts(affix.parts)}</td>
          <td>${escapeHtml(localizedValue(affix.unlockText, ""))}</td>
          <td class="affix-summary">${escapeHtml(txt.summary || txt.effect || affix.effect || "")}</td>
        </tr>
      `;
    }).join("") : "";

    refs.systems.innerHTML = `
      <div class="section-title">
        <div>
          <p class="eyebrow">${escapeHtml(`${t("systemsUpdated")}: ${data.meta.updatedAt || ""}`)}</p>
          <h2>${escapeHtml(t("systemsTitle"))}</h2>
        </div>
      </div>
      <p>${escapeHtml(localizedValue(systems.intro, ""))}</p>
      <p class="baseline-note">${escapeHtml(localizedValue(systems.baselineNote, ""))}</p>
      <div class="system-grid">${systemCards}</div>
      <div class="subsection-block">
        <div>
          <h3>${escapeHtml(localizedValue(bond.title, ""))}</h3>
          <p>${escapeHtml(`${localizedValue(bond.item, "")}: +${bond.itemGain || 0}; ${t("bondStageValue")} ${bond.max || 0}`)}</p>
        </div>
        <table class="matrix-table">
          <thead>
            <tr>
              <th>${escapeHtml(t("bondStageValue"))}</th>
              <th>${escapeHtml(t("bondStageName"))}</th>
              <th>${escapeHtml(t("bondEventTitle"))}</th>
              <th>${escapeHtml(t("bondReward"))}</th>
            </tr>
          </thead>
          <tbody>${bondRows}</tbody>
        </table>
      </div>
      <div class="subsection-block">
        <div>
          <h3>${escapeHtml(localizedValue(equipment.title, ""))}</h3>
          <p>${escapeHtml(localizedValue(equipment.body, ""))}</p>
          ${renderBulletList(equipment.rules)}
        </div>
        <table class="matrix-table">
          <thead>
            <tr>
              <th>${escapeHtml(t("equipmentRarity"))}</th>
              <th>${escapeHtml(t("equipmentRank"))}</th>
              <th>${escapeHtml(t("equipmentAffixes"))}</th>
              <th>${escapeHtml(t("equipmentColor"))}</th>
            </tr>
          </thead>
          <tbody>${rarityRows}</tbody>
        </table>
        <div class="affix-overview">
          <h3>${escapeHtml(t("equipmentAffixTitle"))}</h3>
          <p>${escapeHtml(localizedValue(equipment.affixIntro, ""))}</p>
          <table class="matrix-table affix-table">
            <thead>
              <tr>
                <th>${escapeHtml(t("equipmentAffixName"))}</th>
                <th>${escapeHtml(t("equipmentAffixKind"))}</th>
                <th>${escapeHtml(t("equipmentAffixParts"))}</th>
                <th>${escapeHtml(t("equipmentAffixUnlock"))}</th>
                <th>${escapeHtml(t("equipmentAffixEffect"))}</th>
              </tr>
            </thead>
            <tbody>${affixRows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderSettingCard(setting) {
    const txt = settingText(setting);
    const defaultText = setting.default === true ? t("settingEnabled") : t("settingDisabled");
    const notes = [];
    if (setting.id === "HideWeapons") {
      notes.push(t("settingVisualOnly"));
    }
    if (setting.id === "EnableEquipmentSystem") {
      notes.push(t("settingEquipmentLockNote"), t("settingEquipmentBaselineNote"));
    }
    const noteList = notes.length > 0
      ? `<ul class="bullet-list">${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>`
      : "";

    return `
      <div class="settings-card">
        <div class="settings-card-top">
          <div>
            <p class="skill-label">${escapeHtml(setting.id)}</p>
            <h3>${escapeHtml(txt.name || setting.id)}</h3>
          </div>
          <div class="tag-row">
            <span class="tag">${escapeHtml(t("settingTypeBoolean"))}</span>
            <span class="tag">${escapeHtml(t("settingDefault"))}: <strong>&nbsp;${escapeHtml(defaultText)}</strong></span>
          </div>
        </div>
        <p>${escapeHtml(txt.description || "")}</p>
        ${noteList}
      </div>
    `;
  }

  function renderSettings() {
    const settings = data.settings || {};
    const options = Array.isArray(settings.options) ? settings.options : [];
    const modName = localizedValue(settings.modName, "Battle Valkyries");
    const pageTitle = localizedValue(settings.pageTitle, "Valkyries");
    const sectionTitle = localizedValue(settings.sectionTitle, "Summon System");
    const pathItems = ["MSU Mod Settings", modName, pageTitle, sectionTitle];
    const cards = options.length > 0
      ? options.map((setting) => renderSettingCard(setting)).join("")
      : `<div class="empty-state">${escapeHtml(t("noSettings"))}</div>`;
    const screenshot = settings.screenshot ? `
      <figure class="settings-preview">
        <img src="${escapeHtml(settings.screenshot)}" alt="${escapeHtml(t("settingsScreenshot"))}">
        <figcaption>${escapeHtml(t("settingsScreenshot"))}</figcaption>
      </figure>
    ` : "";

    refs.settings.innerHTML = `
      <div class="section-title">
        <div>
          <p class="eyebrow">${escapeHtml(t("settingsPathLabel"))}</p>
          <h2>${escapeHtml(t("settingsTitle"))}</h2>
        </div>
      </div>
      <p>${escapeHtml(t("settingsBody"))}</p>
      <div class="settings-path">
        ${pathItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="settings-layout">
        <div class="settings-list">${cards}</div>
        ${screenshot}
      </div>
    `;
  }

  function renderMatrix() {
    const rows = data.valkyries.map((valkyrie) => {
      const txt = textFor(valkyrie);
      const passive = skillText(valkyrie.skills.passive);
      const active = skillText(valkyrie.skills.active);
      const trait = (txt.traitTooltip && txt.traitTooltip.length > 0) ? txt.traitTooltip.join(" ") : txt.traitDescription;
      return `
        <tr>
          <td class="table-name">${escapeHtml(txt.name)}</td>
          <td>${escapeHtml(trait)}</td>
          <td><span class="mini-skill"><img src="${escapeHtml(valkyrie.skills.passive.image)}" alt="">${escapeHtml(passive.name)}</span></td>
          <td><span class="mini-skill"><img src="${escapeHtml(valkyrie.skills.active.image)}" alt="">${escapeHtml(active.name)}</span></td>
        </tr>
      `;
    }).join("");

    refs.matrix.innerHTML = `
      <div class="section-title"><h2>${escapeHtml(t("matrixTitle"))}</h2></div>
      <table class="matrix-table">
        <thead>
          <tr>
            <th>${escapeHtml(t("matrixName"))}</th>
            <th>${escapeHtml(t("matrixTrait"))}</th>
            <th>${escapeHtml(t("matrixPassive"))}</th>
            <th>${escapeHtml(t("matrixActive"))}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  function renderAll() {
    updateStaticText();
    renderOverview();
    renderRoster();
    renderDetail();
    renderMechanics();
    renderSystems();
    renderSettings();
    renderMatrix();
  }

  function selectValkyrie(id, shouldScroll) {
    if (!data.valkyries.some((item) => item.id === id)) return;
    state.selectedId = id;
    history.replaceState(null, "", `#${encodeURIComponent(id)}`);
    renderOverview();
    renderRoster();
    renderDetail();
    if (shouldScroll) {
      refs.detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  refs.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    const matches = visibleValkyries();
    if (matches.length > 0 && !matches.some((item) => item.id === state.selectedId)) {
      state.selectedId = matches[0].id;
      history.replaceState(null, "", `#${encodeURIComponent(state.selectedId)}`);
      renderOverview();
      renderDetail();
    }
    renderRoster();
  });

  refs.rosterList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-id]");
    if (!button) return;
    selectValkyrie(button.dataset.id, true);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      setUrlLang(state.lang);
      renderAll();
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  window.addEventListener("hashchange", () => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (id && id !== state.selectedId) {
      selectValkyrie(id, false);
    }
  });

  renderAll();
}());

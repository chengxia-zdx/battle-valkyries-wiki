(function () {
  "use strict";
  const section = document.getElementById("feedback");
  if (!section || !window.BV_FEEDBACK_PACK) return;
  let lang = "zh", busy = false, status = null;
  const maxFileSize = 25 * 1024 * 1024, maxTotalSize = 50 * 1024 * 1024;
  const copy = {
    zh: {
      title: "错误反馈", subtitle: "整理信息 · 下载反馈包 · 通过 QQ 发送",
      intro: "按下面的提示描述问题，选择游戏日志，生成一个 ZIP 文件后通过 QQ 发给作者。填写的信息与所选文件只在你的浏览器中处理。",
      logTitle: "先找到游戏日志", logIntro: "请在出现问题的那次游戏结束后取日志，并在下一次启动游戏前保存；重新启动可能覆盖旧日志。",
      logStep1: "在运行游戏的电脑上，按 Win + R，输入下面的命令，然后按回车打开“文档”文件夹。",
      logStep2: "打开 Battle Brothers 文件夹，找到 log.html。它可能显示为“log”，图标像网页，这是正常的。",
      logStep3: "回到本页点击“选择日志”，选择这个文件。请发送完整日志文件，不需要截图日志或复制其中几行。",
      copyCommand: "复制命令", copied: "已复制：shell:Personal", copyFailed: "无法自动复制，请手动复制 shell:Personal。",
      logTip: "日志在“文档\\Battle Brothers\\log.html”，通常不在 Steam 游戏安装目录。文档被 OneDrive 重定向时，shell:Personal 也会打开实际的文档位置。",
      missingHelp: "还是找不到？", missingText: "先确认游戏至少启动过一次。也可以打开文件资源管理器，从“文档”进入 Battle Brothers，搜索 log。若反馈电脑没有日志，勾选“暂时找不到日志”，仍可先生成反馈包。手机浏览器不能自动读取电脑上的日志。",
      infoTitle: "1. 描述问题", requiredNote: "带 * 的信息必填；不知道版本时可填“不清楚”，未使用附魔 Mod 可填“未安装”。",
      description: "问题描述 *", descriptionPlaceholder: "描述遇到了什么问题，例如：七盾上篇第三节提交材料后卡住。",
      environment: "游戏环境 *", chooseEnvironment: "请选择", legends: "传奇", reforged: "重铸", vanilla: "原版", other: "其他（自己填写）",
      environmentOther: "其他游戏环境 *", environmentOtherPlaceholder: "填写你使用的游戏环境或大型 Mod",
      valkyriesVersion: "女武神游戏版本 *", enchantmentVersion: "附魔 Mod 版本 *", versionPlaceholder: "填写实际安装版本；不清楚也可以", enchantmentPlaceholder: "填写版本；未使用可填“未安装”",
      filesTitle: "2. 添加日志与图片", chooseLog: "选择日志", logHint: "支持 .html / .htm / .log / .txt；单文件最大 25 MB。日志内容不会在页面中执行。",
      noLog: "暂时找不到日志，先生成反馈包",
      screenshots: "截图或 Mod 列表图片（选填）", screenshotHint: "最多 5 张 PNG / JPG / WebP，每张最大 25 MB；所有文件合计最大 50 MB。",
      noFiles: "尚未选择文件", logMissing: "请先选择日志，或勾选“暂时找不到日志”。", emptyFile: "文件为空：{name}，请重新选择。",
      invalidLog: "日志请选择 .html、.htm、.log 或 .txt 文件。", invalidScreenshot: "截图只支持 PNG、JPG 或 WebP。",
      tooMany: "最多添加 5 张图片。", tooLarge: "文件超过 25 MB：{name}。", totalLarge: "所选文件合计超过 50 MB，请减少图片或文件大小。",
      downloadTitle: "3. 下载并通过 QQ 发送", download: "生成并下载反馈包", generating: "正在整理文件…",
      delivery: "下载后，在 QQ 聊天中发送这个 ZIP 文件给作者。请用“发送文件”，保留整个反馈包；网页不会替你发送。",
      success: "已生成 {name}。请在浏览器下载列表中找到它，再通过 QQ 发给作者。",
      failure: "生成失败，请重新选择文件后再试。填写的信息仍保留在页面中。",
      contents: "反馈包包含：反馈说明.txt、结构化信息.json、所选原始日志及图片。没有日志时，会在说明中明确标记。",
    },
    en: {
      title: "Bug report", subtitle: "Describe the issue · Download a report · Send via QQ",
      intro: "Describe the issue below, select the game log, then download a ZIP and send it to the author via QQ. Your information and selected files are processed locally in your browser.",
      logTitle: "Find your game log first", logIntro: "Collect the log from the session in which the issue occurred, before starting the game again; restarting may overwrite it.",
      logStep1: "On the computer running the game, press Win + R, enter the command below, and press Enter to open your Documents folder.",
      logStep2: "Open Battle Brothers and find log.html. Windows may display it as “log” with a browser icon; that is normal.",
      logStep3: "Return here, click “Select log” and select that file. Include the complete file, rather than a screenshot or a few copied lines.",
      copyCommand: "Copy command", copied: "Copied: shell:Personal", copyFailed: "Could not copy automatically. Please copy shell:Personal manually.",
      logTip: "The usual location is Documents\\Battle Brothers\\log.html, rather than the Steam installation folder. shell:Personal opens the actual Documents location even when it is redirected to OneDrive.",
      missingHelp: "Still cannot find it?", missingText: "Make sure the game has been started at least once. You can also open Documents in File Explorer, enter Battle Brothers and search for log. If you cannot provide a log, select the missing-log option. A phone browser cannot automatically access a log on your computer.",
      infoTitle: "1. Describe the issue", requiredNote: "Fields marked * are required. Enter “unknown” for an unknown version, or “not installed” if you do not use the enchantment mod.",
      description: "Problem description *", descriptionPlaceholder: "Describe the issue, for example: Seven Shields Upper stalls after submitting stage 3 materials.",
      environment: "Game environment *", chooseEnvironment: "Please select", legends: "Legends", reforged: "Reforged", vanilla: "Vanilla", other: "Other (enter your own)",
      environmentOther: "Other game environment *", environmentOtherPlaceholder: "Enter your game environment or overhaul mod",
      valkyriesVersion: "Battle Valkyries version *", enchantmentVersion: "Enchantment mod version *", versionPlaceholder: "Installed version, or unknown", enchantmentPlaceholder: "Version, or not installed",
      filesTitle: "2. Add the log and images", chooseLog: "Select log", logHint: "Accepts .html / .htm / .log / .txt; maximum 25 MB per file. Log content is never executed on this page.",
      noLog: "I cannot find the log; generate a report without it",
      screenshots: "Screenshots or mod list images (optional)", screenshotHint: "Up to 5 PNG / JPG / WebP images, maximum 25 MB each and 50 MB total for all files.",
      noFiles: "No file selected", logMissing: "Select a log, or choose the missing-log option.", emptyFile: "Empty file: {name}. Please select it again.",
      invalidLog: "Select an .html, .htm, .log or .txt log file.", invalidScreenshot: "Only PNG, JPG and WebP images are accepted.",
      tooMany: "You can attach up to 5 images.", tooLarge: "File exceeds 25 MB: {name}.", totalLarge: "Files exceed 50 MB in total. Please reduce their number or size.",
      downloadTitle: "3. Download and send via QQ", download: "Generate and download report", generating: "Preparing files…",
      delivery: "Send the downloaded ZIP to the author in QQ using the file attachment option. Keep the report intact; this page does not send it for you.",
      success: "Generated {name}. Find it in your browser downloads and send it to the author via QQ.",
      failure: "Could not generate the report. Select the files again and retry. Your form entries are still here.",
      contents: "The ZIP contains report.txt, report.json, your original log and images. A missing log is explicitly recorded.",
    },
  };
  const t = (key, values = {}) => (copy[lang][key] || key).replace(/\{(\w+)\}/g, (_, name) => values[name] || "");
  const label = key => `<span data-feedback-text="${key}"></span>`;
  const input = (name, key, placeholder, required = false, maxLength = 200) => `<label>${label(key)}<input type="text" name="${name}" maxlength="${maxLength}" ${required ? "required" : ""} data-feedback-placeholder="${placeholder}"></label>`;
  const textarea = (name, key, placeholder, required = false) => `<label class="feedback-wide">${label(key)}<textarea name="${name}" rows="3" maxlength="8000" ${required ? "required" : ""} data-feedback-placeholder="${placeholder}"></textarea></label>`;
  const select = (name, key, options) => `<label class="feedback-wide">${label(key)}<select name="${name}" required>${options.map(([value, text]) => `<option value="${value}" data-feedback-text="${text}"></option>`).join("")}</select></label>`;
  section.innerHTML = `<div class="section-title"><div><p class="eyebrow" data-feedback-text="subtitle"></p><h2 id="feedbackTitle" data-feedback-text="title"></h2></div></div>
    <p data-feedback-text="intro"></p><article class="feedback-log-guide"><h3 data-feedback-text="logTitle"></h3><p data-feedback-text="logIntro"></p>
      <ol><li>${label("logStep1")}<div class="feedback-command"><code>shell:Personal</code><button type="button" id="feedbackCopyPath" data-feedback-text="copyCommand"></button></div></li><li>${label("logStep2")}</li><li>${label("logStep3")}</li></ol>
      <p class="feedback-hint" data-feedback-text="logTip"></p><details><summary data-feedback-text="missingHelp"></summary><p data-feedback-text="missingText"></p></details>
      <p id="feedbackCopyStatus" role="status"></p></article>
    <form id="feedbackForm"><fieldset><legend data-feedback-text="infoTitle"></legend><p class="feedback-hint" data-feedback-text="requiredNote"></p><div class="feedback-fields">
      ${textarea("description", "description", "descriptionPlaceholder", true)}
      ${select("environment", "environment", [["", "chooseEnvironment"], ["legends", "legends"], ["reforged", "reforged"], ["vanilla", "vanilla"], ["other", "other"]])}
      <div id="feedbackEnvironmentOther" class="feedback-wide" hidden>${input("environmentOther", "environmentOther", "environmentOtherPlaceholder")}</div>
      ${input("valkyriesVersion", "valkyriesVersion", "versionPlaceholder", true)}${input("enchantmentVersion", "enchantmentVersion", "enchantmentPlaceholder", true)}
    </div></fieldset>
    <fieldset><legend data-feedback-text="filesTitle"></legend><label>${label("chooseLog")}<input id="feedbackLog" type="file" accept=".html,.htm,.log,.txt" aria-describedby="feedbackLogHint"></label>
      <p id="feedbackLogHint" class="feedback-hint" data-feedback-text="logHint"></p><p id="feedbackLogFiles" class="feedback-file-list"></p>
      <label class="feedback-checkbox"><input id="feedbackNoLog" name="noLog" type="checkbox">${label("noLog")}</label>
      <label>${label("screenshots")}<input id="feedbackScreenshots" type="file" accept=".png,.jpg,.jpeg,.webp" multiple aria-describedby="feedbackScreenshotHint"></label>
      <p id="feedbackScreenshotHint" class="feedback-hint" data-feedback-text="screenshotHint"></p><p id="feedbackScreenshotFiles" class="feedback-file-list"></p>
    </fieldset><fieldset><legend data-feedback-text="downloadTitle"></legend><p data-feedback-text="contents"></p><button id="feedbackDownload" type="submit" class="feedback-primary" data-feedback-text="download"></button><p data-feedback-text="delivery"></p><p id="feedbackStatus" role="status" aria-live="polite"></p></fieldset></form>`;

  const form = document.getElementById("feedbackForm"), logInput = document.getElementById("feedbackLog"), screenshotInput = document.getElementById("feedbackScreenshots"), noLog = document.getElementById("feedbackNoLog"), button = document.getElementById("feedbackDownload"), statusElement = document.getElementById("feedbackStatus");
  const fields = () => {
    const values = Object.fromEntries([...new FormData(form)].filter(([, value]) => typeof value === "string").map(([key, value]) => [key, value.trim()]));
    if (values.environment !== "other") delete values.environmentOther;
    return values;
  };
  function fileList(input) {
    return input.files.length ? [...input.files].map(file => `${file.name} (${(file.size / 1024).toFixed(1)} KB)`).join("\n") : t("noFiles");
  }
  function updateFiles() {
    document.getElementById("feedbackLogFiles").textContent = noLog.checked ? "" : fileList(logInput);
    document.getElementById("feedbackScreenshotFiles").textContent = fileList(screenshotInput);
  }
  function showStatus(key, values = {}, error = false) {
    status = { key, values, error };
    statusElement.textContent = t(key, values);
    statusElement.classList.toggle("is-error", error);
  }
  function setLanguage(value) {
    lang = value === "en" ? "en" : "zh";
    section.querySelectorAll("[data-feedback-text]").forEach(element => { element.textContent = t(element.dataset.feedbackText); });
    section.querySelectorAll("[data-feedback-placeholder]").forEach(element => { element.placeholder = t(element.dataset.feedbackPlaceholder); });
    button.textContent = t(busy ? "generating" : "download");
    if (status) showStatus(status.key, status.values, status.error);
    document.getElementById("feedbackCopyStatus").textContent = "";
    updateFiles();
  }
  function validationError(log, screenshots) {
    if (!log && !noLog.checked) return { key: "logMissing" };
    if (log && !/\.(html?|log|txt)$/i.test(log.name)) return { key: "invalidLog" };
    if (screenshots.length > 5) return { key: "tooMany" };
    if (screenshots.some(file => !/\.(png|jpe?g|webp)$/i.test(file.name))) return { key: "invalidScreenshot" };
    const files = [log, ...screenshots].filter(Boolean);
    const empty = files.find(file => file.size === 0);
    if (empty) return { key: "emptyFile", values: { name: empty.name } };
    const oversized = files.find(file => file.size > maxFileSize);
    if (oversized) return { key: "tooLarge", values: { name: oversized.name } };
    if (files.reduce((sum, file) => sum + file.size, 0) > maxTotalSize) return { key: "totalLarge" };
    return null;
  }
  noLog.addEventListener("change", () => {
    logInput.disabled = noLog.checked;
    updateFiles();
  });
  form.elements.environment.addEventListener("change", () => {
    const other = form.elements.environment.value === "other";
    document.getElementById("feedbackEnvironmentOther").hidden = !other;
    form.elements.environmentOther.required = other;
  });
  [logInput, screenshotInput].forEach(input => input.addEventListener("change", updateFiles));
  document.getElementById("feedbackCopyPath").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("shell:Personal");
      document.getElementById("feedbackCopyStatus").textContent = t("copied");
    } catch (_) { document.getElementById("feedbackCopyStatus").textContent = t("copyFailed"); }
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (busy) return;
    const values = fields();
    for (const name of ["description", "environment", "valkyriesVersion", "enchantmentVersion", ...(values.environment === "other" ? ["environmentOther"] : [])]) {
      if (!values[name]) { form.elements[name].value = ""; form.reportValidity(); return; }
    }
    const log = noLog.checked ? null : logInput.files[0], screenshots = [...screenshotInput.files];
    const error = validationError(log, screenshots);
    if (error) { showStatus(error.key, error.values, true); return; }
    busy = true;
    // Keep the submitted form and file selection stable until the archive is ready.
    const controls = [...form.querySelectorAll("input, textarea, select, button")].map(element => ({ element, disabled: element.disabled }));
    controls.forEach(({ element }) => { element.disabled = true; });
    button.textContent = t("generating");
    form.setAttribute("aria-busy", "true");
    showStatus("generating");
    try {
      const created = new Date(), entries = [], { safeFilename, createZip } = window.BV_FEEDBACK_PACK;
      if (log) entries.push({ name: `log/${safeFilename(log.name)}`, content: log });
      screenshots.forEach((file, index) => entries.push({ name: `images/${String(index + 1).padStart(2, "0")}-${safeFilename(file.name)}`, content: file }));
      const manifest = [log, ...screenshots].filter(Boolean).map((file, index) => ({ name: file.name, path: entries[index].name, bytes: file.size, lastModified: new Date(file.lastModified).toISOString() }));
      const report = { formatVersion: 2, createdAt: created.toISOString(), reportLanguage: lang, fields: values, logProvided: !!log, files: manifest,
        wikiSnapshot: { sourceRevision: window.BV_WIKI_DATA?.meta?.sourceRevision || "", updatedAt: window.BV_WIKI_DATA?.meta?.updatedAt || "" } };
      const text = ["Battle Valkyries 错误反馈 / Bug report", `生成时间 / Created: ${created.toISOString()}`, "",
        ...["description", "environment", "valkyriesVersion", "enchantmentVersion"].map(name => {
          const value = name === "environment" ? (values.environment === "other" ? values.environmentOther : `${copy.zh[values.environment]} / ${copy.en[values.environment]}`) : values[name];
          return `${copy.zh[name].replace(/\s*\*$/, "")} / ${copy.en[name].replace(/\s*\*$/, "")}:\r\n${value}\r\n`;
        }),
        `日志 / Log: ${log ? log.name : "未提供 / missing"}`, "",
        "附件 / Attachments:", ...manifest.map(file => `${file.path} (${file.bytes} bytes)`), "",
        `Wiki snapshot: ${report.wikiSnapshot.sourceRevision} (${report.wikiSnapshot.updatedAt})`,
        "Wiki snapshot identifies the reference page, not the player's installed game/mod version.", "",
        "请将整个 ZIP 通过 QQ 发送给作者。本页面没有自动发送反馈。",
        "Send this complete ZIP to the author via QQ. The page has not sent it automatically.",
      ].join("\r\n");
      entries.unshift({ name: lang === "zh" ? "反馈说明.txt" : "report.txt", content: `\ufeff${text}` }, { name: lang === "zh" ? "结构化信息.json" : "report.json", content: JSON.stringify(report, null, 2) });
      const zip = await createZip(entries, created);
      const name = `BattleValkyries-feedback-${created.toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z")}.zip`;
      const url = URL.createObjectURL(zip), anchor = document.createElement("a");
      anchor.href = url; anchor.download = name; document.body.append(anchor); anchor.click(); anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      showStatus("success", { name });
    } catch (_) { showStatus("failure", {}, true); }
    finally {
      busy = false;
      controls.forEach(({ element, disabled }) => { element.disabled = disabled; });
      button.textContent = t("download");
      form.removeAttribute("aria-busy");
    }
  });
  window.BV_FEEDBACK = { setLanguage };
  setLanguage(lang);
}());

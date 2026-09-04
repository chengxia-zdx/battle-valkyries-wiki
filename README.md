# Battle Valkyries Wiki

Static bilingual wiki for the Battle Valkyries and Alchemy & Enchantment Battle Brothers mods.

## Tech Stack

- Zero-build static frontend: `index.html`, `styles.css`, `app.js`
- Generated local data: `data/wiki-data.js`
- Local mod art copied into `assets/`
- Deploys directly with GitHub Pages from the repository root

## Refresh Data

From this repository:

```powershell
npm run refresh
```

The extractor reads the current source tree for both mods, including Valkyrie and Lily configuration, skills, skins, summoning rules, and the complete equipment rarity and affix catalog. It regenerates `data/wiki-data.js` and the local `assets/` tree.

To use a mod checkout in another location, pass it directly:

```powershell
node tools\extract-wiki-data.mjs D:\path\to\battle-valkyries
```

Verify the generated counts and every referenced asset with:

```powershell
npm run check
```

## Local Preview

```powershell
npm run preview
```

Then open the URL printed by the command. The default is `http://127.0.0.1:4173/`.

## Deploy

Push this repository to GitHub, then enable GitHub Pages with:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

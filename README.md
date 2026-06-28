# Battle Valkyries Wiki

Static bilingual wiki for the `battle-valkyries` Battle Brothers mod.

## Tech Stack

- Zero-build static frontend: `index.html`, `styles.css`, `app.js`
- Generated local data: `data/wiki-data.js`
- Local mod art copied into `assets/`
- Deploys directly with GitHub Pages from the repository root

## Refresh Data

From this repository:

```powershell
node tools\extract-wiki-data.mjs F:\code\battle-valkyries
```

The extractor reads the mod configuration, i18n dictionaries, summon hook, and image assets, then regenerates `data/wiki-data.js` and `assets/`.

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

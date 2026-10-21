# Nouf Albader — Portfolio

Designs, visuals and content made to be felt.

Plain HTML, CSS and JavaScript. No build step.

## Files

- `index.html` — page structure (hero, work, content creation, contact)
- `styles.css` — the Obsidian Chrome design system (colours, type, glass, motion)
- `app.js` — all the content: projects, content-creation collections, captions, and the page router
- `assets/content/<collection>/NN.png` — pages exported from the Canva "Portfolio" folder

## Edit content

Everything you'd want to change is at the top of `app.js`:

- `PROJECTS` — one entry per work card. `link` adds a "Visit" button.
- `CONTENT` — the four content-creation collections. Each `shots` entry is a caption; image `NN` matches its position.

To swap images, drop new files into `assets/content/<collection>/` with the same numbering. If they're `.jpg`, change `IMG_EXT` in `app.js`.

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

Settings → Pages → Source: "Deploy from a branch" → `main` / root.

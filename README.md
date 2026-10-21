# Nouf Albader — Portfolio

Designer & Product builder. Work showcase and experience.

Plain HTML, CSS and JavaScript. No build step.

## Files

- `index.html` — page structure (intro, work, content creation, contact)
- `styles.css` — colours, type, glass panels, sliding card rows
- `app.js` — all the content: projects, content-creation links, and the page router
- `assets/` — backgrounds, work screenshots (`work/`) and content-creation previews (`content/`)

## Edit content

Everything you'd want to change is at the top of `app.js`:

- `PROJECTS` — one entry per work card. `shot` sets the screenshot preview, `link` adds a "Visit" button.
- `CONTENT` — the four content-creation collections. `href` is the Canva link, `photo` is the card preview.

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

Settings → Pages → Source: "Deploy from a branch" → `main` / root.

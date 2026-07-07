# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build:css    # Build and minify Tailwind CSS (src/input.css → dist/output.css)
npm run watch:css    # Watch and rebuild CSS on changes
npm run serve        # Start Python dev server on port 8080
node screenshot.js   # Take a 1920x1080 screenshot → screenshot-latest.png
```

### Slash Commands (use via Claude Code skills)
- `/screenshot` — Capture current page via Puppeteer
- `/compare` — Compare `screenshot-latest.png` against the reference image
- `/preview` — Open `index.html` in browser
- `/dev` — Start local dev server on port 8080

## Architecture

Static site deployed to GitHub Pages by `.github/workflows/deploy.yml`:

- **`index.html`** — the production site: a retro poster design (smoking trout, live canvas smoke simulation). Fully self-contained: bespoke CSS, fonts embedded as base64 woff2, no Tailwind, no external requests.
- **Screenshots**: `screenshot.js` uses Puppeteer at 1920×1080 viewport, saves to `screenshot-latest.png`
- **Deploy**: the workflow's "Assemble site" step copies files explicitly (`index.html`, `dist/`, `assets/`, `artsy/`, `CNAME`) — new top-level files/dirs must be added there or they won't deploy

## Design Recreation Workflow

This project uses an iterative pixel-perfect recreation workflow:

1. Edit `index.html`
2. Run `/screenshot` to capture the rendered page
3. Run `/compare` to diff against the reference image
4. Fix mismatches (spacing, colors, fonts, alignment)
5. Repeat until within ~2–3px of the reference

**Key constraint**: Match the reference exactly — do not improve, add, or remove anything not in the reference image. Use `https://placehold.co/` for missing images.

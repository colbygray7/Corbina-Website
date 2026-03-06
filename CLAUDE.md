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

This is a **single-page static website** (`index.html`) built with Tailwind CSS.

- **CSS pipeline**: `src/input.css` → Tailwind CLI → `dist/output.css` (linked in `index.html`)
- **Fonts**: Space Grotesk (body/sans), Syne (headings), Nunito — loaded from Google Fonts
- **Screenshots**: `screenshot.js` uses Puppeteer at 1920×1080 viewport, saves to `screenshot-latest.png`
- **Tailwind config**: `tailwind.config.js` scans only `index.html`; extends theme with `font-heading` (Syne) and `font-sans` (Space Grotesk)

## Design Recreation Workflow

This project uses an iterative pixel-perfect recreation workflow:

1. Edit `index.html`
2. Run `/screenshot` to capture the rendered page
3. Run `/compare` to diff against the reference image
4. Fix mismatches (spacing, colors, fonts, alignment)
5. Repeat until within ~2–3px of the reference

**Key constraint**: Match the reference exactly — do not improve, add, or remove anything not in the reference image. Use `https://placehold.co/` for missing images.

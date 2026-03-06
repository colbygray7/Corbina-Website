# Corbina Website

Website design recreation project using Tailwind CSS and iterative screenshot comparison workflow.

## Setup

### Prerequisites
- Node.js and npm installed
- Python 3 (for local dev server)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/colbygray7/Corbina-Website.git
cd Corbina-Website
```

2. Install dependencies:
```bash
npm install
```

## Workflow

This project uses an iterative design workflow to recreate website designs with pixel-perfect accuracy.

### Quick Start

1. **Take a screenshot**:
   ```
   /screenshot
   ```

2. **Compare with reference**:
   ```
   /compare
   ```

3. **Preview in browser**:
   ```
   /preview
   ```

4. **Start dev server**:
   ```
   /dev
   ```

### Full Design Process

1. **Generate** - Create initial HTML with Tailwind CSS
2. **Screenshot** - Capture rendered page (1920x1080 viewport)
3. **Compare** - Analyze differences vs reference image
4. **Fix** - Edit HTML/Tailwind to match reference
5. **Repeat** - Iterate until pixel-perfect (2-3px tolerance)

See [.claude/skills/screenshot-workflow.md](.claude/skills/screenshot-workflow.md) for detailed workflow documentation.

## Project Structure

```
.
├── index.html              # Main website file
├── screenshot.js           # Puppeteer screenshot script
├── package.json           # Dependencies and scripts
├── .claude/
│   ├── commands/          # Slash commands
│   ├── rules/             # Project rules
│   └── skills/            # Workflow documentation
└── dist/                  # Build output
```

## Available Commands

### NPM Scripts
- `npm run build:css` - Build and minify CSS
- `npm run watch:css` - Watch CSS changes
- `npm run serve` - Start Python dev server on port 8080

### Slash Commands
- `/screenshot` - Take screenshot of current page
- `/compare` - Compare screenshot with reference
- `/preview` - Open page in browser
- `/dev` - Start local development server

## Tech Stack

- **Tailwind CSS** (via CDN for rapid prototyping)
- **Puppeteer** (for automated screenshots)
- **Python http.server** (for local development)

## Design Principles

- Pixel-perfect recreation (2-3px tolerance)
- Mobile-first responsive design
- Match reference exactly - no "improvements"
- Use provided CSS classes/tokens verbatim

## Git Workflow

See [.claude/skills/git-workflow.md](.claude/skills/git-workflow.md) for commit guidelines.

## License

MIT

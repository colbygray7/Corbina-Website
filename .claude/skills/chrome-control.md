# Chrome Control Skill

This skill drives a persistent Google Chrome session for browser automation,
backed by `chrome.js` (Puppeteer). Useful for testing the live site, clicking
through flows, scraping rendered content, or capturing PNG/PDF output.

## How it works

`chrome.js start` launches Chrome with `--remote-debugging-port=9222` and a
fixed `--user-data-dir` (`.chrome-profile/`). Every other subcommand reconnects
to that same browser via `puppeteer.connect`, so navigation and page state
persist across separate command invocations.

In a headless container there is no display, so Chrome runs headless by default
(`--headless=new`). Use `--headful` only where an X server is available.

## Commands

| Command | Purpose |
|---------|---------|
| `node chrome.js start [--headful]` | Launch the session |
| `node chrome.js open <url>` | Navigate the active tab |
| `node chrome.js screenshot [path] [--full]` | Capture a PNG |
| `node chrome.js click <selector>` | Click an element |
| `node chrome.js type <selector> <text>` | Type into an element |
| `node chrome.js eval "<js>"` | Evaluate JS, print the result |
| `node chrome.js text [selector]` | Print innerText |
| `node chrome.js pdf [path]` | Save the page as PDF |
| `node chrome.js url` | Print the active tab URL |
| `node chrome.js stop` | Close the session |

## Typical flow

```bash
node chrome.js start
node chrome.js open https://corbinatech.com
node chrome.js screenshot home.png --full
node chrome.js text h1
node chrome.js stop
```

## Notes

- Requires the `puppeteer` dependency (already in `package.json`).
- `.chrome-profile/` and `.chrome.pid` are runtime artifacts — keep them gitignored.
- Selectors are standard CSS selectors passed to Puppeteer.

Control a live Google Chrome session via the `chrome.js` Puppeteer driver.

Chrome stays running between commands (launched with a remote-debugging port),
so you can open a page, then interact with it across multiple invocations.

Run `node chrome.js start` once, then drive the session:

- `node chrome.js start [--headful]` — launch Chrome (headless by default; `--headful` needs a display)
- `node chrome.js open <url>` — navigate the active tab
- `node chrome.js screenshot [path] [--full]` — capture PNG (default `chrome-shot.png`)
- `node chrome.js click <selector>` — click an element
- `node chrome.js type <selector> <text>` — type into an element
- `node chrome.js eval "<js>"` — run JS in the page and print the result
- `node chrome.js text [selector]` — print innerText (default `body`)
- `node chrome.js pdf [path]` — save the page as PDF
- `node chrome.js url` — print the active tab's URL
- `node chrome.js stop` — close the session

If a command reports Chrome isn't running, run `node chrome.js start` first.
After capturing a screenshot, read the image file to view it.

$ARGUMENTS

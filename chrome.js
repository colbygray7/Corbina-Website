#!/usr/bin/env node
/**
 * chrome.js — control a persistent Google Chrome session via Puppeteer.
 *
 * Chrome is launched once with a remote-debugging port and a fixed user-data
 * dir, so subsequent commands reconnect to the same live browser and page.
 *
 * Usage:
 *   node chrome.js start [--headful]      Launch Chrome (headless by default)
 *   node chrome.js open <url>             Navigate the active tab to a URL
 *   node chrome.js screenshot [path] [--full]   Capture PNG (default chrome-shot.png)
 *   node chrome.js click <selector>       Click the first matching element
 *   node chrome.js type <selector> <text> Type text into an element
 *   node chrome.js eval "<js>"            Run JS in the page, print the result
 *   node chrome.js text [selector]        Print innerText (default: body)
 *   node chrome.js pdf [path]             Save the page as PDF (default page.pdf)
 *   node chrome.js url                    Print the active tab's current URL
 *   node chrome.js stop                   Close the browser session
 */

const puppeteer = require('puppeteer');
const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 9222;
const BROWSER_URL = `http://127.0.0.1:${PORT}`;
const PROFILE_DIR = path.resolve(__dirname, '.chrome-profile');
const PID_FILE = path.resolve(__dirname, '.chrome.pid');
const VIEWPORT = { width: 1920, height: 1080 };

function fetchJSON(url, timeout = 1500) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { timeout }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

async function isRunning() {
  try { await fetchJSON(`${BROWSER_URL}/json/version`); return true; }
  catch { return false; }
}

async function connect() {
  if (!(await isRunning())) {
    throw new Error('Chrome is not running. Run "node chrome.js start" first.');
  }
  return puppeteer.connect({ browserURL: BROWSER_URL, defaultViewport: VIEWPORT });
}

// Return the most recently focused normal page (ignoring devtools/extensions).
async function activePage(browser) {
  const pages = (await browser.pages()).filter(
    (p) => !p.url().startsWith('devtools://')
  );
  if (pages.length === 0) return browser.newPage();
  return pages[pages.length - 1];
}

async function start(headful) {
  if (await isRunning()) {
    console.log(`Chrome already running on ${BROWSER_URL}`);
    return;
  }
  const args = [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${PROFILE_DIR}`,
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ];
  if (!headful) args.unshift('--headless=new');

  const execPath = puppeteer.executablePath();
  const child = spawn(execPath, args, { detached: true, stdio: 'ignore' });
  child.unref();
  fs.writeFileSync(PID_FILE, String(child.pid));

  // Wait for the debugging endpoint to come up (max ~15s).
  for (let i = 0; i < 60; i++) {
    if (await isRunning()) {
      console.log(`Chrome started (${headful ? 'headful' : 'headless'}), pid ${child.pid}, debugging on ${BROWSER_URL}`);
      return;
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('Chrome did not become ready in time.');
}

async function stop() {
  let stopped = false;
  if (await isRunning()) {
    try {
      const browser = await puppeteer.connect({ browserURL: BROWSER_URL });
      await browser.close();
      stopped = true;
    } catch { /* fall through to pid kill */ }
  }
  if (fs.existsSync(PID_FILE)) {
    const pid = Number(fs.readFileSync(PID_FILE, 'utf8'));
    try { process.kill(pid); stopped = true; } catch { /* already gone */ }
    fs.unlinkSync(PID_FILE);
  }
  console.log(stopped ? 'Chrome stopped.' : 'Chrome was not running.');
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const flags = rest.filter((a) => a.startsWith('--'));
  const args = rest.filter((a) => !a.startsWith('--'));

  switch (cmd) {
    case 'start':
      return start(flags.includes('--headful'));
    case 'stop':
      return stop();
  }

  const browser = await connect();
  try {
    const page = await activePage(browser);

    switch (cmd) {
      case 'open':
      case 'goto': {
        if (!args[0]) throw new Error('Usage: open <url>');
        const url = /^https?:\/\//.test(args[0]) ? args[0] : `https://${args[0]}`;
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
        console.log(`Opened ${page.url()}`);
        break;
      }
      case 'screenshot': {
        const out = args[0] || 'chrome-shot.png';
        await page.screenshot({ path: out, fullPage: flags.includes('--full') });
        console.log(`Saved ${out}`);
        break;
      }
      case 'click':
        if (!args[0]) throw new Error('Usage: click <selector>');
        await page.click(args[0]);
        console.log(`Clicked ${args[0]}`);
        break;
      case 'type':
        if (args.length < 2) throw new Error('Usage: type <selector> <text>');
        await page.type(args[0], args.slice(1).join(' '));
        console.log(`Typed into ${args[0]}`);
        break;
      case 'eval': {
        if (!args[0]) throw new Error('Usage: eval "<js>"');
        const result = await page.evaluate((code) => {
          // eslint-disable-next-line no-eval
          return Promise.resolve(eval(code));
        }, args.join(' '));
        console.log(typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result));
        break;
      }
      case 'text': {
        const sel = args[0] || 'body';
        const txt = await page.$eval(sel, (el) => el.innerText);
        console.log(txt);
        break;
      }
      case 'pdf': {
        const out = args[0] || 'page.pdf';
        await page.pdf({ path: out, format: 'A4', printBackground: true });
        console.log(`Saved ${out}`);
        break;
      }
      case 'url':
        console.log(page.url());
        break;
      default:
        console.log('Unknown command. See header of chrome.js for usage.');
        process.exitCode = 1;
    }
  } finally {
    browser.disconnect();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});

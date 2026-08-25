import { chromium, devices } from "playwright";
import { mkdirSync } from "fs";

const OUT = "/workspace/artifacts/mobile-shots";
mkdirSync(OUT, { recursive: true });

const iPhone = devices["iPhone 14"];
const browser = await chromium.launch();
const context = await browser.newContext({
  ...iPhone,
  deviceScaleFactor: 3,
  locale: "fr-FR",
  colorScheme: "light",
});
await context.addInitScript(() => {
  localStorage.setItem("takologs-cookies", "accept");
  localStorage.setItem("takologs-theme", "light");
  localStorage.setItem("takologs-accent-hue", "36");
  localStorage.setItem("takologs-lang", "fr");
});
const page = await context.newPage();
page.setDefaultTimeout(20000);

async function go(path) {
  await page.goto(`http://127.0.0.1:8765/#${path}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1400);
}

async function shot(name) {
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log("shot", name);
}

async function clip(name, selector) {
  const el = page.locator(selector).first();
  if (!(await el.count())) {
    console.log("miss", name, selector);
    return;
  }
  try {
    await el.screenshot({ path: `${OUT}/${name}.png` });
    console.log("clip", name);
  } catch (e) {
    console.log("fail", name, e.message);
  }
}

await go("/");
await shot("home");
await clip("piece-search", "button:has-text('TakoAI'), button:has-text('Demander')");
await clip("piece-kicker", "span:has-text('Savoir')");
await clip("piece-alert-card", "a:has-text('Alertes')");
await clip("piece-news", "form:has-text('Newsletter'), form:has-text('S’abonner')");
await clip("piece-sub-card", "a:has-text('MDMA'), article, [class*='Substance']");

await go("/substances");
await shot("substances");
await page.waitForTimeout(400);
await clip("piece-cats", "button:has-text('Stimulant'), button:has-text('all')");

await go("/alerts");
await shot("alerts");

await go("/reduction");
await shot("reduction");

await go("/experiences");
await shot("experiences");

await go("/neuro");
await shot("neuro");

await go("/substance/mdma");
await shot("mdma");

await go("/");
await page.keyboard.press("Meta+k").catch(() => {});
await page.waitForTimeout(500);
const bot = page.locator("button").filter({ has: page.locator("svg") }).nth(1);
try {
  await page.locator("header button").first().click({ timeout: 1500 });
} catch {}
await page.waitForTimeout(800);
await shot("search");

await browser.close();
console.log("done");

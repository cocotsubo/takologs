import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const errors = [];

async function shot(page, path) {
  await page.waitForTimeout(350);
  await page.screenshot({ path, fullPage: false });
}

const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const searchBtn = page.locator("header button").filter({ has: page.locator("svg") }).first();
await page.locator("header").getByRole("button").nth(0).click();
await page.waitForTimeout(300);
await shot(page, "/workspace/screenshots/qa-search.png");
await page.keyboard.press("Escape");

await page.goto("http://127.0.0.1:8080/profile", { waitUntil: "networkidle" });
await shot(page, "/workspace/screenshots/qa-profile.png");

const langBtns = page.getByRole("button");
const count = await langBtns.count();
for (let i = 0; i < count; i++) {
  const txt = (await langBtns.nth(i).innerText()).trim();
  if (txt === "English" || txt === "Français") {
    if (txt === "English") {
      await langBtns.nth(i).click();
      break;
    }
  }
}
await shot(page, "/workspace/screenshots/qa-profile-en.png");

await page.goto("http://127.0.0.1:8080/substance/lsd", { waitUntil: "networkidle" });
await shot(page, "/workspace/screenshots/qa-lsd.png");

await page.goto("http://127.0.0.1:8080/logs", { waitUntil: "networkidle" });
await shot(page, "/workspace/screenshots/qa-logs.png");

const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await shot(mobile, "/workspace/screenshots/qa-mobile-dock.png");

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(300);
const headerBtns = page.locator("header button");
const n = await headerBtns.count();
for (let i = 0; i < n; i++) {
  const label = await headerBtns.nth(i).getAttribute("aria-label");
  if (label && /couleur|color|site/i.test(label)) {
    await headerBtns.nth(i).click();
    break;
  }
}
await page.waitForTimeout(200);
const mauve = page.locator('button[title="Mauve"], button[aria-label="Mauve"]');
if (await mauve.count()) await mauve.first().click();
await shot(page, "/workspace/screenshots/qa-theme-mauve.png");

console.log(
  JSON.stringify(
    {
      errors,
      searchOpen: await page.locator("text=/Recherche|Search/").count(),
      profile: await page.title(),
    },
    null,
    2,
  ),
);
await browser.close();

import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const baseUrl = process.env.PDT_CAPTURE_URL ?? "http://127.0.0.1:5173/";
const outputDir = fileURLToPath(new URL("../.impeccable/review/", import.meta.url));

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

async function makePage(viewport, theme = "light") {
  const context = await browser.newContext({ viewport, colorScheme: theme });
  await context.addInitScript((selectedTheme) => {
    window.localStorage.setItem("pdt-theme", selectedTheme);
  }, theme);
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return { context, page };
}

async function primePage(page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const viewport = page.viewportSize();
  const step = Math.max(480, Math.floor(viewport.height * 0.75));
  for (let y = 0; y < height; y += step) {
    await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

const desktopLight = await makePage({ width: 1440, height: 1000 }, "light");
await primePage(desktopLight.page);
await desktopLight.page.screenshot({ path: resolve(outputDir, "full-desktop-light.png"), fullPage: true });

await desktopLight.page.getByRole("button", { name: /Product rescue/ }).click();
await desktopLight.page.getByRole("button", { name: /Product rescue/ }).scrollIntoViewIfNeeded();
await desktopLight.page.locator("#services").screenshot({ path: resolve(outputDir, "services-open.png") });

await desktopLight.page.evaluate(() => document.activeElement?.blur());
for (let index = 0; index < 60; index += 1) {
  await desktopLight.page.keyboard.press("Tab");
  const focusedHref = await desktopLight.page.evaluate(() => document.activeElement?.getAttribute("href"));
  if (focusedHref?.startsWith("mailto:")) break;
}
await desktopLight.page.locator("#contact").screenshot({ path: resolve(outputDir, "contact-focus.png") });
await desktopLight.context.close();

const desktopDark = await makePage({ width: 1440, height: 1000 }, "dark");
await primePage(desktopDark.page);
await desktopDark.page.screenshot({ path: resolve(outputDir, "full-desktop-dark.png"), fullPage: true });
await desktopDark.context.close();

const mobile = await makePage({ width: 375, height: 812 }, "light");
await primePage(mobile.page);
await mobile.page.screenshot({ path: resolve(outputDir, "full-mobile-light.png"), fullPage: true });
await mobile.page.getByRole("button", { name: "Open navigation" }).click();
await mobile.page.waitForTimeout(300);
await mobile.page.screenshot({ path: resolve(outputDir, "mobile-menu.png") });
await mobile.context.close();

await browser.close();

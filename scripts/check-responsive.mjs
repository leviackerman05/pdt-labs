import { chromium } from "playwright-core";

const baseUrl = process.env.PDT_CAPTURE_URL ?? "http://127.0.0.1:5173/";
const widths = [320, 375, 768, 1024, 1440];
const results = [];
const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const result = await page.evaluate(() => {
    const visibleActions = [...document.querySelectorAll(".hero-actions a")].filter(
      (action) => getComputedStyle(action).display !== "none",
    );
    const actionRects = visibleActions.map((action) => action.getBoundingClientRect());
    const pricingRects = [...document.querySelectorAll(".pricing-card")].map((card) => card.getBoundingClientRect());
    const bookingLinks = [...document.querySelectorAll("a")].filter((link) => link.textContent?.includes("Book a call") || link.textContent?.includes("Book a rescue call"));
    return {
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      visibleActionLabels: visibleActions.map((action) => action.textContent?.trim()),
      actionsShareRow: actionRects.length === 2 ? Math.abs(actionRects[0].top - actionRects[1].top) < 3 : null,
      pricingCardsShareRow: pricingRects.length === 3
        ? Math.max(...pricingRects.map((rect) => rect.top)) - Math.min(...pricingRects.map((rect) => rect.top)) < 3
        : false,
      bookingLinksAreCorrect: bookingLinks.length === 6 && bookingLinks.every((link) => (
        link.getAttribute("href") === "https://cal.com/pdtlabs/quick-chat"
        && link.getAttribute("target") === "_blank"
        && link.getAttribute("rel")?.includes("noreferrer")
      )),
    };
  });
  const teaserText = page.locator(".work-more p");
  const teaserBeforeHover = await teaserText.boundingBox();
  await page.locator(".work-more").hover();
  const teaserAfterHover = await teaserText.boundingBox();
  result.teaserDoesNotReflow = Boolean(
    teaserBeforeHover
    && teaserAfterHover
    && Math.abs(teaserBeforeHover.width - teaserAfterHover.width) < 1
    && Math.abs(teaserBeforeHover.height - teaserAfterHover.height) < 1,
  );
  results.push(result);
  await context.close();
}

await browser.close();

const failures = results.filter((result) => {
  const mobileActionsAreCorrect = result.visibleActionLabels.length === 2 && result.actionsShareRow;
  const desktopActionIsCorrect = result.visibleActionLabels.length === 1 && result.visibleActionLabels[0]?.startsWith("See shipped work");
  const pricingLayoutIsCorrect = result.viewport <= 780 ? !result.pricingCardsShareRow : result.pricingCardsShareRow;
  return result.documentWidth > result.viewport
    || (result.viewport <= 780 ? !mobileActionsAreCorrect : !desktopActionIsCorrect)
    || !pricingLayoutIsCorrect
    || !result.teaserDoesNotReflow
    || !result.bookingLinksAreCorrect;
});
console.log(JSON.stringify(results, null, 2));

if (failures.length > 0) {
  console.error("Responsive layout check failed.");
  process.exit(1);
}

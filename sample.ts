import { chromium } from "playwright";
import { getEdgePath } from "edge-paths";

(async () => {
  const browser = await chromium.launch({
    executablePath: getEdgePath(),
  });
  const context = await browser.newContext({
    viewport: {
      width: 800,
      height: 600,
    },
  });
  const page = await context.newPage();
  await page.goto("https://www.microsoft.com/edge");
  await page.screenshot({ path: "microsoft-edge.png" });

  await browser.close();
})();

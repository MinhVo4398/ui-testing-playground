const { test } = require("@playwright/test");
const { ScrollbarsPage } = require("../models/scrollbars-model");

test("Clicking the Hidden button", async ({ page }) => {
  await page.pause();
  const scrollbarPage = new ScrollbarsPage(page);
  await scrollbarPage.navigateToScrollbars();
  await scrollbarPage.clickHidingButton();
});

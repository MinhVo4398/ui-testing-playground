const { test } = require("@playwright/test");
const { HomePage } = require("../models/home-page.model");

test("Navigate to Home Page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  console.log(await homePage.getQuote());
});

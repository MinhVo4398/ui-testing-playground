const { test } = require("@playwright/test");
const { ProgressBarPage } = require("../models/progress-bar.model");
test("Check progress is 75%", async ({ page }) => {
  const progressBarPage = new ProgressBarPage(page);
  await progressBarPage.navigateToProgressBarPage();
  await progressBarPage.clickStartButton();
  while ((await progressBarPage.progressBarPercent()) != "75%") {
    console.log(
      `current percent is at ${await await progressBarPage.progressBarPercent()}`
    );
  }
  await progressBarPage.clickStopButton();
});

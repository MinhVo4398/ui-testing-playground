// @ts-check
const { test, expect } = require("@playwright/test");
const { SampleAppPage } = require("../models/sample-app.model");

test("log in success", async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page);
  await sampleAppPage.navigateToSampleApp();
  await sampleAppPage.fillUserNameField("Percival Picklepans");
  await sampleAppPage.fillPasswordField("pwd");
  await sampleAppPage.clickLoginButton();
  await sampleAppPage.expectLoginTextToBe("Welcome, Percival Picklepans!");
});
test("Wrong password test", async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page);
  await sampleAppPage.navigateToSampleApp();
  await sampleAppPage.fillUserNameField("Gojo");
  await sampleAppPage.fillPasswordField("WrongPass");
  await sampleAppPage.clickLoginButton();
  await sampleAppPage.expectLoginTextToBe("Invalid username/password");
});

test("No user name test", async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page);
  await sampleAppPage.navigateToSampleApp();
  await sampleAppPage.fillUserNameField("");
  await sampleAppPage.fillPasswordField("pwd");
  await sampleAppPage.clickLoginButton();
  await sampleAppPage.expectLoginTextToBe("Invalid username/password");
});

test("Log out test", async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page);
  await sampleAppPage.navigateToSampleApp();
  await sampleAppPage.fillUserNameField("Gojo");
  await sampleAppPage.fillPasswordField("pwd");
  await sampleAppPage.clickLoginButton();
  await sampleAppPage.expectLoginTextToBe("Welcome, Gojo!");
  await sampleAppPage.clickLogoutButton();
  await sampleAppPage.expectLoginTextToBe("User logged out.");
});

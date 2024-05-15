// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Sample App" }).click();
  await page.getByPlaceholder("User Name").fill("Jon");
  await page.getByPlaceholder("********").fill("pwd");
  await page.getByRole("button", { name: "Log In" }).click();
  await expect(page.getByText("Welcome, Jon!")).toBeVisible();
});

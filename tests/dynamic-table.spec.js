const { test, expect } = require("@playwright/test");
const { DynamicTablePage } = require("../models/dynamic-table.model");

test("Testing Dynamic Table Page", async ({ page }) => {
  const dynamicTablePage = new DynamicTablePage(page);
  await dynamicTablePage.navigateToDynamicTablePage();
  let chromeCell = await dynamicTablePage.getChromeCellContent(1);
  let tableHeader = await dynamicTablePage.getHeaderCPUIndex();
  let chromeCpuPercentage = await dynamicTablePage.getChromeCpuPercentage();
  let validationMessage = await dynamicTablePage.getChromeValidationMessage();
  console.log(chromeCell);
  console.log(tableHeader);
  console.log(chromeCpuPercentage);
  console.log(validationMessage);
  expect(chromeCpuPercentage).toMatch(validationMessage);
});

const { expect } = require("@playwright/test");

export class TextInputPage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("http://uitestingplayground.com/textinput");
    this.inputBox = page.locator("#newButtonName");
    this.updatingButton = page.locator("#updatingButton");
  }

  async navigateToTextInputPage() {
    await this.url;
  }

  async fillInputBox(text) {
    await this.inputBox.fill(text);
  }

  async clickUpdatingButton() {
    await this.updatingButton.click();
  }

  async expectTextInputToBe(text) {
    await expect(this.updatingButton).toHaveText(text);
  }
}

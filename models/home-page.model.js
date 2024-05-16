exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.homePageUrl = page.goto("/");
    this.quote = page.locator(".mb-0");
  }

  async navigateToHomePage() {
    await this.homePageUrl;
  }

  async getQuote() {
    return await this.quote.innerText();
  }
};

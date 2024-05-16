exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.homePageUrl = page.goto("/")
  }

  async navigateToHomePage() {
    await this.homePageUrl 
  }
};

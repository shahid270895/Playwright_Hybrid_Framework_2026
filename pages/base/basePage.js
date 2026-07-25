class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

    async fill(locator, value) {
        await this.page.locator(locator).fill(value);
    }

    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async waitForVisible(locator) {
        await this.page.locator(locator).waitFor({
            state: "visible"
        });
    }

}

module.exports = BasePage;
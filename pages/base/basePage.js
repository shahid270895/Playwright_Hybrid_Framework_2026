const { expect } = require("@playwright/test");
const Logger = require("../../utils/logging/Logger");


class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator, elementName = "Element") {

        try {

            Logger.info(`Clicking on : ${elementName}`);

            await this.page.locator(locator).click();

            Logger.pass(`Successfully clicked : ${elementName}`);

        } catch (error) {

            Logger.error(`Failed to click : ${elementName}`);
            Logger.error(error.message);

            throw error;

        }

    }

    async fill(locator, value, elementName = "Element") {

        try {

            Logger.info(`Entering value in : ${elementName}`);

            await this.page.locator(locator).fill(value);

            Logger.pass(`Value entered successfully in : ${elementName}`);

        } catch (error) {

            Logger.error(`Failed to enter value in : ${elementName}`);
            Logger.error(error.message);

            throw error;

        }

    }

    async getText(locator, elementName = "Element") {

        try {

            Logger.info(`Getting text from : ${elementName}`);

            const text = await this.page.locator(locator).textContent();

            Logger.pass(`Retrieved text from ${elementName} : ${text?.trim()}`);

            return text?.trim();

        } catch (error) {

            Logger.error(`Failed to get text from : ${elementName}`);
            Logger.error(error.message);

            throw error;

        }

    }

    async isVisible(locator, elementName = "Element") {

        try {

            Logger.info(`Checking visibility of : ${elementName}`);

            const visible = await this.page.locator(locator).isVisible();

            Logger.info(`${elementName} Visible : ${visible}`);

            return visible;

        } catch (error) {

            Logger.error(`Failed to check visibility of : ${elementName}`);
            Logger.error(error.message);

            throw error;

        }

    }

    async isHidden(locator, elementName = "Element") {

        try {

            Logger.info(`Checking hidden state of : ${elementName}`);

            const hidden = await this.page.locator(locator).isHidden();

            Logger.info(`${elementName} Hidden : ${hidden}`);

            return hidden;

        } catch (error) {

            Logger.error(`Failed to check hidden state of : ${elementName}`);
            Logger.error(error.message);

            throw error;

        }

    }

    async isEnabled(locator, elementName = "Element") {

        try {

            Logger.info(`Checking enabled state of : ${elementName}`);

            const enabled = await this.page.locator(locator).isEnabled();

            Logger.info(`${elementName} Enabled : ${enabled}`);

            return enabled;

        } catch (error) {

            Logger.error(`Failed to check enabled state of : ${elementName}`);
            Logger.error(error.message);

            throw error;

        }

    }

    async verifyText(locator, expectedText, elementName = "Element") {

        try {

            Logger.info(`Verifying text of : ${elementName}`);

            await expect(this.page.locator(locator)).toContainText(expectedText);

            Logger.pass(`${elementName} text verified successfully`);

        } catch (error) {

            const actualText = await this.page.locator(locator).textContent();

            Logger.error(`Text verification failed for : ${elementName}`);
            Logger.error(`Expected : ${expectedText}`);
            Logger.error(`Actual   : ${actualText?.trim()}`);

            throw error;

        }

    }

    async verifyURL(expectedUrl) {

        try {

            const currentUrl = this.page.url();

            Logger.info("Verifying current URL");

            Logger.info(`Expected URL : ${expectedUrl}`);
            Logger.info(`Current URL  : ${currentUrl}`);

            await expect(this.page).toHaveURL(expectedUrl);

            Logger.pass("URL verified successfully");

        } catch (error) {

            Logger.error("URL verification failed");
            Logger.error(error.message);

            throw error;

        }

    }

}

module.exports = BasePage;
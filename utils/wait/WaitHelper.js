const Logger = require("../logging/Logger");

class WaitHelper {

    static async waitForVisible(locator, elementName, timeout = 10000) {

    try {

        Logger.info(`Waiting for [${elementName}] to become visible...`);

        await locator.waitFor({
            state: "visible",
            timeout
        });

        Logger.pass(`[${elementName}] is visible.`);

    } catch (error) {

        Logger.error(`Failed waiting for [${elementName}] to become visible. ${error.message}`);

        throw error;

        }

    }

    static async waitForHidden(locator, elementName, timeout = 10000) {

    try {

        Logger.info(`Waiting for [${elementName}] to become hidden...`);

        await locator.waitFor({
            state: "hidden",
            timeout
        });

        Logger.pass(`[${elementName}] is hidden.`);

    } catch (error) {

        Logger.error(`Failed waiting for [${elementName}] to become hidden. ${error.message}`);

        throw error;

        }

    }

    static async waitForURL(page, expectedURL, timeout = 10000) {

    try {

        Logger.info(`Waiting for URL : ${expectedURL}`);

        await page.waitForURL(expectedURL, {
            timeout
        });

        Logger.pass(`Successfully navigated to : ${expectedURL}`);

    } catch (error) {

        Logger.error(`Failed waiting for URL : ${expectedURL}`);

        throw error;

        }

    }

    static async waitForLoadState(page, state = "load") {

    try {

        Logger.info(`Waiting for page load state : ${state}`);

        await page.waitForLoadState(state);

        Logger.pass(`Page reached load state : ${state}`);

    } catch (error) {

        Logger.error(`Failed waiting for page load state : ${state}`);

        throw error;

        }

    }

}

module.exports = WaitHelper;
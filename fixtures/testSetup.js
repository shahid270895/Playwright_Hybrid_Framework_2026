const base = require("@playwright/test");
const { config } = require("../config");
const ScreenshotHelper = require("../utils/screenshot/ScreenshotHelper");
const Logger = require("../utils/logging/Logger");
const AllureHelper = require("../utils/allure/AllureHelper");
const path = require("path");

const test = base.test;
const expect = base.expect;

test.beforeEach(async ({ page }, testInfo) => {

    Logger.info(`Test Started : ${testInfo.title}`);

    AllureHelper.createEnvironmentFile();

    Logger.info(`Opening Application URL`);
    
    await page.goto(config.baseURL);

    Logger.pass(`Successfully Application URL Opened`);

});

test.afterEach(async ({ page }, testInfo) => {

    Logger.info(`Test Finished : ${testInfo.title}`);

    Logger.info(`Status : ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus) {

        Logger.error(`Test Failed : ${testInfo.title}`);

        const screenshotPath = await ScreenshotHelper.capture(
            page,
            testInfo.title
        );

        Logger.info(`Screenshot Saved : ${screenshotPath}`);

        const logPath = Logger.getLogFilePath();
        
        await AllureHelper.attachExecutionLog(logPath);

        await testInfo.attach(
            "Failure Screenshot",
            {
                path: screenshotPath,
                contentType: "image/png"
            }
        );

    }
    else {

        Logger.pass(`Test Passed : ${testInfo.title}`);

    }

});

module.exports = {
    test,
    expect
};
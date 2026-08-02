const path = require("path");

const DateTimeHelper = require("../common/DateTimeHelper");
const FileHelper = require("../common/FileHelper");
const Logger = require("../logging/Logger");

class ScreenshotHelper {

    static async capture(page, fileName) {

        try {

            Logger.info(`Capturing screenshot : ${fileName}`);

            const screenshotFolder = path.join(process.cwd(), "artifacts", "screenshots");

            FileHelper.createDirectory(screenshotFolder);

            const timestamp = DateTimeHelper.getFileTimestamp();

            const safeFileName = this.sanitizeFileName(fileName);

            const screenshotPath = path.join(
                screenshotFolder,
                `${safeFileName}_${timestamp}.png`
            );

            await page.screenshot({
                path: screenshotPath,
                fullPage: true
            });

            Logger.pass(`Screenshot saved : ${screenshotPath}`);

            return screenshotPath;

        }
        catch (error) {

            Logger.error(`Unable to capture screenshot : ${error.message}`);

            throw error;

        }

    }

    static sanitizeFileName(fileName) {

    return fileName
        .trim()
        .replace(/[<>:"/\\|?*]/g, "_")
        .replace(/\s+/g, "_");

    }

}

module.exports = ScreenshotHelper;
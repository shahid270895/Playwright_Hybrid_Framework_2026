const fs = require("fs");
const path = require("path");
const os = require("os");
const { config } = require("../../config");
const { attachment } = require("allure-js-commons");

class AllureHelper {

    // ================================
    // Environment.properties
    // ================================
    static createEnvironmentFile() {

        const resultsFolder = path.join(
            process.cwd(),
            "artifacts",
            "allure-results"
        );

        fs.mkdirSync(resultsFolder, { recursive: true });

        const filePath = path.join(
            resultsFolder,
            "environment.properties"
        );

        if (fs.existsSync(filePath)) {
            return;
        }

        const environmentProperties = [
            `Environment=${process.env.TEST_ENV || "qa"}`,
            `BaseURL=${config.baseURL}`,
            `Headless=${config.headless}`,
            `NodeVersion=${process.version}`,
            `OS=${os.type()} ${os.release()}`,
            `Framework=Playwright Hybrid Framework 2026`
        ].join("\n");

        fs.writeFileSync(filePath, environmentProperties);

    }

    // ================================
    // Execution Log Attachment
    // ================================
    static async attachExecutionLog(logPath) {

        if (!logPath || !fs.existsSync(logPath)) {
            return;
        }

        const logBuffer = fs.readFileSync(logPath);

        await attachment(
            "Execution Log",
            logBuffer,
            "text/plain"
        );

    }

}

module.exports = AllureHelper;
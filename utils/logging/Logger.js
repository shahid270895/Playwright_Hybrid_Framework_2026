const DateTimeHelper = require("../common/DateTimeHelper");
const path = require("path");
const FileHelper = require("../common/FileHelper");

class Logger {

    static logDirectory = path.join(
        process.cwd(),
        "artifacts",
        "logs"
    );

    static logFile = path.join(
        this.logDirectory,
        `Execution_${DateTimeHelper.getFileTimestamp()}.log`
    );

    static getLogFilePath() {
        return this.logFile;
    }

    static log(level, message) {

        const timestamp = DateTimeHelper.getCurrentDateTime();

        const logMessage = `[${timestamp}] [${level}] ${message}`;

        FileHelper.createDirectory(this.logDirectory);

        FileHelper.createFile(this.logFile);

        FileHelper.appendToFile(this.logFile, logMessage);

    }

    static info(message) {
        this.log("INFO", message);
    }

    static pass(message) {
        this.log("PASS", message);
    }

    static warn(message) {
        this.log("WARN", message);
    }

    static error(message) {
        this.log("ERROR", message);
    }

    static debug(message) {
        this.log("DEBUG", message);
    }

}

module.exports = Logger;
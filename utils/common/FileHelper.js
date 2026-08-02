const fs = require("fs");

class FileHelper {

    static createDirectory(directoryPath) {

        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

    }

    static fileExists(filePath) {

        return fs.existsSync(filePath);

    }

    static createFile(filePath) {

        if (!this.fileExists(filePath)) {
            fs.writeFileSync(filePath, "");
        }

    }

    static appendToFile(filePath, content) {

        fs.appendFileSync(filePath, content + "\n");

    }

}

module.exports = FileHelper;
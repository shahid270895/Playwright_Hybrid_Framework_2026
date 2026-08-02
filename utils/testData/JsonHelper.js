const fs = require("fs");
const path = require("path");

const Logger = require("../logging/Logger");

class JsonHelper {

    static read(fileName) {

        try {

            const filePath = path.join(
                process.cwd(),
                "testData",
                "json",
                `${fileName}.json`
            );

            Logger.info(`Reading JSON file : ${fileName}.json`);

            if (!fs.existsSync(filePath)) {
                throw new Error(`JSON file not found : ${filePath}`);
            }

            const jsonData = fs.readFileSync(
                filePath,
                "utf-8"
            );

            Logger.pass(`Successfully loaded : ${fileName}.json`);

            return JSON.parse(jsonData);

        }
        catch (error) {

            Logger.error(error.message);

            throw error;

        }

    }

    static getData(fileName, key) {

        const json = this.read(fileName);

        if (!json[key]) {

            throw new Error(
                `Key '${key}' not found in ${fileName}.json`
            );

        }

        return json[key];

    }

}

module.exports = JsonHelper;    
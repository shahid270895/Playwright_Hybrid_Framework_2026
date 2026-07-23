const fs = require("fs");
const path = require("path");

// Read environment from command line
const env = process.env.TEST_ENV || "qa";

// Build file path
const configPath = path.join(__dirname, `${env}.json`);

if (!fs.existsSync(configPath)) {
    throw new Error(`Configuration file not found: ${configPath}`);
}

// Read JSON configuration
const config = JSON.parse(fs.readFileSync(configPath));

module.exports = config;
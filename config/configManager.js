const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Read environment (default = qa)
const currentEnvironment = process.env.TEST_ENV || "qa";

// Build configuration file path
const configPath = path.join(
    __dirname,
    "environments",
    `${currentEnvironment}.json`
);

// Check if environment file exists
if (!fs.existsSync(configPath)) {
    throw new Error(`Configuration file not found: ${configPath}`);
}

// Read JSON configuration
const config = JSON.parse(
    fs.readFileSync(configPath, "utf8")
);

// Dynamically read credentials
const envPrefix = currentEnvironment.toUpperCase();


config.username =
    process.env[`${envPrefix}_USERNAME`] || process.env.USERNAME;

config.password =
    process.env[`${envPrefix}_PASSWORD`] || process.env.PASSWORD;

// Validate required configuration
const requiredKeys = [
    "environment",
    "baseURL",
    "timeout",
    "headless",
    "retries",
    "workers"
];

requiredKeys.forEach(key => {
    if (config[key] === undefined || config[key] === "") {
        throw new Error(
            `Missing required configuration '${key}' in ${currentEnvironment}.json`
        );
    }
});

// Validate credentials
if (!config.username || !config.password) {
    throw new Error(
        `Username or Password is missing for '${currentEnvironment.toUpperCase()}' environment in .env`
    );
}

module.exports = Object.freeze(config);
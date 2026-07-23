const { test } = require('@playwright/test');
const config = require('../config/configManager');

test('Read Config File', async () => {
    console.log(config);
});
const { test, expect } = require("../fixtures");
const { config } = require("../config");
const { allure } = require("allure-playwright");
const JsonHelper = require("../utils/testData/JsonHelper");
const RandomDataHelper = require("../utils/testData/RandomDataHelper");

    
test("User should login successfully with valid credentials", async ({ pages }) => {

    // ===== Allure Metadata =====
    await allure.epic("Authentication");
    await allure.feature("Login");
    await allure.story("Valid Login");
    await allure.severity("critical");
    await allure.owner("Shahid");
    await allure.tag("Smoke");
    await allure.tag("Regression");

    //Reading json data
    // const user = JsonHelper.getData("users", "validUser");
    // console.log(user.username);
    // console.log(user.password);

    //Reading random data
    // const email = RandomDataHelper.getEmail();
    // console.log(email);

    // Perform login
    await pages.loginPage.login(config.username, config.password);

    //Temp code:
    console.log("URL:", pages.homePage.page.url());

    console.log("Title:", await pages.homePage.page.title());

    // Verification
    await pages.homePage.verifyHomePagePageURL(/account/);
    console.log(await pages.homePage.getMyAccountText());
    await pages.homePage.verifyAccountText("My Account");
});

test("User should logout successfully", async ({ pages }) => {

    // ===== Allure Metadata =====
    await allure.epic("Authentication");
    await allure.feature("Login");
    await allure.story("Valid Login");
    await allure.severity("critical");
    await allure.owner("Shahid");
    await allure.tag("Smoke");
    await allure.tag("Regression");

    // Perform login
    await pages.loginPage.login(config.username, config.password);

    // Verification
    await pages.homePage.verifyHomePagePageURL(/account/);
    await pages.homePage.verifyAccountText("My Account");

    //perform logout
    await pages.homePage.Logout();
});
const base = require("./testSetup");

const LoginPage = require("../pages/login/LoginPage");
const HomePage = require("../pages/home/HomePage");

const test = base.test.extend({

    pages: async ({ page }, use) => {

        const pages = {

            loginPage: new LoginPage(page),

            homePage: new HomePage(page)

        };

        await use(pages);

    }

});

module.exports = {
    test,
    expect: base.expect
};
const BasePage = require("../base/BasePage");
const locator = require("./LoginPageLocator");

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async login(username, password) {

        await this.fill(locator.txtUsername, username);

        await this.fill(locator.txtPassword, password);

        await this.click(locator.btnLogin);

    }

    async getLoginError() {

        return await this.getText(locator.lblErrorMessage);

    }

}

module.exports = LoginPage;
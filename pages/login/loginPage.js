const BasePage = require("../base/BasePage");
const locator = require("./LoginPageLocator");

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async verifyLoginPageURL(expectedUrl){

        await this.verifyURL(expectedUrl);
        
    }

    async login(username, password) {

        await this.fill(locator.txtUsername, username, "User Name Text Field");

        await this.fill(locator.txtPassword, password, "Password Text Field");

        await this.click(locator.btnLogin, "Login button");

    }

    async getLoginError() {

        return await this.getText(locator.lblErrorMessage, "Incorrect Login or password Provided Label");

    }


}

module.exports = LoginPage;
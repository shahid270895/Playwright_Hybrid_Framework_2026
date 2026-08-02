const BasePage = require("../base/BasePage");
const locator = require("./HomePageLocator");

class HomePage extends BasePage {

    constructor(page){
        super(page);
    }

    async verifyHomePagePageURL(expectedUrl){

        await this.verifyURL(expectedUrl);
        
    }

    async getMyAccountText(){

        return await this.getText(locator.lblMyAccount, "My Account Label");

    }

    async verifyAccountText(expectedText){

        await this.verifyText(locator.lblMyAccount, expectedText, "My Account Label");

    }

    async Logout(){
        await this.click(locator.lnkLogoff, "LogOff Button");
    }

}

module.exports = HomePage;
var LoginPage = require("../pageobjects/LoginPage.js");


describe('Login dialog', function () {
    beforeEach(function () {
        LoginPage.open();
    });
    
    it('should deny access with wrong credentials', function () {
        LoginPage.login('sjijwe', 'aksdr');
        LoginPage.waitForVisible("h1");
        var pageTitle = LoginPage.getElementText("h1");
        assert.equal(pageTitle, "Guides App");
    });

    it('should allow access with correct credentials', function () {
        LoginPage.login(process.env.WDIO_USER, process.env.WDIO_PASSWORD);
        LoginPage.waitForVisible("a[href='?logout=true']");
        var loggedIn = LoginPage.isExisting("a[href='?logout=true']");
        assert.isTrue(loggedIn);
    });

    it('should deny access without credentials', function () {
        LoginPage.login('', '');
        LoginPage.waitForVisible("h1");
        var pageTitle = LoginPage.getElementText("h1");
        assert.equal(pageTitle, "Guides App");
    });
    
    afterEach(function () {
        var loggedIn = LoginPage.isExisting("a[href='?logout=true']");
        if (loggedIn) {
            LoginPage.click("a[href='?logout=true']");
        }
    })
});
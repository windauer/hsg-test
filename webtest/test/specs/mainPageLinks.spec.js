/**
 * Checks links to Guides apps.
 */
var LoginPage = require("../pageobjects/LoginPage.js");
var Page = require('../pageobjects/MainPage');

describe('The app list on the home page', function () {
    before(function () {
        LoginPage.open();
        LoginPage.login(process.env.WDIO_USER, process.env.WDIO_PASSWORD);
    });

    beforeEach(function () {
        Page.open();
    });

    it('should open the FRUS app link', function () {
        Page.frusLink.click();
        assert.match(Page.getUrl(), /\/frus-style-guide\.xml\?landing=guides\.odd/);
    });

    it('should open the Policy Studies app link', function () {
        Page.policyStudiesLink.click();
        assert.match(Page.getUrl(), /\/ps-sp-style-guide\.xml\?landing=guides\.odd/);
    });
});

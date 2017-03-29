/**
 * Check the page titles
 */

// Main page title
var MainPage = require('../pageobjects/MainPage');

describe('The HTML title of', function () {
    it('the home page should be correct', function () {
        MainPage.open();
        assert.equal(MainPage.getTitle(), 'Guides');
    });
});

// MainPage.js
var Page = require('./Page');
var LoginPage = require('./LoginPage');
var MainPage = Object.create(Page, {
  
  /**
   * define elements
   */
  frusLink: {
    get: function () {
      return Page.getElement('a[href="frus-style-guide.xml?landing=guides.odd"]');
    }
  },
  policyStudiesLink: {
    get: function () {
      return Page.getElement('a[href="ps-sp-style-guide.xml?landing=guides.odd"]');
    }
  },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function () {
      Page.open.call(this, '/exist/apps/guides/works/');
    }
  }
});

module.exports = MainPage;

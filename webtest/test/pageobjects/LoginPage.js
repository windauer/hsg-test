// SearchPage.js
var Page = require('./Page');
var LoginPage = Object.create(Page, {
  
  /**
   * define elements
   */
  loginForm: { get: function () { return Page.getElement('form#guides-login'); } },
  userInput: { get: function () { return Page.getElement('#user'); } },
  passwordInput: { get: function () { return Page.getElement('#password'); } },

  /**
   * define or overwrite page methods
   */
  login: {
    value: function(user, password) {
      this.userInput.setValue(user);
      this.passwordInput.setValue(password);
      this.loginForm.submitForm();
    }
  },

  open: {
    value: function () {
      Page.open.call(this, '/exist/apps/guides/works/');
    }
  }
});

module.exports = LoginPage;

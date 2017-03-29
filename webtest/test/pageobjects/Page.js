function Page () {
    this.title = 'Guides';
}

Page.prototype.open = function (path) {
};

Page.prototype.click = function (selector) {
  browser.click(selector);
};

Page.prototype.getElement = function (selector) {
  return browser.element(selector); 
};

Page.prototype.getTitle = function () {
  return browser.getTitle();
};

Page.prototype.getElementText = function (selector) {
  return browser.element(selector).getText();
};

Page.prototype.getElementAttribute = function (selector, attr) {
  return browser.getAttribute(selector, attr);
};

Page.prototype.getUrl = function () {
  return browser.getUrl();
};

Page.prototype.pause = function (timeInMs) {
  browser.pause(timeInMs);
};

Page.prototype.waitForVisible = function (selector, timeInMs) {
  browser.waitForVisible(selector, timeInMs);
};

Page.prototype.isExisting = function (selector) {
  return browser.isExisting(selector);
};

// Page.prototype.searchAll = function (searchString) {
//   browser.element('.menu-search a').click();
//   browser.element('#search').setValue(searchString);
//   browser.element('li.menu-search form.search').submitForm();
// };

Page.prototype.open = function(path, data) {
  var getParameters = '';
  for (var key in data) {
    getParameters += key + '=' + encodeURIComponent(data[key]);
  }
  //var url = process.env.WDIO_PREFIX + path + '?' + getParameters;
  // console.log('url:', url);
  browser.url(path);
};

module.exports = new Page();

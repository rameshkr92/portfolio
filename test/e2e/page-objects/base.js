(function(){
  'use strict';

  module.exports = function(){
    var EC = protractor.ExpectedConditions;

    this.get = function(){
      browser.get(this.url);
    };
    this.portfolioAppTitle = 'Rory Pasley';
    this.url = 'http://localhost:6789/';
    this.usersAppTitle = 'Pasley Code';
    this.verifyCount = function(cssClass, targetCount){
      element.all(by.css(cssClass)).count().then(function(count){
        expect(count).toBe(targetCount);
      });
    };
    this.verifyUrl = function(url2chk){
      browser.getCurrentUrl().then(function(url){
        expect(url).toBe(url2chk);
      });
    };
    this.wait = function(el){
      browser.wait(EC.visibilityOf(el, 500));
      browser.wait(EC.elementToBeClickable(el, 500));
    };
  };
})();

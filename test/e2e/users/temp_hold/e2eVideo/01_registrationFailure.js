(function(){
  'use strict';

  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var RegisterPage = require('./../../../page-objects/users/registerPage');
  var registerpage = new RegisterPage();

  /* Protractor specs for end-to-end testing */
  describe('Registration Page - warnings', function(){
    it('should load the registration page when the URL is `/register`.', function(){
      browser.driver.manage().window().setSize(1000, 1000);
      browser.sleep(18000);
      registerpage.get();
      base.verifyUrl(registerpage.url);
    });
    it('should warn when entering username already taken.', function(){
      registerpage.clear();
      registerpage.setUsername('f');
      browser.sleep(150);
      registerpage.setUsername('i');
      browser.sleep(150);
      registerpage.setUsername('r');
      browser.sleep(150);
      registerpage.setUsername('s');
      browser.sleep(150);
      registerpage.setUsername('t');
      registerpage.setCity('P');
      expect(element(by.id('usernameTaken')).isDisplayed()).toBe(true);
      browser.sleep(750);
    });
    it('should warn when entering email address already taken.', function(){
      registerpage.setEmail('first');
      browser.sleep(150);
      registerpage.setEmail('@');
      browser.sleep(150);
      registerpage.setEmail('first');
      browser.sleep(150);
      registerpage.setEmail('.com');
      registerpage.setCity('l');
      expect(element(by.id('emailTaken')).isDisplayed()).toBe(true);
      browser.sleep(750);
    });
  });
})();

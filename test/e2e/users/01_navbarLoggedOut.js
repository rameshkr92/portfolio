(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var LoginPage = require('./../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  // var btn;

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: NavBar DOM Components (not logged in)', function(){
    beforeAll(function(){
      loginpage.get();
      // btn = element(by.css('.about-modal-ok'));
      // base.wait(btn);
      // btn.click();
    });
    it('should have a NavBar div.', function(){
      expect(element(by.css('.navbar')).isDisplayed()).toBe(true);
    });
    it('should have the NavBar inversed.', function(){
      expect(element(by.css('.navbar.navbar-inverse')).isDisplayed()).toBe(true);
    });
    it('should have a NavBar brand.', function(){
      expect(element(by.css('.navbar-brand')).isDisplayed()).toBe(true);
    });
    it('should have the app title displayed for the NavBar brand.', function(){
      element(by.binding('app_title')).getText().then(function(text){
        expect(text).toBe(base.usersAppTitle);
      });
    });
    it('should have a NavBar toggle button.', function(){
      expect(browser.isElementPresent(by.css('button.navbar-toggle'))).toBe(true);
      expect(browser.isElementPresent(by.css('button.navbar-toggle.collapsed'))).toBe(true);
    });
    it('should have a collection for collapsed NavBar content.', function(){
      expect(browser.isElementPresent(by.css('#navbar-collapse.collapse.navbar-collapse'))).toBe(true);
    });
    it('should have a NavBar pill box.', function(){
      expect(element(by.css('.nav.nav-pills')).isDisplayed()).toBe(true);
    });
    it('should have a link to display all users.', function(){
      expect(element(by.css('.users_link')).isDisplayed()).toBe(true);
    });
    it('should have a link to display about modal.', function(){
      expect(element(by.css('.about_link')).isDisplayed()).toBe(true);
    });
    it('should have a login button.', function(){
      expect(element(by.css('a.user-login')).isDisplayed()).toBe(true);
    });
  });
})();

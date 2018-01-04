(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();
  var btn, current, toggle;

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: NavBar DOM Components (logged in)', function(){
    beforeAll(function(){
      userspage.get();
    });
    it('should have a NavBar div.', function(){
      expect(element(by.css('.navbar')).isDisplayed()).toBe(true);
    });
    it('should have the NavBar inversed.', function(){
      expect(element(by.css('.navbar-inverse')).isDisplayed()).toBe(true);
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
      expect(browser.isElementPresent(by.css('.navbar-collapse'))).toBe(true);
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
    it('should have a logged in user dropdown menu.', function(){
      expect(element(by.css('.dropdown-toggle')).isDisplayed()).toBe(true);
    });
    it('should dislay the logged in users name as the dropdown button.', function(){
      expect(browser.isElementPresent(by.binding('full_name'))).toBe(true);
    });
    it('should have a caret to show dropdown capability.', function(){
      expect(element(by.css('.caret')).isDisplayed()).toBe(true);
    });
    it('should have a link to the logged in user\'s profile.', function(){
      expect(browser.isElementPresent(by.css('a.user-profile'))).toBe(true);
    });
    it('should have a link to change the logged in user\'s password.', function(){
      expect(browser.isElementPresent(by.css('a.user-password'))).toBe(true);
    });
    it('should have a link to logout the user.', function(){
      expect(browser.isElementPresent(by.css('a.user-logout'))).toBe(true);
    });
    it('should navigate to the logged in user\'s showpage.', function(){
      browser.getCurrentUrl().then(function(url){
        current = url;
      });
      toggle = element(by.css('.dropdown-toggle'));
      base.wait(toggle);
      toggle.click();
      btn = element(by.css('a.user-profile'));
      base.wait(btn);
      btn.click();
      browser.getCurrentUrl().then(function(url){
        expect(url).not.toBe(current);
      });
    });
    it('should display the about modal.', function(){
      btn = element(by.css('.about_link'));
      base.wait(btn);
      btn.click();
      browser.sleep(200);
      expect(element(by.css('.modal-content')).isDisplayed()).toBe(true);
    });
    it('should have a header.', function(){
      expect(element(by.css('.modal-header')).isDisplayed()).toBe(true);
    });
    it('should have a body.', function(){
      expect(element(by.css('.modal-body')).isDisplayed()).toBe(true);
    });
    it('should have a footer.', function(){
      expect(element(by.css('.modal-footer')).isDisplayed()).toBe(true);
    });
    it('should have a `Close` button.', function(){
      expect(element(by.css('.about-modal-ok')).isDisplayed()).toBe(true);
    });
    it('should close the modal.', function(){
      btn = element(by.css('.about-modal-ok'));
      base.wait(btn);
      btn.click();
      browser.sleep(250);
      expect(browser.isElementPresent(by.css('.modal-header'))).toBe(false);
    });
    it('should navigate to All Users page.', function(){
      btn = element(by.css('.users-btn'));
      base.wait(btn);
      btn.click();
      browser.getCurrentUrl().then(function(url){
        expect(url).toContain('/users');
      });
    });
  });
})();

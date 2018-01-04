(function(){
  'use strict';

  var EC = protractor.ExpectedConditions;
  var Base = require('./../page-objects/base');
  var base = new Base();
  var PasswordPage = require('./../page-objects/users/passwordPage');
  var passwordpage = new PasswordPage();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();
  var btn, el, toggle;

  describe('UsersApp: Password Change Page Smoke Test', function(){
    beforeAll(function(){
      userspage.get();
      toggle = element(by.css('.dropdown-toggle'));
      toggle.click();
      btn = element(by.css('a.user-password'));
      base.wait(btn);
      btn.click();
    });
    it('should display the password change page.', function(){
      base.verifyUrl('http://localhost:6789/usersapp#/users/password');
    });
    describe('Password Change Page DOM Elements', function(){
      it('should have a `Change Password` title.', function(){
        expect(element(by.id('title')).isDisplayed()).toBe(true);
      });
      it('should have a password change form.', function(){
        expect(element(by.id('password_form')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the current password.', function(){
        expect(element(by.id('current_password')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the new password.', function(){
        expect(element(by.id('password')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the new password confirmation.', function(){
        expect(element(by.id('password_confirmation')).isDisplayed()).toBe(true);
      });
      it('should have a `Change Password` submit button.', function(){
        expect(element(by.id('passwd_change-btn')).isDisplayed()).toBe(true);
      });
      it('should have a `Cancel` button.', function(){
        expect(element(by.id('cancel-btn')).isDisplayed()).toBe(true);
      });
    });
    describe('Change User Password', function(){
      it('should have the `Change Password` button disabled.', function(){
        // passwordpage.clear();
        btn = element(by.id('passwd_change-btn'));
        expect(btn.isEnabled()).toBe(false);
      });
      it('should enable the `Change Password` button.', function(){
        // passwordpage.clear();
        passwordpage.setCurrentPasswd(passwordpage.passwd);
        passwordpage.setPasswd(passwordpage.passwd);
        passwordpage.setPasswdConf(passwordpage.passwd);
        btn = element(by.id('passwd_change-btn'));
        expect(btn.isEnabled()).toBe(true);
      });
      it('should NOT update user password with incorrect current password.', function(){
        passwordpage.clear();
        passwordpage.setCurrentPasswd(passwordpage.badPasswd);
        passwordpage.setPasswd(passwordpage.passwd);
        passwordpage.setPasswdConf(passwordpage.passwd);
        passwordpage.updatePasswd();
        el = element(by.css('.alert-danger'));
        browser.wait(EC.visibilityOf(el, 200));
        expect(browser.isElementPresent(el)).toBe(true);
      });
      it('should update user password.', function(){
        passwordpage.clear();
        passwordpage.setCurrentPasswd(passwordpage.passwd);
        passwordpage.setPasswd(passwordpage.passwd);
        passwordpage.setPasswdConf(passwordpage.passwd);
        passwordpage.updatePasswd();
        el = element(by.css('.alert-success'));
        browser.wait(EC.visibilityOf(el, 200));
        expect(browser.isElementPresent(el)).toBe(true);
      });
    });
  });
})();

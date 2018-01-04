(function(){
  'use strict';

  // var EC = protractor.ExpectedConditions;
  var Base = require('./../page-objects/base');
  var base = new Base();
  var LoginPage = require('./../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();
  // var btn, el;
  var el;

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: Login Page Smoke Test', function(){
    it('should load the login page when the URL is `/login`.', function(){
      loginpage.get();
      // btn = element(by.css('.about-modal-ok'));
      // base.wait(btn);
      // btn.click();
      base.verifyUrl(loginpage.url);
    });
    // describe('About Modal', function(){
    //   it('should be displayed when accessing the Login page.', function(){
    //     loginpage.get();
    //     btn = element(by.css('.about-modal-ok'));
    //     base.wait(btn);
    //     expect(element(by.css('.modal-wrapper')).isDisplayed()).toBe(true);
    //   });
    //   it('should have a header.', function(){
    //     expect(element(by.css('.modal-header')).isDisplayed()).toBe(true);
    //   });
    //   it('should have a body.', function(){
    //     expect(element(by.css('.modal-body')).isDisplayed()).toBe(true);
    //   });
    //   it('should have a footer.', function(){
    //     expect(element(by.css('.modal-footer')).isDisplayed()).toBe(true);
    //   });
    //   it('should have a `Close` button.', function(){
    //     expect(element(by.css('.about-modal-ok')).isDisplayed()).toBe(true);
    //   });
    //   // Close modal for further tests to run
    //   it('should close the modal.', function(){
    //     btn.click();
    //     expect(browser.isElementPresent(by.css('.modal-wrapper'))).toBe(false);
    //   });
    // });
    describe('Login Page DOM Elements', function(){
      it('should have a `Login` title.', function(){
        expect(element(by.id('title')).isDisplayed()).toBe(true);
      });
      it('should have a login form.', function(){
        expect(element(by.id('login_form')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the email address.', function(){
        expect(element(by.model('user.email')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the password.', function(){
        expect(element(by.model('user.password')).isDisplayed()).toBe(true);
      });
      it('should have a `Login` submit button.', function(){
        expect(element(by.id('login-btn')).isDisplayed()).toBe(true);
      });
      it('should have the `Login` button disabled.', function(){
        el = element(by.id('login-btn'));
        expect(el.isEnabled()).toBe(false);
      });
      it('should have a `Register` button.', function(){
        expect(element(by.id('register-btn')).isDisplayed()).toBe(true);
      });
    });
    describe('Login - Test Admin User', function(){
      beforeEach(function(){
        loginpage.clear();
        loginpage.setEmail(loginpage.email);
      });
      it('should enable the submit button when valid.', function(){
        loginpage.setPassword(loginpage.badPasswd);
        el = element(by.id('login-btn'));
        expect(el.isEnabled()).toBe(true);
      });
      it('should not login the user with invalid input.', function(){
        loginpage.setPassword(loginpage.badPasswd);
        loginpage.loginUser();
        base.verifyUrl(loginpage.url);
      });
      it('should log the user in.', function(){
        loginpage.setPassword(loginpage.passwd);
        loginpage.loginUser();
        base.verifyUrl(userspage.url);
      });
    });
  });
})();

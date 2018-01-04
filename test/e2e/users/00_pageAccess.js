(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var EditPage = require('./../page-objects/users/editPage');
  var editpage = new EditPage();
  var LoginPage = require('./../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var PasswordPage = require('./../page-objects/users/passwordPage');
  var passwordpage = new PasswordPage();
  var RegisterPage = require('./../page-objects/users/registerPage');
  var registerpage = new RegisterPage();
  var ShowPage = require('./../page-objects/users/showPage');
  var showpage = new ShowPage();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: access only allowed pages when not logged in', function(){
    it('should load login page.', function(){
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(250);
      });
      loginpage.get();
      base.verifyUrl(loginpage.url);
    });
    it('should load register page.', function(){
      registerpage.get();
      base.verifyUrl(registerpage.url);
    });
    it('should NOT load usersPage and redirect to `/login`.', function(){
      userspage.get();
      base.verifyUrl(loginpage.url);
    });
    it('should NOT load user\'s showpage and redirect to `/login`.', function(){
      showpage.get();
      base.verifyUrl(loginpage.url);
    });
    it('should NOT load user\'s editpage and redirect to `/login`.', function(){
      editpage.get();
      base.verifyUrl(loginpage.url);
    });
    it('should NOT load user\'s change password page and redirect to `/login`.', function(){
      passwordpage.get();
      base.verifyUrl(loginpage.url);
    });
    // it('should redirect if NOT accessing `/usersapp#/`.', function(){
    //   browser.get(base.url);
    //   base.verifyUrl(base.url + '#/');
    // });
  });
})();

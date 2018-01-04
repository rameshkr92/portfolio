(function(){
  'use strict';

  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var LoginPage = require('./../../../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var UsersPage = require('./../../../page-objects/users/usersPage');
  var userspage = new UsersPage();

  /* Protractor specs for end-to-end testing */
  describe('Login', function(){
    beforeEach(function(){
      loginpage.clear();
      // loginpage.setEmail(loginpage.email);
      loginpage.setEmail('fi');
      browser.sleep(100);
      loginpage.setEmail('rs');
      browser.sleep(100);
      loginpage.setEmail('t@');
      browser.sleep(100);
      loginpage.setEmail('fi');
      browser.sleep(100);
      loginpage.setEmail('rs');
      browser.sleep(100);
      loginpage.setEmail('t.');
      browser.sleep(100);
      loginpage.setEmail('com');
      browser.sleep(200);
    });
    it('should not login the user with incorrect password.', function(){
      loginpage.setPassword(loginpage.badPasswd);
      browser.sleep(350);
      loginpage.loginUser();
      base.verifyUrl(loginpage.url);
      browser.sleep(1000);
    });
    it('should log the user in.', function(){
      loginpage.setPassword(loginpage.passwd);
      browser.sleep(500);
      loginpage.loginUser();
      base.verifyUrl(userspage.url);
      browser.sleep(350);
    });
  });
})();

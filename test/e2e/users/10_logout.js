(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var LoginPage = require('./../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();
  var btn, toggle;

  describe('UsersApp: Logout User', function(){
    it('should logout user and redirect to `/login`.', function(){
      toggle = element(by.css('button.nav-btn-toggle.dropdown-toggle'));
      toggle.click();
      btn = element(by.css('ul.dropdown-menu li.current-user a.user-logout'));
      base.wait(btn);
      btn.click();
      base.verifyUrl(loginpage.url);
    });
  });
})();

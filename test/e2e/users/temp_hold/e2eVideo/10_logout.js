(function(){
  'use strict';

  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var LoginPage = require('./../../../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var btn, toggle;

  describe('Logout User', function(){
    it('should logout user and redirect to `/login`.', function(){
      toggle = element(by.css('button.nav-btn-toggle.dropdown-toggle'));
      toggle.click();
      browser.sleep(500);
      btn = element(by.css('ul.dropdown-menu li.current-user a.user-logout'));
      base.wait(btn);
      btn.click();
      base.verifyUrl(loginpage.url);
      browser.sleep(100);
    });
    it('should navigate back to `Portfolio` app.', function(){
      btn = element(by.binding('app_title'));
      base.wait(btn);
      btn.click();
      browser.sleep(500);
      browser.sleep(100);
      base.verifyUrl(base.url + '#/');
      browser.sleep(700);
    });
  });
})();

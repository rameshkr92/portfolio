(function(){
  'use strict';

  var EC = protractor.ExpectedConditions;
  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var PasswordPage = require('./../../../page-objects/users/passwordPage');
  var passwordpage = new PasswordPage();
  var btn, el, toggle;

  describe('Password Change Page', function(){
    beforeAll(function(){
      toggle = element(by.css('.dropdown-toggle'));
      toggle.click();
      browser.sleep(500);
      btn = element(by.css('a.user-password'));
      base.wait(btn);
      btn.click();
      browser.sleep(200);
    });
    it('should NOT update user password with incorrect current password.', function(){
      passwordpage.clear();
      passwordpage.setCurrentPasswd(passwordpage.badPasswd);
      browser.sleep(350);
      passwordpage.setPasswd(passwordpage.newPasswd);
      browser.sleep(350);
      passwordpage.setPasswdConf(passwordpage.newPasswd);
      browser.sleep(350);
      passwordpage.updatePasswd();
      browser.sleep(500);
      el = element(by.css('.alert-danger'));
      browser.wait(EC.visibilityOf(el, 500));
      expect(browser.isElementPresent(el)).toBe(true);
      browser.sleep(500);
    });
    it('should update user password.', function(){
      passwordpage.clear();
      passwordpage.setCurrentPasswd(passwordpage.passwd);
      browser.sleep(350);
      passwordpage.setPasswd(passwordpage.passwd);
      browser.sleep(350);
      passwordpage.setPasswdConf(passwordpage.passwd);
      browser.sleep(350);
      passwordpage.updatePasswd();
      browser.sleep(500);
      el = element(by.css('.alert-success'));
      browser.wait(EC.visibilityOf(el, 500));
      expect(browser.isElementPresent(el)).toBe(true);
      browser.sleep(500);
    });
  });
})();

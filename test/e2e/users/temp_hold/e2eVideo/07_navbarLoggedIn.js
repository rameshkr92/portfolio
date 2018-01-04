(function(){
  'use strict';

  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var btn, current, toggle;

  /* Protractor specs for end-to-end testing */
  describe('NavBar', function(){
    it('should navigate to the logged in user\'s showpage.', function(){
      browser.getCurrentUrl().then(function(url){
        current = url;
      });
      toggle = element(by.css('.dropdown-toggle'));
      base.wait(toggle);
      toggle.click();
      browser.sleep(350);
      btn = element(by.css('a.user-profile'));
      base.wait(btn);
      btn.click();
      browser.sleep(350);
      browser.getCurrentUrl().then(function(url){
        expect(url).not.toBe(current);
        browser.sleep(500);
      });
    });
    it('should display the about modal.', function(){
      btn = element(by.css('.about_link'));
      base.wait(btn);
      btn.click();
      browser.sleep(1000);
    });
    it('should close the modal.', function(){
      btn = element(by.css('.about-modal-ok'));
      base.wait(btn);
      btn.click();
      expect(browser.isElementPresent(by.css('.modal-wrapper'))).toBe(false);
      browser.sleep(500);
    });
    it('should navigate to All Users page.', function(){
      btn = element(by.css('.users-btn'));
      base.wait(btn);
      btn.click();
      browser.sleep(350);
      browser.getCurrentUrl().then(function(url){
        expect(url).toContain('/users');
        browser.sleep(500);
      });
    });
  });
})();

(function(){
  'use strict';

  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var btn, totalUsers;

  describe('Delete User', function(){
    beforeAll(function(){
      btn = element(by.css('.users-btn'));
      base.wait(btn);
      btn.click();
      browser.sleep(200);
    });
    it('should remove the selected user with modal interaction.', function(){
      // Navigate with pagination to the last page to find the correct user to
      // delete (based off setting edit user lastname to start with `Z`).
      btn = element(by.cssContainingText('.ng-binding', 'Last'));
      btn.click();
      btn = element.all(by.css('.card-close')).last();
      element(by.binding('totalUsers')).getText().then(function(count){
        totalUsers = count;
      });
      btn.click();
      browser.sleep(1000);
      btn = element(by.css('.delete-confirm'));
      base.wait(btn);
      btn.click();
      element(by.binding('totalUsers')).getText().then(function(count){
        expect(parseInt(count)).toBe(totalUsers - 1);
        browser.sleep(1000);
      });
    });
    it('should display a flash success message.', function(){
      expect(element(by.css('.alert-success')).isDisplayed()).toBe(true);
      browser.sleep(1000);
    });
  });
})();

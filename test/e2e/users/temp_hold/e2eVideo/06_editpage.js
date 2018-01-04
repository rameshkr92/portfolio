(function(){
  'use strict';

  var EC = protractor.ExpectedConditions;
  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var EditPage = require('./../../../page-objects/users/editPage');
  var editpage = new EditPage();
  var RegisterPage = require('./../../../page-objects/users/registerPage');
  var registerpage = new RegisterPage();
  var UserspageHelper = require('./../../../helpers/userspageHelper');
  var userspageHelper = new UserspageHelper();
  var btn, el, id;

  // Protractor specs for end-to-end testing
  describe('Edit Page', function(){
    beforeAll(function(){
      userspageHelper.getId().then(function(data){
        id = data._id;
      });
      btn = element.all(by.css('.show')).last();
      btn.click();
      browser.sleep(500);
    });
    it('should display the edit page of the selected user.', function(){
      btn = element.all(by.css('.edit'));
      btn.click();
      base.verifyUrl('http://localhost:6789/usersapp#/users/' + id + '/edit');
      browser.sleep(500);
    });
    describe('Editing User', function(){
      it('should successfully update user.', function(){
        editpage.clear();
        // editpage.setFirstName(editpage.editFirstName);
        editpage.setFirstName('Ed');
        browser.sleep(150);
        editpage.setFirstName('it');
        browser.sleep(150);
        // editpage.setLastName(editpage.editLastName);
        editpage.setLastName('Ze');
        browser.sleep(150);
        editpage.setLastName('tas');
        browser.sleep(150);
        // editpage.setUsername(editpage.editUsername);
        editpage.setUsername('Ed');
        browser.sleep(150);
        editpage.setUsername('it');
        browser.sleep(150);
        editpage.setUsername('te');
        browser.sleep(150);
        editpage.setUsername('sty');
        // editpage.setEmail(editpage.editEmail);
        editpage.setEmail('zeta');
        browser.sleep(150);
        editpage.setEmail('test');
        browser.sleep(150);
        editpage.setEmail('user');
        browser.sleep(150);
        editpage.setEmail('@testing');
        browser.sleep(150);
        editpage.setEmail('.com');
        browser.sleep(250);
        registerpage.setState('Florida');
        browser.sleep(500);
        editpage.updateUser();
        browser.sleep(1000);
        el = element(by.css('.alert-success'));
        browser.wait(EC.visibilityOf(el, 500));
        base.verifyUrl('http://localhost:6789/usersapp#/users/' + id);
        expect(element(by.css('.alert-success')).isDisplayed()).toBe(true);
      });
    });
  });
})();

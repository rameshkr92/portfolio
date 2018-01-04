(function(){
  'use strict';

  var EC = protractor.ExpectedConditions;
  var Base = require('./../page-objects/base');
  var base = new Base();
  var EditPage = require('./../page-objects/users/editPage');
  var editpage = new EditPage();
  var UserspageHelper = require('./../helpers/userspageHelper');
  var userspageHelper = new UserspageHelper();
  var btn, el, id;

  // Protractor specs for end-to-end testing
  describe('UsersApp: Edit Page Smoke Test', function(){
    beforeAll(function(){
      userspageHelper.getId().then(function(data){
        // console.log('editpage.js data......', data._id);
        id = data._id;
      });
      btn = element.all(by.css('.show')).last();
      btn.click();
    });
    it('should display the edit page of the selected user.', function(){
      btn = element.all(by.css('.edit'));
      btn.click();
      base.verifyUrl('http://localhost:6789/usersapp#/users/' + id + '/edit');
    });
    describe('Edit Page DOM Elements', function(){
      it('should have an `Edit` title.', function(){
        expect(element(by.id('title')).isDisplayed()).toBe(true);
      });
      it('should have an edit form.', function(){
        expect(element(by.id('edit_form')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the first name.', function(){
        expect(element(by.id('first_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the last name.', function(){
        expect(element(by.id('last_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the username.', function(){
        expect(element(by.id('user_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the email address.', function(){
        expect(element(by.id('email')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the address.', function(){
        expect(element(by.id('address')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the city.', function(){
        expect(element(by.id('city')).isDisplayed()).toBe(true);
      });
      it('should have a select input field for the state.', function(){
        expect(element(by.id('state')).isDisplayed()).toBe(true);
      });
      it('should have a number input field for the zip code.', function(){
        expect(element(by.id('zip')).isDisplayed()).toBe(true);
      });
      it('should have an `Update` submit button.', function(){
        expect(element(by.id('edit-btn')).isDisplayed()).toBe(true);
      });
      it('should have a `Cancel` button.', function(){
        expect(element(by.id('cancel-btn')).isDisplayed()).toBe(true);
      });
    });
    describe('Editing User', function(){
      it('should successfully update user.', function(){
        editpage.clear();
        editpage.setEmail(editpage.editEmail);
        editpage.setUsername(editpage.editUsername);
        editpage.setFirstName(editpage.editFirstName);
        editpage.setLastName(editpage.editLastName);
        editpage.updateUser();
        el = element(by.css('.alert-success'));
        browser.wait(EC.visibilityOf(el, 200));
        base.verifyUrl('http://localhost:6789/usersapp#/users/' + id);
        expect(element(by.css('.alert-success')).isDisplayed()).toBe(true);
      });
    });
  });
})();

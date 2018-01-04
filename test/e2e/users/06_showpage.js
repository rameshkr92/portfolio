(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var UserspageHelper = require('./../helpers/userspageHelper');
  var userspageHelper = new UserspageHelper();
  var btn, id;

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: Show Page Smoke Test', function(){
    beforeAll(function(){
      userspageHelper.getId().then(function(data){
        // console.log('6_showpage.js data._id......', data._id);
        id = data._id;
      });
      btn = element.all(by.css('.show')).last();
      btn.click();
    });
    it('should display the show page of the selected user.', function(){
      base.verifyUrl('http://localhost:6789/usersapp#/users/' + id);
    });
    describe('Show Page DOM Elements', function(){
      it('should have a display card for the user.', function(){
        expect(element(by.css('.user-card')).isDisplayed()).toBe(true);
      });
      it('should have a card header.', function(){
        expect(element(by.css('.card-header')).isDisplayed()).toBe(true);
      });
      it('should display the user\'s first name.', function(){
        expect(element(by.binding('showUser.first_name')).isDisplayed()).toBe(true);
      });
      it('should display the user\'s last name.', function(){
        expect(element(by.binding('showUser.last_name')).isDisplayed()).toBe(true);
      });
      it('should have an `Edit` button.', function(){
        expect(element(by.css('.edit')).isDisplayed()).toBe(true);
      });
      it('should have a `Delete` user button.', function(){
        expect(element(by.css('.card-close')).isDisplayed()).toBe(true);
      });
      it('should have a card body.', function(){
        expect(element(by.css('.card-body')).isDisplayed()).toBe(true);
      });
      it('should have a left side for the image.', function(){
        expect(element(by.css('.card-body-left')).isDisplayed()).toBe(true);
      });
      it('should have an image for the user.', function(){
        expect(element(by.css('.card-image')).isDisplayed()).toBe(true);
      });
      it('should have a right side for the user info.', function(){
        expect(element(by.css('.card-body-right')).isDisplayed()).toBe(true);
      });
      it('should have a content division for the user info.', function(){
        expect(element(by.css('.card-content')).isDisplayed()).toBe(true);
      });
      it('should display the title `Username`.', function(){
        expect(element.all(by.css('.username')).isDisplayed()).toContain(true);
      });
      it('should display the user\'s username.', function(){
        expect(element(by.binding('showUser.user_name')).isDisplayed()).toBe(true);
      });
      it('should display the title `Email`.', function(){
        expect(element(by.css('.email')).isDisplayed()).toBe(true);
      });
      it('should display the user\'s email.', function(){
        expect(element(by.binding('showUser.email')).isDisplayed()).toBe(true);
      });
      it('should display the title `Address`.', function(){
        expect(element(by.css('.address')).isDisplayed()).toBe(true);
      });
      it('should display the user\'s city.', function(){
        expect(element(by.binding('showUser.city')).isDisplayed()).toBe(true);
      });
      it('should display the user\'s state name.', function(){
        expect(element(by.binding('showUser.state.name')).isDisplayed()).toBe(true);
      });
      it('should display the user\'s zip code.', function(){
        expect(element(by.binding('showUser.zip')).isDisplayed()).toBe(true);
      });
    });
  });
})();

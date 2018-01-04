(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();
  var btn, el, promise;

  describe('UserApp: Home Page Smoke Test', function(){
    it('should load the home page when the URL is `/`.', function(){
      userspage.get();
      base.verifyUrl(userspage.url);
    });
    describe('Home Page DOM Elements', function(){
      it('should have a container for user display cards.', function(){
        expect(element(by.css('#card-container')).isDisplayed()).toBe(true);
      });
      it('should have a list of registered users.', function(){
        el = element.all(by.repeater('user in users').row(0).column('user_name'));
        el.getText().then(function(text){
          // Sorted/filtered first user is James Brown (based off DB seed and
          // sorted search from DB)
          // console.log('text:', text);
          expect(text[0]).toBe('james');
        });
      });
      it('should have user cards.', function(){
        expect(element.all(by.css('.user-card')).isDisplayed()).toContain(true);
      });
      it('should have `Show` buttons.', function(){
        expect(element.all(by.css('.show')).isDisplayed()).toContain(true);
      });
      it('should have `Delete` user buttons.', function(){
        expect(element.all(by.css('.card-close')).isDisplayed()).toContain(true);
      });
    });
    describe('Search filter', function(){
      it('should filter the users when a name is entered.', function(){
        userspage.clear();
        userspage.setSearch(userspage.searchName);
        element.all(by.css('.user-card')).then(function(elements){
          expect(elements.length).toBe(1);
        });
      });
      it('should filter the users when a state is entered.', function(){
        userspage.clear();
        userspage.setSearch(userspage.searchState);
        element.all(by.css('.user-card')).then(function(elements){
          expect(elements.length).toBe(1);
        });
      });
    });
    describe('Pagination controls', function(){
      it('should have pagination controls.', function(){
        expect(element(by.css('.pagination-sm')).isDisplayed()).toBe(true);
      });
      it('should have a pagination first button.', function(){
        expect(element.all(by.cssContainingText('.ng-binding', 'First')).isDisplayed()).toContain(true);
      });
      it('should have a pagination previous button.', function(){
        expect(element(by.cssContainingText('.ng-binding', 'Previous')).isDisplayed()).toBe(true);
      });
      it('should have a pagination next button.', function(){
        expect(element(by.cssContainingText('.ng-binding', 'Next')).isDisplayed()).toBe(true);
      });
      it('should have a pagination last button.', function(){
        expect(element(by.cssContainingText('.ng-binding', 'Last')).isDisplayed()).toBe(true);
      });
      // Sorted/filtered (based off DB seed and sorted search from DB)
      it('should display the second page of users when clicking `Next`.', function(){
        userspage.clear();
        btn = element(by.cssContainingText('.ng-binding', 'Next'));
        btn.click();
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.nextPageUser);
        });
      });
      it('should display the last page of users when clicking `Last`.', function(){
        btn = element(by.cssContainingText('.ng-binding', 'Last'));
        btn.click();
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.lastPageUser);
        });
      });
      it('should display the fifth page of users when clicking `Previous`.', function(){
        btn = element(by.cssContainingText('.ng-binding', 'Previous'));
        btn.click();
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.previousPageUser);
        });
      });
      it('should display the first page of users when clicking `First`.', function(){
        btn = element.all(by.cssContainingText('.ng-binding', 'First')).last();
        btn.click();
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.firstPageUser);
        });
      });
    });
  });
    // NOTE: edit, delete, & logout button tests will be done after editing user
})();

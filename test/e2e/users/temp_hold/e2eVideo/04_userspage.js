(function(){
  'use strict';

  var UsersPage = require('./../../../page-objects/users/usersPage');
  var userspage = new UsersPage();
  var btn, promise;

  describe('All Users Page', function(){
    describe('Search filter', function(){
      it('should filter the users when a name is entered.', function(){
        userspage.clear();
        // userspage.setSearch(userspage.searchName);
        userspage.setSearch('N');
        browser.sleep(500);
        userspage.setSearch('a');
        browser.sleep(500);
        userspage.setSearch('n');
        browser.sleep(500);
        element.all(by.css('.user-card')).then(function(elements){
          expect(elements.length).toBe(1);
          browser.sleep(1000);
        });
      });
      it('should filter the users when a state is entered.', function(){
        userspage.clear();
        // userspage.setSearch(userspage.searchState);
        userspage.setSearch('C');
        browser.sleep(500);
        userspage.setSearch('a');
        browser.sleep(500);
        userspage.setSearch('r');
        browser.sleep(500);
        element.all(by.css('.user-card')).then(function(elements){
          expect(elements.length).toBe(1);
          browser.sleep(1000);
        });
      });
    });
    describe('Pagination controls', function(){
      // Sorted/filtered (based off DB seed and sorted search from DB)
      it('should display the second page of users when clicking `Next`.', function(){
        userspage.clear();
        btn = element(by.cssContainingText('.ng-binding', 'Next'));
        btn.click();
        browser.sleep(1000);
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.nextPageUser);
          browser.sleep(1000);
        });
      });
      it('should display the last page of users when clicking `Last`.', function(){
        btn = element(by.cssContainingText('.ng-binding', 'Last'));
        btn.click();
        browser.sleep(1000);
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.lastPageUser);
          browser.sleep(1000);
        });
      });
      it('should display the fifth page of users when clicking `Previous`.', function(){
        btn = element(by.cssContainingText('.ng-binding', 'Previous'));
        btn.click();
        browser.sleep(1000);
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.previousPageUser);
          browser.sleep(1000);
        });
      });
      it('should display the first page of users when clicking `First`.', function(){
        btn = element.all(by.cssContainingText('.ng-binding', 'First')).last();
        btn.click();
        browser.sleep(1000);
        promise = element.all(by.repeater('user in users').row(0).column('user_name'));
        promise.getText().then(function(text){
          expect(text[0]).toEqual(userspage.firstPageUser);
          browser.sleep(1000);
        });
      });
    });
  });
})();

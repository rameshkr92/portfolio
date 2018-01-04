(function(){
  'use strict';

  module.exports = function(){
    var UsersPage = require('./../page-objects/users/usersPage');
    var usersPage = new UsersPage();
    var btn, deferred;

    this.getId = function(){
      usersPage.get();
      // Navigate with pagination to the last page to find the correct user to
      // delete.
      btn = element(by.cssContainingText('.ng-binding', 'Last'));
      btn.click();

      deferred = protractor.promise.defer();

      element.all(by.repeater('user in users'))
        .then(function(rows){
          rows[rows.length - 1].evaluate('user')
            .then(function(data){
              // console.log('userspageHelper.js data', data);
              deferred.fulfill(data);
            });
        });

      return deferred.promise;
    };
  };
})();

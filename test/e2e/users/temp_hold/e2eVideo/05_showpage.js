(function(){
  'use strict';

  var Base = require('./../../../page-objects/base');
  var base = new Base();
  var UserspageHelper = require('./../../../helpers/userspageHelper');
  var userspageHelper = new UserspageHelper();
  var btn, id;

  /* Protractor specs for end-to-end testing */
  describe('Show Page', function(){
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
      browser.sleep(1000);
    });
  });
})();

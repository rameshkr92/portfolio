(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();
    var searchInput = element(by.css('.search-box'));

    this.clear = function(){
      searchInput.clear();
    };
    this.firstPageUser = 'james';
    this.get = function(){
      browser.get(this.url);
    };
    this.lastPageUser = 'first';
    this.nextPageUser = 'abigail';
    this.previousPageUser = 'joan';
    this.searchName = 'Bobbie';
    this.searchState = 'North Carolina';
    this.setSearch = function(text){
      searchInput.sendKeys(text);
    };
    this.url = base.url + 'usersapp#/users';
  };
})();

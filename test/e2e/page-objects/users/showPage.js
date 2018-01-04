(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();

    this.get = function(){
      browser.get(this.url);
    };
    this.url = base.url + 'usersapp#/users/23';
  };
})();

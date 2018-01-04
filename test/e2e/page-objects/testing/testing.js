(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();

    this.e2eText = 'e2e';
    this.get = function(){
      browser.get(this.url);
    };
    this.unitText = 'Unit';
    this.url = base.url + '#/testing';
  };
})();

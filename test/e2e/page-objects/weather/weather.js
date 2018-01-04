(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();

    this.get = function(){
      browser.get(this.url);
    };
    this.location = element(by.binding('weather.location'));
    this.locationInput = element(by.id('getLoc'));
    this.setLocation = function(loc){
      this.locationInput.sendKeys(loc);
    };
    this.toggle = element(by.id('weatherToggle'));
    this.url = base.url + '#/weather';
    this.wunderground = '/img/shared/wundergroundLogo_4c_rev_horz.png';
    this.wundergroundLink = 'http://www.wunderground.com/?apiref=66bd656042b63be9';
  };
})();

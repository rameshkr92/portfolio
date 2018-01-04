(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var Weather = require('./../page-objects/weather/weather');
  var weather = new Weather();
  var btn;

  describe('PortfolioApp: Header DOM Components', function(){
    beforeAll(function(){
      main.get();
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(300);
      });
    });
    it('should have a background image.', function(){
      element(by.id('img-header')).getCssValue('background').then(function(val){
        expect(val).toContain(main.bgImg);
      });
    });
    it('should have a header text section.', function(){
      expect(element(by.id('header-text')).isDisplayed()).toBe(true);
    });
    it('should have the correct text displayed for the first line.', function(){
      main.verifyText('head-txt0', main.headTxt0);
    });
    it('should have three `Stack` images displayed.', function(){
      base.verifyCount('.content-img', 3);
    });
    it('should have the `MEAN Stack` background image.', function(){
      expect(element(by.id('mean-img')).isDisplayed()).toBe(true);
    });
    it('should have the correct text displayed for the `MEAN Stack`.', function(){
      main.verifyText('mean-img-txt', main.meanTxt);
    });
    it('should have the `Ruby on Rails` background image.', function(){
      expect(element(by.id('ror-img')).isDisplayed()).toBe(true);
    });
    it('should have the correct text displayed for `Ruby on Rails`.', function(){
      main.verifyText('ror-img-txt', main.rorTxt);
    });
    it('should have the `LAMP Stack` background image.', function(){
      expect(element(by.id('mean-img')).isDisplayed()).toBe(true);
    });
    it('should have the correct text displayed for the `LAMP Stack`.', function(){
      main.verifyText('lamp-img-txt', main.lampTxt);
    });
    describe('Weather Section', function(){
      it('should have the Weather Underground logo displayed.', function(){
        expect(element(by.id('wundergroundPic')).isDisplayed()).toBe(true);
      });
      it('should load the Weather Underground page.', function(){
        main.testExtUrl('weather-btn', main.weatherUrl);
      });
      it('should set the location.', function(){
        weather.toggle.click();
        weather.setLocation('Tole');
        browser.sleep(250);
        btn = element.all(by.repeater('match in matches')).first();
        btn.click();
        browser.sleep(1000);
        weather.location.getText().then(function(txt){
          expect(txt).toEqual('Toledo, OH');
        });
      });
    });
  });
})();

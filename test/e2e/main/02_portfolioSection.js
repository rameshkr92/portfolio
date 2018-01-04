(function(){
  'use strict';

  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var item, len, lTech, url;

  describe('PortfolioApp: Portfolio Section DOM Components', function(){
    it('should scroll to the portfolio section.', function(){
      main.testScroll('portfolio-btn', true);
    });
    it('should have the correct background color.', function(){
      element(by.id('portfolio')).getCssValue('background-color').then(function(val){
        // console.log('val', val);
        expect(val).toBe(main.portfolioBgColor);
      });
    });
    it('should have a portfolio title.', function(){
      expect(element(by.id('portfolio-title')).isDisplayed()).toBe(true);
    });
    it('should have the portfolios repeater.', function(){
      item = element.all(by.repeater('portfolio in portfolios'));
      item.count().then(function(count){
        expect(count).toBe(main.portfolios.length);
      });
    });
    it('should have the first portfolio name.', function(){
      item = element.all(by.css('.portfolio-name')).first();
      item.getText().then(function(name){
        expect(name).toEqual(main.portfolios[0].name);
      });
    });
    it('should have the last portfolio name.', function(){
      item = element.all(by.css('.portfolio-name')).last();
      item.getText().then(function(name){
        len = main.portfolios.length - 1;
        expect(name).toEqual(main.portfolios[len].name);
      });
    });
    it('should have the first portfolio image.', function(){
      item = element.all(by.css('.portfolio-img')).first();
      item.getAttribute('src').then(function(src){
        expect(src).toContain(main.portfolios[0].img);
      });
    });
    it('should have the last portfolio image.', function(){
      item = element.all(by.css('.portfolio-img')).last();
      item.getAttribute('src').then(function(src){
        expect(src).toContain(main.portfolios[len].img);
      });
    });
    it('should have the portfolio technologies.', function(){
      item = element.all(by.css('.tech'));
      item.count().then(function(count){
        expect(count).toBe(main.portfoliosTechLen);
      });
    });
    it('should have the first portfolio technology.', function(){
      item = element.all(by.css('.tech')).first();
      item.getText().then(function(tech){
        expect(tech).toEqual(main.portfolios[0].tech0[0]);
      });
    });
    it('should have the last portfolio technology.', function(){
      item = element.all(by.css('.tech')).last();
      item.getText().then(function(tech){
        lTech = main.portfolios[len].tech1[main.portfolios[len].tech1.length - 1];
        expect(tech).toEqual(tech);
      });
    });
    it('should navigate to the first portfolio.', function(){
      url = main.portfolios[0].href;
      main.testIntUrl('portfolio-link0', url);
    });
    it('should navigate to the last portfolio.', function(){
      main.get();
      main.testScroll('portfolio-btn', true);
      url = main.portfolios[len].href;
      main.testIntUrl('portfolio-link' + len, url);
    });
    it('should have a scroll to top of page button.', function(){
      expect(element.all(by.css('.totopbutton')).first().isDisplayed()).toBe(true);
    });
  });
})();

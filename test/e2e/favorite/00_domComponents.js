(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var Favorite = require('./../page-objects/favorite/favorite');
  var favorite = new Favorite();
  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var btn;

  /* Protractor specs for end-to-end testing */
  describe('FavoriteLanguageApp:', function(){
    beforeAll(function(){
      favorite.get();
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(300);
      });
    });
    it('should load page.', function(){
      browser.getCurrentUrl().then(function(url){
        expect(url).toBe(favorite.url);
      });
    });
    describe('NavBar DOM Components', function(){
      it('should have a NavBar div.', function(){
        expect(browser.isElementPresent(by.css('.navbar'))).toBe(true);
      });
      it('should have a NavBar brand.', function(){
        expect(browser.isElementPresent(by.css('.navbar-brand'))).toBe(true);
      });
      it('should have the app title displayed for the NavBar brand.', function(){
        element(by.binding('app_title')).getText().then(function(text){
          expect(text).toBe(main.title);
        });
      });
      it('should NOT have the `e2e` button displayed.', function(){
        expect($$('e2e-btn').count()).toBe(0);
      });
      it('should NOT have the `Unit` button displayed.', function(){
        expect($$('unit-btn').count()).toBe(0);
      });
      it('should NOT have the `Portfolio` button displayed.', function(){
        expect($$('portfolio-btn').count()).toBe(0);
      });
      it('should NOT have the `Skills` button displayed.', function(){
        expect($$('skills-btn').count()).toBe(0);
      });
      it('should have a link to GitHub.', function(){
        expect(element(by.id('github-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the GitHub button.', function(){
        expect(element(by.css('.fa-github-square')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the GitHub button.', function(){
        main.verifyText('github-btn', 'GitHub');
      });
      it('should load the GitHub page.', function(){
        main.testExtUrl('github-btn', main.githubUrl);
      });
      it('should have a link to LinkedIn.', function(){
        expect(element(by.id('linkedin-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the LinkedIn button.', function(){
        expect(element(by.css('.fa-linkedin')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the LinkedIn button.', function(){
        main.verifyText('linkedin-btn', 'LinkedIn');
      });
      it('should load the LinkedIn page.', function(){
        main.testExtUrl('linkedin-btn', main.linkedInUrl);
      });
      it('should have a link to show the about modal.', function(){
        expect(element(by.id('about-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the about button.', function(){
        expect(element(by.css('.fa-info')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the about button.', function(){
        main.verifyText('about-btn', 'About');
      });
      it('should display the about modal.', function(){
        btn = element(by.id('about-btn'));
        base.wait(btn);
        btn.click();
        browser.sleep(250);
        expect(element(by.css('.modal-content')).isDisplayed()).toBe(true);
      });
      it('should close the modal.', function(){
        btn = element(by.css('.about-modal-ok'));
        base.wait(btn);
        btn.click();
        browser.sleep(250);
        expect(browser.isElementPresent(by.css('.modal-header'))).toBe(false);
      });
      it('should have the link to the Home page.', function(){
        expect(element(by.id('home-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the home button.', function(){
        expect(element(by.css('.fa-home')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the home button.', function(){
        main.verifyText('home-btn', main.homeText);
      });
      it('should navigate back to `Portfolio` app homepage.', function(){
        btn = element(by.id('home-btn'));
        btn.click();
        browser.sleep(100);
        base.verifyUrl(base.url + '#/');
      });
    });
    describe('Page DOM Components', function(){
      it('should display the title.', function(){
        favorite.get();
        expect(element(by.id('favorite-title')).isDisplayed()).toBe(true);
      });
      it('should have a pie-chart displayed.', function(){
        expect(element(by.id('chart-display')).isDisplayed()).toBe(true);
      });
      it('should have a legend displayed for the pie-chart.', function(){
        expect(element(by.css('.highcharts-legend')).isDisplayed()).toBe(true);
      });
      it('should have three legend items.', function(){
        favorite.verifyCount(3, '.highcharts-legend-item');
      });
      it('should display `Javascript` for the first legend item.', function(){
        // Ordering of legend is reversed for dislay, start at 0 for JS here!
        favorite.verifyLegend(0, 'JavaScript');
      });
      it('should display `Ruby` for the second legend item.', function(){
        favorite.verifyLegend(1, 'Ruby');
      });
      it('should display `PHP` for the third legend item.', function(){
        favorite.verifyLegend(2, 'PHP');
      });
      it('should have a `Javascript` voting button.', function(){
        expect(element(by.id('js-btn')).isDisplayed()).toBe(true);
      });
      it('should have a JS image for the voting button text.', function(){
        expect(element(by.id('js-btn-img')).isDisplayed()).toBe(true);
      });
      it('should have a `Ruby` voting button.', function(){
        expect(element(by.id('rb-btn')).isDisplayed()).toBe(true);
      });
      it('should have a Ruby image for the voting button text.', function(){
        expect(element(by.id('rb-btn-img')).isDisplayed()).toBe(true);
      });
      it('should have a `PHP` voting button.', function(){
        expect(element(by.id('php-btn')).isDisplayed()).toBe(true);
      });
      it('should have a PHP image for the voting button text.', function(){
        expect(element(by.id('php-btn-img')).isDisplayed()).toBe(true);
      });
      it('should display the current vote counts.', function(){
        favorite.verifyCount(3, 'tspan');
      });
    });
  });
})();

(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var Weather = require('./../page-objects/weather/weather');
  var weather = new Weather();
  var btn, filter, today;

  /* Protractor specs for end-to-end testing */
  describe('WeatherApp:', function(){
    it('should load page.', function(){
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(300);
      });
      weather.get();
      browser.getCurrentUrl().then(function(url){
        expect(url).toBe(weather.url);
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
      it('should have the Weather Underground logo displayed.', function(){
        weather.get();
        expect(element(by.id('wundergroundPic')).isDisplayed()).toBe(true);
      });
      it('should load the Weather Underground page.', function(){
        main.testExtUrl('weather-btn', main.weatherUrl);
      });
      it('should have the date displayed.', function(){
        expect(element(by.id('today')).isDisplayed()).toBe(true);
      });
      it('should have the correct date displayed.', function(){
        element(by.binding('weather.date')).getText().then(function(txt){
          browser.executeScript(function(){
            filter = angular.injector(['ng']).get('dateFilter');
            today = filter(new Date(), 'EEEE MMMM d, yyyy');
            return today;
          }).then(function(now){
            // console.log('txt', txt);
            // console.log('now', now);
            expect(txt).toEqual(now);
          });
        });
      });
      it('should have the location displayed.', function(){
        expect(weather.location.isDisplayed()).toBe(true);
      });
      it('should have the toggle to display search box.', function(){
        expect(weather.toggle.isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the toggle button.', function(){
        expect(element(by.css('.glyphicon-search')).isDisplayed()).toBe(true);
      });
      it('should have the form to change weather location.', function(){
        expect(browser.isElementPresent(by.id('weatherLocation'))).toBe(true);
      });
    });
  });
})();

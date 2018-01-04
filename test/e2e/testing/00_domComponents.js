(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var Testing = require('./../page-objects/testing/testing');
  var testing = new Testing();
  var btn;

  /* Protractor specs for end-to-end testing */
  describe('TestingApp:', function(){
    it('should load page.', function(){
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(300);
      });
      testing.get();

      browser.getCurrentUrl().then(function(url){
        expect(url).toBe(testing.url);
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
      it('should have a link to scroll to the e2e test section.', function(){
        expect(element(by.id('e2e-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the e2e button.', function(){
        expect(element(by.css('.fa-user')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the e2e button.', function(){
        main.verifyText('e2e-btn', testing.e2eText);
      });
      it('should scroll to the e2e test section.', function(){
        main.testScroll('e2e-btn', true);
      });
      it('should scroll to the top of page with to top button.', function(){
        main.scrollIntoView('.totopbutton');
        main.testScroll('.totopbutton', false);
      });
      it('should have a link to scroll to the unit test section.', function(){
        expect(element(by.id('unit-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the unit test button.', function(){
        expect(element(by.css('.fa-terminal')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the unit test button.', function(){
        main.verifyText('unit-btn', testing.unitText);
      });
      it('should scroll to the unit test section.', function(){
        main.testScroll('unit-btn', true);
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
      testing.get();
      it('should be true.........need to complete.', function(){
        expect(true).toBe(true);
      });
    });
  });
})();

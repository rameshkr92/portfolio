(function(){
  'use strict';

  var Animate = require('./../page-objects/animate/animate');
  var animate = new Animate();
  var Base = require('./../page-objects/base');
  var base = new Base();
  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var btn, item, str;

  /* Protractor specs for end-to-end testing */
  describe('AnimateApp:', function(){
    beforeAll(function(){
      animate.get();
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(300);
      });
    });
    it('should load the page.', function(){
      browser.getCurrentUrl().then(function(url){
        expect(url).toBe(animate.url);
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
      it('should have a thumbnail section.', function(){
        animate.get();
        expect(element(by.css('.thumb-div')).isDisplayed()).toBe(true);
      });
      it('should have the album of images.', function(){
        expect(browser.isElementPresent(by.repeater('img in album'))).toBe(true);
      });
      it('should have the images displayed.', function(){
        expect(element.all(by.css('.car-img')).count()).toEqual(17);
      });
      it('should have an album selector.', function(){
        expect(element(by.id('album-selector')).isDisplayed()).toBe(true);
      });
      it('should have three albums in selector.', function(){
        // str = 'album.name for album in albums.available track by album.id';
        // item = element.all(by.options(str));
        // console.log('item:', item);
        // expect(item.count()).toBe(3);
      });
    });
  });
})();

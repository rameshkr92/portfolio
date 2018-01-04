(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var btn;

  /* Protractor specs for end-to-end testing */
  describe('PortfolioApp:', function(){
    beforeAll(function(){
      browser.driver.manage().window().getSize().then(function(size){
        browser.driver.manage().window().setSize(1000, size.height);
        browser.sleep(300);
      });
      main.get();
    });
    it('should load main page.', function(){
      browser.getCurrentUrl().then(function(url){
        expect(url).toBe(main.url);
      });
    });
    describe('About Modal', function(){
      it('should be displayed.', function(){
        btn = element(by.css('.about-modal-ok'));
        base.wait(btn);
        expect(element(by.css('.modal-wrapper')).isDisplayed()).toBe(true);
      });
      it('should have a header.', function(){
        expect(element(by.css('.modal-header')).isDisplayed()).toBe(true);
      });
      it('should have a body.', function(){
        expect(element(by.css('.modal-body')).isDisplayed()).toBe(true);
      });
      it('should have a footer.', function(){
        expect(element(by.css('.modal-footer')).isDisplayed()).toBe(true);
      });
      it('should have a `Close` button.', function(){
        expect(element(by.css('.about-modal-ok')).isDisplayed()).toBe(true);
      });
      // Close modal for further tests to run
      it('should close the modal.', function(){
        btn.click();
        browser.sleep(250);
        expect(browser.isElementPresent(by.css('.modal-header'))).toBe(false);
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
      it('should NOT have the `Home` button displayed.', function(){
        expect($$('home-btn').count()).toBe(0);
      });
      it('should NOT have the `Unit` button displayed.', function(){
        expect($$('unit-btn').count()).toBe(0);
      });
      it('should NOT have the `e2e` button displayed.', function(){
        expect($$('ete-btn').count()).toBe(0);
      });
      it('should have a link to GitHub.', function(){
        expect(element(by.id('github-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icons displayed for the GitHub buttons(footer also).', function(){
        base.verifyCount('.fa-github-square', 2);
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
        base.verifyCount('.fa-linkedin', 2);
      });
      it('should have the correct text displayed for the LinkedIn button.', function(){
        main.verifyText('linkedin-btn', 'LinkedIn');
      });
      it('should load the LinkedIn page.', function(){
        main.testExtUrl('linkedin-btn', main.linkedInUrl);
      });
      it('should have a link to show the About modal.', function(){
        expect(element(by.id('about-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the about button.', function(){
        expect(element(by.css('.fa-info')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the About button.', function(){
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
      it('should have a link to scroll to the skills section.', function(){
        expect(element(by.id('skills-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the skills button.', function(){
        expect(element(by.css('.fa-code')).isDisplayed()).toBe(true);
      });
      it('should have the correct text displayed for the Skills button.', function(){
        main.verifyText('skills-btn', 'Skillset');
      });
      it('should scroll to the skills section.', function(){
        main.testScroll('skills-btn', true);
      });
      it('should have a link to scroll to the portfolio section.', function(){
        expect(element(by.id('portfolio-btn')).isDisplayed()).toBe(true);
      });
      it('should have the correct icon displayed for the portfolio button.', function(){
        expect(element(by.css('.fa-briefcase')).isDisplayed()).toBe(true);
      });
      it('should scroll to the top of page with to top button.', function(){
        main.testScroll('.totopbutton', false);
      });
      it('should have the correct text displayed for the portfolio button.', function(){
        main.verifyText('portfolio-btn', main.portfolioText);
      });
      it('should scroll to the portfolio section.', function(){
        main.testScroll('portfolio-btn', true);
      });
      it('should have two scroll to top of page buttons.', function(){
        base.verifyCount('.totopbutton', 2);
      });
      it('should scroll to the top of page with to top button.', function(){
        main.testScroll('.totopbutton', false);
      });
      it('should have a link to GitHub in the footer.', function(){
        main.testScroll('skills-btn', true);
        expect(element(by.id('github-footer-btn')).isDisplayed()).toBe(true);
      });
      it('should load the GitHub page from the footer navigation.', function(){
        main.testExtUrl('github-footer-btn', main.githubUrl);
      });
      it('should have a link to LinkedIn in the footer.', function(){
        expect(element(by.id('linkedin-footer-btn')).isDisplayed()).toBe(true);
      });
      it('should load the LinkedIn page from the footer navigation.', function(){
        main.testExtUrl('linkedin-footer-btn', main.linkedInUrl);
      });
      // Last scroll top button test to keep footer nav in viewport.
      it('should scroll to the top of page with to top button.', function(){
        main.testScroll('.totopbutton', false);
      });
      describe('NavBar Collapsed Functionality', function(){
        it('should have a NavBar toggle button.', function(){
          expect(browser.isElementPresent(by.css('button.navbar-toggle'))).toBe(true);
        });
        it('should have a collection for collapsed NavBar content.', function(){
          expect(browser.isElementPresent(by.css('#navbar-collapse.collapse.navbar-collapse'))).toBe(true);
        });
        it('should NOT have collapsed button visible.', function(){
          expect(element(by.css('.navbar-toggle')).isDisplayed()).toBe(false);
        });
        it('should have collapsed button visible when width < 851.', function(){
          browser.driver.manage().window().getSize().then(function(size){
            browser.driver.manage().window().setSize(450, size.height);
            browser.sleep(300);
          });
          expect(element(by.css('.navbar-toggle')).isDisplayed()).toBe(true);
        });
        it('should have a link to GitHub.', function(){
          main.toggleNavBar();
          expect(element(by.id('github-btn')).isDisplayed()).toBe(true);
        });
        it('should have the correct text displayed for the GitHub button.', function(){
          main.verifyText('github-btn', 'GitHub');
        });
        it('should load the GitHub page.', function(){
          main.testExtUrl('github-btn', main.githubUrl);
        });
        it('should have a link to LinkedIn.', function(){
          main.toggleNavBar();
          expect(element(by.id('linkedin-btn')).isDisplayed()).toBe(true);
        });
        it('should have the correct text displayed for the LinkedIn button.', function(){
          main.verifyText('linkedin-btn', 'LinkedIn');
        });
        it('should load the LinkedIn page.', function(){
          main.testExtUrl('linkedin-btn', main.linkedInUrl);
        });
        it('should have a link to show the About modal.', function(){
          main.toggleNavBar();
          expect(element(by.id('about-btn')).isDisplayed()).toBe(true);
        });
        it('should have the correct text displayed for the About button.', function(){
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
        it('should have a link to scroll to the skills section.', function(){
          main.toggleNavBar();
          expect(element(by.id('skills-btn')).isDisplayed()).toBe(true);
        });
        it('should have the correct text displayed for the Skills button.', function(){
          main.verifyText('skills-btn', 'Skillset');
        });
        it('should scroll to the skills section.', function(){
          main.testScroll('skills-btn', true);
        });
        it('should have a link to scroll to the portfolio section.', function(){
          main.toggleNavBar();
          expect(element(by.id('portfolio-btn')).isDisplayed()).toBe(true);
        });
        it('should have the correct text displayed for the portfolio button.', function(){
          main.verifyText('portfolio-btn', main.portfolioText);
        });
        it('should scroll to the portfolio section.', function(){
          main.testScroll('portfolio-btn', true);
        });
        it('should scroll back to top of page for next test.', function(){
          main.testScroll('.totopbutton', false);
        });
      });
    });
  });
})();

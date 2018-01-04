(function(){
  'use strict';

  var Main = require('./../page-objects/main/main');
  var main = new Main();
  var item, len, url;

  describe('PortfolioApp: Skills Section DOM Components', function(){
    // Need to scroll to section to test link below.
    it('should scroll to the skills section.', function(){
      main.testScroll('skills-btn', true);
    });
    it('should have the correct background color.', function(){
      element(by.id('skills')).getCssValue('background-color').then(function(val){
        expect(val).toBe(main.skillsBgColor);
      });
    });
    it('should have a skills title.', function(){
      expect(element(by.id('skills-title')).isDisplayed()).toBe(true);
    });
    it('should have the first section of skill images.', function(){
      item = element.all(by.repeater('img in skills_images0'));
      // Length is doubled for hidden repeater on small screens
      len = main.skillsImages0.length * 2;
      item.count().then(function(count){
        expect(count).toEqual(len);
      });
    });
    it('should have the second section of skill images.', function(){
      item = element.all(by.repeater('img in skills_images1'));
      len = main.skillsImages1.length * 2;
      item.count().then(function(count){
        expect(count).toEqual(len);
      });
    });
    it('should load the first skills page.', function(){
      url = main.skillsImages0[0].href;
      main.testExtUrl('skills-link00', url);
    });
    it('should load the last skills page.', function(){
      len = main.skillsImages1.length - 1;
      url = main.skillsImages1[len].href;
      main.testExtUrl('skills-link1' + len, url);
    });
  });
})();

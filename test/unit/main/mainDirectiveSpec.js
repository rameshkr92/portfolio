(function(){
  'use strict';

  describe('PortfolioApp - Directive: mainDisplay', function(){
    var $scope, Mock, count, el, html, item;

    beforeEach(function(){
      module('partials/main/_foot_nav.html');
      module('partials/main/_header.html');
      module('partials/main/_mainDisplay.html');
      module('partials/main/_portfolio.html');
      module('partials/main/_scrollTo.html');
      module('partials/main/_skills.html');
      module('partials/main/_weather.html');
      module('partials/weather/_weatherLocation.html');

      module('pcApp', function($controllerProvider){
        $controllerProvider.register('MainController', function($scope, MockMainObjFactory){
          $scope.header_title0 = MockMainObjFactory.headerTitle0;
          $scope.lamp_stack = MockMainObjFactory.lampStack;
          $scope.mean_stack = MockMainObjFactory.meanStack;
          $scope.portfolio_title = MockMainObjFactory.portfolioTitle;
          $scope.portfolios = MockMainObjFactory.portfolios;
          $scope.ror_stack = MockMainObjFactory.rorStack;
          $scope.skills_title = MockMainObjFactory.skillsTitle;
          $scope.skills_images0 = MockMainObjFactory.skillsImages0;
          $scope.skills_images1 = MockMainObjFactory.skillsImages1;
        });
      });
      html = '<main-display></main-display>';

      inject(function($compile, $rootScope, _MockMainObjFactory_){
        Mock = _MockMainObjFactory_;
        $scope = $rootScope.$new();
        el = $compile(angular.element(html))($scope);
        $scope.$apply();
      });
    });

    describe('Main page', function(){
      it('should have a `header` section.', function(){
        expect('#header-content').toBeDefined();
      });
      it('should display the header text.', function(){
        expect('.head-txt').toBeDefined();
        item = el[0].querySelectorAll('.head-txt');
      });
      it('should have the correct text on the first line.', function(){
        expect(item[0].textContent).toContain(Mock.headerTitle0);
      });
      it('should display images for the three stacks learned.', function(){
        item = el[0].querySelectorAll('.content-img');
        expect(item.length).toBe(3);
      });
      it('should have the correct text for the first image.', function(){
        expect(el[0].querySelector('.mean').textContent).toContain(Mock.meanStack);
      });
      it('should have the correct text for the second image.', function(){
        expect(el[0].querySelector('.ror').textContent).toContain(Mock.rorStack);
      });
      it('should have the correct text for the third image.', function(){
        expect(el[0].querySelector('.lamp').textContent).toContain(Mock.lampStack);
      });
      it('should have a `portfolio` section.', function(){
        expect(el.find('#portfolio')).toBeDefined();
      });
      it('should display the portfolio title.', function(){
        item = el.find('#portfolio-title');
        expect(item.length).toBe(1);
      });
      it('should display the correct text for the portfolio title.', function(){
        expect(item.text()).toContain(Mock.portfolioTitle);
      });
      it('should have the correct number of portfolio images.', function(){
        item = el[0].querySelectorAll('.portfolio-img');
        expect(item.length).toBe(Mock.portfolios.length);
      });
      it('should have the correct source for the first portfolio image.', function(){
        expect(item[0].src).toContain(Mock.portfolios[0].img);
      });
      it('should have the correct source for the second portfolio image.', function(){
        expect(item[1].src).toContain(Mock.portfolios[1].img);
      });
      it('should have the correct source for the third portfolio image.', function(){
        expect(item[2].src).toContain(Mock.portfolios[2].img);
      });
      it('should have the correct number of portfolio links.', function(){
        item = el[0].querySelectorAll('.portfolio-link');
        expect(item.length).toBe(Mock.portfolios.length);
      });
      it('should have the correct href for the first portfolio image.', function(){
        expect(item[0].href).toContain(Mock.portfolios[0].href);
      });
      it('should have the correct href for the second portfolio image.', function(){
        expect(item[1].href).toContain(Mock.portfolios[1].href);
      });
      it('should have the correct href for the third portfolio image.', function(){
        expect(item[2].href).toContain(Mock.portfolios[2].href);
      });
      it('should have the correct number of portfolio names.', function(){
        item = el[0].querySelectorAll('.portfolio-name');
        expect(item.length).toBe(Mock.portfolios.length);
      });
      it('should display the correct text for the first portfolio name.', function(){
        expect(item[0].textContent).toContain(Mock.portfolios[0].name);
      });
      it('should display the correct text for the second portfolio name.', function(){
        expect(item[1].textContent).toContain(Mock.portfolios[1].name);
      });
      it('should display the correct text for the third portfolio name.', function(){
        expect(item[2].textContent).toEqual(Mock.portfolios[2].name);
      });

      // TODO: convert these to portfolio technologies
      // it('should have the correct number of slide descriptions.', function(){
      //   item = el[0].querySelectorAll('.portfolio-desc');
      //   expect(item.length).toBe(Mock.portfolios.length);
      // });
      // it('should display the correct text for the first portfolio description.', function(){
      //   expect(item[0].textContent).toContain(Mock.portfolios[0].desc);
      // });
      // it('should display the correct text for the second portfolio description.', function(){
      //   expect(item[1].textContent).toContain(Mock.portfolios[1].desc);
      // });
      // it('should display the correct text for the third portfolio description.', function(){
      //   expect(item[2].textContent).toContain(Mock.portfolios[2].desc);
      // });
      it('should have a `skills` section.', function(){
        expect(el.find('#skills')).toBeDefined();
      });
      it('should display the skills header.', function(){
        item = el.find('#skills-title');
        expect(item.length).toBe(1);
      });
      it('should have the correct text for the skills header.', function(){
        expect(item.text()).toContain(Mock.skillsTitle);
      });
      it('should have the correct number of skills images for xs screens.', function(){
        item = el[0].querySelectorAll('.skills-img-xs');
        count = Mock.skillsImages0.length + Mock.skillsImages1.length;
        expect(item.length).toBe(count);
      });
      it('should have the correct source for the first image for xs screens.', function(){
        expect(item[0].src).toContain(Mock.skillsImages0[0].src);
      });
      it('should have the correct source for the last skill image for xs screens.', function(){
        expect(item[23].src).toContain(Mock.skillsImages1[11].src);
      });
      it('should have the correct number of skill links for xs screens.', function(){
        item = el[0].querySelectorAll('.skills-link-xs');
        expect(item.length).toBe(count);
      });
      it('should have the correct href for the first skills image for xs screens.', function(){
        expect(item[0].href).toContain(Mock.skillsImages0[0].href);
      });
      it('should have the correct number of skills images for other screens.', function(){
        item = el[0].querySelectorAll('.skills-img');
        expect(item.length).toBe(count);
      });
      it('should have the correct source for the first skill image for other screens.', function(){
        expect(item[0].src).toContain(Mock.skillsImages0[0].src);
      });
      it('should have the correct source for the last skill image for other screens.', function(){
        expect(item[23].src).toContain(Mock.skillsImages1[11].src);
      });
      it('should have the correct number of skill links for other screens.', function(){
        item = el[0].querySelectorAll('.skills-link');
        expect(item.length).toBe(count);
      });
      it('should have two links to scroll back to the top of the page.', function(){
        item = el[0].querySelectorAll('.to-top');
        expect(item.length).toBe(2);
      });
      it('should have the correct Font-Awesome image for the scroll links.', function(){
        expect(item[0].innerHTML).toContain(Mock.chevronCircleUpFA);
      });
      it('should have a `ng-click` event for each scroll link.', function(){
        expect(item[0].innerHTML).toContain(Mock.ngClickScrollTo);
      });
      it('should have a bottom footer section.', function(){
        expect(el.find('#bottom-footer')).toBeDefined();
      });
      it('should contain two links.', function(){
        item = el[0].querySelectorAll('#bottom-footer ul li');
        expect(item.length).toBe(2);
      });
      it('should have the correct url for the first link.', function(){
        expect(item[0].innerHTML).toContain(Mock.linkedInUrl);
      });
      it('should have the correct Font-Awesome image for the first link.', function(){
        expect(item[0].innerHTML).toContain(Mock.linkedInFA);
      });
      it('should have the correct url for the second link.', function(){
        expect(item[1].innerHTML).toContain(Mock.githubUrl);
      });
      it('should have the correct Font-Awesome image for the second link.', function(){
        expect(item[1].innerHTML).toContain(Mock.githubFA);
      });
    });
  });
})();

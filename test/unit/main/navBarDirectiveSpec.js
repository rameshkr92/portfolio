(function(){
  'use strict';

  var Mock, el, html, item;

  beforeEach(module('partials/main/_navBar.html'));

  describe('PortfolioApp - Directive: navBarDisplay', function(){
    beforeEach(function(){
      module('pcApp', function($controllerProvider){
        $controllerProvider.register('PortfolioNavBarController', function(MockMainObjFactory, $scope){
          $scope.app_title = MockMainObjFactory.appTitle;
          $scope.portfolio = MockMainObjFactory.portfolioTitle;
          $scope.github = MockMainObjFactory.githubText;
          $scope.linkedin = MockMainObjFactory.linkedInText;
          $scope.skills = MockMainObjFactory.skillsTitle;
          $scope.currentPath = MockMainObjFactory.homePath;
        });
      });
      // Generate the HTML directive element
      html = '<nav-bar-display></nav-bar-display>';

      inject(function($compile, $rootScope, _MockMainObjFactory_){
        Mock = _MockMainObjFactory_;
        el = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('NavBar', function(){
      it('should be displayed.', function(){
        expect(el[0].querySelector('.navbar')).not.toBeNull();
      });
      it('should contain a brand.', function(){
        expect(el[0].querySelector('.navbar-brand')).not.toBeNull();
      });
      it('should contain the app title displayed for the brand.', function(){
        item = el.find('.navbar-brand');
        expect(item.text()).toContain(Mock.appTitle);
      });
      it('should contain a collection for collapsed content.', function(){
        expect(el[0].querySelector('#navbar-collapse.collapse.navbar-collapse')).not.toBeNull();
      });
      it('should contain navigation bar on the right.', function(){
        expect(el[0].querySelector('.nav.navbar-nav.navbar-right')).not.toBeNull();
      });
      it('should contain a link to display portfolio.', function(){
        expect(el[0].querySelector('#portfolio-btn')).not.toBeNull();
      });
      it('should contain correct text for `Portfolio` link.', function(){
        item = el.find('#portfolio-btn');
        expect(item.text()).toContain(Mock.portfolioTitle);
      });
      it('should contain a link to GitHub.', function(){
        expect(el[0].querySelector('#github-btn')).not.toBeNull();
      });
      it('should contain correct text for `GitHub` link.', function(){
        item = el.find('#github-btn');
        expect(item.text()).toContain(Mock.githubText);
      });
      it('should contain a link to LinkedIn.', function(){
        expect(el[0].querySelector('#linkedin-btn')).not.toBeNull();
      });
      it('should contain correct text for `LinkedIn` link.', function(){
        item = el.find('#linkedin-btn');
        expect(item.text()).toContain(Mock.linkedInText);
      });
      it('should contain a link to display skills.', function(){
        expect(el[0].querySelector('#skills-btn')).not.toBeNull();
      });
      it('should contain correct text for `Skills` link.', function(){
        item = el.find('#skills-btn');
        expect(item.text()).toContain(Mock.skillsTitle);
      });
    });
  });
})();

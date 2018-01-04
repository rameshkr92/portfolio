(function(){
  'use strict';

  describe('PortfolioApp - Controller: PortfolioNavBarController', function(){
    var $document, $rootScope, $scope, Mock, called;

    beforeEach(function(){
      module('pcApp');

      inject(function($controller, _$document_, _$rootScope_, _MockMainObjFactory_){
        $document = _$document_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        Mock = _MockMainObjFactory_;
        called = false;

        $scope.$on('locationChanged', function(){
          called = true;
        });

        $controller('PortfolioNavBarController', {
          $scope: $scope
        });

        $scope.$apply();
      });
      spyOn($document, 'scrollTopAnimated');
      spyOn($document, 'scrollToElementAnimated');
      spyOn($scope, 'scrollTo').and.callThrough();
      spyOn($rootScope, '$broadcast').and.callThrough();
    });

    describe('Initializing the $scope', function(){
      it('should set the application title.', function(){
        expect($scope.app_title).toBe(Mock.appTitle);
      });
      it('should set the E2E link name.', function(){
        expect($scope.e2e).toBe(Mock.e2eText);
      });
      it('should set the E2E font-awesome name.', function(){
        expect($scope.e2e_fa).toBe(Mock.e2eFaText);
      });
      it('should set the Portfolio link name.', function(){
        expect($scope.portfolio).toBe(Mock.portfolioTitle);
      });
      it('should set the Portfolio font-awesome name.', function(){
        expect($scope.portfolio_fa).toBe(Mock.portfolioFaText);
      });
      it('should set the GitHub link name.', function(){
        expect($scope.github).toBe(Mock.githubText);
      });
      it('should set the GitHub font-awesome name.', function(){
        expect($scope.github_fa).toBe(Mock.githubFaText);
      });
      it('should set the GitHub link url.', function(){
        expect($scope.github_url).toBe(Mock.githubUrl);
      });
      it('should set the Home link name.', function(){
        expect($scope.home).toBe(Mock.homeText);
      });
      it('should set the Home font-awesome name.', function(){
        expect($scope.home_fa).toBe(Mock.homeFaText);
      });
      it('should set the Home link url.', function(){
        expect($scope.home_url).toBe(Mock.homeUrl);
      });
      it('should set the LinkedIn link name.', function(){
        expect($scope.linkedin).toBe(Mock.linkedInText);
      });
      it('should set the LinkedIn font-awesome name.', function(){
        expect($scope.linkedin_fa).toBe(Mock.linkedInFaText);
      });
      it('should set the LinkedIn link url.', function(){
        expect($scope.linkedin_url).toBe(Mock.linkedInUrl);
      });
      it('should set the Skills link name.', function(){
        expect($scope.skills).toBe(Mock.skillsTitle);
      });
      it('should set the Skills font-awesome name.', function(){
        expect($scope.skills_fa).toBe(Mock.skillsFaText);
      });
      it('should set the Unit Test link name.', function(){
        expect($scope.unit).toBe(Mock.unitText);
      });
      it('should set the Unit Test font-awesome name.', function(){
        expect($scope.unit_fa).toBe(Mock.unitFaText);
      });
      it('should set the scroll to top font-awesome name.', function(){
        expect($scope.up_fa).toBe(Mock.upFaText);
      });
      it('should have scrollTo() defined.', function(){
        expect($scope.scrollTo).toBeDefined();
      });
    });
    describe('$scope.scrollTo()', function(){
      it('should be called.', function(){
        $scope.scrollTo('top');
        expect($scope.scrollTo).toHaveBeenCalled();
      });
      it('should call $document.scrollTopAnimated when called with `top`.', function(){
        $scope.scrollTo('top');
        expect($document.scrollTopAnimated).toHaveBeenCalled();
      });
      it('should call $document.scrollToElementAnimated when called with `portfolio`.', function(){
        $scope.scrollTo('portfolio');
        expect($document.scrollToElementAnimated).toHaveBeenCalled();
      });
      it('should call $document.scrollToElementAnimated when called with `skills`.', function(){
        $scope.scrollTo('skills');
        expect($document.scrollToElementAnimated).toHaveBeenCalled();
      });
    });
    describe('Listener - locationChanged', function(){
      it('should call $on when locationChanged event is $broadcast.', function(){
        $rootScope.$broadcast('locationChanged');
        expect(called).toBe(true);
      });
    });
  });
})();

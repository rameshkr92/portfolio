(function(){
  'use strict';

  describe('PortfolioApp - Controller: MainController', function(){
    var $rootScope, $scope, Mock;

    beforeEach(function(){
      module('pcApp');

      inject(function($controller, _$rootScope_, _MockMainObjFactory_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        Mock = _MockMainObjFactory_;

        $controller('MainController', {
          $scope: $scope
        });

        $scope.$apply();
      });
    });

    describe('Initializing the $scope', function(){
      describe('Header section', function(){
        it('should set the first header title.', function(){
          expect($scope.header_title0).toBe(Mock.headerTitle0);
        });
        it('should set the display text for MEAN Stack.', function(){
          expect($scope.mean_stack).toBe(Mock.meanStack);
        });
        it('should set the image for MEAN Stack.', function(){
          expect($scope.mean_img).toBe(Mock.meanImg);
        });
        it('should set the display text for Ruby on Rails.', function(){
          expect($scope.ror_stack).toBe(Mock.rorStack);
        });
        it('should set the image for Ruby on Rails.', function(){
          expect($scope.ror_img).toBe(Mock.rorImg);
        });
        it('should set the display text for LAMP Stack.', function(){
          expect($scope.lamp_stack).toBe(Mock.lampStack);
        });
        it('should set the image for LAMP Stack.', function(){
          expect($scope.lamp_img).toBe(Mock.lampImg);
        });
      });
      describe('Portfolio section', function(){
        it('should set the display text for the title.', function(){
          expect($scope.portfolio_title).toBe(Mock.portfolioTitle);
        });
        it('should set the portfolios.', function(){
          expect($scope.portfolios).toEqual(Mock.portfolios);
        });
      });
      describe('Skills section', function(){
        it('should set the display text for the title.', function(){
          expect($scope.skills_title).toBe(Mock.skillsTitle);
        });
        it('should set the first set of images.', function(){
          expect($scope.skills_images0).toEqual(Mock.skillsImages0);
        });
        it('should set the second set of images.', function(){
          expect($scope.skills_images1).toEqual(Mock.skillsImages1);
        });
        it('should set the first popover template.', function(){
          expect($scope.templateUrl0).toEqual(Mock.templateUrl0);
        });
        it('should set the second popover template.', function(){
          expect($scope.templateUrl1).toEqual(Mock.templateUrl1);
        });
        it('should set the third popover template.', function(){
          expect($scope.templateUrl2).toEqual(Mock.templateUrl2);
        });
        it('should set the fourth popover template.', function(){
          expect($scope.templateUrl3).toEqual(Mock.templateUrl3);
        });
      });
    });
  });
})();

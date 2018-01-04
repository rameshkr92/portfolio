(function(){
  'use strict';

  describe('PortfolioApp - Controller: TestingController', function(){
    var $rootScope, $scope, Mock;

    beforeEach(function(){
      module('pcApp');

      inject(function($controller, _$rootScope_, _MockTestObjFactory_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        Mock = _MockTestObjFactory_;

        $controller('TestingController', {
          $scope: $scope
        });

        $scope.$apply();
      });
    });

    describe('Initializing the $scope', function(){
      describe('e2e test section', function(){
        it('should set the header title.', function(){
          expect($scope.e2e_test_title).toBe(Mock.e2eTestTitle);
        });
        it('should set the e2e tests object.', function(){
          expect($scope.e2e_tests).toEqual(Mock.e2eTests);
        });
      });
      describe('unit test section', function(){
        it('should set the header title.', function(){
          expect($scope.unit_test_title).toBe(Mock.unitTestTitle);
        });
        it('should set the unit tests object.', function(){
          expect($scope.unit_tests).toEqual(Mock.unitTests);
        });
      });
    });
  });
})();

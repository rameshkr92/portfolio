(function(){
  'use strict';

  describe('PortfolioApp - Directive: testingDisplay', function(){
    var $scope, Mock, el, html;

    beforeEach(function(){
      module('partials/testing/_testingDisplay.html');
      module('partials/main/_scrollTo.html');

      module('pcApp', function($controllerProvider){
        $controllerProvider.register('TestingController', function($scope, MockTestObjFactory){
          $scope.e2e_test_title = MockTestObjFactory.e2eTestTitle;
          $scope.e2e_tests = MockTestObjFactory.e2eTests;
          $scope.unit_test_title = MockTestObjFactory.unitTestTitle;
          $scope.unit_tests = MockTestObjFactory.unitTests;
        });
      });
      html = '<testing-display></testing-display>';

      inject(function($compile, $rootScope, _MockTestObjFactory_){
        Mock = _MockTestObjFactory_;
        $scope = $rootScope.$new();
        el = $compile(angular.element(html))($scope);
        $scope.$apply();
      });
    });

    describe('Main page', function(){
      it('should have the e2e test title.', function(){
        expect('#e2e_test_title').toBeDefined();
      });
      it('should display the correct text for the e2e test title.', function(){
        expect(el[0].querySelector('#e2e_test_title').textContent).toBe(Mock.e2eTestTitle);
      });
      it('should display the iFrame for the first e2e test video.', function(){
        expect('#ytplayer0').toBeDefined();
      });
      it('should have the unit test title.', function(){
        expect('#unit_test_title').toBeDefined();
      });
      it('should display the correct text for the unit test title.', function(){
        expect(el[0].querySelector('#unit_test_title').textContent).toBe(Mock.unitTestTitle);
      });
      it('should display the iFrame for the first embedded plunker.', function(){
        expect('#plunker0').toBeDefined();
      });
    });
  });
})();

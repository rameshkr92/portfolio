(function(){
  'use strict';

  describe('UsersDashboardApp - Controller: UsersNavBarController', function(){
    var $rootScope, $scope, Mock;
    var loginStatusCalled, redirectToLoginCalled, showAboutCalled;

    beforeEach(function(){
      module('pcApp');

      inject(function($controller, _$rootScope_, _MockUserObjFactory_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        Mock = _MockUserObjFactory_;
        loginStatusCalled = false;
        redirectToLoginCalled = false;
        showAboutCalled = false;

        // Mock $.on listeners
        $scope.$on('loginStatusChanged', function(){
          loginStatusCalled = true;
        });
        $scope.$on('redirectToLogin', function(){
          redirectToLoginCalled = true;
        });
        $scope.$on('showAbout', function(){
          showAboutCalled = true;
        });

        $controller('UsersNavBarController', {
          $scope: $scope
        });

        $scope.$apply();
      });
      spyOn($rootScope, '$broadcast').and.callThrough();
    });

    it('should set the application title in the $scope.', function(){
      expect($scope.app_title).toBe(Mock.appTitle);
    });
    it('should have loginStatusChanged listener.', function(){
      $rootScope.$broadcast('loginStatusChanged', null);
      expect(loginStatusCalled).toBe(true);
    });
    it('should have redirectToLogin listener.', function(){
      $rootScope.$broadcast('redirectToLogin', null);
      expect(redirectToLoginCalled).toBe(true);
    });
    it('should have showAbout listener', function(){
      $rootScope.$broadcast('showAbout');
      expect(showAboutCalled).toBe(true);
    });
    it('should call `$scope.showUser` and broadcast `showMyProfile` event.', function(){
      $scope.showUser(Mock.user._id);
      expect($rootScope.$broadcast).toHaveBeenCalled();
      expect($rootScope.$broadcast).toHaveBeenCalledWith('showMyProfile', Mock.user._id);
    });
  });
})();

(function(){
  'use strict';

  describe('UsersDashboardApp - Controller: LoginController', function(){
    var $controller, $q, $rootScope, $scope, $timeout, AuthFactory, Mock;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$controller_, _$q_, _MockUserObjFactory_, _$rootScope_, _$timeout_){
        $controller = _$controller_;
        $q = _$q_;
        Mock = _MockUserObjFactory_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $timeout = _$timeout_;
      });

      AuthFactory = jasmine.createSpyObj('AuthFactory',
        ['clearCredentials', 'login', 'setCredentials']);

      AuthFactory.login.and.returnValue($q.when({data: {success: true}}));
      spyOn($rootScope, '$broadcast').and.callThrough();

      // Create controller, injecting any dependencies.
      $controller('LoginController', {
        $scope: $scope,
        AuthFactory: AuthFactory
      });

      $scope.user = {
        email: Mock.user.email,
        password: Mock.user.password
      };

      // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
      $scope.$apply();
    });

    it('should call `factory.login`.', function(){
      // Simulate login button click
      $scope.login();
      // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
      $scope.$apply();
      expect(AuthFactory.login).toHaveBeenCalled();
      expect(AuthFactory.login).toHaveBeenCalledWith(Mock.user.email, Mock.user.password);
    });
    // it('should broadcast `showAbout`.', function(){
    //   $timeout(function(){
    //     expect($rootScope.$broadcast).toHaveBeenCalledWith('showAbout');
    //   }, 250);
    //   $timeout.flush();
    // });
  });
})();

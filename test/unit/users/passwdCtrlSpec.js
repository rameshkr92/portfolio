(function(){
  'use strict';

  describe('UsersDashboardApp - Controller: PasswordController', function(){
    var $controller, $q, $scope, AuthFactory, Mock, UsersFactory;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$controller_, _$q_, _AuthFactory_, _MockUserObjFactory_, $rootScope){
        $controller = _$controller_;
        $q = _$q_;
        AuthFactory = _AuthFactory_;
        Mock = _MockUserObjFactory_;
        $scope = $rootScope.$new();
      });

      AuthFactory.user.data = Mock.passwdChangeUser;
      UsersFactory = jasmine.createSpyObj('UsersFactory',['getById', 'getStates', 'update']);

      UsersFactory.getById.and.returnValue($q.when({data: Mock.passwdChangeUser}));
      UsersFactory.update.and.returnValue($q.when({data: Mock.passwdChangeUser}));
      UsersFactory.getStates.and.returnValue($q.when({data: Mock.getStatesResponse}));

      // Create controller, injecting any dependencies.
      $controller('PasswordController', {
        $scope: $scope,
        $routeParams: 1,
        UsersFactory: UsersFactory
      });

      $scope.user = {};

      $scope.$apply();

      // Simulate changing password
      $scope.user.current_password = Mock.passwdCurrent;
      $scope.user.password = Mock.passwd;
      $scope.user.password_confirmation = Mock.passwd;
    });

    it('should call `factory.update` with passwdChangeUser.', function(){
      // Simulate create user button click
      $scope.submit();
      // Call $scope.$apply that will result in a .$digest to simulate scope
      // life cycle.
      $scope.$apply();
      expect(UsersFactory.update).toHaveBeenCalledWith(Mock.passwdChangeUser, Mock.passwdCurrent);
    });
    // TODO: failure with incorrect password entered
  });
})();

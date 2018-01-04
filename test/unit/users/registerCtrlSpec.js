(function(){
  'use strict';

  describe('UsersDashboardApp - Controller: RegisterController', function(){
    var $controller, $q, $scope, Mock, UsersFactory;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$controller_, _$q_, $rootScope, _MockUserObjFactory_){
        $controller = _$controller_;
        $q = _$q_;
        $scope = $rootScope.$new();
        Mock = _MockUserObjFactory_;
      });

      UsersFactory = jasmine.createSpyObj('UsersFactory',['create', 'getStates']);

      UsersFactory.create.and.returnValue($q.when({data: Mock.newUser}));

      UsersFactory.getStates.and.returnValue($q.when({data: Mock.getStatesResponse}));

      $controller('RegisterController', {
        $scope: $scope,
        UsersFactory: UsersFactory
      });

      $scope.user = Mock.newUser;
      $scope.$apply();
    });

    it('should call `factory.create` with newUser and update scope.', function(){
      // Simulate create user button click
      $scope.submit();
      // Call $scope.$apply that will result in a .$digest() to simulate scope life cycle.
      $scope.$apply();
      expect(UsersFactory.create).toHaveBeenCalledWith(Mock.newUser);
      expect($scope.user).toBe(Mock.newUser);
    });
    it('should call `factory.getStates` and update scope with response.', function(){
      expect($scope.states).toEqual(Mock.getStatesResponse);
    });
  });
})();

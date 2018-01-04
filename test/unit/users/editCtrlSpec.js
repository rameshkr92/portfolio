(function(){
  'use strict';

  describe('UsersDashboardApp - Controller: EditController', function(){
    var $controller, $q, $scope, Mock, UsersFactory;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$controller_, _$q_, _MockUserObjFactory_, $rootScope){
        $controller = _$controller_;
        $q = _$q_;
        Mock = _MockUserObjFactory_;
        $scope = $rootScope.$new();
      });

      UsersFactory = jasmine.createSpyObj('UsersFactory',['getById', 'getStates', 'update']);

      UsersFactory.getById.and.returnValue($q.when(Mock.user));
      UsersFactory.update.and.returnValue($q.when({data: Mock.editedUser}));
      UsersFactory.getStates.and.returnValue($q.when({data: Mock.getStatesResponse}));

      // Create controller, injecting any dependencies.
      $controller('EditController', {
        $scope: $scope,
        $routeParams: 1,
        UsersFactory: UsersFactory
      });

      $scope.$apply();

      // Simulate editing user
      $scope.user = Mock.editedUser;
    });

    it('should call `factory.update` with editedUser.', function(){
      // Simulate create user button click
      $scope.submit();
      // Call $scope.$apply that will result in a .$digest to simulate scope
      // life cycle.
      $scope.$apply();
      expect(UsersFactory.update).toHaveBeenCalledWith(Mock.editedUser);
    });
  });
})();

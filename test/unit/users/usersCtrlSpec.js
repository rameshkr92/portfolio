(function(){
  'use strict';

  describe('UsersDashboardApp - Controller: UsersController w/Admin User', function(){
    var $controller, $q, $rootScope, $scope, $window;
    var AuthFactory, Mock, ModalService, UsersFactory;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$controller_, _$q_, _$rootScope_, _$window_, _AuthFactory_, _MockUserObjFactory_, _ModalService_){
        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $window = _$window_;
        AuthFactory = _AuthFactory_;
        Mock = _MockUserObjFactory_;
        ModalService = _ModalService_;
      });

      $scope.$on('showMyProfile', function(event, id){
        $window.location.href = '#/users/' + id;
      });

      UsersFactory = jasmine.createSpyObj('UsersFactory', ['checkUserLevel', 'delete', 'getById', 'getSubset']);

      UsersFactory.checkUserLevel.and.returnValue($q.when(true));
      UsersFactory.delete.and.returnValue($q.when(Mock.deleteResponse));
      UsersFactory.getSubset.and.returnValue($q.when(Mock.getSubsetResponse));
      UsersFactory.getById.and.returnValue($q.when(Mock.getByIdResponse));
      spyOn($rootScope, '$broadcast').and.callThrough();
      spyOn(AuthFactory, 'getMyId').and.returnValue(2);
      spyOn(ModalService, 'showModal').and.returnValue($q.when('ok'));

      $controller('UsersController', {
        $scope: $scope,
        AuthFactory: AuthFactory,
        ModalService: ModalService,
        UsersFactory: UsersFactory
      });

      $scope.$apply();
    });

    it('should call `UsersFactory.getAll` and update scope.', function(){
      expect(UsersFactory.getSubset).toHaveBeenCalled();
      expect($scope.users).toBe(Mock.users);
    });
    it('should call `$scope.showUser` and load show page.', function(){
      $scope.showUser(Mock.user._id);
      expect($window.location.href).toContain('/users/' + Mock.user._id);
    });
    it('should have `showMyProfile` listener.', function(){
      $rootScope.$broadcast('showMyProfile', Mock.user._id);
      expect($scope.$broadcast).toHaveBeenCalled();
      expect($scope.$broadcast).toHaveBeenCalledWith('showMyProfile', Mock.user._id);
    });
    it('should show the current user showpage when `showMyProfile` is triggered.', function(){
      $rootScope.$broadcast('showMyProfile', Mock.user._id);
      expect($window.location.href).toContain('/users/' + Mock.user._id);
    });
    it('should call `ModalService.showModal` when `$scope.deleteUser` is called.', function(){
      $scope.deleteUser(Mock.user._id);
      $scope.$apply();
      expect(ModalService.showModal).toHaveBeenCalled();
    });
    it('should call `UsersFactory.delete` when `$scope.deleteUser` is called.', function(){
      $scope.deleteUser(Mock.user._id);
      $scope.$apply();
      expect(UsersFactory.delete).toHaveBeenCalledWith(Mock.user._id);
    });
    describe('Delete Other User w/Non-Admin User Account', function(){
      beforeEach(function(){
        UsersFactory.checkUserLevel.and.returnValue($q.when(false));
        AuthFactory.getMyId.and.returnValue(2);
      });

      it('should NOT call `ModalService.showModal` when `$scope.deleteUser` is called.', function(){
        $scope.deleteUser(Mock.user._id);
        $scope.$apply();
        expect(ModalService.showModal.calls.any()).toBe(false);
      });
      it('should NOT call `UsersFactory.delete` when `$scope.deleteUser` is called.', function(){
        $scope.deleteUser(Mock.user._id);
        $scope.$apply();
        expect(UsersFactory.delete).not.toHaveBeenCalled();
      });
    });
    describe('Delete Self w/Non-Admin User Account', function(){
      beforeEach(function(){
        UsersFactory.checkUserLevel.and.returnValue($q.when(false));
        AuthFactory.getMyId.and.returnValue(1);
      });

      it('should call `ModalService.showModal` when `$scope.deleteUser` is called.', function(){
        $scope.deleteUser(Mock.user._id);
        $scope.$apply();
        expect(ModalService.showModal.calls.any()).toBe(true);
      });
      it('should call `UsersFactory.delete` when `$scope.deleteUser` is called.', function(){
        $scope.deleteUser(Mock.user._id);
        $scope.$apply();
        expect(UsersFactory.delete).toHaveBeenCalled();
      });
      it('should $broadcast `redirectToLogin`.', function(){
        $scope.deleteUser(Mock.user._id);
        $scope.$apply();
        expect($rootScope.$broadcast).toHaveBeenCalledWith('redirectToLogin');
      });
    });
  });
})();

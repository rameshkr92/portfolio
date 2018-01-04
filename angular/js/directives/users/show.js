(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('showDisplay', [function(){
      return {
        controller: 'ShowController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_showDisplay.html'
      };
    }])
    .controller('ShowController', ['$rootScope', '$scope', '$routeParams',
      '$window', 'AuthFactory', 'FlashFactory', 'ModalService', 'UsersFactory',
        function($rootScope, $scope, $routeParams, $window, AuthFactory,
          FlashFactory, ModalService, UsersFactory){
            $scope.showUser = null;
            var showId = null;

            // Add edit user to $scope
            $scope.editUser = function(user){
              // console.log('\nShowController.editUser user:', user);
              UsersFactory.checkUserLevel(AuthFactory.user.data.id)
                .then(function(data){
                  // console.log('ShowController.editUser data:', data);
                  if(data || user._id === AuthFactory.user.data.id){
                    // console.log('\nShowController.editUser user:', user);
                    $window.location.href = '#/users/' + user._id + '/edit';
                  } else {
                    FlashFactory.error('Insufficient permission level to ' +
                     'edit this user!', false);
                  }
                });
            };

            $scope.deleteUser = function(id){
              UsersFactory.checkUserLevel(AuthFactory.user.data.id)
                .then(function(data){
                  if(data || id === AuthFactory.user.data.id){
                    UsersFactory.getById(id)
                      .then(function(data){
                        var modalOptions = {
                          closeButtonText: 'Cancel',
                          actionButtonText: 'Delete User',
                          headerText: data.data.first_name + ' ' +
                            data.data.last_name,
                          bodyText: 'Are you sure you want to delete ' +
                            'this user?'
                        };
                        ModalService.showModal({}, modalOptions)
                          .then(function(result){
                            UsersFactory.delete(id)
                              .then(function(){
                                // console.log('HomeController.deleteUser id', id);
                                if(id === AuthFactory.user.data.id){
                                  $rootScope.$broadcast('redirectToLogin');
                                } else {
                                  FlashFactory.success('User Delete ' +
                                   'Successful!', true);
                                  $window.location.href = '#/users';
                                }
                              });
                          });
                    });
                  } else {
                    FlashFactory.error('Insufficient permission level to ' +
                      'delete this user!', false);
                  }
                });
            };

            (function initController(){
              // console.log('ShowController.init');
              showId = $routeParams.id;

              // console.log('ShowController.init showId', showId);
              loadShowUser(showId);
            })();

            // Private functions
            function loadShowUser(id){
              if(AuthFactory.user.isAuthenticated){
                // console.log('ShowController.loadShowUser id:', id);
                UsersFactory.getById(id)
                  .then(function(user){
                    $scope.showUser = user.data;
                    // console.log('ShowController.loadShowUser $scope.showUser:', $scope.showUser);
                  });
              }
            }
          }]);
})();

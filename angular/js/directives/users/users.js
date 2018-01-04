(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('usersDisplay', [function(){
      return {
        controller: 'UsersController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_usersDisplay.html'
      };
    }])
    .controller('UsersController', ['$rootScope', '$scope', '$window',
      'AuthFactory', 'FlashFactory', 'ModalService', 'UsersFactory',
        function($rootScope, $scope, $window, AuthFactory, FlashFactory,
          ModalService, UsersFactory){
            $scope.title = 'Users';
            $scope.user = null;
            $scope.users = [];

            // Pagination
            $scope.totalUsers = 0;
            $scope.filteredUsers = 0;
            $scope.currentPage = 1;
            $scope.maxSize = 5;
            $scope.pageSize = 6;
              // A readonly Default angular.noop. An expression assigned the total
              // number of pages to display
            // $scope.numPages = #;
            $scope.pageChanged = function(){
              // console.log('Page changed to: ',  $scope.currentPage);
              getSubsetUsers();
            };

            $scope.deleteUser = function(id){
              var usrId = AuthFactory.getMyId();
              UsersFactory.checkUserLevel(usrId).then(function(data){
                // console.log('UsersController.deleteUser id', id);
                // console.log('UsersController.deleteUser usrId:', usrId);
                if(data || id === usrId){
                  UsersFactory.getById(id)
                    .then(function(data){
                      var modalOptions = {
                        closeButtonText: 'Cancel',
                        actionButtonText: 'Delete User',
                        headerText: data.data.first_name + ' ' +
                          data.data.last_name,
                        bodyText: 'Are you sure you want to delete this user?'
                      };
                      ModalService.showModal({}, modalOptions)
                        .then(function(result){
                        // console.log('UsersController.showModal result', result);
                          UsersFactory.delete(id)
                            .then(function(){
                              // console.log('UsersController.deleteUser id', id);
                              FlashFactory.success('User Delete Successful!',
                                false);
                                  if(id === usrId){
                                    $rootScope.$broadcast('redirectToLogin');
                                  } else {
                                    getSubsetUsers();
                                  }
                                }, function(reason){
                                  console.log('UsersController failure reason:', reason);
                                  FlashFactory.error(reason.message, false);
                                });
                        });
                      });
                } else {
                  FlashFactory.error('Insufficient permission level to ' +
                    'delete this user!', false);
                }
              });
            };

            // Add showUser to $scope
            $scope.showUser = function(id){
              // console.log('\nUsersController.showUser id:', id);
              $window.location.href = '#/users/' + id;
            };

            // Listener for navbar navigation to logged in user page
            $scope.$on('showMyProfile', function(event, id){
              // console.log('directives/users.js $on.showMyProvile event:', event);
              // console.log('directives/users.js $on.showMyProvile id:', id);
              $scope.showUser(id);
            });

            (function initController(){
              // console.log('UsersController.init');
              getCurrentUser();
              // getAllUsers();
              getSubsetUsers();
            })();

            // Private functions
            function getCurrentUser(){
              if(AuthFactory.user.isAuthenticated){
                // console.log('currentUser', AuthFactory.user.data);
                $scope.user = AuthFactory.user.data;
                // console.log('currentUser', $scope.user);
              }
            }

            function getSubsetUsers(){
              UsersFactory.getSubset($scope.currentPage - 1, $scope.pageSize)
                .then(function(users){
                  // console.log('UsersController.getSubsetUsers users', users);
                  $scope.totalUsers = users.data.count;
                  $scope.users = users.data.users;
                  $scope.filteredUsers = $scope.users.length;
                });
            }

            function getAllUsers(){
              UsersFactory.getAll()
                .then(function(users){
                  // console.log('UsersController.getAllUsers', users);
                  $scope.users = users.data;
                });
            }
          }]);
})();

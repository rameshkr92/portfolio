(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('usersNavBarDisplay', [function(){
      return {
        controller: 'UsersNavBarController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_navBar.html'
      };
    }])
    .controller('UsersNavBarController', ['$location', '$rootScope', '$scope',
      'AuthFactory', 'ModalService',
        function($location, $rootScope, $scope, AuthFactory, ModalService){
          $scope.full_name = null;
          $scope.id = null;

          $scope.showAbout = function(){
            var modalDefaults = {
              templateUrl: 'partials/users/_about.html'
            };
            var modalOptions = {
              actionButtonText: 'Close',
            };
            ModalService.showModal(modalDefaults, modalOptions)
              .then(function(){});
          };

          $scope.showUser = function(id){
            // console.log('navbar.js id', id);
            $rootScope.$broadcast('showMyProfile', id);
          };

          $scope.$on('loginStatusChanged', function(event, loggedIn){
            // console.log('UsersNavBarController.$on.loginStatusChanged event:', event);
            // console.log('UsersNavBarController.$on.loginStatusChanged loggedIn:', loggedIn);
            setNavBar();
          });

          $scope.$on('redirectToLogin', function(event, args){
            // console.log('UsersNavBarController.$on.redirectToLogin event:', event);
            // console.log('UsersNavBarController.$on.redirectToLogin args:', args);
            redirectToLogin();
          });

          $scope.$on('showAbout', function(event, args){
            // console.log('UsersNavBarController.$on.showAbout event:', event);
            // console.log('UsersNavBarController.$on.showAbout args:', args);
            $scope.showAbout();
          });

          (function initController(){
            // console.log('UsersNavBarController.init');
            setNavBar();
          })();

          // Private Functions
          function redirectToLogin(){
            // var path = '/users/login' + $location.$$path;
            var path = '/users/login';
            // console.log('UsersNavBarController.redirectToLogin');
            $location.replace();
            $location.path(path);
          }

          function setNavBar(){
            // console.log('setNavBar');
            // Can modify title dynamically if needed.
            $scope.app_title = 'Dev Ramesh';

            $scope.loggedIn = AuthFactory.user.isAuthenticated;
            if($scope.loggedIn){
              // console.log('setNavBar logged in.');
              $scope.full_name = AuthFactory.user.data.full_name;
              $scope.id = AuthFactory.user.data.id;
            }
          }
        }]);
})();

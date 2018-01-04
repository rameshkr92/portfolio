(function(){
  'use strict';

  // Create isolated scope directive w/controller
  angular.module('AppPortfolio')
    .directive('loginDisplay', [function(){
      return {
        controller: 'LoginController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_loginDisplay.html'
      };
    }])
    .controller('LoginController', ['$location', '$scope', '$rootScope',
      '$window', 'AuthFactory', 'FlashFactory',
        function($location, $scope, $rootScope, $window, AuthFactory,
          FlashFactory){
            $scope.login = function(){
              $scope.user.email = $scope.user.email.toLowerCase();
              // console.log('\nLoginController.login $scope.user', $scope.user);
              $scope.dataLoading = true;

              AuthFactory.login($scope.user.email, $scope.user.password)
                .then(function(response){
                  // console.log('\nLoginController.login response.data:', response.data);
                  if(response.data.status){
                    // console.log('\nLoginController.login success response', response);
                    $scope.dataLoading = false;
                    $location.path('/users');
                  } else {
                    // console.log('\nLoginController.login error response', response);
                    FlashFactory.error(response.message, false);
                    $scope.dataLoading = false;
                  }
                });
            };

            (function initController(){
              // console.log('LoginController.init');
              // Reset login status
              AuthFactory.clearCredentials();
              // $rootScope.$broadcast('showAbout');
            })();
          }]);
})();

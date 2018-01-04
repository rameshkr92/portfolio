(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('registerDisplay', [function(){
      return {
        controller: 'RegisterController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_formEditRegDisplay.html'
      };
    }])
    .controller('RegisterController', ['$location', '$scope', '$rootScope',
      'AuthFactory', 'FlashFactory', 'UsersFactory',
        function($location, $scope, $rootScope, AuthFactory,
          FlashFactory, UsersFactory){
            $scope.btn_text = 'Register';
            $scope.form_for = 'Register';
            $scope.form_name = 'register_form';
            $scope.id_name = 'register';
            $scope.registering = true;

            $scope.submit = function(){
              // console.log('RegisterController.submit $scope.user', $scope.user);
              $scope.dataLoading = true;
              UsersFactory.create($scope.user)
                .then(function(response){
                  if(response.success){
                    // Put in to test result, in production would modify this &
                    // redirect to user's homepage instead of login page.
                    $scope.user = response.data;
                    // console.log('RegisterController.create .then', response);
                    FlashFactory.success('Registration Successful!', true);
                    $scope.dataLoading = false;
                    $location.path('/users/login');
                  } else {
                    // console.log('RegisterController.create .then else', response.message);
                    FlashFactory.error(response.message, false);
                    $scope.dataLoading = false;
                  }
                });
            };

            (function initController(){
              // console.log('RegisterController.init');
              UsersFactory.getStates()
                .then(function(states){
                  // console.log('registration.js getStates:', states);
                  $scope.states = states.data;
                  // console.log('RegisterController $scope.states', $scope.states);
                });
            })();
          }]);
})();

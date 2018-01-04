(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('editDisplay', [function(){
      return {
        controller: 'EditController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_formEditRegDisplay.html'
      };
    }])
    .controller('EditController', ['$location', '$routeParams', '$rootScope',
        '$scope', 'AuthFactory', 'FlashFactory', 'UsersFactory',
          function($location, $routeParams, $rootScope, $scope, AuthFactory,
            FlashFactory, UsersFactory){
              $scope.btn_text = 'Update';
              $scope.form_for = 'Edit';
              $scope.form_name = 'edit_form';
              $scope.id_name = 'edit';
              $scope.registering = false;

              // Add update method to $scope
              $scope.submit = function(){
                // console.log('EditController.submit $scope.user', $scope.user);
                $scope.dataLoading = true;
                UsersFactory.update($scope.user)
                  .then(function(response){
                    if(response.success){
                      // console.log('EditController.update .then', response);
                      FlashFactory.success('Update Successful!', true);
                      $scope.dataLoading = false;
                      $location.path('/users/' + $routeParams.id);
                    } else {
                      // console.log('EditController.update .then else', response.message);
                      FlashFactory.error(response.message, false);
                      // Reset $scope so form is re-populated with user values
                      findUser($routeParams.id);
                      $scope.dataLoading = false;
                    }
                  });
              };

              (function initController(){
                // console.log('EditController.init');
                // Set initial $scope
                findUser($routeParams.id);

                UsersFactory.getStates()
                  .then(function(states){
                    // console.log('registration.js getStates:', states);
                    $scope.states = states.data;
                    // console.log('RegisterController $scope.states', $scope.states);
                  });
              })();

              // Get edit user, set $scope when promise is resolved
              function findUser(params_id){
                // console.log('EditController.findUser params_id', params_id);
                UsersFactory.getById(params_id)
                  .then(function(user){
                    // console.log('EditController.findUser, getById() success callback user', user);
                    $scope.user = user.data;
                  }, function(errors){
                    console.log('EditController.findUser, getById() failure, redirect `/`', errors);
                    $window.location = '#/users';
                  });
              }
            }]);
})();

(function(){
  'use strict';

  // Create isolated scope directive w/controller
  angular.module('AppPortfolio')
    .directive('passwordDisplay', [function(){
      return {
        controller: 'PasswordController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/users/_passwordDisplay.html'
      };
    }])
    .controller('PasswordController', ['$scope', '$location',
      'AuthFactory', 'FlashFactory', 'UsersFactory',
        function($scope, $location, AuthFactory, FlashFactory, UsersFactory){
          $scope.btn_text = 'Change Password';
          $scope.form_for = 'Change Password';
          $scope.form_name = 'password_form';
          $scope.id_name = 'passwd_change';

          $scope.submit = function(){
            // console.log('PasswordController.submit $scope.user', $scope.user);
            $scope.dataLoading = true;
            var currentUser = null;
            var currentPasswd = null;
            UsersFactory.getById(AuthFactory.user.data.id)
              .then(function(usr){
                // console.log('PasswordController.submit usr', usr);
                currentUser = usr.data;
                currentUser.password = $scope.user.password;
                currentPasswd = $scope.user.current_password;
                // console.log('PasswordController.submit currentUser', currentUser);
                // console.log('PasswordController.submit $scope.user', $scope.user);
                UsersFactory.update(currentUser, currentPasswd)
                  .then(function(response){
                    // console.log('PasswordController.submit.update response', response);
                    if(response.success){
                      // console.log('PasswordController.update .then', response);
                      FlashFactory.success('Password Change Successful!', true);
                      $scope.dataLoading = false;
                      $location.path('/users/' + AuthFactory.user.data.id);
                    } else {
                      // console.log('PasswordController.update .then else', response);
                      FlashFactory.error(response.message, false);
                      $scope.dataLoading = false;
                    }
                  });
              });
          };
      }]);
})();

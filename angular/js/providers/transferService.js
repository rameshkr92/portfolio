(function(){
  'use strict';

  // Transfer data between controllers.
    // DI 'TransferService' into both controllers and then set $scope in both
      // controllers:
        // $scope.TransferService = TransferService;
  // Then use:
      // `$scope.TransferService.foo = 'bar';`
  // In other controller access as needed:
      // `var x = $scope.TransferService.foo;`

  angular.module('AppPortfolio')
    .service('TransferService', [function(){
      this.x = "y";
    }]);
})();

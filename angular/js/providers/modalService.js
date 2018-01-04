(function(){
  'use strict';

  // From Dan Wahlin's (great!) blog: 'Building an AngularJS Modal Servive'
  // http://weblogs.asp.net/dwahlin/building-an-angularjs-modal-service
  angular.module('AppPortfolio')
    .service('ModalService', ['$modal', function($modal){
      var service = {};

      var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'partials/users/_modal.html'
      };

      var modalOptions = {
        closeButtonText: 'Close',
        actionButtonText: 'OK',
        headerText: 'Proceed?',
        bodyText: 'Perform this action?'
      };

      service.showModal = function(customModalDefaults, customModalOptions){
        if(!customModalDefaults){
          customModalDefaults = {};
        }
        // Modal window is not closed by clicking outside of the modal window
        // with backdrop set to `static`.
        customModalDefaults.backdrop = 'static';
        return service.show(customModalDefaults, customModalOptions);
      };

      service.show = function(customModalDefaults, customModalOptions){
        // Create temp objects
        var tempModalDefaults = {};
        var tempModalOptions = {};

        // Map modal.html $scope custom properties to defaults defined in service
        angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

        // Map modal.html $scope custom properties to defaults defined in service
        angular.extend(tempModalOptions, modalOptions, customModalOptions);

        if(!tempModalDefaults.controller){
          tempModalDefaults.controller = function($scope, $modalInstance){
            $scope.modalOptions = tempModalOptions;
            $scope.modalOptions.ok = function(result){
              $modalInstance.close(result);
            };
            $scope.modalOptions.close = function(result){
              $modalInstance.dismiss('cancel');
            };
          };
        }
        return $modal.open(tempModalDefaults).result;
      };

      return service;
    }]);
})();

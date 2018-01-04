(function () {
  'use strict';

  angular.module('AppPortfolio')
    .factory('FlashFactory', ['$rootScope', function($rootScope){
      var factory = {};

      factory.success = function(message, keep){
        // console.log('FlashFactory.success message', message);
        // console.log('FlashFactory.success keep', keep);
        $rootScope.flash = {
          keepAfterLocationChange: keep,
          message: message,
          type: 'success'
        };
      };

      factory.error = function(message, keep){
        // console.log('FlashFactory.error message', message);
        // console.log('FlashFactory.error keep', keep);
        $rootScope.flash = {
          keepAfterLocationChange: keep,
          message: message,
          type: 'error'
        };
      };

      (function initFactory(){
        // console.log('FlashFactory.init');
        clearFlashMessage();
        $rootScope.$on('$locationChangeStart', function(){
          clearFlashMessage();
        });
      })();

      // Private functions
      function clearFlashMessage(){
        // console.log('FlashFactory.clearFlashMessage');
        var flash = $rootScope.flash;

        if(flash){
          if(!flash.keepAfterLocationChange){
            delete $rootScope.flash;
          } else {
            // Only keep for a single location change
            flash.keepAfterLocationChange = false;
          }
        }
      }

      return factory;
    }]);
})();

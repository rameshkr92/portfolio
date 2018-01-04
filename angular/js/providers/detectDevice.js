(function(){
  'use strict';

  angular.module('AppPortfolio')
    .service('DetectDevice', ['$window', function($window){
      // console.log('detectDevice.js userAgent:', $window.navigator.userAgent);
      var service = {};

      service.getUserAgent = function(){
        return $window.navigator.userAgent;
      };

      service.isiPad = function(){
        var userAgent = $window.navigator.userAgent.toLowerCase();
        // console.log('detectDevice.js userAgent:', userAgent);
        return (userAgent.indexOf('ipad') > -1);
      };

      return service;
    }]);
})();

(function(){
  'use strict';

  angular.module('AppPortfolio')
    .factory('SocketFactory', ['$rootScope', function($rootScope){
      var factory = {};
      var socket = io.connect();

      factory.on = function(eventName, callback){
        function wrapper(){
          var args = arguments;
          $rootScope.$apply(function(){
            callback.apply(socket, args);
          });
        }
        socket.on(eventName, wrapper);
        return function(){
          socket.removeListener(eventName, wrapper);
        };
      };

      factory.emit = function(eventName, data, callback){
        socket.emit(eventName, data, function(){
          var args = arguments;
          $rootScope.$apply(function(){
            if(callback){
              callback.apply(socket, args);
            }
          });
        });
      };

      return factory;
    }]);
})();

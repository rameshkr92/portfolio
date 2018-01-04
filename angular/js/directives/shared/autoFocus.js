(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('autoFocus', ['$timeout', function($timeout){
      return {
        restrict: 'A',
        link: function(scope, elem, attr){
          if(attr.ngShow){
            scope.$watch(attr.ngShow, function(newVal){
              if(newVal){
                $timeout(function(){
                  elem.focus();
                }, 0);
              }
            });
          }
          if(attr.ngHide){
            scope.$watch(attr.ngHide, function(newVal){
              if(!newVal){
                $timeout(function(){
                  elem.focus();
                }, 0);
              }
            });
          }
        }
      };
    }]);
})();

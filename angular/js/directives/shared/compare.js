(function(){
  'use strict';

  angular.module('pcCompareToDirective', [])
    .directive('pcCompareTo', [function(){
      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
          otherValue: '=pcCompareTo'
        },
        link: function(scope, elem, attrs, ngModel){
          ngModel.$validators.compareTo = function(modelValue, viewValue){
            // console.log('compareTo');
            var currentValue = modelValue || viewValue;
            // console.log('currentValue', currentValue);
            // console.log('scope.otherValue', scope.otherValue);
            return currentValue === scope.otherValue;
          };
          scope.$watch('otherValue', function(){
            ngModel.$validate();
          });
        }
      };
    }]);
})();

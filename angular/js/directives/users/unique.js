(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('pcUnique', ['$q', 'UsersFactory', function($q, UsersFactory){
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModel){
          ngModel.$asyncValidators.unique = function(modelValue, viewValue){
            var currentValue = modelValue || viewValue;
            var deferred = $q.defer();
            var key = attrs.pcUniqueKey;
            var property = attrs.pcUniqueProperty;
            var registering = attrs.pcUniqueRegistering;

            // console.log('checkUnique id (key)', key);
            // console.log('checkUnique property', property);
            // console.log('checkUnique registering?', registering);

            // First time the asyncValidators function is loaded the key
            // won't be set, so ensure that we have key and propertyName
            // before checking with the server during editing.
              // had to check registering === string to make these validations
              // work, passed through as a string (which is always true!)
            if(registering === 'true' || (key && property)){
              // console.log('checking for unique with factory', key);
              // console.log('checking for unique with factory', property);
              UsersFactory.checkUnique(key, property, currentValue)
                .then(function(unique){
                  // console.log('pcUnique is entry unique:', unique);
                  if(unique){
                    deferred.resolve(); // It's unique
                  } else {
                    deferred.reject(); // Add unique to $errors
                  }
                });
            } else {
              // console.log('not checking unique yet.');
              deferred.resolve();
            }
            return deferred.promise;
          };
        }
      };
    }]);
})();

(function(){
  'use strict';

  angular.module('AppPortfolio')
    .factory('WeatherFactory', ['$http', function($http){
      // Alternative syntax with $q promises/deferred objects
    // .factory('WeatherFactory', ['$http', '$q', function($http, $q){
      var factory = {};
      var cities = '/api/cities/';
      var weather = '/api/weather/';
      var weatherForecast = '/api/weatherforecast/';

      factory.getForecast = function(location){
        // console.log('WeatherFactory.getForecast location:', location);
        return $http.get(weatherForecast + location)
          .then(function(data){
            // console.log('WeatherFactory.getForecast() successHandler(data)', data);
            return data.data.forecast;
          }, function(err){
            // console.log('WeatherFactory.getForecast() errorHandler(err)', err);
            return {success: false, message: 'Error retrieving weather.'};
          });
      };

      factory.getWeather = function(location){
        // console.log('WeatherFactory.getWeather location:', location);
        return $http.get(weather + location)
          .then(function(data){
            // console.log('WeatherFactory.getWeather() successHandler(data)', data);
            return data.data;
          }, function(err){
            // console.log('WeatherFactory.getWeather() errorHandler(err)', err);
            return {success: false, message: 'Error retrieving weather.'};
          });
        // var deferred = $q.defer();
        // $http.get(weather + location)
        //   .success(function(data){
        //     console.log('WeatherFactory.getWeather() successHandler(data)', data);
        //     deferred.resolve(data);
        //   }).error(function(err){
        //     console.log('WeatherFactory.getWeather() errorHandler(err)', err);
        //     deferred.reject(err);
        //   });
        // return deferred.promise;
      };

      factory.getLocations = function(query){
        // console.log('WeatherFactory.getLocation query:', query);
        return $http.get(cities + query)
          .then(function(data){
            // console.log('WeatherFactory.getCities() successHandler(data)', data);
            return(data.data.RESULTS);
          }, function(err){
            // console.log('WeatherFactory.getCities() errorHandler(err)', err);
            return err;
          });
      };

      factory.wunderground = '/img/shared/wundergroundLogo_4c_rev_horz.png';
      factory.wundergroundLink = 'http://www.wunderground.com/?apiref=66bd656042b63be9';

      return factory;
    }]);
})();

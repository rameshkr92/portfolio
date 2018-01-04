(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('weatherDisplay', [function(){
      return {
        controller: 'WeatherController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/weather/_weatherDisplay.html'
      };
    }])
    .controller('WeatherController', ['$location', '$scope', '$window', 'WeatherFactory',
      function($location, $scope, $window, WeatherFactory){
        var wss = $window.sessionStorage;
        var now = new Date();
        $scope.forecastLoading = false;
        $scope.weatherLoading = false;
        $scope.forecast = [];
        $scope.getLocations = WeatherFactory.getLocations;
        $scope.getForecast = function(loc){
          $scope.forecastLoading = true;
          // console.log('\nWeatherController.getForecast loc:', loc);
          WeatherFactory.getForecast(loc).then(function(data){
            // console.log('\nWeatherController.getForecast data:', data);
            $scope.forecast = data.simpleforecast.forecastday;
            $scope.txt_forecast = data.txt_forecast.forecastday.splice(4);
            wss.setItem('forecast', JSON.stringify($scope.forecast));
            $scope.forecastLoading = false;
          });
        };
        $scope.getWeather = function(loc){
          // console.log('\nWeatherController.getWeather loc:', loc);
          WeatherFactory.getWeather(loc).then(function(data){
            // console.log('\nWeatherController.getWeather data:', data);
            $scope.weather = {
              date: now,
              icon: data.current_observation.icon_url,
              location: data.current_observation.display_location.full,
              temp: data.current_observation.temp_f
            };
            wss.setItem('loc', loc);
            wss.setItem('weather', JSON.stringify($scope.weather));
            $scope.weatherLoading = false;
          });
        };
        $scope.onSelect = function($item, $model, $label){
          var location = $item.lat + ',' + $item.lon;
          loadWeather(location);
          $scope.toggleWeather();
        };
        $scope.showing = false;
        $scope.toggleWeather = function(){
          if($scope.showing){
            $scope.showing = false;
          } else {
            $scope.showing = true;
          }
        };

        if(!(wss.getItem('loc'))){
          // console.log('weather.js setting initial $scope.weather');
          $scope.weather = {
            date: now,
            icon: '',
            location: 'Select location',
            temp: '0.0'
          };
        }

        $scope.wunderground = WeatherFactory.wunderground;
        $scope.wundergroundLink = WeatherFactory.wundergroundLink;

        if(wss.getItem('loc')){
          var oldDate = new Date(JSON.parse(wss.getItem('weather')).date).getTime();
          var newDate = new Date().getTime();
          var diff = newDate - oldDate;
          // console.log('diff', diff);
          // console.log('wss', wss);
          // 1 minute === 60000 milliseconds
          // 1 hour === 3600000 milliseconds
          if(diff > 3600000){
            loadWeather(wss.getItem('loc'));
          } else {
            if(wss.getItem('weather')){
              $scope.weather = JSON.parse(wss.getItem('weather'));
            }
            if(wss.getItem('forecast')){
              $scope.forecast = JSON.parse(wss.getItem('forecast'));
            } else if($location.path() === '/weather'){
              $scope.getForecast(wss.getItem('loc'));
            }
          }
        } else if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(function(position){
            var loc = position.coords.latitude + ',' + position.coords.longitude;
            loadWeather(loc);
          });
        }

        // Private functions
        function loadWeather(location){
          // console.log('loadWeather........');
          wss.removeItem('loc');
          wss.removeItem('weather');
          wss.removeItem('forecast');
          $scope.weatherLoading = true;
          $scope.forecastLoading = true;
          $scope.getWeather(location);
          if($location.path() === '/weather'){
            $scope.getForecast(location);
          }
        }
      }]);
})();

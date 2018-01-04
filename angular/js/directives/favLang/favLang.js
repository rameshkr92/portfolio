(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('favoriteDisplay', [function(){
      return {
        controller: 'FavoriteLanguageController',
        restrict: 'E',
        scope: {},
        templateUrl: 'partials/favLang/_favoriteDisplay.html',
        link: function(scope, elem, attrs){
          Highcharts.setOptions({
            // Desired colors for 1st 3 chart elements.
            colors: ['#95D7F6', '#CA3324', '#F9DE5B']
          });
          var chart = new Highcharts.Chart({
            chart: {
              backgroundColor: null,
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              renderTo: 'chart-display',
              type: 'pie'
            },
            legend: {
              reversed: true
            },
            title: {
              text: null
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true
              }
            },
            series: [{
              animation: false,
              type: 'pie',
              name: 'Favorite Language Shares',
              data: scope.favorites,
              dataLabels: {
                  enabled: true,
                  style: {
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  },
                  distance: -50,
                  formatter: function(){
                    return this.y;
                  },
              },
            }]
          });
          // End chart
          scope.$watch('favorites', function(newVal){
            if(newVal){
              // console.log('$watch newVal:', newVal);
              chart.series[0].setData(newVal, true);
            }
          }, true);
        }
      };
    }])
    .controller('FavoriteLanguageController', ['$scope', 'SocketFactory',
      function($scope, SocketFactory){
        $scope.favorites = [];
        $scope.favoriteTitle = 'Vote For Your Favorite Language!!!';
        $scope.vote = function(vote){
          // console.log('$scope.vote vote:', vote);
          SocketFactory.emit('myVote', vote);
        };
        // Sockets
        SocketFactory.emit('initialConnection', {msg: 'Client requesting count'});
        SocketFactory.on('initialConnection', function(data){
          // console.log('InitialConnection msg recieved from server:', data);
          $scope.favorites = data;
        });
        SocketFactory.on('updateCount', function(data){
          // console.log('current count:', data);
          $scope.favorites = data;
        });
    }]);
})();

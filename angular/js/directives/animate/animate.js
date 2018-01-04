(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('animateDisplay', [function(){
      return {
        controller: 'AnimateController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/animate/_animateDisplay.html'
      };
    }])
    .controller('AnimateController', ['$scope', function($scope){
      var ivb = [];
      var les = [];
      var pch = [];

      $scope.albums = {
        available: [
          {id: 0, album: ivb, name: 'Ivy Bend, MO'},
          {id: 1, album: les, name: 'Lake El Salto, MX'},
          {id: 2, album: pch, name: 'Pacific Coast Highway, CA'}
        ],
        selected: {id: 0, album: ivb, name: 'Ivy Bend, MO'}
      };
      $scope.changeAlbum = function(){
        $scope.album = $scope.albums.selected.album;
        $scope.setImage(0);
      };
      $scope.left_fa = 'chevron-circle-left';
      $scope.right_fa = 'chevron-circle-right';
      $scope.setImage = function(x){
        $scope.activeImg = $scope.album[x];
      };

      (function initController(){
        buildArray(ivb, 'ivb', 17);
        buildArray(les, 'les', 17);
        buildArray(pch, 'pch', 17);
        $scope.album = ivb;
        $scope.setImage(0);
      })();

      // Private functions
      function buildArray(scope, name, num){
        var str, z;
        for(var i = 0; i < num; i++){
          str = '/img/animate/' + name + '/' + name;
          z = '';
          if(i < 10){
            z = '0';
          }
          str = str + z + i + '.jpg';
          scope.push({url: str});
        }
      }
    }]);
})();

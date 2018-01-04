(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('testingDisplay', [function(){
      return {
        controller: 'TestingController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/testing/_testingDisplay.html'
      };
    }])
    .controller('TestingController', ['$scope', 'DetectDevice',
      function($scope, DetectDevice){
        var plunker = 'http://embed.plnkr.co/';
        var youtube = 'https://www.youtube.com/embed/';
        var ytPref = '?rel=0&autohide=1&autoplay=0';

        $scope.e2e_test_title = 'End-to-End Testing';
        $scope.e2e_tests = [
          {
            desc: 'Three different browsers to simulate multiple clients ' +
              'connected to the website, each updating with socket broadcasts ' +
              'after button clicks. Protractor is running in the center ' +
              'browser, randomly selecting each button with a 300 millisecond ' +
              'pause between clicks.',
            href: youtube + 'wcA7HT03mX4' + ytPref,
            name: 'Favorite Language - Socket.io Demo',
            test: 'Testing Sequence'
          },
          {
            desc: 'Navigation when not logged in. DOM elements on each page. ' +
              'Validate username/email already registered. Successful ' +
              'registration. Login failure/success. Navbar controls. Filter ' +
              'users by name/State. Pagination controls. Show user page. ' +
              'Edit user. Password change failure/success. Delete user. ' +
              'Logout. Edit/Delete with non-admin user. Navigation back to ' +
              'homepage.',
            href: youtube + 'BhA6q8JeB0M' + ytPref,
            name: 'Users Dashboard Demo',
            test: 'Tests Performed'
          },
          {
            desc: 'About modal. DOM elements on page. Navigation via NavBar. ' +
              'NavBar collapsed. Footer NavBar. Weather Underground location ' +
              'change. Carousel transitions. Different Carousels based on ' +
              'viewport width.',
            href: youtube + 'P6nIq9NrGkc' + ytPref,
            name: 'Portfolio Demo',
            test: 'Tests Performed'
          }
        ];

        $scope.isiPad = DetectDevice.isiPad();
        // console.log('test.js $scope.isiPad:', $scope.isiPad);
        $scope.iPadMsg = {
          title: 'Welcome iPad User!',
          hrefIssue: 'https://github.com/angular/angular.js/issues/9128',
          hrefP1: 'http://embed.plnkr.co/vlCzPCX7Dq50KhlH3u4d/preview',
          hrefP1Name: ' Portfolio App',
          hrefP2: 'http://embed.plnkr.co/FreZ0ReV4iQlSNK0PZfc/preview',
          hrefP2Name: ' Users Dashboard App',
          msgP1: 'These embedded Plunks can contain intermittent errors on ' +
            ' iPads due to',
          msgP2: 'Angular Issue 9128',
          msgP3: '. While I\'m working on a local solution for the iPad, ' +
            'if the Plunks below contain errors you can try refreshing the ' +
            ' page or view them using these links:'
        };

        $scope.unit_test_title = 'Unit Testing';
        $scope.unit_tests = [
          {
            name: 'Portfolio App',
            href: plunker + 'vlCzPCX7Dq50KhlH3u4d/preview'
          },
          {
            name: 'Users Dashboard',
            href: plunker + 'FreZ0ReV4iQlSNK0PZfc/preview'
          }
        ];
      }]);
})();

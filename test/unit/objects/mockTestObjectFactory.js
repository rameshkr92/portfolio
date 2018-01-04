(function(){
  'use strict';

  angular.module('pcApp')
    .factory('MockTestObjFactory', function(){
      var factory = {};

      var plunker = 'http://embed.plnkr.co/';
      var ytPref = '?rel=0&autohide=1&autoplay=0';
      var youtube = 'https://www.youtube.com/embed/';

// testingDirectiveSpec
      factory.e2eTestTitle = 'End-to-End Testing';
      factory.e2eTests = [
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
      factory.unitTestTitle = 'Unit Testing';
      factory.unitTests = [
        {
          name: 'Portfolio App',
          href: plunker + 'vlCzPCX7Dq50KhlH3u4d/preview'
        },
        {
          name: 'Users Dashboard',
          href: plunker + 'FreZ0ReV4iQlSNK0PZfc/preview'
        }
      ];

      return factory;
    });
})();

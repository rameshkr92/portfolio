(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('navBarDisplay', [function(){
      return {
        controller: 'PortfolioNavBarController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/main/_navBar.html'
      };
    }])
    .controller('PortfolioNavBarController', ['$document', '$location',
      '$scope', '$window', 'ModalService',
        function($document, $location, $scope, $window, ModalService){
          var duration = 1000;
          var el = '';
          var offset = 60;

          $scope.$on('locationChanged', function(){
            setCurrentPath();
          });

          $scope.about = 'About';
          $scope.about_fa = 'info';
          $scope.about_p0 = 'I enjoy solving the puzzle to find solutions ' +
            'for the opportunities that the development process presents. ' +
            'With over 4 years of experience in network support and ' +
            'administration, I am expanding my knowledge of the latest ' +
            'web development tools. While covering three full stack MVC ' +
            'frameworks and multiple web technologies at ';
          $scope.about_p1 = 'web development, I improved my ability ' +
            'to quickly pickup new technologies.';
          $scope.about_p2 = 'Have a look around to see some of my projects. ' +
            'You can checkout my codebase on ';
          $scope.about_p3 = ', and contact me via ';
          $scope.about_p4 = 'This site is under constant improvements and ' +
            'expansion. Check back in to see new additions and updates.';
          $scope.about_welcome = 'Welcome - Thanks for Stopping In!';
          $scope.contact_heading = 'Don’t hesitate to contact me!';
          $scope.app_title = 'Ramesh Kumar';
          $scope.codingdojo = 'Coding Dojo';
          $scope.codingdojo_url = 'http://www.codingdojo.com/';
          $scope.e2e = 'e2e';
          $scope.e2e_fa = 'user';
          $scope.portfolio = 'Portfolio';
          $scope.portfolio_fa = 'briefcase';
          $scope.github = 'GitHub';
          $scope.github_fa = 'github-square';
          $scope.github_url = 'https://github.com/rameshkr92?tab=repositories';
          $scope.home = 'Home';
          $scope.home_fa = 'home';
          $scope.home_url = '#/';
          $scope.hover_msg = 'Hover to enlarge';
          $scope.linkedin = 'LinkedIn';
          $scope.linkedin_fa = 'linkedin';
          $scope.linkedin_url = 'https://www.linkedin.com/in/rameshkumar1992';
          $scope.my_photo = '/img/main/rk.png';
          $scope.myPhoto = 'myPhoto.html';
          $scope.pc_logo = '/img/favicon/favicon.ico';
          $scope.skills = 'Skillset';
          $scope.contact = 'Contact Me';
          $scope.skills_fa = 'code';
          $scope.contact_fa = 'phone';
          $scope.unit = 'Unit';
          $scope.unit_fa = 'terminal';
          $scope.up_fa = 'chevron-circle-up';

          $scope.scrollTo = function(elemId){
            if(elemId === 'top'){
              $document.scrollTopAnimated(0, duration);
            } else {
              el = angular.element(document.getElementById(elemId));
              $document.scrollToElementAnimated(el, offset, duration);
            }
          };

          $scope.showAbout = function(){
            if(!$window.sessionStorage.getItem('visited')){
              $window.sessionStorage.setItem('visited', true);
            }
            var modalDefaults = {
              templateUrl: 'partials/main/_about.html'
            };
            var modalOptions = {
              actionButtonText: 'Close',
            };
            ModalService.showModal(modalDefaults, modalOptions)
              .then(function(){});
          };

          $scope.showContact = function(){
              if(!$window.sessionStorage.getItem('visited')){
                  $window.sessionStorage.setItem('visited', true);
              }
              var modalDefaults = {
                  templateUrl: 'partials/main/_contact.html'
              };
              var modalOptions = {
                  actionButtonText: 'Close',
              };
              ModalService.showModal(modalDefaults, modalOptions)
                  .then(function(){});
          };

          $scope.$on('showWelcome', function(event, args){
            // console.log('PortfolioNavBarController.$on.showAbout event:', event);
            // console.log('PortfolioNavBarController.$on.showAbout args:', args);
            $scope.showAbout();
          });

          (function initController(){
            setCurrentPath();
          })();

          // Private functions
          function setCurrentPath(){
            $scope.currentPath = $location.path();
          }
        }]);
})();

(function(){
  'use strict';

  angular.module('AppPortfolio')
    .directive('mainDisplay', [function(){
      return {
        controller: 'MainController',
        scope: {},
        restrict: 'E',
        templateUrl: 'partials/main/_mainDisplay.html'
      };
    }])
    .controller('MainController', ['$rootScope', '$scope', '$window',
      'PortfoliosService', 'SkillsService', function($rootScope, $scope,
      $window, PortfoliosService, SkillsService){
        // Header section
        $scope.header_title0 = 'Trained in three full stacks';
        $scope.hover_msg = 'Hover to enlarge';
        $scope.lamp_stack = 'LAMP Stack';
        $scope.lamp_img = '/img/main/lamp.png';
        $scope.mean_stack = 'MEAN Stack';
        $scope.mean_img = '/img/main/mean.png';
        $scope.ror_stack = 'Ruby on Rails';
        $scope.ror_img = '/img/main/ruby.png';
        // Portfolio section
        $scope.portfolio_title = 'Portfolio';
        $scope.portfolios = PortfoliosService.portfolios;
        // Skills section
        $scope.skills_title = 'Skillset';
        $scope.contact_title = 'Contact Me';
        $scope.skills_images0 = [];
        $scope.skills_images1 = [];
        $scope.templateUrl0 = 'skillsImage0.html';
        $scope.templateUrl1 = 'skillsImage1.html';
        $scope.templateUrl2 = 'skillsImage2.html';
        $scope.templateUrl3 = 'skillsImage3.html';

        var skills_images = SkillsService.skills_images;

        (function initController(){
          setSkillsImages();
          if(!$window.sessionStorage.getItem('visited')){
            $rootScope.$broadcast('showWelcome');
          }
        })();

        // Private functions
        function setSkillsImages(){
          // for(var i = 0; i < 12; i++){
          for(var i = 0; i < 11; i++){
            $scope.skills_images0.push({
              src: skills_images[i].src,
              alt: skills_images[i].alt,
              href: skills_images[i].href
            });
          }
          // for(i = 12; i < 24; i++){
          for(i = 11; i < 22; i++){
            $scope.skills_images1.push({
              src: skills_images[i].src,
              alt: skills_images[i].alt,
              href: skills_images[i].href
            });
          }
        }
      }]);
})();

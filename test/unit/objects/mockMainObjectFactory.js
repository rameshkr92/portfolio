(function(){
  'use strict';

  angular.module('pcApp')
    .factory('MockMainObjFactory', function(){
      var factory = {};

      factory.appTitle = 'Rory Pasley';
      factory.chevronCircleUpFA = 'fa-chevron-circle-up';
      factory.e2eText = 'e2e';
      factory.e2eFaText = 'user';
      factory.githubFA = 'fa-github-square';
      factory.githubFaText = 'github-square';
      factory.githubText = 'GitHub';
      factory.githubUrl = 'https://www.github.com/Paz23?tab=repositories';
      factory.headerTitle0 = 'trained in three full stacks';
      factory.homeFaText = 'home';
      factory.homePath = '/';
      factory.homeText = 'Home';
      factory.homeUrl = '#/';
      factory.meanStack = 'MEAN Stack';
      factory.meanImg = '/img/main/mean.png';
      factory.rorStack = 'Ruby on Rails';
      factory.rorImg = '/img/main/ruby.png';
      factory.lampStack = 'LAMP Stack';
      factory.lampImg = '/img/main/lamp.png';
      factory.linkedInFA = 'fa-linkedin';
      factory.linkedInFaText = 'linkedin';
      factory.linkedInText = 'LinkedIn';
      factory.linkedInUrl = 'https://www.linkedin.com/in/rorypasley';
      factory.ngClickScrollTo = 'ng-click="scrollTo(\'top\')"';
      factory.noWrapSlides = false;
      factory.portfolioFaText = 'briefcase';
      factory.portfolios = [];
      factory.portfolioTitle = 'Portfolio';
      factory.skillsFaText = 'code';
      factory.skillsImages0 = [];
      factory.skillsImages1 = [];
      factory.skillsTitle = 'Skillset';
      factory.templateUrl0 = 'skillsImage0.html';
      factory.templateUrl1 = 'skillsImage1.html';
      factory.templateUrl2 = 'skillsImage2.html';
      factory.templateUrl3 = 'skillsImage3.html';
      factory.upFaText = 'chevron-circle-up';
      factory.unitText = 'Unit';
      factory.unitFaText = 'terminal';

      var portfolios = [
        {
          desc: 'MEAN Stack user managment application.',
          href: 'usersapp#/users/login',
          img:  '/img/main/portfolioUsersApp.png',
          name: 'Users Dashboard',
          tech0: [
            'MongoDB',
            'Express',
            'Angular',
            'Node',
            'Mongoose'
          ],
          tech1: [
            'bcrypt',
            'jsonwebtoken',
            'Bootstrap',
            'UI-Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'JavaScript Angular Animation',
          href: '#/animate',
          img:  '/img/main/portfolioAnimateApp.png',
          name: 'AngularJS Animation',
          tech0: [
            'Express',
            'Angular',
            'Node'
          ],
          tech1: [
            'jQuery',
            'Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'Open muliple browsers to observe live updates with data received from socket broadcast events.',
          href: '#/favLang',
          img:  '/img/main/portfolioFavLangApp.png',
          name: 'AngularJS & Socket.io',
          tech0: [
            'Express',
            'Angular',
            'Node',
            'Socket.io'
          ],
          tech1: [
            'HighCharts',
            'Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'Karma - Protractor - Jasmine.',
          href: '#/testing',
          img:  '/img/main/portfolioKarmaTests.png',
          name: 'End-to-End & Unit Testing',
          tech0: [
            'Express',
            'Angular',
            'Node',
            'Karma',
            'Protractor'
          ],
          tech1: [
            'Angular Scroll',
            'Plunker',
            'YouTube',
            'Bootstrap',
            'LESS'
          ]
        },
        {
          desc: 'Weather Underground',
          href: '#/weather',
          img:  '/img/main/portfolioWeatherApp.png',
          name: 'Weather Underground API',
          tech0: [
            'Express',
            'Angular',
            'Node',
            'Weather Underground API'
          ],
          tech1: [
            'Bootstrap',
            'UI-Bootstrap',
            'LESS'
          ]
        }
      ];
      factory.portfolios = portfolios;

      // Skills section
      var skillsImages = [
        {
          src: '/img/main/mongodb.png',
          alt: 'MongoDB - Document-Oriented NoSQL Database',
          href: 'https://www.mongodb.org/'
        },
        {
          src: '/img/main/express.png',
          alt: 'ExpressJS Web Application Framework',
          href: 'http://expressjs.com/'
        },
        {
          src: '/img/main/angularjs.png',
          alt: 'AngularJS - Superheroic JavaScript MVW Framework',
          href: 'https://angularjs.org/'
        },
        {
          src: '/img/main/nodejs.png',
          alt: 'NodeJS Runtime Environment',
          href: 'https://nodejs.org/'
        },
        {
          src: '/img/main/karma.png',
          alt: 'Karma - Test Runner for JavaScript',
          href: 'http://karma-runner.github.io/0.13/index.html'
        },
        {
          src: '/img/main/protractor.png',
          alt: 'Protractor - End-to-End Testing for AngularJS',
          href: 'https://angular.github.io/protractor/#/'
        },
        {
          src: '/img/main/socketio.png',
          alt: 'Socket.IO - Real-Time Bidirectional Event-Based Communication',
          href: 'http://socket.io/'
        },
        {
          src: '/img/main/mongoose.png',
          alt: 'Mongoose - MongoDB Object Modeling for NodeJS',
          href: 'http://mongoosejs.com/'
        },
        {
          src: '/img/main/ruby2.png',
          alt: 'Ruby - Object-Oriented Programming Language',
          href: 'https://www.ruby-lang.org/'
        },
        {
          src: '/img/main/rails.png',
          alt: 'Rails - MVC Web Application Framework',
          href: 'http://rubyonrails.org/'
        },
        {
          src: '/img/main/linux.png',
          alt: 'Linux OS - The \'L\' in LAMP Stack',
          href: 'https://www.linux.com/'
        },
        {
          src: '/img/main/apache.png',
          alt: 'Apache - HTTP Web Server',
          href: 'http://www.apache.org/'
        },
        {
          src: '/img/main/mysql.png',
          alt: 'MySQL - Relational Database Management System',
          href: 'https://www.mysql.com/'
        },
        {
          src: '/img/main/php.png',
          alt: 'PHP - Server-Side Scripting Language',
          href: 'https://secure.php.net/'
        },
        {
          src: '/img/main/html.png',
          alt: 'HTML5 - HyperText Markup Language',
          href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
        },
        {
          src: '/img/main/css.png',
          alt: 'CSS3 - Cascading Style Sheets',
          href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
        },
        {
          src: '/img/main/bootstrap.png',
          alt: 'Bootstrap - Front-End Framework',
          href: 'http://getbootstrap.com/'
        },
        {
          src: '/img/main/ui-bootstrap.png',
          alt: 'UI-Bootstrap - Bootstrap Componenets for AngularJS',
          href: 'https://angular-ui.github.io/bootstrap/'
        },
        {
          src: '/img/main/bower.png',
          alt: 'Bower - Package Manager for the Web',
          href: 'http://bower.io/'
        },
        {
          src: '/img/main/grunt.png',
          alt: 'Grunt - JavaScript Task Runner',
          href: 'http://gruntjs.com/'
        },
        {
          src: '/img/main/npm.png',
          alt: 'NPM - Node Package Manager',
          href: 'https://www.npmjs.com/'
        },
        {
          src: '/img/main/less.png',
          alt: 'LESS - CSS Pre-Processor',
          href: 'http://lesscss.org/'
        },
        {
          src: '/img/main/jquery.png',
          alt: 'jQuery - Cross-Platform Client-Side JavaScript Library',
          href: 'https://jquery.com/'
        },
        {
          src: '/img/main/ajax.png',
          alt: 'AJAX - Asynchronous JavaScript & XML',
          href: 'https://developer.mozilla.org/en-US/docs/AJAX'
        }
      ];

      // Private functions
      (function setSkillsImages(){
        for(var i = 0; i < 12; i++){
          factory.skillsImages0.push({
            src: skillsImages[i].src,
            alt: skillsImages[i].alt,
            href: skillsImages[i].href
          });
        }
        for(i = 12; i < 24; i++){
          factory.skillsImages1.push({
            src: skillsImages[i].src,
            alt: skillsImages[i].alt,
            href: skillsImages[i].href
          });
        }
      })();

      return factory;
    });
})();

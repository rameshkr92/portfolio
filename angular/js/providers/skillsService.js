(function(){
  'use strict';

  angular.module('AppPortfolio')
    .service('SkillsService', [function(){
      var service = {};

      service.skills_images = [
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
        /*{
          src: '/img/main/protractor.png',
          alt: 'Protractor - End-to-End Testing for AngularJS',
          href: 'https://angular.github.io/protractor/#/'
        },*/
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
        /*{
          src: '/img/main/less.png',
          alt: 'LESS - CSS Pre-Processor',
          href: 'http://lesscss.org/'
        },*/
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

      return service;
    }]);
})();

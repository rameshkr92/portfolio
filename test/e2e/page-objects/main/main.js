(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();
    var pf = [];
    var pfTechLen = 0;
    var skImages0 = [];
    var skImages1 = [];
    var btn, currentUrl, el;

    this.angularJSUrl = 'https://angularjs.org/';
    this.bgImg = 'appleLaptopAngle.jpg';
    this.get = function(){
      browser.get(this.url);
    };
    this.githubUrl = 'https://github.com/Paz23?tab=repositories';
    this.headTxt0 = 'trained in three full stacks';
    this.homeText = 'Home';
    this.lampTxt = 'LAMP Stack';
    // this.linkedInUrl = 'https://www.linkedin.com/in/rorypasley';
    this.linkedInUrl = 'https://www.linkedin.com/in/rameshkumar1992';
    this.meanTxt = 'MEAN Stack';
    this.portfolioBgColor = 'rgba(228, 228, 228, 1)';
    this.portfolioText = 'Portfolio';
    this.portfolios = [];
    this.portfoliosTechLen = pfTechLen;

    this.rorTxt = 'Ruby on Rails';
    this.scrollIntoView = function(elem){
      // First here with first in testScroll below.
      el = element.all(by.css(elem)).first();
      browser.executeScript('arguments[0].scrollIntoView(false);', el.getWebElement());
    };
    this.skillsBgColor = 'rgba(238, 238, 238, 1)';
    this.skillsImages0 = skImages0;
    this.skillsImages1 = skImages1;

    this.testExtUrl = function(elemId, url){
      btn = element(by.id(elemId));
      btn.click().then(function(){
        // Delay to let the new tab open.
        browser.sleep(100);
        browser.getAllWindowHandles().then(function(handles){
          // console.log(handles);
          browser.switchTo().window(handles[handles.length - 1]).then(function(){
            expect(browser.driver.getCurrentUrl()).toBe(url);
            browser.driver.close().then(function(){
              browser.switchTo().window(handles[0]);
            });
          });
        });
      });
    };
    this.testIntUrl = function(elemId, url){
      browser.driver.getCurrentUrl().then(function(c_Url){
        currentUrl = c_Url;
      });
      btn = element(by.id(elemId));
      btn.click().then(function(){
        browser.sleep(100);
        expect(browser.driver.getCurrentUrl()).toBe(base.url + url);
        browser.get(currentUrl);
        browser.sleep(100);
      });
    };
    this.testScroll = function(elem, id){
      // Using window offset to see if page scrolls. getLocation just finds the
      // location on the page, NOT location in viewport!
      browser.executeScript('return window.pageYOffset;').then(function(loc0){
        // console.log('loc0', loc0);
        if(id){
          element(by.id(elem)).click();
        } else {
          element.all(by.css(elem)).first().click();
        }
        // Wait for page to finish scrolling, set > scroll duration.
        browser.sleep(1200);
        browser.executeScript('return window.pageYOffset;').then(function(loc1){
          // console.log('loc1', loc1);
          // If page scrolls the locations will not equal
          expect(loc0).not.toEqual(loc1);
        });
      });
    };
    this.title = base.portfolioAppTitle;
    this.toggleNavBar = function(){
      element(by.id('nbtoggle')).click();
      browser.sleep(300);
    };
    this.url = base.url + '#/';
    this.verifyText = function(elemId, searchText){
      element(by.id(elemId)).getText().then(function(txt){
        expect(txt).toBe(searchText);
      });
    };
    // this.weatherUrl = 'http://www.wunderground.com/?apiref=5fa02827718d6c2a';
    this.weatherUrl = 'http://www.wunderground.com/?apiref=66bd656042b63be9';

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
    this.portfolios = portfolios;

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
    (function setPortfolios(){
      pf = portfolios;
      for(var i = 0; i < pf.length; i++){
        pfTechLen += pf[i].tech0.length;
        pfTechLen += pf[i].tech1.length;
      }
    })();
    (function setSkillImages(){
      for(var i = 0; i < 12; i++){
        skImages0.push({
          src: skillsImages[i].src,
          alt: skillsImages[i].alt,
          href: skillsImages[i].href
        });
      }
      for(i = 12; i < 24; i++){
        skImages1.push({
          src: skillsImages[i].src,
          alt: skillsImages[i].alt,
          href: skillsImages[i].href
        });
      }
    })();
    this.portfoliosTechLen = pfTechLen;
  };
})();

(function(){
    'use strict';

    angular.module('AppPortfolio')
        .service('PortfoliosService', [function(){
            var service = {};

            /*service.portfolios = [
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
            ];*/

            service.portfolios = [
                {
                    desc: 'UiStacks - A destination for Web Programmer.',
                    href: 'https://www.uistacks.com/',
                    img:  '/img/portfolio/uistacks.png',
                    name: 'UiStacks - A Web Programmer Space',
                    tech0: [
                        'Laravel 5.3',
                        'MySQL',
                        'Apache',
                        'Moment-js',
                        'Addthis'
                    ],
                    tech1: [
                        'PHP 7.0.26',
                        'Material Design',
                        'Bootstrap',
                        'UI-Bootstrap'
                    ]
                },
                {
                    desc: 'AppBrowzer is the one-app solution to all your apps',
                    href: 'http://www.appbrowzer.com/',
                    img:  '/img/portfolio/appBrowzer.png',
                    name: 'AppBrowzer Express App',
                    tech0: [
                        'ROR',
                        'MySQL',
                        'Nginx',
                        'Facebook Widget'
                    ],
                    tech1: [
                        'Ruby',
                        'Bootstrap',
                        'Wordpress',
                        'Addthis'
                    ]
                },
                {
                    desc: 'Chosen Lawyers   Lawyers  Attorneys  Solicitor Barrister  Abogados for Legal Help California.',
                    href: 'http://chosenlawyers.com/',
                    img:  '/img/portfolio/Chosen-Lawyers.png',
                    name: 'Chosen Lawyers',
                    tech0: [
                        'ROR',
                        'MySQL',
                        'Apache',
                        'Comet Chat'
                    ],
                    tech1: [
                        'Ruby',
                        'Bootstrap',
                        'Thin server',
                        'Addthis'
                    ]
                },
                {
                    desc: 'FindLight - The New Way to Find Lasers  Optics and Photonics',
                    href: 'https://www.findlight.net/',
                    img:  '/img/portfolio/FindLight.png',
                    name: 'FindLight',
                    tech0: [
                        'Codeigniter',
                        'MySQL',
                        'Apache',
                        'Moment-js',
                        'Addthis'
                    ],
                    tech1: [
                        'PHP',
                        'Google Search',
                        'Bootstrap',
                        'Wordpress'
                    ]
                },
                {
                    desc: 'SynCampus - The Educational Netowrk for Students and Colleges',
                    href: 'https://syncampus.com/',
                    img:  '/img/portfolio/SynCampus.png',
                    name: 'SynCampus | Connecting Campuses',
                    tech0: [
                        'Laravel 5.2',
                        'MySQL',
                        'Apache',
                        'Addthis'
                    ],
                    tech1: [
                        'PHP 5.5.9',
                        'Bootstrap',
                        'UI-Bootstrap'
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

            return service;
        }]);
})();

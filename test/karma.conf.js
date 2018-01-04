(function(){
  'use strict';

  /* Return object */
  module.exports = function(config){
    config.set({

      background: true,

      basePath: '../',

      browsers: ['Chrome'],
      // browsers: ['Chrome', 'Firefox'],

      exclude: [
        'angular/js/scripts/Highcharts-4.1.7/**/*.js',
        'angular/js/scripts/favLang.js'
      ],

      files: [
        'angular/bower_components/jquery/dist/jquery.js',
        'angular/bower_components/angular/angular.js',
        'angular/bower_components/angular-animate/angular-animate.js',
        'angular/bower_components/angular-touch/angular-touch.js',
        'angular/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'angular/bower_components/angular-mocks/angular-mocks.js',
        'angular/bower_components/angular-route/angular-route.js',
        'angular/bower_components/angular-sanitize/angular-sanitize.js',
        'angular/bower_components/angular-scroll/angular-scroll.js',
        'angular/js/**/*.js',
        'angular/views/partials/**/*.html',
        'test/unit/**/*.js',
        {pattern: 'angular/img/**/*.gif', watched: false, included: false, served: true},
        {pattern: 'angular/img/**/*.png', watched: false, included: false, served: true},
        {pattern: 'angular/img/**/*.jpeg', watched: false, included: false, served: true},
        {pattern: 'angular/img/**/*.jpg', watched: false, included: false, served: true}
      ],

      frameworks: ['jasmine'],

      junitReporter: {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
      },

      ngHtml2JsPreprocessor: {
        stripPrefix: 'angular/views/',
      },

      // logLevel: config.LOG_ERROR,
      // logLevel: config.LOG_WARN,
      logLevel: config.LOG_INFO, // Default level
      // logLevel: config.LOG_DEBUG,

      plugins: [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-jasmine-html-reporter',
        'karma-ng-html2js-preprocessor'
      ],

      preprocessors: {
        'angular/views/**/*.html': ['ng-html2js']
      },

      proxies: {
        '/img/': 'http://localhost:6789/img/'
      },

      reporters: ['progress', 'html'],

      singleRun: false

    });
  };
})();

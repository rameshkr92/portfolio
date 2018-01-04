(function(){
  'use strict';

  exports.config = {
    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:6789/',

    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--test-type']
      }
    },

    directConnect: true,

    framework: 'jasmine2',

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000,
      print: function() {} // required for jasmine-spec-reporter
    },

    // To test multiple browsers comment out the `capabilities` property above
    // & uncomment `multiCapabilities` here
    // multiCapabilities: [
    //   {
    //     'browserName': 'chrome',
    //     'chromeOptions': {
    //       args: ['test-type']
    //     }
    //   },
    //   {
    //     'browserName': 'firefox'
    //   }
    // ],

    onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter(
        {
          displayStacktrace: true,
          displayPendingSpec: true
        }
      ));
    },

    // Not alphabetical so that main runs first for correct order of tests for
    // about modal popup & users runs last.
    specs: [
      'e2e/main/*.js',
      'e2e/animate/*.js',
      'e2e/favorite/*.js',
      'e2e/testing/*.js',
      'e2e/weather/*.js',
      'e2e/users/*.js'
    ],

    suites: {
      animateApp: 'e2e/animate/*.js',
      favoriteApp: 'e2e/favorite/*.js',
      mainApp: 'e2e/main/*.js',
      portfolioApp: [
        'e2e/main/*.js', 'e2e/animate/*js', 'e2e/favorite/*.js',
        'e2e/testing/*.js', 'e2e/weather/*.js'
      ],
      testingApp: 'e2e/testing/*.js',
      weatherApp: 'e2e/weather/*.js',
      usersApp: 'e2e/users/*.js'
    }

  };
})();

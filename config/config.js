(function(){
  'use strict';

  // Application configuration
  var path = require('path');
  var rootPath = path.normalize(__dirname, '/..');

  // For now just exporting an object that gives some basic data,
  // namely the environment information

  // Set the db name & this application name
  module.exports = {
    development: {
      db: 'mongodb://localhost/user_management_dev',
      root: rootPath,
      app: {name: 'User_Management_MEAN_Stack_App_dev'}
    },
    test: {
      db: 'mongodb://localhost/user_management_test',
      root: rootPath,
      app: {name: 'User_Management_MEAN_Stack_App_test'}
    },
    production: {
      db: process.env.MONGOLAB_URI
    }
  };
}());

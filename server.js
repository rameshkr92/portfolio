(function(){
  'use strict';

  var port = 1337;
  var server = {};
  var routes = {};
  // Load express module, a minimalist web framework
  var express = require('express');
  // Handle/transform file paths
  var path = require('path');
  // Serve favicon
  var favicon = require('serve-favicon');
  // Http request logger
  var logger = require('morgan');
  // Parse cookie header & populate req.cookies with object
  var cookieParser = require('cookie-parser');
  // Parse form data
  var bodyParser = require('body-parser');

  // Create variable to hold express framework
  var app = express();

  // Helper functions to format Date & Time
    // (not needed now that we are angular but leaving for future/notes)
  var formatDate = require('./express/services/formatDate');
  var formatTime = require('./express/services/formatTime');

  // Provide helper functions to the views
  app.locals.formatDate = formatDate;
  app.locals.formatTime = formatTime;

  // View paths
  app.set('views', [path.join(__dirname, './angular/views'), path.join(__dirname, './test')]);
  // View engine setup
  app.set('view engine', 'ejs');
  // Map .html files to the ejs template engine
  app.engine('html', require('ejs').renderFile);
  // Favicon location
  app.use(favicon(__dirname + '/angular/img/favicon/favicon.ico'));
  // Log http requests to the console via morgan
  app.use(logger('dev'));
  // To parse application/json
  app.use(bodyParser.json());
  // To parse application/x-www-form-urlencoded
  // Extended syntax with the qs module (true is depreciated)
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());

  // Static file location
  app.use(express.static(path.join(__dirname, './angular')));

  // Set the port number
  app.set('port', process.env.PORT || port);

  // Create the server
  server = app.listen(app.get('port'), function (){
    console.log('\nMEAN Stack Server now running on port ' + server.address().port + '\n');
  });

  var io = require('socket.io').listen(server);

  // Routes - have to be after bodyParser or post data won't be available)
  routes = require('./config/routes/routes')(app, io);
  // Get the database connection info
  require('./config/mongoose');

  // Development error handler - will print stacktrace
  if(app.get('env') === 'development'){
    app.use(function(err, req, res, next){
      res.status(err.status || 500);
      res.render('error', { message: err.message, error: {} });
    });
  }

  // Production error handler - stacktrace not leaked to user
  app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: {} });
  });
})();

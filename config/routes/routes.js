(function(){
  'use strict';

  module.exports = function Route(app, io){
    // Express routes
    var main = require('./main');
    // API routes
    var api = require('./api');
    // JSON web token service
    var authSvc = require('./../../express/services/authService');
    // Socket for favorites app
    require('./socket')(io);
    var token = null;
    var user = null;

// Express routes
    app.get('/', main.index);
    app.get('/usersapp', main.usersIndex);

// For the Angular routes, a single route to serve partials must be included
  // Animation App Routing
    app.get('/partials/animate/:file', main.animatePartials);
  // Favorite Language App Routing
    app.get('/partials/favLang/:file', main.favLangPartials);
  // Portfolio Routing
    app.get('/partials/main/:file', main.mainPartials);
  // Testing App Routing
    app.get('/partials/testing/:file', main.testingPartials);
  // Users Dashboard App Routing
    app.get('/partials/users/:file', main.userPartials);
  // Weather App Routing
    app.get('/partials/weather/:file', main.weatherPartials);
// API routes
    // No token authentication for these routes.
    // Users Dashboard
    app.post('/api/authenticate/', api.authenticate);
    app.get('/api/checkUnique/:id', api.checkUnique);
    app.get('/api/states', api.getStates);
    app.post('/api/users/new', api.addUser);
    // Weather
    app.get('/api/cities/:location', api.getCities);
    app.get('/api/weather/:location', api.getWeather);
    app.get('/api/weatherforecast/:location', api.getForecast);
  // Routing middleware for token authentication on all other routes.
    app.use(function (req, res, next){
      token = req.headers['x-access-token'];
      user = req.headers['x-auth-client'];
      // console.log('\nroutes.js middleware verifying token (req.header)\n', token, '\n\nuser:', user);
      authSvc.verify(token, user, function(err, decoded){
        // If token authenticated, save to request for use in routes.
        if(err){
          // console.log('\n\nroutes.js authSvc.verify err:\n', err);
          res.redirect('/users/login');
        } else {
          req.decoded = decoded;
          // console.log('\n\nroutes.js authSvc.verify decoded:\n', req.decoded);
          next();
        }
      });
    });
  // Token authentication required for these routes.
    app.get('/api/users/', api.getUsers);
    app.get('/api/users/subset', api.getUsersSubset);
    app.get('/api/users/:id', api.getUser);
    app.put('/api/users/:id', api.editUser);
    app.delete('/api/users/:id', api.deleteUser);
    app.get('/api/email/:email', api.findByEmail);
    app.delete('/api/authenticate/:token', api.deleteToken);
    app.get('/api/authenticate/', api.checkToken);
    app.get('/api/verify/:id', api.verifyLevel);
    // Redirect all others to index
    app.get('*', main.index);
  };
})();

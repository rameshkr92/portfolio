(function(){
  'use strict';

  var http = require('http');
  // Require all needed express controllers
  var StatesController = require('./../../express/controllers/states');
  var TokensController = require('./../../express/controllers/tokens');
  var UsersController = require('./../../express/controllers/users');

  /* Express Backend API Routing */
  // Get all users
  exports.getUsers = function(req, res){
    UsersController.index(req, res, function(users){
      // console.log('\napi.js get all users, users:', users);
      res.send(users);
    });
  };

  // Get subset of users for pagination
  exports.getUsersSubset = function (req, res){
    // console.log('\napi.js -get /api/users/getUsersSubset req.query:', req.query);
    UsersController.getUsersSubset(req, res, function(summary){
      res.json(summary);
    });
  };

  // Find one user
  exports.getUser = function(req, res){
    // console.log('\napi.js -findOne get /api/users/:id req.params:\n', req.params);
    UsersController.show(req, res, function(user){
      // console.log('\napi.js -findOne get /api/users/:id callback() - user\n', user);
      res.json(user);
    });
  };

  // Create user
  exports.addUser = function(req, res){
    // console.log('\napi.js -create post /api/users \n', req.body);
    UsersController.create(req, res, function(user){
      // console.log('\napi.js -create post /api/users callback() - user\n', user);
      res.json(user);
    });
  };

  // Update user
  exports.editUser = function(req, res){
    // console.log('\napi.js -update put /api/users/:id req.body\n', req.body);
    UsersController.update(req, res, function(user){
      // console.log('\napi.js -update put /api/users/:id callback() - user\n', user);
      res.json(user);
    });
  };

  // Destroy user
  exports.deleteUser = function(req, res){
    // console.log('\napi.js -delete /api/user/destroy req.params:\n', req.params);
    UsersController.destroy(req, res, function(result){
      // console.log('\napi.js -delete /api/users/destroy callback() - result\n', result.result);
      res.json(result);
    });
  };

  // Find one user by email (this is the same as authenticate below, except that
  // user has to be authenticated to access this one (config/routes)
  exports.findByEmail = function(req, res){
    // console.log('\napi.js -findOne by Email- get /api/users/:email req.params:\n', req.params);
    UsersController.findByEmail(req, res, function(user){
      // console.log('\napi.js -findOne by Email- get /api/users/:id callback() - user\n', user);
      res.json(user);
    });
  };

  // Authenticate user
  exports.authenticate = function(req, res){
    // console.log('\napi.js -post /api/authenticate email\n', req.body.userLogin);
    // req.params.email = req.body.userLogin.email;
    UsersController.findByEmail(req, res, function(obj){
      // console.log('\napi.js -authenticate callback() - obj', obj);
      res.json(obj);
    });
  };

  // Verify user permission level
  exports.verifyLevel = function(req, res){
    // console.log('\napi.js -get /api/verifyLevel id\n', req.params);
    UsersController.verify(req, res, function(user){
      // console.log('\napi.js -get /api/verifyLevel user_level\n', user.user_level);
      if(user.user_level === 9){
        // console.log('is 9');
        res.json(true);
      } else {
        // console.log('not 9');
        res.json(false);
      }
    });
  };

  // Verify user token with token stored in token db
  exports.checkToken = function(req, res){
    TokensController.verify(req, res, function(result){
      res.json(result);
    });
  };

  // Destroy user token
  exports.deleteToken = function(req, res){
    // console.log('\napi.js -delete /api/authenticate/:id req.params:\n', req.params);
    TokensController.destroy(req, res, function(result){
      // console.log('\napi.js -delete /api/authenticate/:id callback() - result\n', result.result);
      res.json(result);
    });
  };

  // Get states
  exports.getStates = function(req, res){
    // console.log('\napi.js getStates');
    StatesController.index(req, res, function(states){
      // console.log('\napi.js get all states, states:', states);
      res.send(states);
    });
  };

  // Check unique
  exports.checkUnique = function(req, res){
    // console.log('\napi.js -checkUnique');
    UsersController.checkUnique(req, res, function(result){
      res.json(result);
    });
  };

  // Weather
  exports.getCities = function(req, res){
    var body = '';
    var url = 'http://autocomplete.wunderground.com/aq?query=';
    // console.log('\napi.js - getCities req.params', req.params);
    http.get(url + req.params.location, function(response){
      response.on('data', function(chunk){
        body += chunk;
      });
      response.on('end', function(){
        // console.log('\napi.js - getCities end:', JSON.parse(body));
        res.json(JSON.parse(body));
      });
    }).on('error', function(e){
      console.log('\napi.js - getCities error:', e);
    });
  };

  exports.getForecast = function(req, res){
    var body = '';
    var url = 'http://api.wunderground.com/api/1a6c174d74b9c0c2/forecast/q/';
    // console.log('\napi.js - getForecast req.params', req.params);
    http.get(url + req.params.location + '.json', function(response){
      response.on('data', function(chunk){
        body += chunk;
      });
      response.on('end', function(){
        // console.log('\napi.js - getForecast end:', JSON.parse(body));
        res.json(JSON.parse(body));
      });
    }).on('error', function(e){
      console.log('\napi.js - getForecast error:', e);
    });
  };

  exports.getWeather = function(req, res){
    var body = '';
    var url = 'http://api.wunderground.com/api/1a6c174d74b9c0c2/conditions/q/';
    // console.log('\napi.js - getWeather req.params', req.params);
    http.get(url + req.params.location + '.json', function(response){
      response.on('data', function(chunk){
        body += chunk;
      });
      response.on('end', function(){
        // console.log('\napi.js - getWeather end:', JSON.parse(body));
        res.json(JSON.parse(body));
      });
    }).on('error', function(e){
      console.log('\napi.js - getWeather error:', e);
    });
  };
})();

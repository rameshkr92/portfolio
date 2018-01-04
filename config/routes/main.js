(function(){
  'use strict';

  // This is the express view that will be required. The rest is done by
  // Angular routing
  exports.index = function(req, res){
    res.render('index', {title: "Ramesh Kumar Portfolio"});
  };
  exports.usersIndex = function(req, res){
    res.render('usersIndex', {title: "User Dashboard"});
  };

  // For the Angular routes, a single route to serve partials must be included
  // Animation pages
  exports.animatePartials = function(req, res){
    console.log('\n\nroutes/main.js animatePartials req.params', req.params);
    res.render('partials/animate/' + req.params.file);
  };
  // Favorite Language pages
  exports.favLangPartials = function(req, res){
    // console.log('\n\nroutes/main.js favLangPartials req.params', req.params);
    res.render('partials/favLang/' + req.params.file);
  };
  // Portfolio pages
  exports.mainPartials = function(req, res){
    // console.log('\n\nroutes/main.js mainPartials req.params', req.params);
    res.render('partials/main/' + req.params.file);
  };
  // Testing pages
  exports.testingPartials = function(req, res){
    // console.log('\n\nroutes/main.js testingPartials req.params', req.params);
    res.render('partials/testing/' + req.params.file);
  };
  // Users Dashboard pages
  exports.userPartials = function(req, res){
    // console.log('\n\nroutes/main.js userPartials req.params', req.params);
    res.render('partials/users/' + req.params.file);
  };
  // Weather pages
  exports.weatherPartials = function(req, res){
    // console.log('\n\nroutes/main.js weatherPartials req.params', req.params);
    res.render('partials/weather/' + req.params.file);
  };
})();

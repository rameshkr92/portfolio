(function(){
  'use strict';

  var State = require('./../models/state');

  exports.index = function(req, res, callback){
    State.find({}, function(err, states){
      if(err){
        res.status(300).send(JSON.stringify(err));
      } else {
        callback(states);
      }
    });
  };
})();

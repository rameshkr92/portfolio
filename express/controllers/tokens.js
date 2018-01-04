(function(){
  'use strict';

  var Token = require('./../models/token');

  // Saving from controllers/users.js
  exports.create = function(saveObj, callbackObj, callback){
    // console.log('\ncontrollers/tokens.js create: saveObj:\n', saveObj);
    var new_token = new Token(saveObj);
    // console.log('\ncontrollers/tokens.js create: new_token:\n', new_token);
    new_token.save(function(err, token){
      if(err){
        // console.log('\ncontrollers/tokens.js create: error saving to database\n', err);
        res.status(300).send(JSON.stringify(err));
      } else {
        // console.log('\ncontrollers/tokens.js create: save token:\n', token);
        // console.log('controllers/tokens.js callbackObj:', callbackObj);
        callback(callbackObj);
      }
    });
  };

  exports.destroy = function(req, res, callback){
    // console.log('\ncontrollers/tokens.js destroy: req.params:\n', req.params);
    Token.remove({token: req.params.token}, function(err, result){
      if(err){
        // console.log('\n\ncontrollers/tokens.js destroy: remove err:\n', err);
        return res.status(300).send(JSON.stringify(err));
      } else {
        // console.log('\ncontrollers/tokens.js destroy: remove result:\n', result.result);
        callback(result);
      }
    });
  };

  exports.verify = function(req, res, callback){
    var token = req.query.token;
    var user = JSON.parse(req.query.user);
    // console.log('\ncontrollers/tokens.js verify token:\n', token, '\n\nuser:', user);
    Token.findOne({token: token})
      .exec(function(err, dbToken){
        if(!dbToken || err){
          console.log('\ncontrollers/tokens.js verify err:', err);
          callback({status: false});
        } else {
          // console.log('got token back......dbToken:', dbToken);
          // TODO: Just matching tokens, add additional backend security for
          // verification of user for action requested for matching roles:
          // edit/delete user, add permissions to user, ect.
          if(dbToken.user === user.user.data.email){
            // console.log('\ncontrollers/tokens.js tokens match:\n', dbToken);
            callback({status: true});
          } else {
            console.log('\ncontrollers/tokens.js tokens NO match:\n', dbToken);
            callback({status: false});
          }
        }
      });
  };

  exports.update = function(obj, newToken){
    // TODO: update on time left until expiration, user edit.
  };
})();

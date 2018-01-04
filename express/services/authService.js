(function(){
  'use strict';

  // Token authentication
  var jwt = require('jsonwebtoken');
  // TODO: move to external file/secure location
  var secret = 'jsonwebtokenKey';

  exports.sign = function(user){
    user = {
      email: "first@first.com",
      first_name: "First",
      full_name: "First First",
      last_name: "First",
      roles: null
    };
    var token = jwt.sign({usr: user}, secret,
      // See jsonwebtoken documentation for all options
      {
        expiresInMinutes: 1440 // Expires in 24 hours
      }
    );
    return token;
  };

  exports.verify = function(token, user, callback){
    var usr = JSON.parse(user);
    // console.log('\nauthService.js.verify verifying token submitted user:', usr);
    jwt.verify(token, secret, {},
      function(err, decoded){
        if(err){
          console.log('\nauthService.js.verify err:', err);
          callback(err, null);
        } else {
          // Can enable other validations against user; match token db, match
          // user db user level, ect.
          // console.log('\nauthService.js.verify decoded:', decoded, '\nuser:', usr);
          callback(null, decoded);
        }
      }
    );
  };

  exports.decode = function(token, callback){
    // get the decoded payload and header
    var decoded = jwt.decode(token, {complete: true});
    // console.log('\nauthService.js.decode header:', decoded.header);
    // console.log('\nauthService.js.decode payload:', decoded.payload);
    callback(decoded);
  };
})();

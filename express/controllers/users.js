(function(){
  'use strict';

  // Get helper utility
  var dbUtility = require('./../services/dbUtility');
  var mongoose = require('mongoose');
  // Get required models for this express controller
  var User = require('./../models/user');
  var Token = require('./tokens');
  // JSON web token service
  var authSvc = require('./../services/authService');

  exports.index = function(req, res, callback){
    // Get all Users from the database - limiting fields selected
    User.find({}, 'id email first_name last_name user_name city state created_at updated_at',
      function(err, users){
        if(err){
          res.status(300).send(JSON.stringify(err));
        } else {
          callback(users);
        }
      }
    );
  };

  exports.getUsersSubset = function(req, res, callback){
    var limit = req.query.$limit;
    var skip = req.query.$skip;
    // console.log('controllers/users.js getUsersSubset limit:', limit, '| skip:', skip);
    User.count(function(err, usersCount){
      var count = usersCount;
      // console.log('Users count:', count);
      User.find({}, 'city created_at email first_name id last_name state updated_at user_name')
        .sort('id')
        .skip(skip)
        .limit(limit)
        .exec(function(err, users){
          callback({
            count: count,
            users: users
          });
        });
    });
  };

  exports.create = function(req, res, callback){
    // console.log('\ncontrollers/users.js create: req.body:\n', req.body);
    var new_user = new User(req.body);
    // console.log('\ncontrollers/users.js create: user:\n', new_user);
    new_user.save(function(err, user){
      if(err){
        console.log('\ncontrollers/users.js create: error saving to database\n', err);
        res.status(300).send(JSON.stringify(err));
      } else {
        // console.log('\ncontrollers/users.js create: save err:\n', err);
        // console.log('\ncontrollers/users.js create: save user:\n', user);
        callback(user);
      }
    });
  };

  exports.show = function(req, res, callback){
    // console.log('\ncontrollers/users.js show: req.params:\n', req.params);
    User.findOne({_id: req.params.id}, 'address city created_at email first_name id last_name state updated_at user_name zip', function(err, user){
      if(err){
        console.log('\ncontrollers/users.js show: err:\n', err);
        res.status(300).send(JSON.stringify(err));
      } else {
        // console.log('\ncontrollers/users.js show: user:\n', user);
        callback(user);
      }
    });
  };

  exports.update = function(req, res, callback){
    var obj = {};
    // console.log('\ncontrollers/users.js update: req.body', req.body);
    // Using .findOne() & .save() to have validations run during update
      // (instead of .update() or findOneAndUpdate())
    User.findOne({_id: req.body.user._id}, function(err, user){
      if(err){
        console.log('\ncontrollers/users.js update findOne: err:\n', err);
        res.status(300).send(JSON.stringify(err));
      } else if(req.body.currPass){
        user.comparePassword(req.body.currPass, function(err, isMatch){
          if(err){
            console.log('\ncontrollers/users.js update comparePW: err:\n', err);
            res.status(300).send(JSON.stringify(err));
          } else if(!isMatch){
            obj = {
              success: false,
              message: 'Current Password is Incorrect.'
            };
            // console.log('\ncontrollers/users.js update: pwd NO match!\n', obj);
            res.status(300).send(JSON.stringify(obj));
          } else {
            updateDoc(user, User, req.body.user, callback);
          }
        });
      } else {
        updateDoc(user, User, req.body.user, callback);
      }
    });
  };

  exports.destroy = function(req, res, callback){
    // console.log('\ncontrollers/users.js destroy: req.params:\n', req.params);
    User.remove({_id: req.params.id}, function(err, result){
      if(err){
        console.log('\ncontrollers/users.js destroy: remove err:\n', err);
        return res.status(300).send(JSON.stringify(err));
      } else {
        // console.log('\ncontrollers/users.js destroy: remove result:\n', result.result);
        callback(result);
      }
    });
  };

  exports.findByEmail = function(req, res, callback){
    var email = req.params.email || req.body.userLogin.email;
    // Using a object to wrap user for return. Could use .lean() to return
    // JSON instead of Mongoose Document.
    var obj = {};
    // console.log('\ncontrollers/users.js findByEmail: req.params:\n', req.params);
    User.findOne({email: email}, function(err, user){
      // console.log('controllers/users.js findByEmail user', user);
      if(!user || err){
        console.log('\ncontrollers/users.js findByEmail: findOne: err:\n', err);
        res.status(300).send(JSON.stringify(err));
      } else {
        if(req.body.userLogin.login){
          user.comparePassword(req.body.userLogin.password, function(err, isMatch){
            if(err){
              res.status(300).send(JSON.stringify(err));
            }
            if(isMatch){
              // console.log('\ncontrollers/users.js findByEmail: pwd match! obj:\n', obj);
              // Convert User instance for use as js object
              var usr = user.toObject();
              delete usr.password;
              var token = authSvc.sign(usr);
              obj = {
                status: true,
                user: usr,
                token: token
              };
              var saveToken = {
                token: token,
                user: user.email,
                user_level: user.user_level
              };
              // Save token to Token db
              Token.create(saveToken, obj, callback);
            } else {
              obj = {
                status: false,
              };
              // console.log('\ncontrollers/users.js findByEmail: pwd NO match!\n', obj);
              res.status(300).send(JSON.stringify(obj));
            }
          });
        } else {
          // console.log('\ncontrollers/users.js findByEmail: No login!\n', user);
          callback(user);
        }
      }
    });
  };

  exports.checkUnique = function(req, res, callback){
    var id = req.params.id;
    var property = req.query.property;
    var value = req.query.value;
    var status = null;
    // console.log('\ncontrollers/users.js checkUnique: property:', property);
    // console.log('\ncontrollers/users.js checkUnique: id:', id);
    // console.log('\ncontrollers/users.js checkUnique: value:', value);
    if (id === '0'){
      // Creating temp id, needed to fix:
      // [CastError: Cast to ObjectId failed for value "0" at path "_id"]
      // when validating new registration. If editing existing, the id is
      // already correct!!!
      id = mongoose.Types.ObjectId();
      // console.log('\ncontrollers/users.js new id:', id);
    }
    switch(property){
      case 'user_name':
        // User RegExp to ignore case during find: (first === FirST)
        User.findOne({user_name: new RegExp(value, 'i'), _id: {$ne: id}})
          .select('user_name')
          .exec(function (err, user){
            // console.log('\ncontrollers/users.js checkUnique: err:', err);
            // console.log('\ncontrollers/users.js checkUnique: user:', user);
            if(user){
              status = false;
            } else {
              status = true;
            }
            callback({status: status});
          });
        break;
      case 'email':
        User.findOne({email: value, _id: {$ne: id}})
          .select('email')
          .exec(function(err, user){
            // console.log('\ncontrollers/users.js checkUnique: err:', err);
            // console.log('\ncontrollers/users.js checkUnique: user:', user);
            if(user){
              status = false;
            } else {
              status = true;
            }
            callback({status: status});
          });
        break;
    }
  };

  exports.verify = function(req, res, callback){
    // console.log('\ncontrollers/users.js verify: req.params:\n', req.params);
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.log('\ncontrollers/users.js verify: err:\n', err);
        res.status(300).send(JSON.stringify(err));
      } else {
        // console.log('\ncontrollers/users.js verify: user:\n', user);
        callback(user);
      }
    });
  };


  // Private functions
  function updateDoc(doc, schema, data, callback){
    // dbUtility.updateDocument(user, User, req.body.user);
    dbUtility.updateDocument(doc, schema, data);
    // console.log('\ncontrollers/users.js update processed user:\n', doc);
    doc.save(function(err, updatedUser){
      if(err){
        console.log('\ncontrollers/users.js update save: err:\n', err);
        callback(err);
        // return JSON.stringify(err);
      } else {
        // Convert User instance for use as js object
        var usr = updatedUser.toObject();
        delete usr.password;
        // console.log('\ncontrollers/users.js updateDoc save: usr:\n', usr);
        callback(usr);
      }
    });
  }
})();

(function(){
  'use strict';

  // Handle MongoDB Object Modeling
  var mongoose = require('mongoose');
  // Check for unique values
  var uniqueValidator = require('mongoose-unique-validator');
  // Encryption
  var bcrypt = require('bcrypt');
  // Encryption key setup phase iterations
  var SALT_WORK_FACTOR = 10;

  // For sequencing user.id for pagination
  var settingSchema = new mongoose.Schema({
    collectionName: {type: String, required: true, trim: true, default: 'users'},
    nextSeqNumber:  {type: Number, default:  1}
  });

  // Define schema (blueprint) for the model
  var userSchema = new mongoose.Schema({
    id:          {type: Number,  unique:   true},
    first_name:  {type: String,  trim:     true},
    last_name:   {type: String,  trim:     true},
    email:       {type: String,  trim:     true,  unique: true},
    address:     {type: String,  trim:     true},
    city:        {type: String,  trim:     true},
    state:       {
      id:           {type: Number},
      abbreviation: {type: String},
      name:         {type: String}
    },
    password:    {type: String,  trim:     true},
    user_name:   {type: String,  trim:     true,  unique:   true},
    user_level:  {type: Number,  default:  1},
    zip:         {type: Number},
    created_at:  {type: Date,    default:  Date.now},
    updated_at:  {type: Date,    default:  Date.now}
  });

  // Validations
  userSchema.plugin(uniqueValidator, {message: 'Already registered'});
  userSchema.path('user_name').required(true, 'Username required');
  userSchema.path('email').required(true, 'Email address required');
  userSchema.path('password').required(true, 'Password required');

  // Schema methods
  userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
      if(err){
        console.log('\nuser.js.comparePassword err:', err);
        return callback(err);
      } else {
        // console.log('\nuser.js.comparePassword isMatch:', isMatch);
        callback(null, isMatch);
      }
    });
  };

  // Schema level
  userSchema.index({id: 1, type: 1});
  var Settings = mongoose.model('settings', settingSchema);

  // Ensure this is the last pre-save middleware (just in case)
  // Ensure password is encrypted before save
  userSchema.pre('save', function(next){
    // console.log('.............pre.save..................');
    var user = this;
    // Calculate the next id on new User only.
    if(user.isNew){
      Settings.findOneAndUpdate({collectionName: 'users'},
        {$inc: {nextSeqNumber: 1}}, function(err, settings){
          if(err){
            next(err);
          } else {
            // Substract 1 to get the current sequence number, not the next
            user.id = settings.nextSeqNumber - 1;
            // console.log('users.js............user', user);
            // next();
          }
      });
    }
    // Only hash password if modified or new
    if(!user.isModified('password')){
      return next();
    }
    // Generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
      if(err){
        return next(err);
      }
      // Hash password along with new salt
      bcrypt.hash(user.password, salt, function(err, hash){
        if(err){
          return next(err);
        }
        // Overwrite cleartext password with hash
        user.password = hash;
        // console.log('users.js..password encrypted..........user', user);
        next();
      });
    });
  });

  // Export the model which can then access the database
  module.exports = mongoose.model('User', userSchema);
})();

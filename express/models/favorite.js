(function(){
  'use strict';

  var mongoose = require('mongoose');

  var favoriteSchema = new mongoose.Schema({
    id: {type: Number},
    languages: {
      javascript: {type: Number},
      ruby:       {type: Number},
      php:        {type: Number}
    },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
  });

  favoriteSchema.pre('save', function(next){
    // console.log('.............pre.save..................');
    var favorite = this;
    favorite.updated_at = new Date();
    // console.log('favorite.js............favorite:', favorite);
    next();
  });

  module.exports = mongoose.model('Favorite', favoriteSchema);
})();

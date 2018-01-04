(function(){
  'use strict';

  var Favorite = require('./../models/favorite');

  exports.index = function(callback){
    Favorite.find({}, function(err, favorites){
      if(err){
        return JSON.stringify(err);
      } else {
        // console.log('\ncontrollers/favorites.js getAll favorites:', favorites);
        callback(favorites[0].languages);
      }
    });
  };

  exports.update = function(vote, callback){
    // console.log('\ncontrollers/favorites.js update vote4:', vote);
    // Using .findOne() & .save() to have validations run during update
      // (instead of .update() or findOneAndUpdate())
    Favorite.findOne({id: 1}, function(err, favorite){
      if(err){
        // console.log('\ncontrollers/favorites.js update findOne: err:\n', err);
        return JSON.stringify(err);
      } else {
        // console.log('\ncontrollers/favorites.js favorite to update', favorite);
        favorite.languages[vote] = favorite.languages[vote] + 1;
        // console.log('\ncontrollers/favorites.js updated fav', favorite);
        favorite.save().then(function(favs){
          callback(favs.languages);
        });
      }
    });
  };
})();

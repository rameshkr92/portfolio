(function(){
  'use strict';

  var mongoose = require('mongoose');

  var stateSchema = new mongoose.Schema({
    id:           {type : Number},
    abbreviation: {type : String},
    name:         {type: String}
  });

  module.exports = mongoose.model('State', stateSchema);
})();

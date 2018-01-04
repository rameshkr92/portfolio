(function(){
  'use strict';

  var mongoose = require('mongoose');

  var tokenSchema = new mongoose.Schema( {
    token:      { type: String},
    user:       { type: String},
    user_level: { type: Number,  default: 1},
    created_at: { type: Date,    default: Date.now},
    updated_at: { type: Date,    default: Date.now}
  });

  module.exports = mongoose.model('Token', tokenSchema);
})();

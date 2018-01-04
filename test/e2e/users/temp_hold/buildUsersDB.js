(function(){
  'use strict';

  // Can add more users/addresses if desired.
  module.exports = function(){
    this.users = [
      {first_name: 'First' , last_name: 'First' , email: 'first@first.com'  }
    ];
    this.addresses = [
      {address: '435 Main St.', city: 'Seattle' , state: {id: 47, abbreviation: 'WA', name: 'Washington'}, zip: 98103}
    ];
  };
})();

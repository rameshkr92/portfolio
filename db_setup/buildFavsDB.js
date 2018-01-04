(function(){
  'use strict';
// To seed favorites data into MongoDB
  // Ensure MongoDB daemon is running (`mongod`).
  // Open terminal and change directory to where this file is stored.
  // Start MongoDB shell (`mongo`).
  // Enter the following in mongo shell:
    // use `YOUR_DB_NAME` (user_management_dev)
    // load('buildFavsDB.js');

  var date = Date.now();

  db.favorites.remove({});

  db.favorites.insert({
    id: 1,
    languages: {javascript: 1, ruby: 1, php: 1},
    created_at: date,
    updated_at: date
  });
})();

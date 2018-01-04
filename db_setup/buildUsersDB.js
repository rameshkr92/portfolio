(function(){
  'use strict';
// To load users data into MongoDB
  // Ensure MongoDB daemon is running (`mongod`).
  // Open terminal and change directory to where this file is stored.
  // Start MongoDB shell (`mongo`).
  // Enter the following in mongo shell:
    // use `YOUR_DB_NAME`
    // load('buildUsersDB.js');

  var users = [
    {first_name: 'James'     , last_name: 'Brown'     , email: 'james.brown@mock.com'},
    {first_name: 'Nancy'     , last_name: 'Jones'     , email: 'nancy.jones@mock.com'},
    {first_name: 'Kyle'      , last_name: 'Smith'     , email: 'kyle.smith@mock.com'},
    {first_name: 'Bobbie'    , last_name: 'White'     , email: 'bobbie.white@mock.com'},
    {first_name: 'Trip'      , last_name: 'Stewart'   , email: 'james.stewart@mock.com'},
    {first_name: 'Suzie'     , last_name: 'Johnson'   , email: 'suzie.johnson@mock.com'},
    {first_name: 'Abigail'   , last_name: 'Brown'     , email: 'abigail.brown@mock.com'},
    {first_name: 'Diana'     , last_name: 'Henderson' , email: 'diana.henderson@mock.com'},
    {first_name: 'Tommy'     , last_name: 'Dyer'      , email: 'kyle.dyer@mock.com'},
    {first_name: 'David'     , last_name: 'White'     , email: 'david.white@mock.com'},
    {first_name: 'Stewart'   , last_name: 'Ogden'     , email: 'stewart.ogden@mock.com'},
    {first_name: 'Irene'     , last_name: 'Welch'     , email: 'irene.welch@mock.com'},
    {first_name: 'Jimmy'     , last_name: 'Sharp'     , email: 'jimmy.sharp@mock.com'},
    {first_name: 'Donny'     , last_name: 'Arnold'    , email: 'bobbie.arnold@mock.com'},
    {first_name: 'Jane'      , last_name: 'Pullman'   , email: 'jane.pullman@mock.com'},
    {first_name: 'Dave'      , last_name: 'Brewer'    , email: 'dave.brewer@mock.com'},
    {first_name: 'Emily'     , last_name: 'Russell'   , email: 'emily.russell@mock.com'},
    {first_name: 'Diane'     , last_name: 'Greene'    , email: 'diane.greene@mock.com'},
    {first_name: 'Elizabeth' , last_name: 'Bower'     , email: 'elizabeth.bower@mock.com'},
    {first_name: 'Yvonne'    , last_name: 'Roberts'   , email: 'yvonne.roberts@mock.com'},
    {first_name: 'Jenny'     , last_name: 'Wright'    , email: 'jenny.wright@mock.com'},
    {first_name: 'Kylie'     , last_name: 'Bell'      , email: 'kylie.bell@mock.com'},
    {first_name: 'Donna'     , last_name: 'Churchill' , email: 'donna.churchill@mock.com'},
    {first_name: 'Boris'     , last_name: 'Lee'       , email: 'boris.lee@mock.com'},
    {first_name: 'Megan'     , last_name: 'Walker'    , email: 'megan.walker@mock.com'},
    {first_name: 'Joan'      , last_name: 'Bailey'    , email: 'joan.bailey@mock.com'},
    {first_name: 'Blue'      , last_name: 'Meyers'    , email: 'blue.meyers@mock.com'},
    {first_name: 'Alexander' , last_name: 'Ellison'   , email: 'alexander.ellison@mock.com'},
    {first_name: 'Dominic'   , last_name: 'Fraser'    , email: 'dominic.fraser@mock.com'},
    {first_name: 'Thomas'    , last_name: 'Walker'    , email: 'thomas.walker@mock.com'},
    {first_name: 'Stewie'    , last_name: 'Hemmings'  , email: 'stewie.hemmings@mock.com'},
    {first_name: 'Maria'     , last_name: 'Oliver'    , email: 'maria.oliver@mock.com'},
    {first_name: 'Pippa'     , last_name: 'Walker'    , email: 'pippa.walker@mock.com'}
  ];

  var addresses = [
    {address: '123 Every St.'   , city: 'Encinitas'    , state: {id: 6  , abbreviation: 'CA' , name: 'California'     } , zip: 92023},
    {address: '435 Main St.'    , city: 'Seattle'      , state: {id: 47 , abbreviation: 'WA' , name: 'Washington'     } , zip: 98103},
    {address: '1 Thomas Dr.'    , city: 'Chandler'     , state: {id: 3  , abbreviation: 'AZ' , name: 'Arizona'        } , zip: 85224},
    {address: '85 Redwood Dr.'  , city: 'Dallas'       , state: {id: 43 , abbreviation: 'TX' , name: 'Texas'          } , zip: 75201},
    {address: '23 Ocean Dr.'    , city: 'Orlando'      , state: {id: 9  , abbreviation: 'FL' , name: 'Florida'        } , zip: 32801},
    {address: '1023 Happy Dr.'  , city: 'Charlotte'    , state: {id: 33 , abbreviation: 'NC' , name: 'North Carolina' } , zip: 28201},
    {address: '12 Anywhere St.' , city: 'Encinitas'    , state: {id: 6  , abbreviation: 'CA' , name: 'California'     } , zip: 92023},
    {address: '435 Main St.'    , city: 'Seattle'      , state: {id: 47 , abbreviation: 'WA' , name: 'Washington'     } , zip: 98103},
    {address: '1 Atomic St.'    , city: 'Chandler'     , state: {id: 3  , abbreviation: 'AZ' , name: 'Arizona'        } , zip: 85224},
    {address: '85 Cedar Dr.'    , city: 'Dallas'       , state: {id: 43 , abbreviation: 'TX' , name: 'Texas'          } , zip: 75201},
    {address: '12 Ocean Dr.'    , city: 'Orlando'      , state: {id: 9  , abbreviation: 'FL' , name: 'Florida'        } , zip: 32801},
    {address: '1600 Jones Dr.'  , city: 'Carey'        , state: {id: 33 , abbreviation: 'NC' , name: 'North Carolina' } , zip: 27511},
    {address: '42 Rock Rd.'     , city: 'Medford'      , state: {id: 37 , abbreviation: 'OR' , name: 'Oregon'         } , zip: 97806},
    {address: '1604 Jones Dr.'  , city: 'Anaheim'      , state: {id: 5  , abbreviation: 'CA' , name: 'California'     } , zip: 92801},
    {address: '1607 Jones Dr.'  , city: 'Dallas'       , state: {id: 43 , abbreviation: 'TX' , name: 'Texas'          } , zip: 75201},
    {address: '346 Cedar Ave.'  , city: 'New York'     , state: {id: 32 , abbreviation: 'NY' , name: 'New York'       } , zip: 10001},
    {address: '4576 Main St.'   , city: 'White Plains' , state: {id: 32 , abbreviation: 'NY' , name: 'New York'       } , zip: 10601},
    {address: '964 Point St.'   , city: 'Las Vegas'    , state: {id: 28 , abbreviation: 'NV' , name: 'Nevada'         } , zip: 89044},
    {address: '8756 Center St.' , city: 'Los Angeles'  , state: {id: 5  , abbreviation: 'CA' , name: 'California'     } , zip: 90001},
    {address: '1604 Smith Dr.'  , city: 'Fresno'       , state: {id: 5  , abbreviation: 'CA' , name: 'California'     } , zip: 92801},
    {address: '3 Richmond Dr.'  , city: 'Portland'     , state: {id: 37 , abbreviation: 'OR' , name: 'Oregon'         } , zip: 97806},
    {address: '23 Angular Way'  , city: 'Seattle'      , state: {id: 47 , abbreviation: 'WA' , name: 'Washington'     } , zip: 98103},
    {address: '6 Directive Pl.' , city: 'Houston'      , state: {id: 43 , abbreviation: 'TX' , name: 'Texas'          } , zip: 77001},
    {address: '23235 Yaz Blvd.' , city: 'Chicago'      , state: {id: 13 , abbreviation: 'IL' , name: 'Illinois'       } , zip: 60290},
    {address: '75 Crescent St.' , city: 'Atlanta'      , state: {id: 10 , abbreviation: 'GA' , name: 'Georgia'        } , zip: 30301},
    {address: '76543 Moon Ave.' , city: 'Chandler'     , state: {id: 3  , abbreviation: 'AZ' , name: 'Arizona'        } , zip: 85224},
    {address: '83 Hardrock St.' , city: 'Buffalo'      , state: {id: 32 , abbreviation: 'NY' , name: 'New York'       } , zip: 14201},
    {address: '4 Jefferson Way' , city: 'Albuquerque'  , state: {id: 31 , abbreviation: 'NM' , name: 'New Mexico'     } , zip: 87101},
    {address: '346346 Blue Pl.' , city: 'Boise'        , state: {id: 12 , abbreviation: 'ID' , name: 'Idaho'          } , zip: 83701},
    {address: '23423 Adams St.' , city: 'Provo'        , state: {id: 44 , abbreviation: 'UT' , name: 'Utah'           } , zip: 84601},
    {address: '633 Main St.'    , city: 'Phoenix'      , state: {id: 3  , abbreviation: 'AZ' , name: 'Arizona'        } , zip: 85001},
    {address: '123 Blueberry'   , city: 'Columbia'     , state: {id: 25 , abbreviation: 'MO' , name: 'Missouri'       } , zip: 65201},
    {address: '190 Jones St.'   , city: 'Bend'         , state: {id: 37 , abbreviation: 'OR' , name: 'Oregon'         } , zip: 97701}
  ];

  // Clear all data from DBs
  db.users.remove({});
  db.tokens.remove({});
  db.settings.remove({});

  var len = users.length;
  var record = null;

  for(var i = 0; i < len; i++){
    var date = Date.now();

    var uname = users[i].first_name.toLowerCase();
    record = {
      id: i + 1,
      first_name: users[i].first_name,
      last_name: users[i].last_name,
      email: users[i].email,
      address: addresses[i].address,
      city: addresses[i].city,
      state: {
        id: addresses[i].state.id,
        abbreviation: addresses[i].state.abbreviation,
        name: addresses[i].state.name
      },
      password: '',
      user_name: uname,
      zip: addresses[i].zip,
      created_at: date,
      updated_at: date
    };
    db.users.insert(record);
  }

  // Settings
  var r = {nextSeqNumber: users.length + 2, collectionName: 'users'};
  db.settings.insert(r);
})();

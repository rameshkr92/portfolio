(function(){
  'use strict';

  module.exports = function(io){
    var FavoritesController = require('./../../express/controllers/favorites');

    io.sockets.on('connection', function(socket){
      // console.log('A new user connected!', socket);
      // console.log('\n\nA new user connected!\n\n');
      socket.on('myVote', function(vote){
        // console.log('\nsocket.js msg from client:myVote:', vote, '\n');
        FavoritesController.update(vote, function(updated){
          // Broadcast updated count to all connected sockets
          io.emit('updateCount', setFavorites(updated));
        });
      });
      socket.on('disconnect', function(){
        console.log('\n\nuser disconnected!\n\n');
      });
      socket.on('initialConnection', function(data){
        // console.log('\n\nInitialConnection msg received from client:', data);
        FavoritesController.index(function(favorites){
          // console.log('\nsocket.js get all favorites, favorites:', favorites);
          socket.emit('initialConnection', setFavorites(favorites));
        });
      });
    });

    // Private functions
    function setFavorites(data){
      // console.log('\nsocket.js setFavorites data:', data);
      return [
        ['PHP', data.php],
        ['Ruby', data.ruby],
        ['JavaScript', data.javascript]
      ];
    }
  };
})();

(function(){
  'use strict';

  angular.module('AppPortfolio')
    .factory('UsersFactory', ['$http', function($http){
      var factory = {};
      var base = '/api/users/';

      factory.getAll = function(){
        // console.log('UsersFactory.getAll');
        return $http.get(base)
          .then(function(data){
            data.success = true;
            // console.log('UsersFactory.getAll successHandler(data)', data);
            return data;
          }, function(err){
            // console.log('UsersFactory.getAll errorHandler(err)', err);
            return {success: false, message: 'Error retrieving all users.'};
          });
      };

      factory.getSubset = function(pageIndex, pageSize){
        // console.log('UsersFactory.getSubset pageIndex', pageIndex, 'pageSize', pageSize);
        return $http.get(base + 'subset/?$limit=' + pageSize + '&$skip=' +
          (pageIndex * pageSize))
            .then(function(data){
              data.success = true;
              // console.log('UsersFactory.getSubset successHandler(data)', data);
              return data;
            }, function(err){
              // console.log('UsersFactory.getSubset errorHandler(err)', err);
              return {success: false, message: 'Error retrieving users ' +
                'summary.'};
            });
      };

      factory.getById = function(id){
        // console.log('UsersFactory.getById', id);
        return $http.get(base + id)
          .then(function(data){
            data.success = true;
            // console.log('UsersFactory.getById successHandler(data)', data);
            return data;
          }, function(err){
            // console.log('UsersFactory.getById errorHandler(err)', err);
            return {success: false, message: 'Error retrieving user by id.'};
          });
      };

      factory.getByEmail = function(email){
        // console.log('UsersFactory.getByEmail', email);
        return $http.get('/api/email/' + email)
          .then(function(data){
            data.success = true;
            // console.log('UsersFactory.getByEmail successHandler(data)', data);
            return data;
          }, function(err){
            // console.log('UsersFactory.getByEmail errorHandler(err)', err);
            return {success: false, message: 'Error retrieving user by email.'};
          });
      };

      factory.create = function(user){
        // For database continuity
        user.email = user.email.toLowerCase();
        // console.log('UsersFactory.create', user);
        return $http.post(base + 'new', user)
          .then(function(data){
            data.success = true;
            // console.log('UsersFactory.create successHandler(data)', data);
            return data;
          }, function(err){
            // console.log('UsersFactory.create errorHandler(err)', err);
            return {success: false, message: 'Error registering user.'};
          });
      };

      factory.update = function(user, currentPasswd){
        user.updated_at = Date.now();
        // console.log('UsersFactory.update', user);
        if(currentPasswd){
          return $http.put(base + user._id, {user: user,
            currPass: currentPasswd})
              .then(function(data){
                data.success = true;
                // console.log('UsersFactory.updatePWD successHandler(data)', data);
                return data;
              }, function(err){
                  // console.log('UsersFactory.updatePWD err', err.data.message);
                  return err.data;
                });
        } else {
          return $http.put(base + user._id, {user: user})
            .then(function(data){
              data.success = true;
              // console.log('UsersFactory.update successHandler(data)', data);
              return data;
            }, function(err){
              // console.log('UsersFactory.update errorHandler(err)', err);
              return {success: false, message: 'Error updating user.'};
            });
        }
      };

      factory.delete = function(id){
        // console.log('UsersFactory.delete', id);
        return $http.delete(base + id)
          .then(function(data){
            data.success = true;
            // console.log('UsersFactory.delete successHandler(data)', data);
            return data;
          }, function(err){
            // console.log('UsersFactory.delete errorHandler(err)', err);
            return {success: false, message: 'Error deleting user.'};
          });
      };

      factory.checkUserLevel = function(id){
        // console.log('UsersFactory.checkUserLevel id:', id);
        return $http.get('/api/verify/' + id)
          .then(function(data){
            // console.log('UsersFactory.checkUserLevel data:', data);
            return data.data;
          });
      };

      factory.getStates = function(){
        // console.log('UsersFactory.getStates');
        return $http.get('/api/states')
          .then(function(data){
            data.success = true;
            // console.log('UsersFactory.getStates successHandler(data)', data);
            return data;
          }, function(err){
            // console.log('UsersFactory.getStates errorHandler(err)', err);
            return {success: false, message: 'Error retrieving states.'};
          });
      };

      factory.checkUnique = function(id, property, value){
        // console.log('UsersFactory.checkUnique id', id);
        if(!id){
          id = 0;
        }

        return $http.get('/api/checkUnique/' + id + '?property=' + property +
          '&value=' + escape(value))
            .then(function(data){
              // console.log('UsersFactory.checkUnique data', data.data.status);
              return data.data.status;
            }, function(err){
              // console.log('UsersFactory.checkUnique errorHandler(err)', err);
              return {success: false, message: 'Error checking unique.'};
            });
      };

      return factory;
    }]);
})();

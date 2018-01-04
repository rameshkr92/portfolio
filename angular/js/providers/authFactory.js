(function(){
  'use strict';

  angular.module('AppPortfolio')
    .factory('AuthFactory', ['$http', '$rootScope', '$timeout', '$window',
      function($http, $rootScope, $timeout, $window){
        var factory = {};
        var base = '/api/authenticate/';
        var wls = $window.localStorage;

        // Keep user logged in after page refresh
        var local = JSON.parse(wls.getItem('client')) ||
          {user: {isAuthenticated: false}};
        // console.log('AuthFactory local', local);
        if(local.user.isAuthenticated){
          // Set the factory.user object to logged in user
          factory.user = local.user;
        } else {
          // Initialize factory.user
          initializeUser();
        }

        factory.clearCredentials = function(){
          // console.log('\nAuthFactory - clearCredentials jwtToken:', wls.getItem('jwtToken'));
          var id = wls.getItem('jwtToken');

          if(id){
            // Remove token/client from localStorage
            return $http.delete(base + id)
              .then(function(results){
                local = null;
                wls.removeItem('jwtToken');
                wls.removeItem('client');
                changeAuthentication(false);
                initializeUser();
                return results;
              });
          }
        };

        factory.getMyId = function(){
          return factory.user.data.id;
        };

        factory.login = function(email, password){
          // console.log('AuthFactory.login email:', email, '| password:', password);
          var loggedIn = null;
          var usr = null;
          var token = null;

          return $http.post(base, {userLogin: {email: email, password: password,
            login: true}})
              .then(function(response){
                // console.log('\nAuthFactory.login success response', response);
                loggedIn = response.data.status;
                usr = response.data.user;
                token = response.data.token;

                factory.user.data.id = usr._id;
                factory.user.data.email = usr.email;
                factory.user.data.first_name = usr.first_name;
                factory.user.data.last_name = usr.last_name;
                factory.user.data.user_name = usr.user_name;
                factory.user.data.full_name = factory.user.data.first_name +
                  ' ' + factory.user.data.last_name;

                // console.log('\nAuthFactory.login success user:', factory.user);
                changeAuthentication(loggedIn);
                setCredentials(token);

                return response;
              },
              function(errors){
                console.log('\n*******  LOGIN ERROR   *******');
                errors.message = 'Incorrect username / password combination!';
                errors.success = false;
                console.log('login errors', errors);

                return errors;
              });
        };

        factory.redirectToLogin = function(){
          // console.log('AuthFactory.redirectToLogin');
          // Timeout to delay long enough for navbar to be ready for redirect.
          $timeout(function(){
            $rootScope.$broadcast('redirectToLogin', null);
          }, 150);
        };

        factory.verifyToken = function(user, token){
          // console.log('\nAuthFactory - verifyToken:', user);
          // console.log('\nAuthFactory - verifyToken:', token);
          return $http.get(base + '?token=' + token + '&user=' + user)
            .then(function(results){
              // console.log('AuthFactory.verifyToken() results', results);
              return results.data.status;
            });
        };

        // Private functions
        function initializeUser(){
          factory.user = {
            data: {
              id: null,
              email: null,
              first_name: null,
              full_name: null,
              last_name: null,
              user_name: null,
              roles: null
            },
            isAuthenticated: false
          };
        }
        function setCredentials(token){
          local = {user: factory.user};
          wls.setItem('jwtToken', token);
          wls.setItem('client', JSON.stringify(local));
          // console.log('AuthFactory.setCredentials localStorage:', wls);
        }
        function changeAuthentication(loggedIn){
          // console.log('AuthFactory.changeAuthentication loggedIn:', loggedIn);
          factory.user.isAuthenticated = loggedIn;
          $rootScope.$broadcast('loginStatusChanged', loggedIn);
        }

        return factory;
      }
    ]);
})();

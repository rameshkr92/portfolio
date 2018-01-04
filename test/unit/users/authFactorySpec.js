(function(){
  'use strict';

  describe('UsersDashboardApp - Factory: AuthFactory', function(){
    var $httpBackend, $rootScope, $timeout, $window, AuthFactory, Mock;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$httpBackend_, _$rootScope_, _$timeout_, _$window_,
        _MockUserObjFactory_, _AuthFactory_){
          $httpBackend = _$httpBackend_;
          $rootScope = _$rootScope_;
          $timeout = _$timeout_;
          $window = _$window_;
          Mock = _MockUserObjFactory_;
          AuthFactory = _AuthFactory_;
        });

      spyOn($rootScope, '$broadcast').and.callThrough();
      spyOn(AuthFactory, 'verifyToken').and.callThrough();
    });

    // Cleanup any missed expectations.
    afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('.user object', function(){
      it('should be defined.', function(){
        // console.log('AuthFactory.user', AuthFactory.user);
        expect(AuthFactory.user).toBeDefined();
      });
      it('should have the correct keys.', function(){
        expect(AuthFactory.user.data).toBeDefined();
        expect(AuthFactory.user.data.id).toBeDefined();
        expect(AuthFactory.user.data.email).toBeDefined();
        expect(AuthFactory.user.data.first_name).toBeDefined();
        expect(AuthFactory.user.data.full_name).toBeDefined();
        expect(AuthFactory.user.data.last_name).toBeDefined();
        expect(AuthFactory.user.data.roles).toBeDefined();
        expect(AuthFactory.user.isAuthenticated).toBeDefined();
      });
      it('should have the correct key defaults.', function(){
        Mock.localStorageLoggedIn.user.isAuthenticated = false;
        expect(AuthFactory.user.data.email).toBeNull();
        expect(AuthFactory.user.data.id).toBeNull();
        expect(AuthFactory.user.data.first_name).toBeNull();
        expect(AuthFactory.user.data.full_name).toBeNull();
        expect(AuthFactory.user.data.last_name).toBeNull();
        expect(AuthFactory.user.data.roles).toBeNull();
        expect(AuthFactory.user.isAuthenticated).toBe(false);
      });
    });

    describe('.login()', function(){
      beforeEach(function(){
        spyOn(AuthFactory, 'login').and.callThrough();

        $httpBackend.when('POST', '/api/authenticate/').respond(200, Mock.loginResponse);

        // Execute login
        AuthFactory.login(Mock.submitEmail, Mock.submitPasswd)
          .then(function(response){
              // console.log('\nmock AuthFactory.login success response', response);
              expect(response.data).toEqual(Mock.loginResponse);
          });

        $httpBackend.flush();
      });

      it('function should be defined.', function(){
        expect(angular.isFunction(AuthFactory.login)).toBe(true);
      });
      it('should POST login credentials.', function(){
        expect(AuthFactory.login).toHaveBeenCalled();
      });
      it('should populate the factory.user object.', function(){
        expect(AuthFactory.user.data).toEqual(Mock.localStorageLoggedIn.user.data);
      });
      it('should populate localStorage with authentication token.', function(){
        // console.log('$window.localStorage', $window.localStorage);
        expect($window.localStorage.jwtToken).toBeDefined();
        expect($window.localStorage.jwtToken).toBe(Mock.loginResponse.token);
      });
      it('should populate localStorage with required user info.', function(){
        // console.log('client', $window.localStorage.client);
        expect($window.localStorage.client).toBeDefined();
        expect(JSON.parse($window.localStorage.client)).toEqual(Mock.localStorageLoggedIn);
      });
    });

    describe('.redirectToLogin()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(AuthFactory.redirectToLogin)).toBe(true);
      });
      it('should broadcast `redirectToLogin`.', function(){
        AuthFactory.redirectToLogin();
        $timeout(function(){
          expect($rootScope.$broadcast).toHaveBeenCalledWith('redirectToLogin', null);
        }, 250);
        $timeout.flush();
      });
    });

    describe('.verifyToken()', function(){
      it('should be defined.', function(){
        expect(angular.isFunction(AuthFactory.verifyToken)).toBe(true);
      });
      // TODO: unit test .run() block in app.js
      // This is called from app.js .run to protect secure routes. If this
      // returns false it calls AuthFactory.redirectToLogin
      it('should validate token with DB and get success response.', function(){
        $httpBackend.when('GET', '/api/authenticate/?token=' + Mock.loginResponse.token + '&user=' + Mock.loginResponse.user)
          .respond(200, {status: true}, {statusText: 'OK'});
        AuthFactory.verifyToken(Mock.loginResponse.user, Mock.loginResponse.token);
        expect(AuthFactory.verifyToken).toHaveBeenCalled();
        $httpBackend.flush();
      });
    });

    describe('.clearCredentials()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(AuthFactory.clearCredentials)).toBe(true);
      });
      it('should reset the factory.user object.', function(){
        $httpBackend.when('DELETE', '/api/authenticate/' + Mock.loginResponse.token)
          .respond(200, {status: true});
        AuthFactory.clearCredentials();
        $httpBackend.flush();
        expect(AuthFactory.user).toBeDefined();
        expect(AuthFactory.user.data.email).toBeNull();
        expect(AuthFactory.user.data.first_name).toBeNull();
        expect(AuthFactory.user.data.full_name).toBeNull();
        expect(AuthFactory.user.data.last_name).toBeNull();
        expect(AuthFactory.user.data.roles).toBeNull();
        expect(AuthFactory.user.isAuthenticated).toBe(false);
      });
      it('should clear localStorage token.', function(){
        expect($window.localStorage.token).not.toBeDefined();
      });
      it('should clear localStorage user.', function(){
        expect($window.localStorage.client).not.toBeDefined();
      });
    });
  });
})();

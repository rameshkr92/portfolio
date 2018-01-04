(function(){
  'use strict';

  describe('UsersDashboardApp - Factory: UsersFactory', function() {
    var $httpBackend, Mock, UsersFactory, usr, users;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$httpBackend_, _MockUserObjFactory_, _UsersFactory_){
        $httpBackend = _$httpBackend_;
        Mock = _MockUserObjFactory_;
        UsersFactory = _UsersFactory_;
      });

      spyOn(UsersFactory, 'create').and.callThrough();
      spyOn(UsersFactory, 'update').and.callThrough();
      spyOn(UsersFactory, 'delete').and.callThrough();
      spyOn(UsersFactory, 'getStates').and.callThrough();
      spyOn(UsersFactory, 'checkUnique').and.callThrough();
    });

    // Cleanup any missed expectations.
    afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('.create()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(UsersFactory.create)).toBe(true);
      });
      it('should resolve POST request with mocked response when valid input is used.',
        function(){
          // Make the simulated HTTP request
          $httpBackend.when('POST', '/api/users/new').respond(201, Mock.user);
          // Getting a promise from the $http request, using .then to verify success.
          UsersFactory.create(Mock.user)
            .then(function(result){
              expect(result.data).toEqual(Mock.user);
            });
          $httpBackend.flush();
          expect(UsersFactory.create).toHaveBeenCalledWith(Mock.user);
      });
      it('should resolve POST request with mocked failure response when invalid input is used.',
        function(){
          $httpBackend.when('POST', '/api/users/new').respond(300);
          UsersFactory.create(Mock.invalidUser)
            .then(function(result){
              expect(result.success).toBe(false);
            });
          $httpBackend.flush();
          expect(UsersFactory.create).toHaveBeenCalledWith(Mock.invalidUser);
      });
    });

    describe('.getAll()', function(){
      it('should be defined.', function(){
        expect(angular.isFunction(UsersFactory.getAll)).toBe(true);
      });
      it('should resolve GET request with mocked reponse.', function(){
        $httpBackend.when('GET', '/api/users/').respond(Mock.getAllResponse);
        UsersFactory.getAll()
          .then(function(result){
            users = result.data;
          });
        $httpBackend.flush();
        // console.log('Post flush() - users', users);
        expect(users).toEqual(Mock.getAllResponse);
      });
      it('should reject GET request and respond with error.', function(){
        $httpBackend.when('GET', '/api/users/').respond(401);
        UsersFactory.getAll()
          .then(function(result){
            expect(result.success).toBe(false);
          });
        $httpBackend.flush();
      });
    });

    describe('.getSubset()', function(){
      it('should be defined.', function(){
        expect(angular.isFunction(UsersFactory.getSubset)).toBe(true);
      });
      it('should resolve GET request with mocked reponse.', function(){
        $httpBackend.when('GET', '/api/users/' + 'subset/?$limit=9&$skip=9')
          .respond(Mock.getAllResponse);
        UsersFactory.getSubset(1, 9)
          .then(function(result){
            users = result.data;
          });
        $httpBackend.flush();
        // console.log('Post flush() - users', users);
        expect(users).toEqual(Mock.getAllResponse);
      });
    });

    describe('.getById()', function(){
      it('should be defined.', function(){
        expect(angular.isFunction(UsersFactory.getById)).toBe(true);
      });
      it('should resolve GET request with mocked reponse.', function(){
        $httpBackend.when('GET', '/api/users/1').respond(Mock.user);
        UsersFactory.getById(1)
          .then(function(result){
            usr = result.data;
          });
        $httpBackend.flush();
        // console.log('Post flush() - usr', usr);
        expect(usr).toEqual(Mock.user);
      });
    });

    describe('.getByEmail()', function(){
      it('should be defined.', function(){
        expect(angular.isFunction(UsersFactory.getByEmail)).toBe(true);
      });
      it('should resolve GET request with mocked reponse.', function(){
        $httpBackend.when('GET', '/api/email/' + Mock.user.email).respond(Mock.user);
        UsersFactory.getByEmail(Mock.user.email)
          .then(function(result){
            usr = result.data;
          });
        $httpBackend.flush();
        // console.log('Post flush() - usr', usr);
        expect(usr).toEqual(Mock.user);
      });
    });

    describe('.update()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(UsersFactory.update)).toBe(true);
      });
      it('should resolve PUT request with mocked response.', function(){
        // $httpBackend.when('PUT', '/api/users/' + Mock.updateUser._id, Mock.updateUser)
        $httpBackend.when('PUT', '/api/users/' + Mock.updateUser._id)
          .respond(201, Mock.updateUser);
        UsersFactory.update(Mock.updateUser)
          .then(function(result){
            expect(result.data).toEqual(Mock.updateUser);
          });
        $httpBackend.flush();
        expect(UsersFactory.update).toHaveBeenCalledWith(Mock.updateUser);
      });
      it('should resolve PUT request with mocked response when updating password.', function(){
        $httpBackend.when('PUT', '/api/users/' + Mock.updateUser._id)
          .respond(201, Mock.updateUser);
        UsersFactory.update(Mock.updateUser, true)
          .then(function(result){
            expect(result.data).toEqual(Mock.updateUser);
          });
        $httpBackend.flush();
        expect(UsersFactory.update).toHaveBeenCalledWith(Mock.updateUser, true);
      });
    });

    describe('.delete()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(UsersFactory.delete)).toBe(true);
      });
      it('should resolve DELETE request with mocked response.', function(){
        $httpBackend.when('DELETE', '/api/users/' + Mock.updateUser._id)
          .respond(Mock.deleteResponse);
          UsersFactory.delete(Mock.updateUser._id)
            .then(function(result){
              // console.log('delete response data', data);
              expect(result.data).toEqual(Mock.deleteResponse);
            });
          $httpBackend.flush();
      });
    });

    describe('.getStates()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(UsersFactory.getStates)).toBe(true);
      });
      it('should resolve GET request with mocked success response.', function(){
        $httpBackend.when('GET', '/api/states').respond(Mock.getStatesResponse);
        UsersFactory.getStates()
          .then(function(result){
            expect(result.data).toEqual(Mock.getStatesResponse);
          });
        $httpBackend.flush();
      });
    });

    describe('.checkUnique()', function(){
      it('function should be defined.', function(){
        expect(angular.isFunction(UsersFactory.checkUnique)).toBe(true);
      });
      it('should resolve GET request with mocked success response.', function(){
        $httpBackend.when('GET', '/api/checkUnique/' + Mock.chkUnique._id + '?property=' +
           Mock.chkUnique.property + '&value=' + Mock.chkUnique.value).respond({status: true});
        UsersFactory.checkUnique(Mock.chkUnique._id, Mock.chkUnique.property, Mock.chkUnique.value)
          .then(function(result){
            // console.log('checkUnique response data', data);
            expect(result).toBe(true);
          });
        $httpBackend.flush();
      });
      it('should resolve GET request with mocked failure response.', function(){
        $httpBackend.when('GET', '/api/checkUnique/' + Mock.chkUnique._id + '?property=' +
           Mock.chkUnique.property + '&value=' + Mock.chkUnique.value).respond({status: false});
        UsersFactory.checkUnique(Mock.chkUnique._id, Mock.chkUnique.property, Mock.chkUnique.value)
          .then(function(result){
            // console.log('checkUnique response data', data);
            expect(result).toBe(false);
          });
        $httpBackend.flush();
      });
    });
  });
})();

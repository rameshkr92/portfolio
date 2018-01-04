(function(){
  'use strict';

  angular.module('pcApp')
    .factory('MockUserObjFactory', function(){
      var factory = {};

      var users = [
        {_id: 1, first_name: 'First', last_name: 'Alpha', user_name: 'FiRsT',
        email: 'mock@mock.com', address: '123 Main', city: 'Anytown',
        state: {abbreviation: "MO", id: 25, name: "Missouri"}, zip: 67890,
        password: 'password', created_at: '1999-12-31'},
        {_id: 2, first_name: 'Second', last_name: 'User', user_name: 'second',
        email: 'secondmock@mock.com', address: '456 Low Drive', city: 'Anytown',
        state: {abbreviation: "CA", id: 5, name: "California"}, zip: 98765,
        password: 'password', created_at: '1999-12-31'},
        {_id: 3, first_name: 'MockUserObjFactoryUpdate', last_name: 'User', user_name: 'MoCkUsEr',
        email: 'mock@mock.com', address: '12345 Main', city: 'Anytown',
        state: {abbreviation: "FL", id: 9, name: "Florida"}, zip: 23456,
        password: 'password', created_at: '1999-12-31'},
        {_id: 4, first_name: 'MockUserObjFactoryEdit', last_name: 'U', user_name: 'MockUserObjFactoryedUser',
        email: 'mockEDIT@mock.com', address: '345 Blue St.', city: 'Mytown',
        state: {abbreviation: "GA", id: 10, name: "Georgia"}, zip: 42323,
        password: 'passwordxxx', created_at: '1999-12-31'},
        {_id: 5, first_name: 'Passwd', last_name: 'Change', user_name: 'passwdChg',
        email: 'mockPWD@mock.com', address: '123 Red Road', city: 'Userstown',
        state: {abbreviation: "AL", id: 1, name: "Alabama"}, zip: 23230,
        password: 'password', created_at: '1999-12-31'}
      ];

      factory.users = users;

// authFactorySpec
      factory.loginResponse = {
        status: true,
        token: 'eyJ0eX.eyJ1c3.iMvHOQ',
        user: users[0]
      };
      factory.localStorageLoggedIn = {
        user: {
          data: {
            id: users[0]._id,
            email: users[0].email,
            first_name: users[0].first_name,
            full_name: users[0].first_name + ' ' + users[0].last_name,
            last_name: users[0].last_name,
            user_name: users[0].user_name,
            roles: null},
          isAuthenticated: true
        }
      };
      factory.submitEmail = users[0].email;
      factory.submitPasswd = 'password';

// compareDirectiveSpec
      factory.pass = 'matchingPasswd';
      factory.passNoMatch = 'notMatchingPassword';
      factory.passShort = '12345';

// editCtrlSpec
      factory.editedUser = users[3];

// editDirectiveSpec
      factory.editBtnText = 'Update';
      factory.cancelBtnText = 'Cancel'; // registrationDirectiveSpec, passwordDirectiveSpec
      factory.editFormFor = 'Edit';
      factory.editFormName = 'edit_form';
      factory.editIdName = 'edit';

// flashFactorySpec
      factory.errorMsg = 'This is a error test...';
      factory.successMsg = 'This is a success test...';
      factory.keep = false;

// loginDirectiveSpec
      factory.loginBtnText = 'Login'; // registrationDirectiveSpec
      factory.registerLinkText = 'Register';

// navBarCtrlSpec
      factory.appTitle = 'Pasley Code'; // navBarDirectiveSpec

// navBarDirectiveSpec
      factory.fullName = users[0].first_name + ' ' + users[0].last_name;

// modalServiceSpec
      factory.modalResult = {result: 'The modal result!'};
      factory.modalDefaultsNone = {};
      factory.modalOptions = {
        closeButtonText: 'Cancel',
        actionButtonText: 'Delete User',
        headerText: 'User Name',
        bodyText: 'Are you sure you want to delete this user?'
      };
      factory.modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'partials/users/_modal.html'
      };
      factory.modalDefaultsCtrl = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'partials/users/_modal.html',
        controller: 'UsersController'
      };

// passwordCtrlSpec
      factory.passwdChangeUser = users[4];
      factory.passwdChangeUser.id = users[4]._id;
      factory.passwdCurrent = 'currentPWD';
      factory.passwd = 'password';

// passwordDirectiveSpec
      factory.passwdBtnText = 'Change Password';
      factory.passwdFormFor = 'Change Password';
      factory.passwdFormName = 'password_form';
      factory.passwdIdName = 'passwd_change';

// registerCtrlSpec
      factory.getStatesResponse = {  // userFactorySpec
        data: [
          {abbreviation: 'AL', id: 1, name: 'Alabama'},
          {abbreviation: 'AK', id: 2, name: 'Alaska'}
        ]
      };
      factory.newUser = users[3];

// registerDirectiveSpec
      factory.registerBtnText = 'Register';
      factory.registerFormFor = 'Register';
      factory.registerFormName = 'register_form';
      factory.registerIdName = 'register';

// uniqueDirectiveSpec
      factory.passwdFail = 'willFailTest@mock.com';
      factory.passwdOthr = 'randomPasswd@mock.com';
      factory.passwdPass = 'willPassTest@mock.com';

// usersCtrlSpec
      factory.deleteResponse = {  // userFactorySpec
        data: {n: 1,ok: 1}
      };
      factory.getSubsetResponse = {
        data: {
          users: users,
          count: users.length
        }
      };
      factory.getByIdResponse = {
        data: users[0]
      };
      factory.user = users[0]; // userFactorySpec, passwdControllerSpec

// usersDirectiveSpec
      factory.title = 'Users';

// userFactorySpec
      factory.chkUnique = {
        _id: 1,
        property: 'username',
        value: 'TestUnique'
      };
      factory.invalidUser = {
        user_name: '',
        email: '',
        password: 'password',
      };
      factory.getAllResponse = users;
      factory.updateUser = users[2];

      return factory;
    });
})();

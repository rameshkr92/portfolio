(function(){
  'use strict';

  // NOTE: Using this page to add users to DB, that way the password is
  // encrypted on entry!
  var Credentials = require('./../../../../.credentials');
  var credentials = new Credentials();
  var LoginPage = require('./../../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var RegisterPage = require('./../../page-objects/users/registerPage');
  var registerpage = new RegisterPage();
  var UsersHelper = require('./buildUsersDB');
  var usersHelper = new UsersHelper();
  var len = usersHelper.users.length;
  var passwd = credentials.firstPasswd;

  for(var i = 0; i < len; i++){
    describe('Registration', function(){
      var fname = usersHelper.users[i].first_name;
      var lname = usersHelper.users[i].last_name;
      var userName = usersHelper.users[i].first_name.toLowerCase();
      var email = usersHelper.users[i].email;
      var address = usersHelper.addresses[i].address;
      var city = usersHelper.addresses[i].city;
      var state = usersHelper.addresses[i].state.name;
      var zip = usersHelper.addresses[i].zip;

      it('should successfully register new user.', function(){
        registerpage.get();
        registerpage.clear();

        registerpage.setFirstName(fname);
        registerpage.setLastName(lname);
        registerpage.setUsername(userName);
        registerpage.setEmail(email);
        registerpage.setAddress(address);
        registerpage.setCity(city);
        registerpage.setState(state);
        registerpage.setZip(zip);
        registerpage.setPassword(passwd);
        registerpage.setPasswordConf(passwd);
        registerpage.registerUser();
        browser.getCurrentUrl().then(function(url){
          expect(url).toContain(loginpage.url);
        });

        expect(browser.isElementPresent(by.css('.alert-success'))).toBe(true);
      });
    });
  }
})();

(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();
    var addressInput = element(by.model('user.address'));
    var cityInput = element(by.model('user.city'));
    var emailInput = element(by.model('user.email'));
    var firstNameInput = element(by.model('user.first_name'));
    var lastNameInput = element(by.model('user.last_name'));
    var passwordConfInput = element(by.model('user.password_confirmation'));
    var passwordInput = element(by.model('user.password'));
    var registerButton = element(by.buttonText('Register'));
    var stateInput = element(by.model('user.state'));
    var usernameInput = element(by.model('user.user_name'));
    var zipInput = element(by.model('user.zip'));

    this.clear = function(){
      // firstNameInput.clear();
      // lastNameInput.clear();
      usernameInput.clear();
      emailInput.clear();
      // addressInput.clear();
      cityInput.clear();
      // zipInput.clear();
      // passwordInput.clear();
      // passwordConfInput.clear();
    };
    this.failureUsername = 'first';
    this.failureEmail = 'first@first.com';
    this.get = function(){
      browser.get(this.url);
    };
    this.registerUser = function(){
      registerButton.click();
    };
    this.setAddress = function(address){
      addressInput.sendKeys(address);
    };
    this.setCity = function(city){
      cityInput.sendKeys(city);
    };
    this.setEmail = function(email){
      emailInput.sendKeys(email);
    };
    this.setFirstName = function(name){
      firstNameInput.sendKeys(name);
    };
    this.setLastName = function(name){
      lastNameInput.sendKeys(name);
    };
    this.setPassword = function(passwd){
      passwordInput.sendKeys(passwd);
    };
    this.setPasswordConf = function(passwd){
      passwordConfInput.sendKeys(passwd);
    };
    this.setState = function(state){
      stateInput.sendKeys(state);
    };
    this.setUsername = function(username){
      usernameInput.sendKeys(username);
    };
    this.setZip = function(zip){
      zipInput.sendKeys(zip);
    };
    this.testAddress = '123 Main';
    this.testCity = 'Anytown';
    this.testEmail = 'testuser@testing.com';
    this.testFirstName = 'Test';
    this.testLastName = 'Zeta';
    this.testPassword = 'Password123';
    this.testState = 'North Dakota';
    this.testUsername = 'TestyUser';
    this.testZip = 12345;
    this.url = base.url + 'usersapp#/users/register';
  };
})();

(function(){
  'use strict';

  module.exports = function(){
    var EC = protractor.ExpectedConditions;
    var Base = require('./../base');
    var base = new Base();
    var Credentials = require('./../../../../.credentials');
    var credentials = new Credentials();
    var emailInput = element(by.model('user.email'));
    var passwordInput = element(by.model('user.password'));

    this.badPasswd = 'x';
    this.clear = function(){
      emailInput.clear();
      passwordInput.clear();
    };
    this.email = 'first@first.com'; // NOTE: this user has to be in the DB.
    this.get = function(){
      browser.get(this.url);
    };
    this.loginUser = function(){
      // Moved to delay button find and clickable to wait for about modal to be
      // dismissed. After creation of about modal experienced sporadic error -
      // `element not clickable at point...`
      var loginButton = element(by.buttonText('Login'));
      browser.wait(EC.elementToBeClickable(loginButton, 1000));
      loginButton.click();
    };
    this.passwd = credentials.firstPasswd;
    this.setEmail = function(email){
      emailInput.sendKeys(email);
    };
    this.setPassword = function(password){
      passwordInput.sendKeys(password);
    };
    this.url = base.url + 'usersapp#/users/login';
  };
})();

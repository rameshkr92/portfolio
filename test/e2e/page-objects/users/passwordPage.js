(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();
    var Credentials = require('./../../../../.credentials');
    var credentials = new Credentials();
    var currentPasswdInput = element(by.model('user.current_password'));
    var passwdConfInput = element(by.model('user.password_confirmation'));
    var passwdInput = element(by.model('user.password'));
    var updateButton = element(by.buttonText('Change Password'));

    this.badPasswd = 'notMyPass';
    this.clear = function(){
      currentPasswdInput.clear();
      passwdInput.clear();
      passwdConfInput.clear();
    };
    this.get = function(){
      browser.get(this.url);
    };
    this.newPasswd = 'newPasswd';
    this.passwd = credentials.firstPasswd;
    this.setCurrentPasswd = function(passwd){
      currentPasswdInput.sendKeys(passwd);
    };
    this.setPasswd = function(passwd){
      passwdInput.sendKeys(passwd);
    };
    this.setPasswdConf = function(passwd){
      passwdConfInput.sendKeys(passwd);
    };
    this.updatePasswd = function(){
      updateButton.click();
    };
    this.url = base.url + 'usersapp#/users/password';
  };
})();

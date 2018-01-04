(function(){
  'use strict';

  module.exports = function(){
    var Base = require('./../base');
    var base = new Base();
    var emailInput = element(by.model('user.email'));
    var firstNameInput = element(by.model('user.first_name'));
    var lastNameInput = element(by.model('user.last_name'));
    var updateButton = element(by.buttonText('Update'));
    var usernameInput = element(by.model('user.user_name'));

    this.clear = function(){
      emailInput.clear();
      firstNameInput.clear();
      lastNameInput.clear();
      usernameInput.clear();
    };
    this.editEmail = 'edittestuser@testing.com';
    this.editFirstName = 'Edit';
    this.editLastName = 'Zetas';
    this.editUsername = 'EditTesty';
    this.get = function(){
      browser.get(this.url);
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
    this.setUsername = function(username){
      usernameInput.sendKeys(username);
    };
    this.updateUser = function(){
      updateButton.click();
    };
    this.url = base.url + 'usersapp#/users/23/edit';
  };
})();

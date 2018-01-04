(function(){
  'use strict';

  var Base = require('./../page-objects/base');
  var base = new Base();
  var LoginPage = require('./../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var RegisterPage = require('./../page-objects/users/registerPage');
  var registerpage = new RegisterPage();
  var el;

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: Registration Page Smoke Test', function(){
    it('should load the registration page when the URL is `/register`.', function(){
      registerpage.get();
      base.verifyUrl(registerpage.url);
    });
    describe('Registration Page DOM Elements', function(){
      it('should have a `Register` title.', function(){
        expect(element(by.id('title')).isDisplayed()).toBe(true);
      });
      it('should have a registration form.', function(){
        expect(element(by.id('register_form')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the first name.', function(){
        expect(element(by.id('first_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the last name.', function(){
        expect(element(by.id('last_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the username.', function(){
        expect(element(by.id('user_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the email address.', function(){
        expect(element(by.id('email')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the address.', function(){
        expect(element(by.id('address')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the city.', function(){
        expect(element(by.id('city')).isDisplayed()).toBe(true);
      });
      it('should have a select input field for the state.', function(){
        expect(element(by.id('state')).isDisplayed()).toBe(true);
      });
      it('should have a number input field for the zip code.', function(){
        expect(element(by.id('zip')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the password.', function(){
        expect(element(by.id('first_name')).isDisplayed()).toBe(true);
      });
      it('should have a text input field for the password confirmation.', function(){
        expect(element(by.id('password_confirmation')).isDisplayed()).toBe(true);
      });
      it('should have a `Register` submit button.', function(){
        expect(element(by.id('register-btn')).isDisplayed()).toBe(true);
      });
      it('should have the `Register` button disabled.', function(){
        el = element(by.id('register-btn'));
        expect(el.isEnabled()).toBe(false);
      });
      it('should have a `Login` button.', function(){
        expect(element(by.id('login-btn')).isDisplayed()).toBe(true);
      });
    });
    describe('Registration Page - warnings', function(){
      it('should warn when entering username already taken.', function(){
        registerpage.setUsername(registerpage.failureUsername);
        registerpage.setCity('P');
        expect(element(by.id('usernameTaken')).isDisplayed()).toBe(true);
      });
      it('should warn when entering email address already taken.', function(){
        registerpage.setEmail(registerpage.failureEmail);
        registerpage.setCity('l');
        expect(element(by.id('emailTaken')).isDisplayed()).toBe(true);
      });
    });
    describe('Registration', function(){
      it('should enable button when valid input is entered.', function(){
        el = element(by.id('register-btn'));
        registerpage.clear();
        registerpage.setFirstName(registerpage.testFirstName);
        registerpage.setLastName(registerpage.testLastName);
        registerpage.setUsername(registerpage.testUsername);
        registerpage.setEmail(registerpage.testEmail);
        registerpage.setAddress(registerpage.testAddress);
        registerpage.setCity(registerpage.testCity);
        registerpage.setState(registerpage.testState);
        registerpage.setZip(registerpage.testZip);
        registerpage.setPassword(registerpage.testPassword);
        expect(el.isEnabled()).toBe(false);
        registerpage.setPasswordConf(registerpage.testPassword);
        expect(el.isEnabled()).toBe(true);
      });
      it('should successfully register new user.', function(){
        registerpage.registerUser();
        base.verifyUrl(loginpage.url);
      });
      it('should display a success alert after registering.', function(){
        expect(element(by.css('.alert-success')).isDisplayed()).toBe(true);
      });
    });
  });
})();

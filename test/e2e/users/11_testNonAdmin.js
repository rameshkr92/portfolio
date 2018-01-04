(function(){
  'use strict';

  var EC = protractor.ExpectedConditions;
  var Base = require('./../page-objects/base');
  var base = new Base();
  var EditPage = require('./../page-objects/users/editPage');
  var editpage = new EditPage();
  var LoginPage = require('./../page-objects/users/loginPage');
  var loginpage = new LoginPage();
  var RegisterPage = require('./../page-objects/users/registerPage');
  var registerpage = new RegisterPage();
  var UsersPage = require('./../page-objects/users/usersPage');
  var userspage = new UsersPage();
  var UserspageHelper = require('./../helpers/userspageHelper');
  var userspageHelper = new UserspageHelper();
  var btn, el, id;

  /* Protractor specs for end-to-end testing */
  describe('UsersApp: Test Non-Admin User', function(){
    describe('Register', function(){
      it('should successfully register new user.', function(){
        registerpage.get();
        el = element(by.id('register-btn'));
        // registerpage.clear();
        registerpage.setFirstName(registerpage.testFirstName);
        registerpage.setLastName(registerpage.testLastName);
        registerpage.setUsername(registerpage.testUsername);
        registerpage.setEmail(registerpage.testEmail);
        registerpage.setAddress(registerpage.testAddress);
        registerpage.setCity(registerpage.testCity);
        registerpage.setState(registerpage.testState);
        registerpage.setZip(registerpage.testZip);
        registerpage.setPassword(registerpage.testPassword);
        registerpage.setPasswordConf(registerpage.testPassword);
        registerpage.registerUser();
        base.verifyUrl(loginpage.url);
      });
      it('should display a success alert after registering.', function(){
        expect(element(by.css('.alert-success')).isDisplayed()).toBe(true);
      });
    });
    describe('Login User', function(){
      it('should log the user in.', function(){
        // loginpage.clear();
        loginpage.setEmail(registerpage.testEmail);
        loginpage.setPassword(registerpage.testPassword);
        loginpage.loginUser();
        base.verifyUrl(userspage.url);
      });
    });
    describe('Attempt Edit Other User', function(){
      it('should not allow edit and display warning message.', function(){
        btn = element.all(by.css('.show')).first();
        btn.click();
        btn = element(by.css('.edit'));
        btn.click();
        expect(element(by.css('.alert-danger')).isDisplayed()).toBe(true);
      });
    });
    describe('Edit Own User', function(){
      beforeAll(function(){
        userspageHelper.getId().then(function(data){
          // console.log('editpage.js data......', data._id);
          id = data._id;
        });
        btn = element.all(by.css('.show')).last();
        btn.click();
      });
      it('should display the edit page.', function(){
        btn = element.all(by.css('.edit'));
        btn.click();
        base.verifyUrl('http://localhost:6789/usersapp#/users/' + id + '/edit');
      });
      it('should successfully update user.', function(){
        editpage.clear();
        editpage.setEmail(editpage.editEmail);
        editpage.setUsername(editpage.editUsername);
        editpage.setFirstName(editpage.editFirstName);
        editpage.setLastName(editpage.editLastName);
        editpage.updateUser();
        el = element(by.css('.alert-success'));
        browser.wait(EC.visibilityOf(el, 200));
        base.verifyUrl('http://localhost:6789/usersapp#/users/' + id);
        expect(element(by.css('.alert-success')).isDisplayed()).toBe(true);
      });
    });
    describe('Attempt Delete Other User', function(){
      it('should not allow delete and display warning message.', function(){
        btn = element(by.css('.users-btn'));
        base.wait(btn);
        btn.click();
        browser.sleep(200);
        btn = element.all(by.css('.card-close')).first();
        btn.click();
        expect(element(by.css('.alert-danger')).isDisplayed()).toBe(true);
      });
    });
    describe('Delete Own User', function(){
      it('should remove the user with modal interaction.', function(){
        btn = element(by.css('.users-btn'));
        base.wait(btn);
        btn.click();
        browser.sleep(200);
        // Navigate with pagination to the last page to find the correct user to
        // delete (based off setting edit user lastname to start with `Z`).
        btn = element(by.cssContainingText('.ng-binding', 'Last'));
        btn.click();
        btn = element.all(by.css('.card-close')).last();
        btn.click();
        btn = element(by.css('.delete-confirm'));
        base.wait(btn);
        btn.click();
        base.verifyUrl(loginpage.url);
      });
    });
  });
  describe('NavBar Brand Test', function(){
    it('should navigate back to `Portfolio` app.', function(){
      btn = element(by.binding('app_title'));
      base.wait(btn);
      btn.click();
      browser.sleep(100);
      base.verifyUrl(base.url + '#/');
    });
  });
})();

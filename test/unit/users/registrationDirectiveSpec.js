(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: registerDisplay', function(){
    var Mock, el, html;

    beforeEach(function(){
      module('partials/users/_formEditRegDisplay.html');
      // MockUserObjFactory controller
      module('pcApp', function($controllerProvider){
        $controllerProvider.register('RegisterController', function(MockUserObjFactory, $scope){
          $scope.btn_text = MockUserObjFactory.registerBtnText;
          $scope.id_name = MockUserObjFactory.registerIdName;
          $scope.form_for = MockUserObjFactory.registerFormFor;
          $scope.form_name = MockUserObjFactory.registerFormName;
          $scope.registering = true;
        });
      });
      // Generate the HTML directive element
      html = '<register-display></register-display>';

      inject(function($compile, $rootScope, _MockUserObjFactory_){
        Mock = _MockUserObjFactory_;
        // Compile the DOM
        el = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('Registration form', function(){
      it('should be displayed.', function(){
        // console.log('el[0]', el[0]);
        expect(el[0].querySelector('#register_form')).not.toBeNull();
      });
      it('should contain the title.', function(){
        expect(el[0].querySelector('#title')).not.toBeNull();
      });
      it('should contain the title `Register`.', function(){
        expect(el.find('#title').text()).toContain(Mock.registerFormFor);
      });
      it('should contain ng-model `user.first_name` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.first_name"]')).not.toBeNull();
      });
      it('should contain ng-model `user.last_name` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.last_name"]')).not.toBeNull();
      });
      it('should contain ng-model `user.email` email input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.email"]')).not.toBeNull();
      });
      it('should contain ng-model `user.address` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.address"]')).not.toBeNull();
      });
      it('should contain ng-model `user.city` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.city"]')).not.toBeNull();
      });
      it('should contain ng-model `user.state` select input field.', function(){
        expect(el[0].querySelectorAll('select[ng-model="user.state"]')).not.toBeNull();
      });
      it('should contain ng-model `user.zip` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.zip"]')).not.toBeNull();
      });
      it('should contain ng-model `user.password` password input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.password"]')).not.toBeNull();
      });
      it('should contain ng-model `user.password_confirmation` password input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.password_confirmation"]')).not.toBeNull();
      });
      it('should contain ng-click `Register` button.', function(){
        expect(el[0].querySelectorAll('button[ng-click="register()"]')).not.toBeNull();
      });
      it('should contain register button with `Register` text displayed.', function(){
        expect(el.find('#register-btn').text()).toContain(Mock.registerBtnText);
      });
      it('should have a link to the `Login` page.', function(){
        expect(el[0].querySelectorAll('#login-btn')).not.toBeNull();
      });
      it('should contain a link with `Login` text displayed.', function(){
        expect(el.find('#login-btn').text()).toContain(Mock.loginBtnText);
      });
    });
  });
})();

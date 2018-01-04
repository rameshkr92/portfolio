(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: loginDisplay', function(){
    var Mock, el, html;

    beforeEach(function(){
      module('partials/users/_loginDisplay.html');
      // MockUserObjFactory controller
      module('pcApp', function($controllerProvider){
        $controllerProvider.register('LoginController', function(){});
      });

      // Generate the HTML directive element
      html = '<login-display></login-display>';

      inject(function($compile, $rootScope, _MockUserObjFactory_){
        Mock = _MockUserObjFactory_;
        // Compile the DOM
        el = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('Login form', function(){
      it('should be displayed.', function(){
        // console.log('el[0]', el[0]);
        expect(el[0].querySelector('#login_form')).not.toBeNull();
      });
      it('should contain the title.', function(){
        expect(el[0].querySelector('#title')).not.toBeNull();
      });
      it('should contain the title `Login`.', function(){
        expect(el.find('#title').text()).toContain(Mock.loginBtnText);
      });
      it('should contain ng-model `user.email` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.login"]')).not.toBeNull();
      });
      it('should contain ng-model `user.password` password input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.password"]')).not.toBeNull();
      });
      it('should contain ng-click `login()` button.', function(){
        expect(el[0].querySelectorAll('button[ng-click="login()"]')).not.toBeNull();
      });
      it('should contain update button with `Login` text displayed.', function(){
        expect(el.find('#login-btn').text()).toContain(Mock.loginBtnText);
      });
      it('should contain a link to the `Register` page.', function(){
        expect(el[0].querySelectorAll('#register-btn')).not.toBeNull();
      });
      it('should contain a link with `Register` text displayed.', function(){
        expect(el.find('#register-btn').text()).toContain(Mock.registerLinkText);
      });
    });
  });
})();

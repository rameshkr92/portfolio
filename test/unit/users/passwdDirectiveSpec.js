(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: passwordDirective', function(){
    var Mock, el, html;

    beforeEach(function(){
      module('partials/users/_passwordDisplay.html');
      module('pcApp', function($controllerProvider){
        $controllerProvider.register('PasswordController', function(MockUserObjFactory, $scope){
          $scope.btn_text = MockUserObjFactory.passwdBtnText;
          $scope.id_name = MockUserObjFactory.passwdIdName;
          $scope.form_for = MockUserObjFactory.passwdFormFor;
          $scope.form_name = MockUserObjFactory.passwdFormName;
        });
      });
      html = '<password-display></password-display>';

      inject(function($compile, $rootScope, _MockUserObjFactory_){
        Mock = _MockUserObjFactory_;
        el = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('Password Change Form', function(){
      it('should be displayed.', function(){
        // console.log('el[0]', el[0]);
        expect(el[0].querySelector('#password_form')).not.toBeNull();
      });
      it('should contain the title.', function(){
        expect(el[0].querySelector('#title')).not.toBeNull();
      });
      it('should contain the title `Change Password`.', function(){
        expect(el.find('#title').text()).toContain(Mock.passwdFormFor);
      });
      it('should contain ng-model `user.current_password` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.current_password"]')).not.toBeNull();
      });
      it('should contain ng-model `user.password` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.password"]')).not.toBeNull();
      });
      it('should contain ng-model `user.password_confirmation` text input field.', function(){
        expect(el[0].querySelectorAll('input[ng-model="user.password_confirmation"]')).not.toBeNull();
      });
      it('should contain ng-click `Change Password` button.', function(){
        expect(el[0].querySelectorAll('button[ng-click="submit()"]')).not.toBeNull();
      });
      it('should contain update button with `Change Password` text displayed.', function(){
        expect(el.find('#passwd_change-btn').text()).toContain(Mock.passwdBtnText);
      });
      it('should contain `Cancel` button.', function(){
        expect(el[0].querySelectorAll('#cancel-btn')).not.toBeNull();
      });
      it('should contain cancel button with `Cancel` text displayed.', function(){
        expect(el.find('#cancel-btn').text()).toContain(Mock.cancelBtnText);
      });
    });
  });
})();

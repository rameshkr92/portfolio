(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: editDisplay', function(){
    var Mock, el, html;

    beforeEach(function(){
      module('partials/users/_formEditRegDisplay.html');
      // MockUserObjFactory controller
      module('pcApp', function($controllerProvider){
        // DI MockUserObjFactory into controller
        $controllerProvider.register('EditController', function(MockUserObjFactory, $scope){
          $scope.btn_text = MockUserObjFactory.editBtnText;
          $scope.id_name = MockUserObjFactory.editIdName;
          $scope.form_for = MockUserObjFactory.editFormFor;
          $scope.form_name = MockUserObjFactory.editFormName;
          $scope.registering = false;
        });
      });
      // Generate the HTML directive element
      html = '<edit-display></edit-display>';

      // Inject MockUserObjFactory to use in tests
      inject(function($compile, $rootScope, _MockUserObjFactory_){
        Mock = _MockUserObjFactory_;
        // Compile the DOM
        el = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('Edit form', function(){
      it('should be displayed.', function(){
        // console.log('el[0]', el[0]);
        expect(el[0].querySelector('#edit_form')).not.toBeNull();
      });
      it('should contain the title.', function(){
        expect(el[0].querySelector('#title')).not.toBeNull();
      });
      it('should contain the title `Edit`.', function(){
        expect(el.find('#title').text()).toContain(Mock.editFormFor);
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
      it('should contain ng-click `Update` button.', function(){
        expect(el[0].querySelectorAll('button[ng-click="submit()"]')).not.toBeNull();
      });
      it('should contain update button with `Update` text displayed.', function(){
        expect(el.find('#edit-btn').text()).toContain(Mock.editBtnText);
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

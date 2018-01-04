(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: pcCompareTo', function () {
    var $scope, Mock, changeInputValueTo, el, form, input1, input2;

    beforeEach(function(){
      module('pcApp');

      input1 = angular.element(
        '<input type="password" id="password" ' +
        'name="password" ' +
        'class="form-control" ' +
        'ng-model="user.password" ' +
        'ng-model-options="{ updateOn: \'blur\' }" ' +
        'ng-minlength = 6 ' +
        'required />');

      input2 = angular.element(
        '<input type="password" id="password_confirmation" ' +
        'name="password_confirmation" ' +
        'class="form-control" ' +
        'ng-model="user.password_confirmation" ' +
        'ng-model-options="{debounce: 250}" ' +
        'pc-compare-to="user.password" ' +
        'required />');

      inject(function($compile, _MockUserObjFactory_, $rootScope){
        Mock = _MockUserObjFactory_;
        $scope = $rootScope.$new();

        el = angular.element('<form name="register_form"></form>');
        el.append(input1);
        el.append(input2);

        $compile(el)($scope);
      });

      $scope.user = {
        password: null,
        password_confirmation: null
      };

      $scope.$apply();

      form = $scope.register_form;

      changeInputValueTo = function(elem, value){
        elem.$setViewValue(value);
        elem.$commitViewValue();

        // Prevent against $digest in progress error
        if(!$scope.$$phase) {
          // console.log('$scope.$apply()');
          $scope.$apply();
        }
        // console.log('changeInput elem:', elem);
      };
    });

    it('form should be valid when passwords match.', function(){
      changeInputValueTo(form.password, Mock.pass);
      changeInputValueTo(form.password_confirmation, Mock.pass);
      // console.log('form:', form);
      expect($scope.user.password).toBe(Mock.pass);
      expect($scope.user.password_confirmation).toBe(Mock.pass);
      expect(form.password_confirmation.$valid).toBe(true);
    });
    it('form should be invalid when passwords do NOT match, with correct error.',
      function(){
        changeInputValueTo(form.password, Mock.pass);
        changeInputValueTo(form.password_confirmation, Mock.passNoMatch);
        expect(form.password_confirmation.$valid).toBe(false);
        expect(form.password_confirmation.$error.compareTo).toBe(true);
      });
    it('form should be invalid when password is too short, with correct error.',
      function(){
        changeInputValueTo(form.password, Mock.passShort);
        expect(form.password.$valid).toBe(false);
        expect(form.password.$error.minlength).toBe(true);
      });
  });
})();

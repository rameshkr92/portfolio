(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: pcUnique', function(){
    var $q, $scope, control, changeInputValueTo, el, hasKey, input;
    var Mock, UsersFactory;

    beforeEach(function(){
      module('pcApp');

      inject(function($compile, _$q_, $rootScope, _MockUserObjFactory_, _UsersFactory_){
        $q = _$q_;
        $scope = $rootScope.$new();
        Mock = _MockUserObjFactory_;
        UsersFactory = _UsersFactory_;

        input = angular.element(
          '<input type="email" id="email" name="email" class="form-control" ' +
          'ng-model="user.email" ' +
          'ng-model-options="{ updateOn: \'blur\' }" ' +
          'pc-unique ' +
          'pc-unique-key="{{user._id}}" ' +
          'pc-unique-property="email" ' +
          'pc-unique-registering="true" ' +
          'required />');

        el = angular.element('<form name="register_form"></form>');
        el.append(input);

        $compile(el)($scope);
      });

      $scope.user = {email: null};
      $scope.$apply();

      control = $scope.register_form.email;
      hasKey = true;

      spyOn(UsersFactory, 'checkUnique').and.callFake(function(id, property, value){
        // console.log('... check ...fake called value:', value);
        if(hasKey){
          // Simulate UserFactory db check, true = already exists in db, so
          // unique fails.
          if(value === Mock.passwdFail){
            return $q.when(false);
          } else {
            return $q.when(true);
          }
        } else {
          return $q.when(true);
        }
      });

      changeInputValueTo = function(value){
        control.$setViewValue(value);
        control.$commitViewValue();

        // Prevent against $digest in progress error
        if(!$scope.$$phase) {
          // console.log('$scope.$apply()');
          $scope.$apply();
        }
        // console.log('changeInput control:', control);
      };
    });

    it('should call checkUnique when valid email is entered.', function(){
      changeInputValueTo(Mock.passwdOthr);
      expect(UsersFactory.checkUnique).toHaveBeenCalled();
    });
    it('checkUnique should be invalid if the email exists in db.',
      function(){
        changeInputValueTo(Mock.passwdFail);
        expect(control.$valid).toBe(false);
        expect(control.$error.unique).toBe(true);
      });
    it('checkUnique should be valid if the email does NOT exist in db.',
      function(){
        changeInputValueTo(Mock.passwdPass);
        expect(control.$valid).toBe(true);
        expect(control.$error.unique).not.toBeDefined();
      });
    it('checkUnique should be valid if key is not present.', function(){
      hasKey = false;
      changeInputValueTo(Mock.passwdFail);
      expect(control.$valid).toBe(true);
      expect(control.$error.unique).not.toBeDefined();
    });
  });
})();

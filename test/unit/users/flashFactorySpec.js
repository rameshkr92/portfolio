(function(){
  'use strict';

  describe('UsersDashboardApp - Factory: FlashFactory', function(){
    var $rootScope, FlashFactory, Mock;

    beforeEach(function(){
      module('pcApp');

      inject(function(_$rootScope_, _FlashFactory_, _MockUserObjFactory_){
        $rootScope = _$rootScope_;
        FlashFactory = _FlashFactory_;
        Mock = _MockUserObjFactory_;
      });
    });

    describe('.success()', function(){
      beforeEach(function(){
        FlashFactory.success(Mock.successMsg, Mock.keep);
        // console.log('$rootScope:', $rootScope);
      });
      it('function should be defined.', function(){
        expect(angular.isFunction(FlashFactory.success)).toBe(true);
      });
      it('should populate $rootScope with flash object.', function(){
        expect($rootScope.flash).toBeDefined();
      });
      it('should populate $rootScope with error message.', function(){
        expect($rootScope.flash.message).toEqual(Mock.successMsg);
      });
      it('should populate $rootScope if keeping msg after url change.', function(){
        expect($rootScope.flash.keepAfterLocationChange).toBe(Mock.keep);
      });
      it('should populate $rootScope with the correct flash type.', function(){
        expect($rootScope.flash.type).toBe('success');
      });
    });
    describe('.error()', function(){
      beforeEach(function(){
        FlashFactory.error(Mock.errorMsg, Mock.keep);
        // console.log('$rootScope:', $rootScope);
      });
      it('function should be defined.', function(){
        expect(angular.isFunction(FlashFactory.error)).toBe(true);
      });
      it('should populate $rootScope with flash object.', function(){
        expect($rootScope.flash).toBeDefined();
      });
      it('should populate $rootScope with error message.', function(){
        expect($rootScope.flash.message).toEqual(Mock.errorMsg);
      });
      it('should populate $rootScope if keeping msg after url change.', function(){
        expect($rootScope.flash.keepAfterLocationChange).toBe(Mock.keep);
      });
      it('should populate $rootScope with the correct flash type.', function(){
        expect($rootScope.flash.type).toBe('error');
      });
    });
  });
})();

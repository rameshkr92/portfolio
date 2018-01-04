(function(){
  'use strict';

  describe('UsersDashboardApp - Service: ModalService', function () {
    var $modal, Mock, ModalService, result;

    beforeEach(function(){
      module('pcApp');
      module('ui.bootstrap');

      inject(function(_$modal_, _MockUserObjFactory_, _ModalService_){
        $modal = _$modal_;
        Mock = _MockUserObjFactory_;
        ModalService = _ModalService_;
      });

      spyOn($modal, 'open').and.returnValue(Mock.modalResult);
    });

    describe('.showModal()', function(){
      beforeEach(function(){
        spyOn(ModalService, 'show').and.callThrough();
      });

      it('should call .show().', function(){
        ModalService.showModal({}, {});
        expect(ModalService.show).toHaveBeenCalled();
      });
      it('should assign defaults if none are provided in call.', function(){
        ModalService.showModal(null, {});
        expect(ModalService.show).not.toHaveBeenCalledWith(null, {});
      });
      it('should always set value of backdrop to static.', function(){
        ModalService.showModal({backdrop: 'test'}, {});
        expect(ModalService.show).not.toHaveBeenCalledWith({backdrop: 'test'}, {});
        expect(ModalService.show).toHaveBeenCalledWith({backdrop: 'static'}, {});
      });
    });

    describe('.show()', function(){
      it('calls $modal.open().', function(){
        ModalService.show(Mock.modalDefaults, Mock.modalOptions);
        expect($modal.open).toHaveBeenCalled();
      });
      it('should set options to defaults if none are provided.', function(){
        ModalService.show(Mock.modalDefaultsNone, Mock.modalOptions);
        expect($modal.open).not.toHaveBeenCalledWith({}, {});
      });
      it('should set the default controller if one is not defined.', function(){
        ModalService.show(Mock.modalDefaults, Mock.modalOptions);
        expect($modal.open).not.toHaveBeenCalledWith(Mock.modalDefaults);
      });
      it('should not set the default controller is one is defined.', function(){
        ModalService.show(Mock.modalDefaultsCtrl, Mock.modalOptions);
        expect($modal.open).toHaveBeenCalledWith(Mock.modalDefaultsCtrl);
      });
      it('should return the result of the modal.', function(){
        result = ModalService.show({}, {});
        expect(result).toBe(Mock.modalResult.result);
      });
    });
  });
})();

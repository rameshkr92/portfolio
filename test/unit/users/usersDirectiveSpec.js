(function(){
  'use strict';

  describe('UsersDashboardApp - Directive: usersDisplay', function(){
    var $scope, Mock, el, expectedText, html, item, list;

    beforeEach(function(){
      // Get the partial for this directive
      module('partials/users/_usersDisplay.html');
      // MockUserObjFactory controller
      module('pcApp', function($controllerProvider){
        // DI MockUserObjFactory into controller
        $controllerProvider.register('UsersController', function($scope, MockUserObjFactory){
          $scope.title = MockUserObjFactory.title;
          $scope.user = MockUserObjFactory.users[0];
          $scope.users = MockUserObjFactory.users;
        });
      });
      // Generate the HTML
      html = '<users-display></users-display>';

      // Inject MockUserObjFactory to use in tests
      inject(function($compile, $rootScope, _MockUserObjFactory_){
        Mock = _MockUserObjFactory_;
        $scope = $rootScope.$new();
        el = $compile(angular.element(html))($scope);
        $scope.$apply();
      });
    });

    describe('Users page', function(){
      it('should display the title header.', function(){
        item = el.find('#page-title');
        expect(item.length).toBe(1);
        expect(item.text()).toContain(Mock.title);
      });
      it('should have a search box.', function(){
        expect(el.find('.search-box')).toBeDefined();
      });
      it('should contain a container for the user cards.', function(){
        expect(el.find('#card-container').length).toBe(1);
      });
      it('should display a list of current users.', function(){
        expect(el.find('.user-card').length).toBe(Mock.users.length);
      });
      it('should contain a header for each card.', function(){
        expect(el.find('.card-header').length).toBe(Mock.users.length);
      });
      it('should contain an `Show` link in each header for each user.', function(){
        list = el.find('.show');
        expect(list.length).toBe(Mock.users.length);
      });
      it('should contain a body for each card.', function(){
        expect(el.find('.card-body').length).toBe(Mock.users.length);
      });
      it('should contain a left side body for each card.', function(){
        expect(el.find('.card-body-left').length).toBe(Mock.users.length);
      });
      it('should contain an image for each user.', function(){
        expect(el.find('.card-image').length).toBe(Mock.users.length);
      });
      it('should contain a right side body for each card.', function(){
        expect(el.find('.card-body-right').length).toBe(Mock.users.length);
      });
      it('should contain the users city and state.', function(){
        list = el.find('.card-content');
        expectedText = Mock.users[0].city + ', ' + Mock.users[0].state.name;
        expect(list.eq(0).text()).toContain(expectedText);
      });
      it('should contain a `Delete` button for each user.', function(){
        list = el.find('.card-close');
        expect(list.length).toBe(Mock.users.length);
      });
      it('should contain the pagination controls.', function(){
        expect(el.find('.pagination-sm')).toBeDefined();
      });
    });
  });
})();

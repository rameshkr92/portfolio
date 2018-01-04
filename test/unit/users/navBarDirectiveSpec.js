(function(){
  'use strict';

  var Mock, el, html, txt;

  beforeEach(module('partials/users/_navBar.html'));

  describe('UsersDashboardApp - Directive: usersNavBarDisplay', function(){
    beforeEach(function(){
      // MockUserObjFactory controller
      module('pcApp', function($controllerProvider){
        $controllerProvider.register('UsersNavBarController', function(MockUserObjFactory, $scope){
          $scope.app_title = MockUserObjFactory.appTitle;
          $scope.full_name = MockUserObjFactory.fullName;
          $scope.loggedIn = true;
        });
      });
      // Generate the HTML directive element
      html = '<users-nav-bar-display></users-nav-bar-display>';

      inject(function($compile, $rootScope, _MockUserObjFactory_){
        Mock = _MockUserObjFactory_;
        el = $compile(angular.element(html))($rootScope);
        $rootScope.$apply();
      });
    });

    describe('NavBar', function(){
      it('should be displayed.', function(){
        expect(el[0].querySelector('.navbar')).not.toBeNull();
      });
      it('should be inverse (dark background).', function(){
        expect(el[0].querySelector('.navbar.navbar-inverse')).not.toBeNull();
      });
      it('should contain a brand.', function(){
        expect(el[0].querySelector('.navbar-brand')).not.toBeNull();
      });
      it('should contain the app title displayed for the brand.', function(){
        txt = el.find('.navbar-brand').text();
        expect(txt).toContain(Mock.appTitle);
      });
      it('should contain a toggle button.', function(){
        expect(el[0].querySelector('button.navbar-toggle')).not.toBeNull();
        expect(el[0].querySelector('button.navbar-toggle.collapsed')).not.toBeNull();
      });
      it('should contain a collection for collapsed content.', function(){
        expect(el[0].querySelector('#navbar-collapse.collapse.navbar-collapse')).not.toBeNull();
      });
      it('should contain a pill box.', function(){
        expect(el[0].querySelector('.nav.nav-pills')).not.toBeNull();
      });
      it('should contain a link to display all users.', function(){
        expect(el[0].querySelector('.users-btn')).not.toBeNull();
      });
      it('should contain a link with `Users` text displayed.', function(){
        expect(el.find('.users-btn').text()).toContain('Users');
      });
    });

    describe('When user is logged in', function(){
      it('should contain a logged in user dropdown menu.', function(){
        expect(el[0].querySelector('button.nav-btn-toggle.dropdown-toggle')).not.toBeNull();
      });
      it('should dislay the logged in users name as the dropdown menu text.', function(){
        txt = el.find('button.nav-btn-toggle.dropdown-toggle').text();
        expect(txt).toContain(Mock.fullName);
      });
      it('should contain a caret to show dropdown capability.', function(){
        expect(el[0].querySelector('.caret')).not.toBeNull();
      });
      it('should contain a link to the logged in user\'s profile.', function(){
        expect(el[0].querySelector('a.user-profile')).not.toBeNull();
      });
      it('should contain a link to change the logged in user\'s password.', function(){
        expect(el[0].querySelector('a.user-password')).not.toBeNull();
      });
      it('should contain a link to logout the user.', function(){
        expect(el[0].querySelector('a.user-logout')).not.toBeNull();
      });
      it('should contain a link with `Logout` text displayed.', function(){
        expect(el.find('.user-logout').text()).toContain('Logout');
      });
    });
  });

  describe('UsersDashboardApp - Directive: usersNavBarDisplay', function(){
    describe('When user is NOT logged in', function(){
      beforeEach(function(){
        // MockUserObjFactory controller
        module('pcApp', function($controllerProvider){
          $controllerProvider.register('UsersNavBarController', function($scope){
            $scope.app_title = Mock.appTitle;
            $scope.loggedIn = false;
          });
        });
        // Generate the HTML directive element
        html = '<users-nav-bar-display></users-nav-bar-display>';

        inject(function($compile, $rootScope){
          el = $compile(angular.element(html))($rootScope);
          $rootScope.$apply();
        });
      });

      it('should NOT have a logged in user dropdown menu.', function(){
        expect(el[0].querySelector('a.dropdown-toggle')).toBeNull();
      });
      it('should contain a link to login.', function(){
        expect(el[0].querySelector('a.user-login')).not.toBeNull();
      });
      it('should contain a link with `Login` text displayed.', function(){
        expect(el.find('.login-btn').text()).toContain(Mock.loginBtnText);
      });
    });
  });
})();

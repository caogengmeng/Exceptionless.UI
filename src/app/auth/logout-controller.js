(function () {
  'use strict';

  angular.module('app.auth')
    .controller('auth.Logout', ['$auth', '$state', function ($auth, $state) {
      if ($auth.isAuthenticated()) {
        return $auth.logout();
      }

      $state.go('auth.login');
    }]);
}());

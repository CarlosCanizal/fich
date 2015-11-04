(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Login', Login);

  Login.$inject = ['$scope', 'parse'];

  function Login($scope, parse) {
    var shell = $scope.shell;
    var login =  this;
  }
})();

(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Register', Register);

  Register.$inject = ['$scope', 'parse'];

  function Register($scope, parse) {
    var shell = $scope.shell;
    var register =  this;

    register.labels = shell.labels.register;
  }
})();

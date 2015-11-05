(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Dashboard', Dashboard);

  Dashboard.$inject = ['$scope', 'userApi'];

  function Dashboard($scope, userApi) {
    var shell = $scope.shell;
    var dashboard =  this;
  }
})();

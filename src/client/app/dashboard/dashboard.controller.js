(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Dashboard', Dashboard);

  Dashboard.$inject = ['$scope', 'userApi'];

  function Dashboard($scope, userApi) {
    var shell = $scope.shell;
    var dashboard =  this;


    dashboard.menuItems = [
      {label:"label1",link:"login"},
      {label:"label2",link:"login"},
      {label:"label3",link:"login"},
      {label:"label4",link:"login"},
      {label:"label5",link:"login"},
      {label:"label6",link:"login"}
    ]
  }
})();

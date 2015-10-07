(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Clients', Clients);

  Clients.$inject = ['$scope', 'parse'];

  function Clients($scope, parse) {
    var shell = $scope.shell;
    var clients =  this;
    var parseClass = 'Client';

    var Client = parse.endpoint(parseClass);

    Client.getAll().then(function(list){
      clients.list = list;
      console.log(list);
    },function(error){
      console.log(error);
    });    
  }
})();

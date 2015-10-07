(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Services', Services);

  Services.$inject = ['$scope', 'parse'];

  function Services($scope, parse) {
    var shell = $scope.shell;
    var services =  this;
    var parseClass = 'Service';

    var Service = parse.endpoint(parseClass);

    Service.getAll().then(function(list){
      services.list = list;
      console.log(list);
    },function(error){
      console.log(error);
    });    
  }
})();

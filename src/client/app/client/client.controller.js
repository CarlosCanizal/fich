(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Client', Client);

  Client.$inject = ['$scope', 'parse'];

  function Client($scope, parse) {
    var shell = $scope.shell;
    var client =  this;
    var clientId = null;
    var parseClass = "Client";

    client.info = {
      name : "Carlos Canizal",
      rfc  : "CAZC850923B18" 
    }

    client.update  = function(){
      var Client = parse.endpoint(parseClass, clientId);
      Client.update(client.info).then(function(result){
        console.log(result);
      },function(error){
        console.log(error);
      })
    }


  }
})();

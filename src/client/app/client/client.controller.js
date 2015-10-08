(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Client', Client);

  Client.$inject = ['$scope','$state','$stateParams', 'parse'];

  function Client($scope, $state, $stateParams, parse) {
    var shell = $scope.shell;
    var client =  this;
    var clientId = null;
    var parseClass = "Client";

    var Service = parse.endpoint('Service');
    Service.getAll().then(function(list){
      client.services = list;
      client.service = client.services[0];
    },function(error){
      console.log(error);
    });

    if($stateParams.objectId){
      clientId = $stateParams.objectId;
      var Client = parse.endpoint(parseClass,clientId);
      Client.get().then(function(result){
        client.info = result;
      },function(error){
        console.log(error);
      })
    }
    else{
      client.info = {
        name : "Carlos Canizal",
        rfc  : "CAZC850923B18",
        services: []
      }
    }    

    var Client = parse.endpoint(parseClass, clientId);

    client.update  = function(){
      Client.update(client.info).then(function(result){
        if(!clientId)
          $state.go('client',{objectId:result.objectId});

        console.log(result);
      },function(error){
        console.log(error);
      })
    }

    client.delete = function(){
      Client.remove();
    }

    client.addService = function(){
      client.info.services.push(client.service);
    }

    client.removeService = function(index){
      client.info.services.splice(index, 1);
    }


  }
})();

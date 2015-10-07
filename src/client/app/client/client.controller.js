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



    if($stateParams.objectId){
      clientId = $stateParams.objectId;
      console.log(clientId);
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
        rfc  : "CAZC850923B18"
      }
    }




    
    

    client.update  = function(){
      var Client = parse.endpoint(parseClass, clientId);
      Client.update(client.info).then(function(result){
        if(!clientId)
          $state.go('client',{objectId:result.objectId});

        console.log(result);
      },function(error){
        console.log(error);
      })
    }


  }
})();

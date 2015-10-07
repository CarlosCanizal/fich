(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Service', Service);

  Service.$inject = ['$scope','$state','$stateParams', 'parse'];

  function Service($scope, $state, $stateParams, parse) {
    var shell = $scope.shell;
    var service =  this;
    var objectId = null;
    var parseClass = "Service";



    if($stateParams.objectId){
      objectId = $stateParams.objectId;
      console.log(objectId);
      var Service = parse.endpoint(parseClass,objectId);
      Service.get().then(function(result){
        service.info = result;
      },function(error){
        console.log(error);
      })
    }
    else{
      service.info = {
        name         : "Carlos Canizal",
        description  : "this is a description",
        price        : 10.00
      }
    }    

    var Service = parse.endpoint(parseClass, objectId);

    service.update  = function(){
      service.info.price = parseInt(service.info.price);
      Service.update(service.info).then(function(result){
        if(!objectId)
          $state.go('service',{objectId:result.objectId});

        console.log(result);
      },function(error){
        console.log(error);
      })
    }

    service.delete = function(){
      Service.remove();
    }


  }
})();

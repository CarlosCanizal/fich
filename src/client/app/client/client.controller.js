(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Client', Client);

  Client.$inject = ['$scope', 'parse'];

  function Client($scope, parse) {
    var shell = $scope.shell;
    var client =  this;
    var Client = parse.endpoint('Client');
    Client.getAll({objectId:'S7ClFU2Gh8'}).then(function(result){
      console.log(result);
    },function(error){
      console.log(error);
    });

  }

})();

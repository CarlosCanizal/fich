(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Shell', Shell);

  Shell.$inject = ['$scope','$http', 'parse'];

  function Shell($scope, $http, parse) {
    var shell =  this;

    $http.get('app/lang/es.json').then(function(labels){
      if(labels.data)
        shell.labels = labels.data;
        // shell.pageTitle = shell.labels.general.pageTitle;
    },function(error){
      shell.setError(error);
    });


  }
})();

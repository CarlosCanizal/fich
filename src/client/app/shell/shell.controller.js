(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('Shell',Shell);

  Shell.$inject = ['$scope','$q','template'];


  function Shell($scope, $q, template){
    // jshint validthis: true 
    var shell = this;

    shell.loading = false;

    template.get('app/lang/es.json').then(function(labels){
      if(labels)
        shell.labels = labels;
    },function(error){
      console.log(error);
      shell.setError(error);
    }).finally(function(){
      // shell.loading = false;

    });



    shell.startLoading = function(){
      shell.loading = true;
    }

    shell.stopLoading = function(){
      shell.loading = false;
    }

    shell.setError =function(error){
      shell.errorMessage = error;
    }

    shell.setSuccess = function(message){
      shell.successMessage = message;
    }

    

  }

})();

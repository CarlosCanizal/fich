(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Login', Login);

  Login.$inject = ['$scope', 'userApi'];

  function Login($scope, userApi) {
    var shell = $scope.shell;
    var login =  this;

    login.labels = shell.labels.login;

    login.data = {
      username : 'john.titor@gmail.com',
      password : '1234' 
    }

    login.send = function(){
      if($scope.loginForm.$valid){
        shell.startLoading();
        userApi.login(login.data).then(function(result){
          console.log(result);
          shell.setSuccess(login.labels.success);
        },function(error){
          shell.setError(error);
        }).finally(shell.stopLoading);
      }
    }
  }
})();

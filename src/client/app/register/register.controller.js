(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Register', Register);

  Register.$inject = ['$scope', 'parse','userApi'];

  function Register($scope, parse, userApi) {
    var shell = $scope.shell;
    var register =  this;

    register.labels = shell.labels.register;

    register.data = {
      name:"John",
      lastname: "Titor",
      username: "john.titor@gmail.com",
      password: "1234"
    }


    register.send = function(){

      if($scope.registerForm.$valid){
        // shell.showLoading();
        userApi.register(register.data).then(function(user){
          console.log(user);
          console.log(register.labels);
          shell.setSuccess(register.labels.success);
          // shell.setSuccess();
        },function(error){
          console.log(error);
          if(error.data.error){
          //   $scope.response.register = error.data.error;
          //   $scope.response.code = error.data.code;
            shell.setError(error.data.error);
          }else{
            shell.setError(error);
          }
        })
        // .finally(shell.hideLoading);
      }else{
        $scope.registerForm.name.$setDirty();
        $scope.registerForm.lastname.$setDirty();
        $scope.registerForm.username.$setDirty();
        $scope.registerForm.password.$setDirty();
      }
    };



  }
})();

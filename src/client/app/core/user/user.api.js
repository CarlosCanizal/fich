(function() {
  'use strict';

  angular
  .module('app.core')
  .factory('userApi', userApi);

  userApi.$inject = ['$q', 'parse', 'storage'];

  /* @ngInject */
  function userApi($q, parse, storage ) {

    var factory = {
      register : register,
      login : login 
    };

    return factory;

    function register(params) {
      var deferred = $q.defer();
      var User = parse.user();
      User.post(params).then(function(result){
        deferred.resolve(result);
      },function(error){
        deferred.reject(error);
      });
      return deferred.promise
    }


    function login(params){
      var Login = parse.login();
      return Login.get(params);
    }

  }
})();
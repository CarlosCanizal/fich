(function() {
  'use strict';

  angular
  .module('app.core')
  .factory('parse', parse);

  parse.$inject = ['$resource','$q', 'Restangular'];

  /* @ngInject */
  function parse($resource, $q, Restangular) {

    var factory = {
      cloud: cloud,
      endpoint: endpoint
    };

    return factory;

    function cloud(cloudFunction){
      return Restangular.service('functions/'+cloudFunction);
    }

    function endpoint(className, id){
      return new ParseClass(className, id);
    }

    function ParseClass(className, id){ 

      var className = className;
      var id = id;
      var endpoint = null;
      var restObject;

      initialize(className, id);

      function initialize(newClassName, newId){
        
        className =  newClassName;
        id = newId;

        endpoint = 'classes/'+className;
        if(newId)
          endpoint += '/'+newId;

        restObject = Restangular.service(endpoint);
      }

      function getObject(){
        return restObject.one().get();
      }

      return {
        remove: function(){
          return restObject.one().remove();
        },
        getAll: function(params){
          var where = null;
          if(params)
            where = {where:params};
          return restObject.getList(where);
        },
        get: function(){
          return getObject();
        },
        post: function(params){
          return restObject.post(params);
        },
        put: function(params){
          return restObject.one().customPUT(params);
        },
        update: function(params){
          var object;
          var deferred = $q.defer();
          if(id){
            this.put(params).then(function(){
              return getObject();
            }).then(function(row){
              deferred.resolve(row)
            },function(error){
              deferred.reject(error);
            });
          }
          else{
            this.post(params).then(function(updated){
              initialize(className,updated.objectId);
              return getObject();
            }).then(function(row){
              deferred.resolve(row);
            },function(error){
              deferred.reject(error);
            });
          }

          return deferred.promise;
        }
      }
    }

  }
})();
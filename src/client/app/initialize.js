angular
.module('app')
.run(run);

// run.$inject = ['$rootScope','$timeout', '$state', 'userApi', 'Restangular', 'parseheaders'];
run.$inject = ['$rootScope','$timeout', '$state','Restangular','parseheaders'];

function run($rootScope, $timeout, $state, Restangular,parseheaders) {

  // Parse.initialize(parseheaders.javascriptKeys.applicationID,parseheaders.javascriptKeys.javascriptKey);
  Restangular.setBaseUrl('https://api.parse.com/1/');
  // if(Parse.User.current()){
  //   parseheaders.restKeys['X-Parse-Session-Token'] = Parse.User.current()._sessionToken;
  // }

  // $timeout(function(){
  //   $rootScope.loaded = true;
  // },500)

  Restangular.setDefaultHeaders(parseheaders.restKeys);

  Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData ={};
    if (operation === "getList") {
      if(data.results){
        deferred.resolve(data.results)
      }
      else{
        var array = [data]
        deferred.resolve(array);
      }
    }else{
      deferred.resolve(data);
    }
  });

}


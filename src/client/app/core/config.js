angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('client',{
      url:'/client',
      templateUrl : 'app/client/client.template.html',
      controller: 'Client',
      controllerAs: 'client'
    });
      
  $urlRouterProvider.otherwise('/client');
}
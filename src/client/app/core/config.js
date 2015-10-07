angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('client',{
      url:'/',
      controller: 'Client',
      controllerAs: 'client'
    });
      
  $urlRouterProvider.otherwise('/');
}
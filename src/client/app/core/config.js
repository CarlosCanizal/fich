angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('clients',{
      url:'/clients',
      templateUrl : 'app/client/clients.template.html',
      controller: 'Clients',
      controllerAs: 'clients'
    })
    .state('newClient',{
      url:'/clients/new',
      templateUrl : 'app/client/client.template.html',
      controller: 'Client',
      controllerAs: 'client'
    })
    .state('client',{
      url:'/clients/:objectId',
      templateUrl : 'app/client/client.template.html',
      controller: 'Client',
      controllerAs: 'client'
    })
      
  $urlRouterProvider.otherwise('/client');
}
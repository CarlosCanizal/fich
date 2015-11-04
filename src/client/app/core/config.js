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
    .state('services',{
      url:'/services',
      templateUrl : 'app/service/services.template.html',
      controller: 'Services',
      controllerAs: 'services'
    })
    .state('newService',{
      url:'/services/new',
      templateUrl : 'app/service/service.template.html',
      controller: 'Service',
      controllerAs: 'service'
    })
    .state('service',{
      url:'/services/:objectId',
      templateUrl : 'app/service/service.template.html',
      controller: 'Service',
      controllerAs: 'service'
    })
    .state('login',{
      url:'/login',
      templateUrl : 'app/login/login.template.html',
      controller: 'Login',
      controllerAs: 'login'
    })
    .state('register',{
      url:'/register',
      templateUrl : 'app/register/register.template.html',
      controller: 'Register',
      controllerAs: 'register'
    })
      
  $urlRouterProvider.otherwise('/client');
}

(function() {
  var app = angular.module('loginApp', ['ui.router']);
  
   app.run(function($rootScope, $location, $state, LoginService) {
     console.clear();
     console.log('running');
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login/login.html',
        controller : 'LoginController'
      })
      .state('home', {
        url : '/home',
        templateUrl : 'login/home.html',
        controller : 'HomeController'
      })
      
      .state('logout', {
        url : '/logout',
        templateUrl : 'login/logout.html',
        controller : 'HomeController'
      });
      
       /*$urlRouterProvider.otherwise('/login');*/
  }]);
 
})();
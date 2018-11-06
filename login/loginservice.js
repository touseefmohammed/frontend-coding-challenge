var app = angular.module('loginApp');
  
  app.factory('LoginService', function($rootScope) {
    var admin = 'admin';
    var pass = 'password';
    $rootScope.isAuthenticated = false;
      
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
          $rootScope.isAuthenticated = true;
        return isAuthenticated;
      },
      isAuthenticated : function() {
          $rootScope.isAuthenticated = false;
        return isAuthenticated;
      }
    };
    
  });
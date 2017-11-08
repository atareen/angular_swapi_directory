var services = angular.module('swapi', []);
 
services.factory('SwapiService', ['$http', 
  function($http){
    function Swapi(){};
 
    Swapi.domain = 'http://swapi.co/api';
 
    Swapi.people = function(){
      var path = '/people';
      var url = Swapi.domain + path;
 	
 	// this connects to main.js on line 22
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };

    Swapi.films = function() {
      var path = '/films';
      var url = Swapi.domain + path;
     
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };
    
      Swapi.species = function() {
      var path = '/species';
      var url = Swapi.domain + path;
     
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };
    
     Swapi.planets = function() {
      var path = '/planets';
      var url = Swapi.domain + path;
     
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };
        
    return Swapi;
  }
]);
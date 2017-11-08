// modules are like the main methods in angular. The first parameter is the app name and the second is an array of dependencies of the app.

var emersonAngularApp = angular.module('EmersonAngularApp', ['ngRoute', 'swapi']);

// configure the routing for this app: i.e. set the controller when you hit a view. e.g. when the template url hits views/main.html, use the Main controller.

/*
If you want to navigate to different pages in your application, but you also want the application to be a SPA (Single Page Application), with no page reloading, you can use the ngRoute module.
The ngRoute module routes your application to different pages without reloading the entire application.

Live example: https://www.w3schools.com/angular/tryit.asp?filename=try_ng_routing

*/

emersonAngularApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl',
      controllerAs : 'main'
    })
    .when('/character/:id', {
      templateUrl: 'views/character.html',
      controller: 'CharacterCtrl',
      controllerAs: 'character'
    })
    .when('/movie/:id', {
      templateUrl: 'views/movie.html',
      controller: 'MovieCtrl',
      controllerAs: 'movie'
    })
    .when('/specie/:id', {
      templateUrl: 'views/specie.html',
      controller: 'SpecieCtrl',
      controllerAs: 'specie'
    })
    .when('/planet/:id', {
      templateUrl: 'views/planet.html',
      controller: 'PlanetCtrl',
      controllerAs: 'planet'
    })
    .otherwise('/');
  }
]);
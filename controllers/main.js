emersonAngularApp.controller('MainCtrl', [ 
  '$scope',
  'SwapiService',
  function($scope, SwapiService){
    $scope.message = "Hello Angular";
 	
 	// create array of objects
 	var emersons = [
 	{name: "Jegan Canddassamy", likes:0,dislikes:0},
 	{name: "Jeff Lauder", likes:0,dislikes:0},
 	{name: "Mark Johnson", likes:0,dislikes:0},
 	{name: "Beth Marceau", likes:0,dislikes:0},
 	{name: "Anil Nair", likes:0,dislikes:0},
 	];
 	
 	// attach array to scope variable
 	$scope.emersons = emersons;
 	$scope.rowLimit = 3;
 	
 	// make function to increment likes
 	$scope.incrementLikes = function(emerson){
 		emerson.likes++;
 	}
 	
 	// make function to increment dislikes
 	$scope.incrementDislikes = function(emerson){
 		emerson.dislikes++;
 	}
 	
    $scope.films = {};
    
 	// the following line calls the people function in swapi.js
    SwapiService.people()
      .then(function(data) {
        $scope.data = data.data.results;
     
        angular.forEach($scope.data, function(person) {
          // creating a list of all possible films
          angular.forEach(person.films, function(film) {
            $scope.films[film] = '';
          });
        });
    });
     
    SwapiService.species()
      .then(function(data) {
        $scope.specieData = data.data.results;
     
        angular.forEach($scope.specieData, function(specie) {
          // creating a list of all possible films
          angular.forEach(specie.films, function(film) {
            $scope.films[film] = '';
          });
        });
    }); 
    
    SwapiService.planets()
      .then(function(data) {
        $scope.planetData = data.data.results;
     
        angular.forEach($scope.planetData, function(planet) {
          // creating a list of all possible films
          angular.forEach(planet.films, function(film) {
            $scope.films[film] = '';
          });
        });
    }); 
     
    SwapiService.films()
      .then(function(data) {
        $scope.filmInfo = data.data.results;
     
        // adding film names to list of films
        angular.forEach($scope.filmInfo, function(film) {
          var api_call = 'http://swapi.co/api/films/' + film.episode_id + '/';
          $scope.films[api_call] = {
              'title': film.title,
              'episode_id': film.episode_id
            };
        }); 
    });

 
  }
]);
emersonAngularApp.controller('PlanetCtrl', [
  '$routeParams',
  '$scope',
  'SwapiService',
  function($routeParams, $scope, SwapiService){
 
    $scope.planet = {};
    $scope.loading = true;
    $scope.id = $routeParams.id;
 
    SwapiService.planets()
      .then(function(data) {
        angular.forEach(data.data.results, function(planet) {
          if (planet.name.toLowerCase() === $routeParams.id.toLowerCase()) {
            angular.copy(planet, $scope.planet);
            console.log(planet);
          }
        });
        $scope.loading = false;
    });
  }
]);
emersonAngularApp.controller('SpecieCtrl', [
  '$routeParams',
  '$scope',
  'SwapiService',
  function($routeParams, $scope, SwapiService){
 
    $scope.specie = {};
    $scope.loading = true;
    $scope.id = $routeParams.id;
 
    SwapiService.species()
      .then(function(data) {
        angular.forEach(data.data.results, function(specie) {
          if (specie.name.toLowerCase() === $routeParams.id.toLowerCase()) {
            angular.copy(specie, $scope.specie);
            console.log(specie);
          }
        });
        $scope.loading = false;
    });
  }
]);
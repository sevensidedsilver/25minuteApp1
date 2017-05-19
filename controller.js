angular.module('app').controller('ctrl', function($scope, service){


  service.getData().then(function(response){
    $scope.starships = response.data.results
    console.table($scope.starships)
  })


})





angular.module('app').service('service', function($http){

	this.getData = function(){
		return $http.get('http://swapi.co/api/starships', "http://swapi.co/api/starships/?page=2")
	}

	})

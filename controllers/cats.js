angular.module('catsApp', [])
  .controller('CatsController', function($scope, $http) {
  	
	$http.get('/api/cats')
		.success(function(data){
			$scope.cats = data;
		})
		.error(function(data) {
			console.log('Error:' + data)
		});
	
	$scope.saveNew = function(){
		var newCat = { name : $scope.newCatName };
		$http.post('api/cats', newCat);
		//TODO: if succesfully added
		$scope.cats.push(newCat); 
	} 

  });
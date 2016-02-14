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
		$http.post('api/cats', newCat)
			.success(function(data){
				$scope.cats.push(newCat); 
				$scope.newCatName = '';
			})
			.error(function(data) {
				console.log('Error:' + data)
			});;
	};

	$scope.delete = function(cat) {
		$http.delete('/api/cats/' + cat._id)
            .success(function(data) {
                var deletedCatIndex = $scope.cats.indexOf(cat);
                $scope.cats.splice(deletedCatIndex, 1);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
	};

  });
var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController',[
  '$scope' , function($scope) {

  	//$scope.password = "Initial Value";

	$scope.submit = function() {
		
  }
  $scope.help = function() {
		console.log($scope.password);
  }
}]);

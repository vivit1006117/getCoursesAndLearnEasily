var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController',[
  '$scope' , function($scope) {

      controller = this;
  	//$scope.password = "Initial Value";

      controller.login.password = $scope.login.password;
      controller.submit = function() {
        console.log(controller.login.password);
  }
  $scope.help = function() {
		console.log($scope.password);
  }
}]);

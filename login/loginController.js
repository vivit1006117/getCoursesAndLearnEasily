var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
    controller = this;

    $scope.helpEnabled = false;
      $scope.submit = function() {
          controller.password = $scope.password;
          controller.loginId = $scope.loginId;
         // loginFacade.login(controller.loginId, controller.password);
        console.log($scope.password);
        console.log($scope.loginId);
      }
      $scope.help = function() {
		$scope.helpEnabled = true;
      }
      $scope.brief = "Why do we need to login and register";
      return controller.init;
}]);

var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', function ($scope) {
    "use strict";
    var controller = this;

    $scope.resiter = false;
    $scope.helpEnabled = false;
    $scope.submit = function () {
        $scope.resiter = false;
        $scope.helpEnabled = false;
        controller.password = $scope.password;
        controller.loginId = $scope.loginId;
         // loginFacade.login(controller.loginId, controller.password);
        console.log($scope.password);
        console.log($scope.loginId);
    };
    $scope.help = function () {
        $scope.helpEnabled = true;
        $scope.resiter = false;
    };
    $scope.register = function () {
        $scope.resiter = true;
        $scope.helpEnabled = false;
        $scope.hasToGoto = "goTo(\"../userDetail/User_details_form.html\")";
    };
    $scope.brief = "Why do we need to login and register";
    return controller.init;
}]);

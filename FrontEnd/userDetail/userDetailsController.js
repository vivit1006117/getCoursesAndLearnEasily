var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$location', '$q', function ($scope, $location, $q) {
    "use strict";
    var controller = this;

    $scope.submit = function () {
        window.open("file:///Users/kvivek/majorProject/login/login.html");
    };
    return controller.init;
}]);
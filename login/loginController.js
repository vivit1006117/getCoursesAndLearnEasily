var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    "use strict";
    var controller = this;

    $scope.isSucess = false;
    $scope.resiter = false;
    $scope.helpEnabled = false;
    controller.credentials = null;
    $scope.submit = function () {
        $scope.resiter = false;
        $scope.helpEnabled = false;
        controller.password = $scope.password;
        controller.loginId = $scope.loginId;
        console.log($scope.password);
        console.log($scope.loginId);
        $q.when($http.get('login_promise/credential.json'))
            .then(function (response) {
                controller.credentials = response.data;
            });
        if (controller.credentials) {
            if (controller.credentials.loginPassword) {
                if (controller.credentials.loginPassword[0].loginId === controller.loginId && controller.credentials.loginPassword[0].password === controller.password) {
                    $scope.isSucess = true;
                    $scope.sucess = "you are sucessfully loged in";
                } else {
                    $scope.isSucess = true;
                    $scope.sucess = "your login has failed";
                }
            } else {
                $scope.isSucess = true;
                $scope.sucess = "your login has failed";
            }
        } else {
            $scope.isSucess = true;
            $scope.sucess = "your login has failed";
        }
//        return $q.when("login_promise/credential.json")
//            .then(function (result) {
//            return result;
//        
//        });
         // loginFacade.login(controller.loginId, controller.password);
    };
    $scope.help = function () {
        $scope.isSucess = false;
        $scope.helpEnabled = true;
        $scope.resiter = false;
    };
    $scope.register = function () {
        $scope.isSucess = false;
        $scope.resiter = true;
        $scope.helpEnabled = false;
        $scope.hasToGoto = "goTo(\"../userDetail/User_details_form.html\")";
    };
    $scope.brief = "Why do we need to login and register";
    return controller.init;
}]);

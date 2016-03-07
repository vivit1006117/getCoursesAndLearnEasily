var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/page1");

     $stateProvider
        .state('login', {
	           url: "/login",
	           templateUrl: "login/login.html"
	}).state("page2", {
            url:"/page2",
            templateUrl: "userDetail/user_details_form.html"
        })
        .state("page3", {
            url:"/page3",
            templateUrl: "There"
        });
});
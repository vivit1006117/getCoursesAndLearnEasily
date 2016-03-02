var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/page1");

     $stateProvider
        .state("page1", {
            url: "/page1",
            template: "Hello"
        })
        .state("page2", {
            url:"/page2",
            template: "World"
        })
        .state("page3", {
            url:"/page3",
            template: "There"
        });
});
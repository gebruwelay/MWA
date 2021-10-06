angular.module("covid", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "index.html",
            controller: "mainController",
            controllerAs: "ctrl"
        }).when("/covids", {
            templateUrl: "covid/covid.html",
            controller: "covidController",
            controllerAs: "covidCtrl"
        }).otherwise({
            redirectTo: "/"
            });
    }
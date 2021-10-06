angular.module("covid", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "index.html",
            controller: "mymainController",
            controllerAs: "ctrl"
        }).when("/covids", {
            templateUrl: "covid/covid.html",
            controller: "mycovidController",
            controllerAs: "covidCtrl"
        }).otherwise({
            redirectTo: "/"
            });
    }
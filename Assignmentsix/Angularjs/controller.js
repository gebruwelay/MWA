angular.module("covid", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "covid/covid.html",
            controller: "covidController",
            controllerAs: "covidCtrl"
        }).otherwise({
            redirectTo: "/"
            });
    }
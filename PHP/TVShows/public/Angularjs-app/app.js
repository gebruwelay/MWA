angular.module("tvShows",["ngRoute"]).config(config);

angular.module("tvShows", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/shows", {
            templateUrl: "angularjs-app/shows/shows.html",
            controller: "showsController",
           controllerAs: "showsCtrl"
        }).when("/shows/:id", {
            templateUrl: "angularjs-app/oneShow/show.html",
            controller: "showController",
           controllerAs: "showCtrl"
        })
        
        .otherwise({
            redirectTo: "/shows"
            });
    }
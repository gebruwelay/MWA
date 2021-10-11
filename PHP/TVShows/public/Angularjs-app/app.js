angular.module("tvShows",["ngRoute"]).config(config);

angular.module("tvShows", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/shows", {
            templateUrl: "angularjs-app/shows/shows.html",
            controller: "showsController",
           controllerAs: "showsCtrl"
        }).when("/shows/add", {
            templateUrl: "angularjs-app/addShow/add.html",
            controller: "addShowController",
           controllerAs: "vm"
        }).when("/shows/add/:id", {
            templateUrl: "angularjs-app/addSeason/add.html",
            controller: "addSeasonController",
           controllerAs: "seasonCtrl"
        }).when("/shows/:id", {
            templateUrl: "angularjs-app/oneShow/show.html",
            controller: "showController",
           controllerAs: "showCtrl"
        }).when("/shows/edit/:id", {
            templateUrl: "angularjs-app/editShow/edit.html",
            controller: "editShowController",
           controllerAs: "vm"
        }).when("/shows/edit/:id/season/:season_id", {
            templateUrl: "angularjs-app/editSeason/edit.html",
            controller: "editSeasonController",
           controllerAs: "vm"
        })
        .otherwise({
            redirectTo: "/shows"
            });
    }
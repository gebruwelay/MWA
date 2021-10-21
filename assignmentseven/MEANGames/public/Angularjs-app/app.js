
angular.module("meanGames", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/games", {
            templateUrl: "angularjs-app/games/games.html",
            controller: "gamesController",
           controllerAs: "gamesCtrl"
        })
        .when("/games/add", {
            templateUrl: "angularjs-app/addGame/add.html",
            controller: "addGameController",
           controllerAs: "vm"
        })
        .when("/games/edit/:id", {
            templateUrl: "angularjs-app/editGame/edit.html",
            controller: "editGameController",
           controllerAs: "vm"
        }).when("/games/:id", {
            templateUrl: "angularjs-app/oneGame/game.html",
            controller: "gameController",
           controllerAs: "gameCtrl"
        })
        .otherwise({
            redirectTo: "/games"
            });
    }
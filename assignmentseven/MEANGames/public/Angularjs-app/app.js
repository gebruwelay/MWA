
angular.module("meanGames", ["ngRoute"]).config(config);
function config($routeProvider) {
        $routeProvider.when("/games", {
            templateUrl: "angularjs-app/games/games.html",
            controller: "gamesController",
           controllerAs: "gamesCtrl"
        }).when("/games/:id", {
            templateUrl: "angularjs-app/oneGame/game.html",
            controller: "gameController",
           controllerAs: "gameCtrl"
        })
        
        .otherwise({
            redirectTo: "/games"
            });
    }
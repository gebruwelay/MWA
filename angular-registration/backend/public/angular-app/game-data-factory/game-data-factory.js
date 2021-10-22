angular.module("meanGames").factory("GameFactory", GameDataFactory);

function GameDataFactory($http) {
    return {
        getAllGames: allGames,
        getOneGame: oneGame,
        postGame: postGame
    };

    function allGames() {
        return $http.get("/api/games").then(complete).catch(failed);
    }

    function oneGame(id) {
        return $http.get("/api/games/"+id).then(complete).catch(failed);
    }

    function postGame(game) {
        return $http.post("/api/games/", game).then(complete).catch(failed);
    }

    function complete(response){
        console.log("I am in complete");
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}
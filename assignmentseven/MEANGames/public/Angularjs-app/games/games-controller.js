angular.module("meanGames").controller("gamesController",gamesController);

function gamesController(gamesFactory)
{
    const vm = this;
    gamesFactory.getAll().then(function (response){
        vm.games=response;
    });
}
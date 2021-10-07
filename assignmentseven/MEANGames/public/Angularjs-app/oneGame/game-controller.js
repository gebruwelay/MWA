angular.module("meanGames").controller("gameController",gameController);

function gameController(gamesFactory,$routeParams)
{
    const vm = this;
    gamesFactory.getOne($routeParams.id).then(function (response){
        vm.game=response;
    });
}
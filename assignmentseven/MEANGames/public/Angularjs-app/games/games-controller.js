angular.module("meanGames").controller("gamesController",gamesController);

function gamesController(gamesFactory)
{
    const vm = this;
    gamesFactory.getAll().then(function (response){
        vm.games=response;
    });

    vm.deleteGame = function (id) {
        gamesFactory.deleteOne(id).then(function (response){
            window.location.href="#!/shows.html";
        })
    }
}
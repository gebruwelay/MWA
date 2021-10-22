angular.module("meanGames").controller("GameController", GameController);

function GameController(GameFactory, $routeParams) {
    var vm= this;
    var id= $routeParams.id;
    GameFactory.getOneGame(id).then(function(response) {
        console.log(response);
        vm.game= response;
        vm.rating= _getStarRating(response.rate);
    });
}

function _getStarRating(rate) {
    return new Array(rate);
}
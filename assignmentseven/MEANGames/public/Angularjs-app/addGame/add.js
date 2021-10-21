angular.module("meanGames").controller("addGameController", addGameController);

function addGameController(gamesFactory) {
    const vm = this;

    vm.addGame = function () {
        let data = {
            title: vm.title,
            year: vm.year,
            minPlayers: vm.minPlayers,
            maxPlayers: vm.maxPlayers,
            minAge: vm.minAge,
            price: vm.price
        };
        if (vm.form.$valid) {
           gamesFactory.addOne(data).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
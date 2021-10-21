angular.module("meanGames").controller("editGameController", editGameController);

function editGameController(gamesFactory,$routeParams) {
    const vm = this;

    if($routeParams.id)
    {
    vm.id = $routeParams.id;
    gamesFactory.getOne($routeParams.id).then(function(response) {
    vm.show = response;
    vm.title= vm.show.title;
    vm.year = vm.show.year;
    vm.minPlayers = vm.show.minPlayers;
    vm.maxPlayers = vm.show.maxPlayers;
    vm.minAge = vm.show.minAge;
    vm.price = vm.show.price;
        });
    }

    vm.editGame = function () {
      
        let data = {
            title: vm.title,
            year: vm.year,
            minPlayers: vm.minPlayers,
            maxPlayers: vm.maxPlayers,
            minAge: vm.minAge,
            price: vm.price,
            rate:4
        };

        if (vm.form.$valid) {
            gamesFactory.updateOne(data,vm.id).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
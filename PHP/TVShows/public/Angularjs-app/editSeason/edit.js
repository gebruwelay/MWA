angular.module("tvShows").controller("editSeasonController", editSeasonController);

function editSeasonController(showsFactory,$routeParams) {
    const vm = this;

    if($routeParams.id)
    {
    vm.id = $routeParams.id;
    vm.season_id = $routeParams.season_id;
    showsFactory.getOneSeason($routeParams.id,vm.season_id).then(function(response) {
    vm.single = response;
    vm.season = vm.single.name;
    vm.part= vm.single.part;
    vm.releaseDate = new Date(vm.single.releaseDate);
        });
    }

    vm.editSeason = function () {
      
        let data = {
            season: {
            name: vm.season,
            part: vm.part,
            releaseDate: vm.releaseDate
            }
        };

        if (vm.form.$valid) {
            showsFactory.updateOneSeason(vm.id,vm.season_id,data).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
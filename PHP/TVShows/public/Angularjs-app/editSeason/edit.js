angular.module("tvShows").controller("editSeasonController", editSeasonController);

function editSeasonController(showsFactory,$routeParams) {
    const vm = this;

    if($routeParams.id)
    {
    vm.id = $routeParams.id;
    showsFactory.getOneSeason($routeParams.id).then(function(response) {
    vm.single = response;
    vm.season = vm.single.season;
    vm.part= vm.single.part;
    vm.releaseDate = new Date(vm.single.releaseDate);
        });
    }

    vm.editSeason = function () {
      
        let data = {
            season: vm.season,
            part: vm.part,
            releaseDate: vm.releaseDate
        };

        if (vm.form.$valid) {
            showsFactory.updateOneSeason(data,vm.id).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
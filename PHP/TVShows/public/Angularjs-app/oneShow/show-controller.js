angular.module("tvShows").controller("showController",showController);

function showController(showsFactory,$routeParams)
{
    const vm = this;
    showsFactory.getOne($routeParams.id).then(function (response){
        vm.show=response;
    });

    vm.deleteSeason = function (show_id,season_id) {
        if (show_id && season_id) {
            showsFactory.deleteOneSeason(show_id,season_id).then(function (response) {
                window.location.href = "#!/shows.html";
            });
        }
    }
}
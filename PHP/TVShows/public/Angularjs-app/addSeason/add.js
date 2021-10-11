angular.module("tvShows").controller("addSeasonController", addSeasonController);

function addSeasonController(showsFactory,$routeParams) {
    const seasonCtrl = this;

    seasonCtrl.addSeason = function () {
        let data = {
           season:{ 
            name: seasonCtrl.season,
            part: seasonCtrl.part,
            releaseDate: seasonCtrl.releaseDate
           }
        };
        if (seasonCtrl.form.$valid) {
            showsFactory.addOneSeason($routeParams.id, data).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
angular.module("tvShows").controller("addSeasonController", addSeasonController);

function addSeasonController(showsFactory) {
    const seasonCtrl = this;

    seasonCtrl.addSeason = function () {
        let data = {
            name: seasonCtrl.season,
            part: seasonCtrl.part,
            releaseDate: seasonCtrl.releaseDate
        };
        if (seasonCtrl.form.$valid) {
            showsFactory.addOne(data).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
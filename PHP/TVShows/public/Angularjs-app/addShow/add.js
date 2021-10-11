angular.module("tvShows").controller("addShowController", addShowController);

function addShowController(showsFactory) {
    const vm = this;

    vm.addShow = function () {
        let data = {
            name: vm.name,
            season: [],
            releaseDate: vm.releaseDate
        };
        if (vm.form.$valid) {
            showsFactory.addOne(data).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
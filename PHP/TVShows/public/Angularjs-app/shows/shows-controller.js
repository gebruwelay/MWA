angular.module("tvShows").controller("showsController",showsController);

function showsController(showsFactory)
{
    const vm = this;
    vm.name=null;
    showsFactory.getAll().then(function (response){
        vm.shows=response;
    });

    vm.deleteOne = function (id) {

        if (id) {
            showsFactory.deleteOne(id).then(function (response) {
                window.location.href = "#!/shows.html";
            });
        }
    }
    vm.deleteSeason = function (id) {
        
    }
    vm.getLimit = function () {
        if (vm.name) {
            showsFactory.getAll(vm.name).then(function (response) {
                vm.shows = response;
            });
        };
    };
}
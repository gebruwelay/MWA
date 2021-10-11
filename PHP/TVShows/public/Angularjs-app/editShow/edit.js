angular.module("tvShows").controller("editShowController", editShowController);

function editShowController(showsFactory,$routeParams) {
    const vm = this;

    if($routeParams.id)
    {
    vm.id = $routeParams.id;
    showsFactory.getOne($routeParams.id).then(function(response) {
    vm.show = response;
    vm.name= vm.show.name;
    vm.releaseDate = new Date(vm.show.releaseDate);
        });
    }

    vm.editShow = function () {
      
        let data = {
            name: vm.name,
            releaseDate: vm.releaseDate
        };

        if (vm.form.$valid) {
            showsFactory.updateOne(data,vm.id).then(function(response){
                window.location.href="#!/shows.html";
            });
        }
    }

}
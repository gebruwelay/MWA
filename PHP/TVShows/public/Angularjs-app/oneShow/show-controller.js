angular.module("tvShows").controller("showController",showController);

function showController(showsFactory,$routeParams)
{
    const vm = this;
    showsFactory.getOne($routeParams.id).then(function (response){
        vm.show=response;
    });
}
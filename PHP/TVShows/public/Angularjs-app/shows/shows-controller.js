angular.module("tvShows").controller("showsController",showsController);

function showsController(showsFactory)
{
    const vm = this;
    showsFactory.getAll().then(function (response){
        vm.shows=response;
    });
}
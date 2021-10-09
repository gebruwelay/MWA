angular.module("jobSearch").controller("jobController", jobController);

function jobController(singleFactory,$routeParams) {
    const vm = this;
    if($routeParams.id)
    {
        singleFactory.getOne($routeParams.id).then(function(response) {
            vm.job = response;
            console.log(response);
        });
    }

}
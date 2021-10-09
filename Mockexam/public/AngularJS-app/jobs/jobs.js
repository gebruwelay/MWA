angular.module("jobSearch").controller("jobsController", jobsController);

function jobsController(singleFactory) {
    vm = this;
    vm.count =null;
    vm.lng= null;
    vm.lat = null;
    vm.maxDis=null;

    singleFactory.getAll().then(function (response) {
        vm.jobs = response;
    });

    vm.getLimit = function () {
        console.log(vm.maxDis);
        if (vm.count || (vm.lng&&vm.lat) || vm.maxDis) {
            singleFactory.getAll(vm.count,vm.lng, vm.lat, vm.maxDis).then(function (response) {
                vm.jobs = response;
            });
        };
    };

    vm.deleteOne = function (id) {

        if (id) {
            singleFactory.deleteOne(id).then(function (response) {
                window.location.href = "#!/jobs.html";
            });
        }
    }
}
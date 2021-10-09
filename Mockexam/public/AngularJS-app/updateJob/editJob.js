angular.module("jobSearch").controller("editJobController", addJobController);

function addJobController(singleFactory,$routeParams) {
    const vm = this;

    if($routeParams.id)
    {
        vm.id = $routeParams.id;
        singleFactory.getOne($routeParams.id).then(function(response) {
    vm.job = response;
    vm.title= vm.job.title;
    vm.salary = vm.job.salary;
    vm.description = vm.job.description;
    vm.latitude = vm.job.location.coordinates[1];
    vm.longitude = vm.job.location.coordinates[0];
    vm.exprience = vm.job.exprience;
    vm.skills = vm.job.skills;
    vm.postDate = vm.job.postDate;
        });
    }

    vm.editJob = function () {
      
        let data = {
            title: vm.title,
            salary: vm.salary,
            description: vm.description,
            lng: vm.longitude,
            lat: vm.latitude,
            exprience: vm.exprience,
            skills: vm.skills,
            postDate: vm.postDate
        };

        if (vm.form.$valid) {
            singleFactory.updateOne(data,vm.id).then(function(response){
                window.location.href="#!/jobs.html";
            });
        }
    }

}
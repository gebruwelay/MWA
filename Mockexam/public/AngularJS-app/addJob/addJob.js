angular.module("jobSearch").controller("addJobController", addJobController);

function addJobController(singleFactory) {
    const vm = this;



    vm.addJob = function () {
      
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
            singleFactory.addOne(data).then(function(response){
                window.location.href="#!/jobs.html";
            });
        }
    }

}
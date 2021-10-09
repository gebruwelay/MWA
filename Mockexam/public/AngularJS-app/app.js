angular.module("jobSearch", ['ngRoute']).config(config);

function config($routeProvider) {

    $routeProvider.when('/',{
        templateUrl: "AngularJS-app/jobs/jobs.html",
        controller:"jobsController",
        controllerAs:"jobsCtrl"
    }).when('/jobs/add',{
        templateUrl: "AngularJS-app/addJob/addJob.html",
        controller: "addJobController",
        controllerAs: "vm"
    }).when('/jobs/edit/:id',{
        templateUrl: "AngularJS-app/updateJob/editJob.html",
        controller: "editJobController",
        controllerAs: "vm"
    }).when('/jobs/:id',{
        templateUrl: "AngularJS-app/job/job.html",
        controller: "jobController",
        controllerAs: "jobCtrl"
    })
    .otherwise({
        redirectTo: "/"
    })
}
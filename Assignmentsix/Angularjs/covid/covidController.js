angular.module("covid",[]).controller("covidController",covidController);

function covidController (covidFactory){
    const vm =this;
    covidFactory.getAll().then((respnse)=>{
        vm.covids = response;
    });
}
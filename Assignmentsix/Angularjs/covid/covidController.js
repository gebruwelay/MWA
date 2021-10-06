angular.module("covid",[]).controller("mycovidController",covidFunc);

function covidFunc (covidFactory){
    const vm =this;
    covidFactory.complete.then((respnse)=>{
        vm.covids = response;
    });
}
angular.module("covid",[]).controller("mymainController",mainController);
 function mainController (){
    const vm = this;
    vm.message = "welcome to the covid home page";
}
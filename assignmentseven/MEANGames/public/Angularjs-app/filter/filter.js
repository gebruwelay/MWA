angular.module('meanGames').filter('rateFilter',dateFilter);


function dateFilter()
{
    return function (rate){
    if(parseInt(rate)>=4)
    return rate +" "+ "Good job";
    else 
    return  rate;
}
}
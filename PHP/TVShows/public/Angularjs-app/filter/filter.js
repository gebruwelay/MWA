angular.module('tvShows').filter('dateFilter',dateFilter);


function dateFilter()
{
    return function (date){
    var result = new Date(date);
    return result.toISOString().substring(0, 10);
}
}
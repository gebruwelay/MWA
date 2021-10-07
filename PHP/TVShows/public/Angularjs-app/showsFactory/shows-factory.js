angular.module("tvShows").factory("showsFactory", showsFactory);

function showsFactory($http){
    return {
        getAll:getAll,
        getOne: getOne
    }
    function getAll(){
        return  $http.get("/api/shows").then(complete).catch(failed);
    }
    function getOne(id){
        return  $http.get("/api/shows/"+id).then(complete).catch(failed);
    }
    function complete (response)
    {
        return response.data
    }
    function failed(error)
    {
        return error.message
    }

}
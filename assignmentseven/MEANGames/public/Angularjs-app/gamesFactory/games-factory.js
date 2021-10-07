angular.module("meanGames").factory("gamesFactory", gamesFactory);

function gamesFactory($http){
    return {
        getAll:getAll,
        getOne: getOne
    }
    function getAll(){
        return  $http.get("/api/games").then(complete).catch(failed);
    }
    function getOne(id){
        return  $http.get("/api/games/"+id).then(complete).catch(failed);
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
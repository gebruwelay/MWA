angular.module("meanGames").factory("gamesFactory", gamesFactory);

function gamesFactory($http){
    return {
        getAll:getAll,
        getOne: getOne,
        addOne:addOne,
        deleteOne:deleteOne,
        updateOne:updateOne
    }
    function addOne(data) {
        return $http.post("/api/games", data).then(complete).catch(failed);
    } 
    function deleteOne (id) {
        return $http.delete("/api/games/"+id).then(complete).catch(failed);
    } 
    function updateOne(data,id){
        console.log(data);
        return $http.put("/api/games/"+id, data).then(complete).catch(failed);
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
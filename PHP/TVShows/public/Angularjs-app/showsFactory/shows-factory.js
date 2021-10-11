angular.module("tvShows").factory("showsFactory", showsFactory);

function showsFactory($http){
    return {
        addOne: addOne,
        getAll:getAll,
        getOne: getOne,
        updateOne: updateOne,
        deleteOne: deleteOne,
        addOneSeason: addOneSeason,
        updateOneSeason: updateOneSeason,
        deleteOneSeason: deleteOneSeason,
        getOneSeason: getOneSeason
    }
    function deleteOne (id) {
        return $http.delete("/api/shows/"+id).then(complete).catch(failed);
    } 
    function deleteOneSeason (show_id,season_id) {
        return $http.delete("/api/shows/"+show_id+"/seasons/"+season_id).then(complete).catch(failed);
    }
    function updateOne(data,id){
        return $http.put("/api/shows/"+id, data).then(complete).catch(failed);
    }
    function updateOneSeason(show_id,season_id,data){
        return $http.put("/api/shows/"+show_id+"/seasons/"+season_id, data).then(complete).catch(failed);
    }

    function getAll(name) {
        if(name){
        return $http.get("/api/shows?name="+name)
        .then(complete).catch(failed);
        }
        else {
            return $http.get("/api/shows").then(complete).catch(failed);
        }
    }
    function getOne(id){
        return  $http.get("/api/shows/"+id).then(complete).catch(failed);
    }function getOneSeason(show_id,season_id){
        return  $http.get("/api/shows/"+show_id+"/seasons/"+season_id).then(complete).catch(failed);
    }
    function addOne(data) {
        return $http.post("/api/shows", data).then(complete).catch(failed);
    } 
    function addOneSeason(id, data) {
        return $http.post("/api/shows/"+id+"/seasons", data).then(complete).catch(failed);
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
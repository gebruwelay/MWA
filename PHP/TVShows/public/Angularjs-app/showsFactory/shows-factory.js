angular.module("tvShows").factory("showsFactory", showsFactory);

function showsFactory($http){
    return {
        addOne: addOne,
        getAll:getAll,
        getOne: getOne,
        updateOne: updateOne,
        deleteOne: deleteOne
    }
    function deleteOne (id) {
        return $http.delete("/api/shows/"+id).then(complete).catch(failed);
    }
    function updateOne(data,id){
        return $http.put("/api/shows/"+id, data).then(complete).catch(failed);
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
    }
    function addOne(data) {
        return $http.post("/api/shows", data).then(complete).catch(failed);
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
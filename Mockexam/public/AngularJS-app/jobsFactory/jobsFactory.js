angular.module("jobSearch").factory("singleFactory", singleFactory);


function singleFactory($http) {
    return {
        addOne: addOne,
        getAll: getAll,
        getOne:getOne,
        updateOne: updateOne,
        deleteOne: deleteOne,
    };
    function deleteOne (id) {
        return $http.delete("/api/jobs/"+id).then(complete).catch(failed);
    }
    function updateOne(data,id){
        return $http.put("/api/jobs/"+id, data).then(complete).catch(failed);
    }
    function getOne(id){
        return $http.get("/api/jobs/"+id).then(complete).catch(failed);
    }
    function getAll(count,lng,lat,maxDis) {
        if(count || (lng &&lat)){
        return $http.get("/api/jobs?count="+count+"&lng="+lng+"&lat="+lat +"&maxDis="+ maxDis)
        .then(complete).catch(failed);
        }
        else {
            return $http.get("/api/jobs").then(complete).catch(failed);
        }
    }

    function addOne(data) {
        return $http.post("/api/jobs", data).then(complete).catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.message;
    }
}
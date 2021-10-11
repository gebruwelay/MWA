
const mongoose = require('mongoose');
const shows = mongoose.model("Show");
const objectId = require('mongodb').ObjectId



const deleteOne = (req,res)=>{
    let id;
    objectId.isValid( req.params.id)?
    id = objectId(req.params.id) :
    res.status(400).json({"message":"invalid id"});

    shows.findByIdAndRemove(id).exec((err,data)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
        }

        res.status(200).json(data);
    })
}

const edit = (req, res) => {
    let id ;
     objectId.isValid( req.params.id)?
        id = objectId(req.params.id) :
        res.status(400).json({"message":"invalid id"});

   shows.findById(id).exec((err,data)=>{
       if(err)
       {
           res.status(500).json({"message":err.message});
       }
       else if(!data)
       {
           res.status(404).json({"message":"id not found"});
       }
    
     data.name = req.body.name;
     data.season =req.body.season;
     data.releaseDate = req.body.releaseDate;
     data.save((err, result)=> {
         if(err)
         {
             res.status(500).json({"message": err.message})
             return;
         }

         res.status(200).json(result);
     })
   })
}

const addOne = (req, res) => {
    let data = {};

    if (req.body) {
        data.name = req.body.name;
        data.season=req.body.season;
        data.releaseDate = new Date(req.body.releaseDate);
    }
    shows.create(data, (err, data) => {
        if (err) {
            res.status(500).json({ "message": err.message });
            return;
        }
        res.status(200).json(data);
    })
}
const getOne = (req, res) => {
    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
    shows.findById(id).exec((err, data) => {
        if (err) {
            res.status(500).json({ "message": "failed to retrieve the data" });
            return;
        }
        res.status(200).json(data);
    })
}
const getAll = (req, res) => {
    let count = 6;
    let query = {};

    if(req.query.name)
    {
        query.name = req.query.name;
    }

    if (req.query.count && req.query.count <= 9) {
        count = parseInt(req.query.count);
    }
    if(req.query)
    if(isNaN(count))
    {
        res.status(404).json({"message":"invalid id"});
    }
    shows.find(query).limit(count).exec((err, data) => {
        if (err) {
            console.log(err.message);
            res.status(500).json({ "message": "failed to retrieve the data" });
            return;
        }
        res.status(200).json(data)
    });


}

    module.exports = {
        getAll: getAll,
        getOne: getOne,
        delete:deleteOne,
        create: addOne,
        edit:edit
    }
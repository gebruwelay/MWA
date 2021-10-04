
const jsonFile = require("../data/games.json")
const mongoose = require('mongoose');
const games = mongoose.model("Game");
const objectId = require('mongodb').ObjectId




const deleteOne = (req,res)=>{
    let id;
    objectId.isValid( req.params.id)?
    id = objectId(req.params.id) :
    res.status(400).json({"message":"invalid id"});

    games.findByIdAndRemove(id).exec((err,data)=>{
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

   games.findById(id).select("-reviews -publishers").exec((err,data)=>{
       if(err)
       {
           res.status(500).json({"message":err.message});
       }
       else if(!data)
       {
           res.status(404).json({"message":"id not found"});
       }
    
     data.title = req.body.title;
     data.price = parseFloat(req.body.price);
     data.designer = req.body.designer;
     data.players = req.body.players;
     data.rate = parseInt(req.body.rate);
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
        data.title = req.body.title;
        data.price = req.body.price;
        data.designers = req.body.designers;
        data.players = req.body.players;
        data.rate = req.body.rate;
    }
    games.create(data, (err, data) => {
        if (err) {
            res.status(500).json({ "message": "failed to create the data" });
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
    games.findById(id).exec((err, data) => {
        if (err) {
            res.status(500).json({ "message": "failed to retrieve the data" });
            return;
        }
        res.status(200).json(data);
    })
}
const getAll = (req, res) => {
    let count = 6;
    if (req.query.count && req.query.count <= 9) {
        count = parseInt(req.query.count);
    }
    games.find({}).limit(count).exec((err, data) => {
        if (err) {
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
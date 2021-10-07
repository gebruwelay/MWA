
const mongoose = require('mongoose');
const games = mongoose.model("Game");
const objectId = require('mongodb').ObjectId

const _deletePublisher = (req,res,game)=> {
 
    let id ;
    if (objectId.isValid(req.params.publisherID)) {
        id = objectId(req.params.publisherID);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }

    game.publisher.remove();

    game.save((err,result)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }

        res.status(200).json(result);
    })
}

const deletePub = (req,res)=> {

    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }

   

    games.findById(id).select("publisher").exec((err,game)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
      _deletePublisher(req,res,game);
    })

}

const _updatePublisher = (req,res,game)=> {
 

    if(req.body)
    {
        game.publisher.name = req.body.publisher.name;
        game.publisher.country = req.body.publisher.country;
    }

    game.save((err,result)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }

        res.status(200).json(result);
    })
}

const update = (req,res)=> {

    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
    games.findById(id).select("publisher").exec((err,game)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
      _updatePublisher(req,res,game);
    })

}

const getOne= (req, res) => {
    
    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
    games.findById(id).select("publisher").exec((err,data)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        
        res.status(200).json(data);

    })
}

const get= (req, res) => {
    
    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
    games.findById(id).select("publisher").exec((err,data)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        
        res.status(200).json(data);

    })
}

const _addPublisher = (req,res,game)=> {
    
    if(req.body)
    {
        console.log("I am ");
        console.log(game);
        game.publisher.name = req.body.publisher.name;
        game.publisher.country = req.body.publisher.country;
    }

    game.save(data).exec((err,result)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }

        res.status(200).json(result);
    })
}

const add = (req,res)=> {

    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }

   

    games.findById(id).select("publisher").exec((err,game)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
      _addPublisher(req,res,game);
    })

}

module.exports = {
    add: add,
    update: update,
    delete: deletePub,
    get:get,
    getOne:getOne
}


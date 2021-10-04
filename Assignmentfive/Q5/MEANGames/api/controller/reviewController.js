
const mongoose = require('mongoose');
const games = mongoose.model("Game");
const objectId = require('mongodb').ObjectId

const _deleteReview = (req,res,game)=> {
 
   game.review.remove();

    game.save((err,result)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }

        res.status(200).json(result);
    })
}

const deleteRev = (req,res)=> {

    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }

   

    games.findById(id).select("review").exec((err,game)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        _deleteReview(req,res,game);
    })

}

const _updateReview = (req,res,game)=> {
  
    if(req.body)
    {
        game.name = req.body.name;
        game.review = req.body.review;
        game.date = req.body.date;
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

   

    games.findById(id).select("review").exec((err,game)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        _updateReview(req,res,game);
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
    games.findById(id).select("review").exec((err,data)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        
        res.status(200).json(data);

    })
}

const _addReview = (req,res,game)=> {
    if(req.body)
    {
        game.name = req.body.name;
        game.review = req.body.review;
        game.date = req.body.date;
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

   

    games.findById(id).select("review").exec((err,game)=>{
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
    delete: deleteRev,
    get:get
}


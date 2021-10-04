
const mongoose = require('mongoose');
const shows = mongoose.model("Show");
const objectId = require('mongodb').ObjectId

const _deleteSeason = (req,res,show)=> {
 
    let id;
    if (objectId.isValid(req.params.seasonID)) {
        id = objectId(req.params.seasonID);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
    let item = []
     show.season.find(itm=>{
        if(!itm._id.equals(id)){
            item.push(itm);
        }
        
        });
    show.season=item; 

    show.save((err,result)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        res.status(200).json(result);
    })
}

const deleteSeason = (req,res)=> {

    let id;
    if (objectId.isValid(req.params.id)) {
        id = objectId(req.params.id);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }

    shows.findById(id).select("season").exec((err,show)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        _deleteSeason(req,res,show);
    })

}
const _updateSeason= (req,res,show)=> {
  
    let id;
    if (objectId.isValid(req.params.seasonID)) {
        id = objectId(req.params.seasonID);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
    let data = {};
    if(req.body)
    {
        data.name = req.body.season.name;
        data.part = req.body.season.part;
        data.realeaseDate = new Date(req.body.releaseDate);
    }
    let item = show.season.find(itm=>{
        if(itm._id.equals(id)){
            return itm;
        }
        });
   
    let index = show.season.indexOf(item);
    show.season[index]= data; 

    show.save((err,result)=>{
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

   

    shows.findById(id).select("season").exec((err,show)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        _updateSeason(req,res,show);
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
    shows.findById(id).select("season").exec((err,data)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        
        res.status(200).json(data);

    })
}

const _selectSeason= (req,res,show)=> {
  
    let id;
    if (objectId.isValid(req.params.seasonID)) {
        id = objectId(req.params.seasonID);
    }
    else {
        res.status(400).json({ "message": "send a valid id" });
        return;
    }
 
    let item = show.season.find(itm=>{
        if(itm._id.equals(id)){
            return itm;
        }
        });
   
    res.status(200).json(item);

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
    shows.findById(id).select("season").exec((err,show)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
        
        _selectSeason(req,res,show)

    })
}

const _addSeason = (req,res,show)=> {
    let data = {

    }
    if(req.body)
    {
    
        data.name = req.body.season.name;
        data.part = req.body.season.part;
        console.log(req.body.season.realeaseDate);
        data.releaseDate = new Date(req.body.season.releaseDate);
    }
    show.season.push(data);
    show.save((err,result)=>{
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

   

    shows.findById(id).select("season").exec((err,show)=>{
        if(err)
        {
            res.status(500).json({"message":err.message});
            return;
        }
      _addSeason(req,res,show);
    })

}

module.exports = {
    add: add,
    update: update,
    delete: deleteSeason,
    get:get,
    getOne: getOne
}


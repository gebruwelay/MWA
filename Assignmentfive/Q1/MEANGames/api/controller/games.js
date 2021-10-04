
const jsonFile = require("../data/games.json")
const mongoose = require('mongoose');
const games = mongoose.model("Game");
const objectId = require('mongodb').ObjectId

//1- Create an Express Mongoose API application to get all games and get One game using all the 
//checking and things (limit, count, parsing, ...) we covered in class.


const getOne = (req,res)=>{
    let id ;
    if( objectId.isValid(req.params.id))
    {
        id= objectId(req.params.id);
    }
    else {
        res.status(400).json({"message": "send a valid id"});
        return;
    }
    games.findById(id).exec((err,data)=>{
        res.status(200).json(data);
    })
}
const getAll = (req,res)=>{
    let count = 6 ;
    if  (req.query.count&& req.query.count<=9)
    {
        count = parseInt(req.query.count);
    }
   games.find({}).limit(count).exec((err,data)=>{
        res.status(200).json(data)
    });
  
  }

 
  module.exports = {
      getAll : getAll,
      getOne : getOne
  }
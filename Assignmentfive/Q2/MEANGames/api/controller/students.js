
const jsonFile = require("../data/games.json")
const mongoose = require('mongoose');
const students = mongoose.model("Student");
const objectId = require('mongodb').ObjectId



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
    students.findById(id).exec((err,data)=>{
        res.status(200).json(data);
    })
}
const getAll = (req,res)=>{
    let count = 6 ;
    if  (req.query.count&& req.query.count<=9)
    {
        count = parseInt(req.query.count);
    }
   students.find({}).limit(count).exec((err,data)=>{
        res.status(200).json(data)
    });
  
  }

 
  module.exports = {
      getAll : getAll,
      getOne : getOne
  }
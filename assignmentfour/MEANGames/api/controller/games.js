
const jsonFile = require("../data/games.json")
const connection = require("../data/dbconnection");


const getAll = (req,res)=>{
    const db= connection.getConnection();
    let count = 6 ;
    if  (req.query.count&& req.query.count<=9)
    {
        count = parseInt(req.query.count);
    }
    let collection = db.collection("games");
   collection.find({}).limit(count).toArray((err,data)=>{
        res.status(200).json(data)
    });
  
  }

  const mulDos = (req,res) => {
     let num1 = req.params.num1;
     let num2 = req.query.num2;
     res.status(200).json({"result":num1*num2});
  }

  module.exports = {
      getAll : getAll,
      mulDos : mulDos
  }
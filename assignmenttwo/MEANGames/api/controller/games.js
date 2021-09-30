
const jsonFile = require("../data/games.json")

const getAll = (req,res)=>{
    res.status(200).json(jsonFile)
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
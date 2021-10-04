const mongoose = require('mongoose');

const seasonSchema= new mongoose.Schema({
    name: {
        type: String
    },
    part: {
        type:String
    },
    releaseDate: {
        type:Date
    }
})

const schema = new mongoose.Schema({
    name: {
     
        type:String,
        require:true
    },
    season:[seasonSchema],
    releaseDate: Date

});

mongoose.model("Show",schema, "shows");
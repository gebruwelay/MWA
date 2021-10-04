const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: {
     
        type:String,
        require:true
    },
    price:Number,
    designers: [String],
    players: {
        type: Number,
        min: 1,
        max:10
    },
    rate: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    }

});

mongoose.model("Game",schema, "games");
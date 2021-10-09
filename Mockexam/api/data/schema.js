//title, salary, location, description, experience, skills, postDate
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
 title :{
     type: String,
     required: true
 },
 salary: {
     type: Number,
     required: true
 },
 location: {
     type: {
         type: String
     },
     coordinates: {
        type:[Number],  
        index:"2dsphere"
     }
 },
 description:{
    type: String
 },
 exprience: {
     type: String
},
skills : [String],
postDate:{
    type:Date,
    required: true
}
});

mongoose.model("Job",schema,"jobs");
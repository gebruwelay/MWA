const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    gpa: {
        type: Number,
        required:true
    }
});

mongoose.model("Student",schema,"students");
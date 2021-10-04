
const mongoose = require('mongoose');
require('./studentSchema')
const dbName = "schoolDB";
const dburl= "mongodb://localhost:27017/"+dbName;

mongoose.connect(dburl);

mongoose.connection.on("connected", ()=>{
    console.log("database connected.");
});

mongoose.connection.on("disconnected",()=>{
    console.log("database disconnected");
})

process.on("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log("connection terminated by an application.");
        process.exit(0);
    })
})

process.on("SIGTERM",()=>{
    mongoose.connection.close(()=>{
        console.log("connection terminated by an application.");
        process.exit(0);
    });
})

process.on("SIGUSR2",()=>{
    mongoose.connection.close(()=>{
        console.log("connection halted by the application.");
        process.kill(process.pid, "SIGUSR2");
    })
})
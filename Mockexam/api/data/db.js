const mongoose = require('mongoose');

const dbName = process.env.DBNAME;
const dburl= process.env.DBURL+"/"+dbName;
require("./schema");
mongoose.connect(dburl);

mongoose.connection.on("connected", ()=> {
    console.log("db Connected");
});

mongoose.connection.on("disconnected",()=>{
    console.log("db Disconnected");
});

mongoose.connection.on("error",()=>{
    console.log("db Error");
});

mongoose.connection.on("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log("db terminated by the application");
        process.exit(0);
    });
});

mongoose.connection.on("SIGTERM",()=>{
    mongoose.connection.close(()=>{
        console.log("db terminated by the application");
        process.exit(0);
    });
});

mongoose.connection.on("SIGUSR2", ()=>{
    mongoose.connection.close(()=>{
            console.log(process.kill(process.pid,"SIGUSR2"));
    });
});
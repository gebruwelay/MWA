const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();
require("./api/data/db");
const router = require("./api/router/router");


app.use(express.urlencoded({extended:false}));
app.use (express.json({extended:false}));
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")))
app.use(express.static(path.join(__dirname,"public")));
app.use("/api",router);

app.listen(process.env.PORT,()=>{
    console.log("server running at ", process.env.PORT);
});




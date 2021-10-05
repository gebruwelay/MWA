const express = require('express');
const app = express();
const path = require('path');
require("./api/data/db");
require("dotenv").config();

const router =  require("./api/router/showsRouter");


app.set("port",process.env.PORT)
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use((req,res)=> {
    res.status(200).sendFile(__dirname,"index.html")
})
app.use("/api", router)
const server = app.listen(app.get("port"), ()=>{
    console.log("server running at ", process.env.PORT);
});
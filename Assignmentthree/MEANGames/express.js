const express = require('express');
const app = express();
const path = require('path');
const router =  require("./api/router/games");
app.set("port",4000)

app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use((req,res)=> {
    res.status(200).sendFile(__dirname,"index.html")
})

app.use("/api", router)
const server = app.listen(app.get("port"), ()=>{
    console.log("server running at ", server.address().port);
});
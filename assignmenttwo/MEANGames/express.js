const express = require('express');
const app = express();
const path = require('path');

app.set("port",3000)

app.use(express.static(path.join(__dirname,"public")));

app.use((req,res)=> {
    res.status(200).sendFile(__dirname,"index.html")
})

const server = app.listen(app.get("port"), ()=>{
    console.log("server running at ", server.address().port);
});
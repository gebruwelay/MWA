const express = require('express');
const app = express();

app.set("port",5353);

const server = app.listen(app.get("port"),()=>{

    console.log("server running in port", server.address().port);
})
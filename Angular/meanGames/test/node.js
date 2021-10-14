const http = require("http");
const url = require("url");

http.createServer(function(req, res){
    console.log("the server started");
    console.log(req.url);
    let q = url.parse(req.url, true).query;
    console.log(q.page);
    if(parseInt(q.page)==1)
    {
        res.render('./page1.html');
    }
    
}).listen(8080)
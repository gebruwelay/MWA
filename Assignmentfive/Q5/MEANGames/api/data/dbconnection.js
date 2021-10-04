const Client = require("mongodb").MongoClient;
const dbName= "gamesDB";
const dburl = "mongodb://localhost:27017/"+dbName;
let connection = null;
const open = ()=>{
    Client.connect(dburl, (err,clienta)=> {

        if(err)
        {
            console.log("connection broken");
            return;
        }
            connection= clienta.db(dbName);
            console.log("database connection opened");
        
    })
}
const getConnection = () =>{
    return connection;
}

module.exports = {
    open: open,
    getConnection: getConnection
}
const childProcess = require("child_process");
childProcess.spawn("node",["index.js"],{stdio:"inherit"});

console.log("non-blocking test");
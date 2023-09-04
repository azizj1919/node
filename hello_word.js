//1
console.log("Hello world")
//2
const http = require("http")
http.createServer((req,res)=>{
    res.write( '<h1>Hello Node!!!!</h1>\n')
    res.end
}).listen(3000)
//3
const fs = require('fs')
fs.readFile('./welcome.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
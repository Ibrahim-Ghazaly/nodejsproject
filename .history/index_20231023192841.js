const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.end("hello world")
})

server.listen(3001,()=>{
   console.log("lis")
})
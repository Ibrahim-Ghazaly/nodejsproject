const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.end("hello world")

    if(req.url === "/"){
        console.log("home page")
    }
})

server.listen(3001,()=>{
   console.log("listening on port 3001")
})

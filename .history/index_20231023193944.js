const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.end("hello world")

    if(req.url === "/"){
        res.end("home page")
    }else if(req.url === "/about")
})

server.listen(3001,()=>{
   console.log("listening on port 3001")
})

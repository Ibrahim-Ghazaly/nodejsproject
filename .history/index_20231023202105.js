const http = require('node:http');



const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.
        res.end("home page")
    }else if(req.url === "/about"){
        res.end("about page")
    }else {
        res.end("page not found")
    }

})



server.listen(5000,()=>{
   console.log("listening on port 3001")
})

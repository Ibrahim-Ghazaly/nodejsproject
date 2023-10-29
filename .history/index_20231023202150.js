const http = require('node:http');



const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write("home page")
        res.end()
    }else if(req.url === "/about"){
        res.write("about page")
        res.end()
    }else {
        res.wr
        res.end("page not found")
    }

})



server.listen(5000,()=>{
   console.log("listening on port 3001")
})

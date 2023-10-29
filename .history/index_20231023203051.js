const http = require('node:http');



const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write("<home page")
       
    }else if(req.url === "/about"){
        res.write("about page")
       
    }else {
        res.write("page not found")
    }
    res.end()


})



server.listen(5000,()=>{
   console.log("listening on port 5000")
})

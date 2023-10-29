const http = require('node:http');
const fs = require('node:fs')

const homePAge = fs.readFileSync("./views/index.html","utf-8")

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write(read)
       
    }else if(req.url === "/about"){
        res.write("<h1>about page</h1>")
       
    }else {
        res.write("<h1>page not found</h1>")
    }
    res.end()


})



server.listen(5000,()=>{
   console.log("listening on port 5000")
})

const http = require('node:http');
const fs = require('node:fs')

const homePage = fs.readFileSync("./views/index.html","utf-8")

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write(homePage)
       
    }else if(req.url === "/about"){
        res.write("<h1>about page</h1>")
       
    }else {
        res.statusCode = 
        res.write("<h1>page not found</h1>")
    }
    res.end()


})



server.listen(5000,()=>{
   console.log("listening on port 5000")
})

const express = require('express');

const app = express();


app.use(express.static(".views"))

app.get('/',(req,res)=>{
    res.send("welcome ")
})

app.get('/about',(req,res)=>{
    res.send([{
        id:1,
        name:"Ahmed"
    }])
})

app.get('/',(req,res)=>{
    res.send("welcome ")
})

app.listen("5001",()=>{
    console.log(" server run on port 5001")
})
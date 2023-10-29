const express = require('express');

const app = express();


app.use(express.static(".vi"))

app.get('/',(req,res)=>{
    res.send("welcome ")
})

app.listen("5001",()=>{
    console.log(" server run on port 5001")
})
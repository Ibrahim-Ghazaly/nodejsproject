const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    req
})

app.listen("5001",()=>{
    console.log(" server run on port 5001")
})
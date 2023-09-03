const express = require('express');

const app = express()

app.use((req,res,next)=>{
    console.log('in the middle ware');
    next();
})

app.use((req,res,next)=>{
    console.log('in the amother ware');
    res.send('<h1> hello to node js </h1>');
    // res.send( { key1: 2 });
})

app.listen(3000)
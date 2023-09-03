const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// app.use('/',(req,res,next)=>{
//     console.log('this always runs');
//     next();
// })

app.use('/add-product',(req,res,next)=>{
    // console.log('in the amother ware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="title"><button type="submit">Add product</button></form>');
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    // console.log('in the amother ware');
    res.send('<h1> hello to node js </h1>');
    // res.send( { key1: 2 });
})

app.listen(3000)
const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html')); 
})

router.post('/contactus',(req,res,next)=>{
    res.redirect('/success') 
})

router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
})


module.exports = router;
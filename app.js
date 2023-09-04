const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop')
const contactRoutes = require('./Routes/contactus');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes)
app.use(contactRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','not-found.html'));
})

app.listen(3000)
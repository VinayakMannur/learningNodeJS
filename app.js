const http = require('http');

const server  = http.createServer((req,res)=>{
    console.log('vinayak')

    console.log(req);
    
});

server.listen(4000);
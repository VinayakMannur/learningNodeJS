const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {

        // fs.readFile('message.txt', (err, data) => {
        //     if (err) throw err;
        //     let name = data.toString();
        //     console.log(name);
        //});

        const buf = fs.readFileSync("message.txt");
        const fileContent = buf.toString();
        console.log(fileContent);

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body><form action="/message" method="POST">${fileContent}<input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const messgae = parsedBody.split('=')[1];
            fs.writeFile('message.txt', messgae, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        })


    }

    // else if(url == '/home'){
    //     res.setHeader('Content-type','text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My first page</title></head>');
    //     res.write('<body><h1>Welcome home</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }
    // else if(url == '/about'){
    //     res.setHeader('Content-type','text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My first page</title></head>');
    //     res.write('<body><h1>Welcome to About Us page</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }
    // else if(url == '/node'){
    //     res.setHeader('Content-type','text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My first page</title></head>');
    //     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>hello from ny nodejs server</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler
//     sometext : 'some text'
// }

// module.exports.handler = requestHandler;
// module.exports.sometext = 'some text';

// exports.handler = requestHandler;
// exports.sometext = 'some text';
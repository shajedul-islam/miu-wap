/*
Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request
to your specified server:port. Use the best way for performance. (Try to solve this in many different ways)*/

const http = require("http");
const fs = require('fs');
const util = require('util');

const server = http.createServer((req, res) => {
    console.log(`${req.url}${req.method}`);
    res.setHeader("Content-Type", "image/jpg");
    res.statusCode = 200;

    fs.readFile('./test.jpg', (err, data) => {
        res.end(data);
    });

    fs.createReadStream('./test.jpg').pipe(res);
    res.end(fs.readFileSync('./test2.jpg'));
    const promise = util.promisify(fs.readFile);

    promise("./test2.jpg").then((data) => {
        res.end(data);
    }).catch((err) => res.end(err));
}).listen(3000);
console.log('Listening');

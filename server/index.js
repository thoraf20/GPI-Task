// import http from 'http';
const http =require('http');
const Controller = require('./controller');
require('dotenv').config()

const hostname =process.env.HOST;
const port = process.env.PORT || 3003;

const server = http.createServer(async(req, res) => {
    var url = req.url;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

    try {
        if(url === "/api/inventory" && req.method === "GET") {

            const inventory =  await new Controller().getInventory();

            res.writeHead(200,); 
            res.end(JSON.stringify(inventory));
        } 
    }catch (error) {
        res.writeHead(400, {'Content-Type': 'application/json'}, error); 
        res.end(JSON.stringify({message: "Route not found"}));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
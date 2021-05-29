const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor(){
        super();
    }

}

const myEmitter = new Sales();

myEmitter.on('newScale', () => {
    console.log('There is new sale');
})

myEmitter.on('newScale', () => {
    console.log('Customer Naem: Preyash');
})

myEmitter.on("newScale", stock => {
    console.log(`There are ${stock} items left to sell`);
})

myEmitter.emit("newScale", 9);


////////////////////////////////////
const server = http.createServer();
server.on('request', (req, res) => {
    res.end("Request Received 1");
});

server.on('request', (req, res) => {
    console.log("Request Received 2");
});

server.on('request', (req, res) => {
    console.log("Request Received 3");
});

server.on('request', (req, res) => {
    console.log("Request Received 4");
});

server.listen(8888, "127.0.0.1", () => {
    console.log("Listening on server");
});
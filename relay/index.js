// import internals
const natsUtils = require('./utils/nats');
const config = require('./config/config');

// import externals
const express = require('express');
const http = require('http');
const ws = require('ws');


// main function
async function main() {
    // import configs
    const cfg = new config.Config();

    // setting the nats servers information
    let cluster = [
        {servers: cfg.nats}
    ];

    // first we connect to nats server
    const nc = await natsUtils.connect(cluster);
    if (nc === null) {
        console.error("nats connection failed");
    }

    // create express app
    const app = express();
    // initialize a simple http server
    const server = http.createServer(app);
    // initialize the WebSocket server instance
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log('received: %s', message);
            ws.send(`Hello, you sent -> ${message}`);
        });
        ws.send('Hi there, I am a WebSocket server');
    });

    // start our server
    server.listen(cfg.port || 8999, () => {
        console.log(`Server started on port ${server.address().port} :)`);
    });
}

// start index
main()
    .then(() => {
        console.log("OK");
    })
    .catch(err => {
        console.error(err);
    });
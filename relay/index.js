// import internals
const natsUtils = require('./utils/nats');
const config = require('./config/config');

// import externals
const sc = require('nats').StringCodec();
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
        throw new Error("nats connection failed");
    }

    // create express app
    const app = express();
    // initialize a simple http server
    const server = http.createServer(app);
    // initialize the WebSocket server instance
    const wss = new ws.WebSocket.Server({ server });

    // open websocket
    wss.on('connection', async (ws) => {
        // subscribing on a topic
        const sub = nc.subscribe(cfg.topic);

        // consume events and send over websocket
        for await (const m of sub) {
            let payload = sc.decode(m.data);
            console.log(`[${sub.getProcessed()}]: ${payload}`);
            ws.send(payload);
        }
    });

    // start our server
    server.listen(cfg.port || 8999, () => {
        console.log(`server started on port ${server.address().port} ...`);
    });
}

// start index
main()
    .then(() => {
        console.log("server is ok!");
    })
    .catch(err => {
        console.error(err);
    });
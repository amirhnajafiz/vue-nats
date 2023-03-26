// import internals
const natsUtils = require('./utils/nats');
const config = require('./config/config');


// import configs
const cfg = new config.Config();

// setting the nats servers information
cluster = [
    {servers: cfg.nats}
];

// first we connect to nats server
const nc = await natsUtils.connect();
if (nc === null) {
    console.error("Nats connection failed");

    return;
}

// subscribe handler for getting the messages
async function handler(sub) {
    for await (const m of sub) {
        console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
    }

    console.log("subscription closed");
}
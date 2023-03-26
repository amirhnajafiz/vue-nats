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
const nc = await natsUtils.connect(cluster);
if (nc === null) {
    console.error("nats connection failed");

    return;
}
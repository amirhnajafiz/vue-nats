const nats = require('nats');
const config = require('./config/config');


// import configs
const cfg = new config.Config();

// setting the nats servers information
cluster = [
    {servers: cfg.nats}
];

// connect to nats server
async function connect() {
    try {
        // calling the nats connect method with
        // clusters information
        const nc = await nats.connect(cluster);

        // get the connected servers
        console.log(`connected to ${ nc.getServer() }`);

        return nc;
    } catch (err) {
        // if an error occurs during the nats connecting
        console.error(`error connecting to ${JSON.stringify(this.server)}`);
        console.error(err);

        return null;
    }
}

// first we connect to nats server
const nc = await connect();
if (nc === null) {
    console.error("Nats connection failed");

    return;
}
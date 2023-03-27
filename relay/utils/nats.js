// connect to nats server
const nats = require("nats");

async function connect(cluster) {
    try {
        // calling the nats connect method with
        // clusters information
        const nc = await nats.connect(cluster);

        // get the connected servers
        console.log(`connected to nats clusters: ${ nc.getServer() }`);

        return nc;
    } catch (err) {
        // if an error occurs during the nats connecting
        console.error(`error connecting to ${JSON.stringify(this.server)}`);
        console.error(err);

        return null;
    }
}

module.exports = {
    connect
}
// import internals
const natsUtils = require('./utils/nats');
const config = require('./config/config');

// import externals
const express = require('express');
const http = require('http');
const ws = require('ws');
const e = require("express");


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
}

// start index
main()
    .then(() => {
        console.log("OK");
    })
    .catch(err => {
        console.error(err);
    });
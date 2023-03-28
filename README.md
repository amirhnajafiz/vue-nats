# Vue Nats

![](https://img.shields.io/badge/node-v18.15-brightgreen)
![](https://img.shields.io/badge/vue.js-v3-%23008822)
![](https://img.shields.io/badge/docker--compose-v3.9-%239cf)

Connect your Vue.js application to Nats cluster using
a relay server. By building a relay server with Node.js
you can receive events from Nats on you Vue.js application.

### Advantages

By using a relay server as a proxy server between Nats
cluster and Vue.js application you can:

- Increase security in Nats connections
- Simple event receiving in client side
- Add filters for getting events
- Having a dynamic subscribing system
- Implementing a caching system if needed

## Run

Use ```docker-compose``` to set a Nats cluster and Application
on ```localhost:80```.

```shell
docker compose up -d
```
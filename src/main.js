import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import { connect, StringCodec } from "nats";

// creating a vue app
const app = createApp(App)
// router and store
app.use(router)
app.use(store)
// app mounting
app.mount('#app')

// axios config
axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

(async () => {
    // nats connect and testing
    let conn = await connect(
        {
            servers: ["ws://localhost:4222"],
        },
    );

    let sub = conn.subscribe("*");
    const sc = StringCodec();

    for await (const m of sub) {
        console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
    }

    console.log("subscription closed");
})();

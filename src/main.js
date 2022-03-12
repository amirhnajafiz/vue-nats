import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'
import store from './store'
import vueNats from 'vue-nats';


const app = createApp(App)
app.use(router)
app.use(store)

axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

app.mount('#app')

app.use(vueNats, {
    url: process.env.NATS_HOST,
    json: true, // use JSON data payload
    reconnect: false, // always reconnect
    maxReconnectAttempts: -1, // retry forever
    reconnectTimeWait: -1 // try to reconnect every second
});
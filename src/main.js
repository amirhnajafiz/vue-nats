import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import vueNats from 'vue-nats';

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

// nats config
app.use(vueNats, {
    url: 'ws://0.0.0.0:4222',
    json: true, // use JSON data payload
    reconnect: true, // always reconnect
    maxReconnectAttempts: -1, // retry forever
    reconnectTimeWait: -1 // try to reconnect every second
});

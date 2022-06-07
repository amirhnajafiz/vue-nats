import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

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

// connecting to nats

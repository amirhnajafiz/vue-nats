import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'


const app = createApp(App)
app.use(router)

axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

app.mount('#app')
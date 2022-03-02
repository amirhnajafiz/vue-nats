import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createApp(App).mount('#app')

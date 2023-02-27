import { createApp } from 'vue'
import './style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'

createApp(App)
.use(VueAxios, axios)
.use(store)
.use(router)  
.mount('#app')

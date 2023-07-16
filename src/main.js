import { createApp } from 'vue'
import './style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'
import {createPinia} from 'pinia'

// console.log(import.meta.env.VITE_VERSION)
createApp(App)
.use(VueAxios, axios)
.use(store)
.use(router)  
.use(createPinia())
.mount('#app')

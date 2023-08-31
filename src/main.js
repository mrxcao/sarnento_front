import {
  createApp, markRaw,
} from 'vue';
import './style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import router from './router';
import store from './store';
import App from './App.vue';
import { useAuth } from './store/auth';

// console.log(import.meta.env.VITE_VERSION)

const pinia = createPinia();
pinia.use(({ store }) => { store.router = markRaw(router); });

createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(pinia)
  .mount('#app');

if (localStorage.getItem('token')) {
  (async () => {
    const auth = useAuth();
    try {
      auth.setAuthOk(true);
      await auth.checkToken();
    } catch (error) {
      auth.setAuthOk(false);
    }
  })();
}

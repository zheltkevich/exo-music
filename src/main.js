import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker.js';
import router from './router/index.js';
import store from './store/index.js';
import './scss/main.scss';

createApp(App).use(store)
    .use(router)
    .mount('#app');

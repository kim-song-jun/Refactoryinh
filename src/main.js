import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router/router.js';
import '../node_modules/@fontsource/roboto';
import './assets/main.css';
import Vue3Lottie from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';
import VueVideoPlayer from '@videojs-player/vue';
const app = createApp(App);
const pinia = createPinia();
window.router = router;
app.use(pinia);
app.use(router).use(VueVideoPlayer).use(Vue3Lottie);
app.mount('#app');

import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';


const app = createApp(App)

AOS.init();
app.use(router)

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.min.js'

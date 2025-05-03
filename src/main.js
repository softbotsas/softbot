import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // importa el router

const app = createApp(App);
app.use(router); // usa el router
app.mount('#app');

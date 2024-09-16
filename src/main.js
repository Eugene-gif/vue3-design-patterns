import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import App from '@/App.vue';
import Modals from '@/plugins/modals';
import '@/style.css';

createApp(App)
.use(createPinia())
.use(router)
.use(Modals)
.mount('#app')

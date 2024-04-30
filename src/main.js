import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import AnimateOnScroll from 'primevue/animateonscroll';

// import router from './router';
// import store from './store';

// createApp(App).use(store).use(router).mount('#app');
const app = createApp(App);
app.use(PrimeVue);
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app');

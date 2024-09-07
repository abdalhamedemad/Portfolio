import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you import Vuetify styles
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import PrimeVue from 'primevue/config';

import AnimateOnScroll from 'primevue/animateonscroll';

// import router from './router';
// import store from './store';
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
// createApp(App).use(store).use(router).mount('#app');
const app = createApp(App);
app.use(PrimeVue);
app.use(vuetify);
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app');

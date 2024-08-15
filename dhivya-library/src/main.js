
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';
import './assets/main.css'

const app = createApp(App);
// app.use(PrimeVue, {
//     theme: {
//         preset: Aura
//     }
// });

app.use(PrimeVue);

createApp(App).mount('#app')


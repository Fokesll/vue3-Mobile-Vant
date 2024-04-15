import { createApp } from 'vue'
import vant from 'vant'
import App from './App.vue'
import router from '@r'
import i18n from './lang'
import pinia from './store'
import 'vant/lib/index.css';
const app = createApp(App);

app.use(vant);
app.use(router)
app.use(pinia);
app.use(i18n)
app.mount('#app')

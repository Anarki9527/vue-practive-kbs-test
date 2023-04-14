import { createApp } from 'vue'
import App from './assets/App.vue'
import vant from 'vant';
import { Lazyload  } from 'vant';

import 'vant/lib/index.css';

const app = createApp(App);
app.use(vant);
app.use(Lazyload);

app.mount('#app')


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import Approuter from './router/approuter'
const app = createApp(App)

app.use(createPinia())
app.use(Approuter)

app.mount('#app')

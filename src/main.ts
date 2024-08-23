import './assets/styles/main.scss'
import { createApp } from 'vue'
// eslint-disable-next-line
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

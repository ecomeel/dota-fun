import './assets/styles/main.scss'
import { createApp } from 'vue'
// eslint-disable-next-line
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')

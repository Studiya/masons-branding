import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import SetIcon from './components/icons/SetIcon.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

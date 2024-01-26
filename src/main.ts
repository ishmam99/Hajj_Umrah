import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import api from './config/api.ts'
window.api = api

const app = createApp(App)
const pinia = createPinia()
app.use(createPinia())
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

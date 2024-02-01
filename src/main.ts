import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import api from './config/api.ts'

declare global {
  interface Window {
    api: typeof api // Declare the 'api' property on the 'Window' interface
  }
}

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)

app.use(VueAxios, axios)
app.mount('#app')
window.api = api
app.config.globalProperties.$filters = {
  timeAgo(date) {
    return moment(date).fromNow()
  }
}
app.use(router)
app.mount('#app')
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


import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import 'tailwindcss/tailwind.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' // Choose a theme
import 'primevue/resources/primevue.min.css' // Core styles
// import 'primeicons/primeicons.css'; // Icons

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VSelect from 'vue-select' 
declare global {
  interface Window {
    api: typeof api // Declare the 'api' property on the 'Window' interface
  }
}

library.add(fas, far, fab)
dom.watch()
const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(VueSweetalert2)
      
      .use(PrimeVue)
pinia.use(piniaPluginPersistedstate)
app.component('font-awesome-icon', FontAwesomeIcon)
    // .component('Select2', Select2)
    .component('v-select', VSelect)
    // createApp(App)
      
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
window.api = api
app.config.globalProperties.$filters = {
  timeAgo(date) {
    return moment(date).fromNow()
  }
}
// app.use(router)
// // app.use(router).use(store)
// app.mount('#app')
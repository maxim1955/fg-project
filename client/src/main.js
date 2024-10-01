import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import { createPinia } from "pinia"

import '@quasar/extras/material-icons/material-icons.css'


import App from './App.vue'
import route from "./router/index.js";


const myApp = createApp(App)
const pinia = createPinia()


myApp.use(Quasar, {
    plugins: {},
})

myApp
  .use(route)
  .use(pinia)
  .mount('#app')

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'

import '@quasar/extras/material-icons/material-icons.css'


import App from './App.vue'
import route from "./router/index.js";


const myApp = createApp(App)



myApp.use(Quasar, {
    plugins: {},
})

myApp
  .use(route)
  .mount('#app')

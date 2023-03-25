import { createApp } from 'vue'
import './styles/base.css'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

createApp(App)
    .use(router)
    .use(store)
    .use(Element3)
    .mount('#app')

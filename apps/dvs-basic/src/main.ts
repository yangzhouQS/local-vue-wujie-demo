import {createApp} from 'vue'
import './style.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const router = createRouter({
  routes: [
    {path: '/', component: () => import('./pages/Home2.vue')},
    {path: '/list', component: () => import('./pages/list.vue')},
    {path: '/about', component: () => import('./pages/about.vue')},
  ],
  history: createWebHashHistory(),
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')

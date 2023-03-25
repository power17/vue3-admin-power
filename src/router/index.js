import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Login from '../pages/login.vue'
import { getToken } from '../utils/auth'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{ path: 'about', name: 'About', component: About }],
  },
  { path: '/login', name: 'Login', component: Login },
]

const router = createRouter({ history: createWebHistory(), routes })




router.beforeEach((to, from, next) => {
  NProgress.start()
  let token = getToken()
  const { fullPath } = to
  if (fullPath === '/login') {
    next()
    retrun
  }
  if (!token) {
    next('/login')
  }else{
    next()
  }
})
router.afterEach(() => { 
  NProgress.done()
})





export default router

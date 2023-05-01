import { createWebHistory,createWebHashHistory, createRouter } from 'vue-router'
import Home from '../pages/p-home.vue'
import About from '../pages/p-about.vue'
import Login from '../pages/p-login.vue'
import Account from '../pages/p-account.vue'
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
  { path: '/account', name: 'Account', component: Account },
]

const router = createRouter({ 
  history: createWebHashHistory('/steam/'),
   routes,
  })


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  // let token = getToken()
  // const { fullPath } = to
  // if (fullPath === '/login' || fullPath === '/account') {
  //   next()
  //   retrun
  // }
  // if (!token) {
  //   next('/login')
  // }else{
  //   next()
  // }
})
router.afterEach(() => { 
  NProgress.done()
})





export default router

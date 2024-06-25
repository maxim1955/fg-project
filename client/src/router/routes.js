
import index from '../pages/index.vue'
import home from '../pages/home.vue'
import account from '../pages/Account.vue'
import profile from '../pages/Profile.vue'
import Testing from '../pages/testing.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },

  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path:'/tests',
    name:'tests',
    component: Testing
  }
]

export default routes

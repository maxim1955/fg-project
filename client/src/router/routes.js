
import index from '../pages/index.vue'
import home from '../pages/home.vue'
import account from '../pages/Account.vue'
import profile from '../pages/Profile.vue'
import notfound from '../pages/NotFound.vue'
import noauth from '../pages/NoAuth.vue'

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
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: notfound
  },
  {
    path: '/unauthorized',
    name: 'noauth',
    component: noauth
  }

]

export default routes

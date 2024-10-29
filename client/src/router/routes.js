import home from '../pages/home.vue'
import HomeTab from '../components/HomeTab.vue'
import BonusesTab from '../components/BonusesTab.vue'
import LevelsTab from '../components/LevelsTab.vue'
import ResourcesTab from '../components/ResourcesTab.vue'
import ChatTab from '../components/ChatTab.vue'
import ProfileTab from '../components/ProfileTab.vue'
import Tasks from '../components/Tasks.vue'
import Test from '../pages/testing.vue'
// import account from '../pages/Account.vue'
// import profile from '../pages/Profile.vue'
import notfound from '../pages/NotFound.vue'
import noauth from '../pages/NoAuth.vue'
const routes = [
    {
        path: '/',
        name: 'main',
        component: home,
        meta: { layout: 'mainLayouts' },
    },
    {
        path: '/home',
        name: 'home',
        component: HomeTab,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },

    {
        path: '/bonuses',
        name: 'bonuses',
        component: BonusesTab,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },

    {
        path: '/levels',
        name: 'levels',
        component: LevelsTab,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },

    {
        path: '/resources',
        name: 'resources',
        component: ResourcesTab,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },

    {
        path: '/chat',
        name: 'chat',
        component: ChatTab,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },

    {
        path: '/profile',
        name: 'profile',
        component: ProfileTab,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },


    {
        path: '/test',
        name: 'test',
        component: Test,
        meta: { layout: 'accountLayouts',  requiresAuth: true},
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: notfound,
        meta: { layout: 'mainLayouts' },
    },
    {
        path: '/unauthorized',
        name: 'noauth',
        component: noauth,
        meta: { layout: 'mainLayouts' },
    }
]

export default routes

import home from '../pages/home.vue'
import HomeTab from '../components/HomeTab.vue'
import BonusesTab from '../components/BonusesTab.vue'
import LevelsTab from '../components/LevelsTab.vue'
import ResourcesTab from '../components/ResourcesTab.vue'
import ChatTab from '../components/ChatTab.vue'
import ProfileTab from '../components/ProfileTab.vue'
import Tasks from '../components/Tasks.vue'
import Task from '../components/Task.vue'
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
    },

    {
        path: '/bonuses',
        name: 'bonuses',
        component: BonusesTab,
    },

    {
        path: '/levels',
        name: 'levels',
        component: LevelsTab,
    },

    {
        path: '/resources',
        name: 'resources',
        component: ResourcesTab,
    },

    {
        path: '/chat',
        name: 'chat',
        component: ChatTab,
    },

    {
        path: '/profile',
        name: 'profile',
        component: ProfileTab,
    },

    {
        path: '/tasks',
        name: 'tasks',
        component: Tasks,
    },

    {
        path: '/task',
        name: 'task',
        component: Task,
    },

    {
        path: '/test',
        name: 'test',
        component: Test,
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

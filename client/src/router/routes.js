import home from '../pages/home.vue'
import HomeTab from '../components/HomeTab.vue'
import BonusesTab from '../components/BonusesTab.vue'
import LevelsTab from '../components/LevelsTab.vue'
import ResourcesTab from '../components/ResourcesTab.vue'
// import ChatTab from '../components/ChatTab.vue'
import ProfileTab from '../components/ProfileTab.vue'
import Tasks from '../components/Tasks.vue'
import Task from '../components/Task.vue'
import Test from '../components/Test.vue'
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

//   {
//     path: '/chat',
//     name: 'chat',
//     component: ChatTab,
//   },

  {
    path: '/profile',
    name: 'profile',
    component: ProfileTab,
  },

  {
    path: '/levels/:id',
    name: 'tasks',
    component: Tasks,
  },

  {
    path: '/task/:id',
    name: 'task',
    component: Task,
  },

  {
    path: '/test',
    name: 'test',
    component: Test,
  },


]

export default routes

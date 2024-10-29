import { route } from 'quasar/wrappers'
import { createRouter,createWebHistory} from 'vue-router'
import routes from './routes'
import {useTimerAndDateStore} from "../store/TimerStore.js";
import userStore from "../store/UserStore.js";
import {useTimerStore} from "../store/TimeStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})


router.beforeEach((to, from, next) => {
    const user = userStore().user;

    if (to.meta.requiresAuth && user == null) {
        next({ name: 'main' });
    } else {
        const timerStore = useTimerAndDateStore();
        const timerTest = useTimerStore();
        timerStore.stopTimer(); // Останавливаем таймер
        timerTest.stopTimer();
        next(); // Продолжаем переход
    }
  });

export default router

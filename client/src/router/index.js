import { route } from 'quasar/wrappers'
import { createRouter,createWebHistory} from 'vue-router'
import routes from './routes'
import {useTimerAndDateStore} from "../store/TimerStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})


router.beforeEach((to, from, next) => {
    const timerStore = useTimerAndDateStore();
    timerStore.stopTimer(); // Останавливаем таймер
    next(); // Продолжаем переход
  });

export default router

<template>
  <q-tab-panel name="home">
            <div class="home cards">
                        <div class="card">
                            <h2 class="cards__title">Пройди тест</h2>
                            <p class="cards__text">Определи свой уровень функциональной грамотности.</p>
                            <img class="cards__img" src="../assets/img/home-card-1-360.png" alt="">
                            <router-link :to="{name: 'test'}" class="cards__btn" href="">Пройти</router-link>
                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Индивидуальный балл</h2>
                                <div class="card__amount">{{ this.user.sumpoint }}</div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Доступный балл для обмена</h2>
                                <div class="card__amount"><span>{{ pointsExchange }}</span></div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Рейтинг среди учеников</h2>
                                <div class="card__amount"><span>{{ this.user.rating }}</span></div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Лимит времени</h2>
                                <div class="card__amount"><span>{{ this.timerStore.formattedTime }} М</span></div>
                            </div>

                        </div>

            </div>
            </q-tab-panel>
</template>

<script>
import userStore from "../store/UserStore.js";
import {useTimerAndDateStore} from "../store/TimerStore.js";
export default {
    data() {
            return {
                points: 100,
                individualPoints: 0,
                rating: 0,
                limitTime: 0,
            }
        },

        computed: {
            user() {
                return userStore().user;
            },

            pointsExchange() {
                return this.user.sumpoint - this.user.spendpoints
            }
        },

        setup () {
            const timerStore = useTimerAndDateStore(); // Получаем доступ к хранилищу
            return {
            timerStore
            }
        },
}
</script>

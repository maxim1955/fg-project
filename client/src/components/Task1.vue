<template>
    <div class="task__block">
        <p class="task__number">Задание {{ this.slide }}/{{ this.slidesCount }}</p>
        <div class="q-pa-md">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
      >
        <q-carousel-slide v-for="question in task.questions" :key="question.id" :name="question.position">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Прочитайте текст «{{ task.name }}». Запишите свой ответ на вопрос в виде числа.</p>
                <p class="task__question">{{ question.textquestion }}</p>
                <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 0" class="task__form form">
                    <label class="form__label">
                        <span>Запишите свой ответ</span>
                        <div class="flex items-center">
                            <input v-model="answer" placeholder="Введите ответ" type="text" class="form__input" @change="checkAnswer(question)" :disabled="disabledInput">
                            руб.
                        </div>

                    </label>
                    <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                    <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">{{ task.name }}</h3>
                <p class="task__desc">{{ question.textright }}</p>
                <div class="task__tables">
                    <table class="task__table">
                        <thead>
                            <tr>
                                <th colspan="2">Стоимость отдельных занятий:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Пробное занятие</td>
                                <td>700&nbsp;₽</td>
                            </tr>
                            <tr>
                                <td>Разовая тренировка</td>
                                <td>1&nbsp;900&nbsp;₽</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="task__table">
                        <thead>
                            <tr>
                                <th colspan="2">Стоимость абонементов:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4&nbsp;занятия</td>
                                <td>6&nbsp;000&nbsp;₽</td>
                            </tr>
                            <tr>
                                <td>8&nbsp;занятий</td>
                                <td>11&nbsp;200&nbsp;₽</td>
                            </tr>
                            <tr>
                                <td>12&nbsp;занятий</td>
                                <td>15&nbsp;600&nbsp;₽</td>
                            </tr>
                            <tr>
                                <td>24&nbsp;занятия</td>
                                <td>28&nbsp;800&nbsp;₽</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="task__info">Абонемент действителен в течение 30 дней со дня первого занятия.</p>
                <p class="task__info">5 декабря Анна купила абонемент на 4 занятия для своего ребёнка.</p>
            </div>
            </div>

        </q-carousel-slide>
        <template v-slot:control>

          <q-carousel-control class="carousel__btns" style="margin: 0;">
            <q-btn :disabled="disabledNext" class="carousel__btn" @click="nextSlide()" v-if="this.slide < slidesCount">Далее</q-btn>
            <button :disabled="disabledNext" class="carousel__btn" v-if="this.slide == slidesCount" @click="$emit('open-modal')">Далее</button>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    </div>
  </template>

<script>
import NextTaskModal from './NextTaskModal.vue'
import axios from 'axios';
import userStore from "../store/UserStore.js";
export default {
    components: {NextTaskModal},
    data() {
        return {
            slidesCount: 3,
            slide: 1,
            disabledNext: true,
            answer: '',
            showMessage: false,
            task: {
                id: 0,
                name: 'Абонемент в бассейн',
                intro: '',
                position: 1,
                level_id: 1,
                questions: [
                    {
                        answer1: 1600,
                        answer2: null,
                        id: 1,
                        point1: 1,
                        point2: 0,
                        position: 1,
                        questiontype: 0,
                        textquestion: 'Сколько рублей сэкономила Анна при покупке абонемента по сравнению с покупкой такого же числа разовых тренировок без учёта кешбэка?',
                        textright: 'В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента. Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов',
                    },
                    {
                        answer1: '06.01',
                        answer2: null,
                        id: 2,
                        point1: 1,
                        point2: 0,
                        position: 2,
                        questiontype: 0,
                        textquestion: 'На первое занятие Анна с ребёнком пришли во вторник 8 декабря. Какого числа и какого месяца закончится действие абонемента? Запишите дату в формате: ДД.ММ',
                        textright: 'В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента. Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов',
                    },
                    {
                        answer1: 15000,
                        answer2: null,
                        id: 3,
                        point1: 1,
                        point2: 0,
                        position: 3,
                        questiontype: 0,
                        textquestion: 'В январе Анна купила абонемент на 12 занятий и использовала кешбэк от покупки абонемента, купленного в декабре. Сколько рублей заплатила Анна за абонемент в январе с учётом кешбэка?',
                        textright: 'В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента. Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов',
                    },

                ]
            },
            validate: false,
            showMessage: false,
            messageText: '',
            disabledInput: false,

        }
    },

  methods: {
    nextSlide() {
        this.$refs.carousel.next();
        this.answer = '';
        this.showMessage = false;
        this.disabledNext = true;
        this.disabledInput = false;
        if (this.slide > this.slidesCount) {
            this.showNextTaskModal = true;
        }
    },


    closeNextTaskModal() {
        this.showNextTaskModal = false;
    },

    async submitAnswer(question) {
        console.log(question)
        let points = 0;
        if (question.questiontype === 0) {
            if (this.answer == question.answer1) {
                points = question.point1
            } else
            if (question.answer2 !== null && this.answer == question.answer2) {
                points = question.point2
            } else points = 0
        }

        if (question.questiontype === 1) {
            this.checkboxes.forEach(el => {
                question.points.forEach(point => {
                    if (point.id === el) {
                        points += point.points;
                    }
                })
            })
        }

        if (question.questiontype === 2) {
            question.points.forEach(el => {
                if (el.id === this.radio) points = el.points
            })
        }

        if (question.questiontype === 3) {
            this.options.forEach(option => {
                const promt = question.promts.find(promt => promt.id === option.promt_id);
                if (option.answer_id === promt.answer_id) {
                    const point = question.points.find(point => point.id === promt.id)
                    points += point.points;

                }
            })
        }


        let result = {
            user_id: this.user.id,
            task_id: this.task.id,
            question_id: question.id,
            points: points
        }

        console.log(result)

        console.log(question, this.answer, question.answer1.toString())


            try {
                const response = await axios.post('/api/taskresults', result)
                .then(response => {
                    console.log(response.data)
                    this.showMessage = true;
                    this.messageText = 'Ваш ответ принят';
                    this.disabledNext = false;
                    this.validate = false;
                    this.disabledInput = true;
                })
                .catch(error => {
                            console.error('Ошибка:', error);
                });
                return response
            }
            catch (error) {
                console.log(error)
            }



    },

    checkAnswer(question) {
        this.validate = true;
    }

  },

  computed: {
    user() {
        return userStore().user;
    }
  }

}
</script>

<style>

    .account.level-1-0 {
        background-image: url(../assets/img/task-1-1.webp);
        background-size: cover;
    }


    .task__table tbody tr {
        flex-wrap: nowrap;
    }

    @media (max-width: 1200px) {
        .account.level-1-1 {
            background-image: url(../assets/img/task-1-1-1024.webp);
            background-position: left top;
        }
    }

    @media (max-width: 360px) {
        .account.level-1-1 {
            background: url(../assets/img/task-1-1-top.webp) no-repeat top, url(../assets/img/task-1-1-bottom.webp) no-repeat bottom;
        }
    }




</style>

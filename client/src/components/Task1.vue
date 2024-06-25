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
        <q-carousel-slide :name="1">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Прочитайте текст «Абонемент в бассейн». Запишите свой ответ на вопрос в виде числа.</p>
                <p class="task__question">Сколько рублей сэкономила Анна при покупке абонемента по сравнению с покупкой такого же числа разовых тренировок без учёта кешбэка?</p>
                <form class="task__form form">
                    <label class="form__label">
                        <span>Запишите свой ответ</span>
                        <div class="flex items-center">
                            <input placeholder="Введите ответ" type="text" class="form__input">
                            руб.
                        </div>

                    </label>
                    <button class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Абонемент в бассейн</h3>
                <p class="task__desc">В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента.</p>
                <p class="task__desc">Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов</p>
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

        <q-carousel-slide :name="2">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Воспользуйтесь текстом «Абонемент в бассейн». Запишите свой ответ на вопрос.</p>
                <p class="task__question">На первое занятие Анна с ребёнком пришли во вторник 8 декабря.</p>
                <p class="task__question">Какого числа и какого месяца закончится действие абонемента? Запишите дату в формате: ДД.ММ</p>
                <form class="task__form form">
                    <label class="form__label">
                        <span>Запишите свой ответ</span>
                        <div class="flex items-center">
                            <input placeholder="Введите ответ" type="text" class="form__input">
                            руб.
                        </div>

                    </label>
                    <button class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Абонемент в бассейн</h3>
                <p class="task__desc">В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента.</p>
                <p class="task__desc">Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов</p>
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

        <q-carousel-slide :name="3">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Воспользуйтесь текстом «Абонемент в бассейн». Запишите свой ответ на вопрос в виде числа, а затем объясните свой ответ.</p>
                <p class="task__question">В январе Анна купила абонемент на 12 занятий и использовала кешбэк от покупки абонемента, купленного в декабре. Сколько рублей заплатила Анна за абонемент в январе с учётом кешбэка?</p>
                <form class="task__form form">
                    <label class="form__label">
                        <span>Запишите свой ответ</span>
                        <div class="flex items-center">
                            <input placeholder="Введите ответ" type="text" class="form__input">
                            руб.
                        </div>

                    </label>
                    <button class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Абонемент в бассейн</h3>
                <p class="task__desc">В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента.</p>
                <p class="task__desc">Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов</p>
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

          <q-carousel-control
            class="carousel__btns"
            style="margin: 0;"
          >
            <q-btn class="carousel__btn" @click="prevSlide()">Назад</q-btn>
            <q-btn class="carousel__btn" @click="nextSlide()" v-if="this.slide < slidesCount">Далее</q-btn>
            <button class="carousel__btn" v-if="this.slide == slidesCount" @click="openNextTaskModal()">Далее</button>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    </div>
    <NextTaskModal @close-modal="closeNextTaskModal()" v-if="showNextTaskModal"/>
  </template>

<script>
import { ref } from 'vue'
import NextTaskModal from './NextTaskModal.vue'
export default {
    components: {NextTaskModal},
    data() {
        return {
            slidesCount: 3,
            showNextTaskModal: false,
        }
    },
    setup () {
    return {
      slide: ref(1),
    }
  },

  methods: {
    nextSlide() {
        this.$refs.carousel.next();
        if (this.slide > this.slidesCount) {
            this.showNextTaskModal = true;
        }
    },
    prevSlide() {
        this.$refs.carousel.previous();
    },

    openNextTaskModal() {
        this.showNextTaskModal = true;
    },

    closeNextTaskModal() {
        this.showNextTaskModal = false;
    }
  },

  created() {
    document.body.classList.add('task-1');
  }
}
</script>

<style scoped>

    .task__table tbody tr {
        flex-wrap: nowrap;
    }




</style>

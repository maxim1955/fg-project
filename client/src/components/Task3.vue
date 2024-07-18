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
                <p class="task__info">Прочитайте текст «Продажи по регионам». Для ответа на вопрос отметьте нужные варианты ответа.</p>
                <p class="task__question">Почему для представления данных о продажах могла быть выбрана круговая диаграмма, а не столбчатая?</p>
                <form class="task__form form">
                    <span>Отметьте все верные варианты ответа.</span>
                    <div class="form__box form__box--checkboxes">
                        <label class="form__label form__label--checkbox">
                            <input name="sales-1" type="checkbox" class="form__input form__input--checkbox">
                            <span class="checkbox"></span>
                            В статистике чаще используют круговые диаграммы, чем столбчатые.
                        </label>
                        <label class="form__label form__label--checkbox">
                            <input name="sales-1" type="checkbox" class="form__input form__input--checkbox">
                            <span class="checkbox"></span>
                            Можно точнее сравнить данные по регионам между собой.
                        </label>
                        <label class="form__label form__label--checkbox">
                            <input name="sales-1" type="checkbox" class="form__input form__input--checkbox">
                            <span class="checkbox"></span>
                            Хорошо видна доля каждого региона в общем числе продаж.
                        </label>
                        <label class="form__label form__label--checkbox">
                            <input name="sales-1" type="checkbox" class="form__input form__input--checkbox">
                            <span class="checkbox"></span>
                            Хорошо видна доля продаж, которая приходится на регион — лидер продаж.
                        </label>
                        <label class="form__label form__label--checkbox">
                            <input name="sales-1" type="checkbox" class="form__input form__input--checkbox">
                            <span class="checkbox"></span>
                            Для столбчатой диаграммы нужны числовые данные, а их, наверное, нет.
                        </label>
                    </div>
                    <button class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Продажи по регионам</h3>
                <p class="task__desc">Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам. </p>
                <p class="task__desc">Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.</p>

                <picture>
                    <source srcset="../assets/img/task-3-360.webp" media="(max-width: 640px)">
                    <source srcset="../assets/img/task-3-1024.webp" media="(max-width: 1200px)">

                    <img src="../assets/img/task-3.webp" alt="">
                </picture>

            </div>
            </div>

        </q-carousel-slide>

        <q-carousel-slide :name="2">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Воспользуйтесь текстом «Продажи по регионам». Отметьте в таблице нужные варианты ответа.</p>
                <p class="task__question">На круговой диаграмме показаны доли продаж в разных регионах РФ одного из товаров магазина. Какие высказывания о продажах товара можно счесть верными, а какие — нет?</p>
                    <form class="task__form form">
                        <span>Отметьте «Верно» или «Неверно» для каждого высказывания.</span>
                        <table class="task__table">
                        <thead>
                            <tr>
                                <th>Высказывание</th>
                                <th>Верно</th>
                                <th>Неверно</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>Большая доля продаж совершается в Москве и Московской области.</span></td>
                                <td>
                                    <label class="form__label form__label--radio">
                                        <input name="balls-1" type="radio" class="form__input form__input--radio">
                                        <span class="radio"></span>
                                    </label>
                                </td>
                                <td>
                                    <label class="form__label form__label--radio">
                                        <input name="balls-1" type="radio" class="form__input form__input--radio">
                                        <span class="radio"></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td><span>В Краснодарском крае и Свердловской области одинаковое количество продаж.</span></td>
                                <td>
                                    <label class="form__label form__label--radio">
                                        <input name="balls-1" type="radio" class="form__input form__input--radio">
                                        <span class="radio"></span>
                                    </label>
                                </td>
                                <td>
                                    <label class="form__label form__label--radio">
                                        <input name="balls-1" type="radio" class="form__input form__input--radio">
                                        <span class="radio"></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Продажи в Краснодарском крае, Свердловской области и в Республике Татарстан в сумме составляют примерно четверть от общего числа продаж.</span></td>
                                <td>
                                    <label class="form__label form__label--radio">
                                        <input name="balls-1" type="radio" class="form__input form__input--radio">
                                        <span class="radio"></span>
                                    </label>
                                </td>
                                <td>
                                    <label class="form__label form__label--radio">
                                        <input name="balls-1" type="radio" class="form__input form__input--radio">
                                        <span class="radio"></span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn-reset form__btn">Принять ответ</button>
                    </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Продажи по регионам</h3>
                <p class="task__desc">Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам.</p>
                <p class="task__desc">Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.</p>
                <picture>
                    <source srcset="../assets/img/task-3-360.webp" media="(max-width: 640px)">
                    <source srcset="../assets/img/task-3-1024.webp" media="(max-width: 1200px)">

                    <img src="../assets/img/task-3.webp" alt="">
                </picture>
            </div>
            </div>

        </q-carousel-slide>

        <q-carousel-slide :name="3">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Воспользуйтесь текстом «Продажи по регионам». Запишите свой ответ на вопрос в виде числа.</p>
                <p class="task__question">В феврале во всех субъектах Российской Федерации было куплено 587 единиц товара, 16 из которых купили в Татарстане. Какую долю от общих продаж составляют продажи в Татарстане? Ответ дайте в процентах, округлив результат до целого.</p>
                <form class="task__form form">
                    <label class="form__label">
                        <span>Запишите свой ответ в виде числа. Ответ дайте в процентах, округлив результат до целого.</span>
                        <div class="flex items-center">
                            <input placeholder="Введите ответ" type="text" class="form__input">
                        </div>

                    </label>
                    <button class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Продажи по регионам</h3>
                <p class="task__desc">Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам. </p>
                <p class="task__desc">Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.</p>
                <picture>
                    <source srcset="../assets/img/task-3-360.webp" media="(max-width: 640px)">
                    <source srcset="../assets/img/task-3-1024.webp" media="(max-width: 1200px)">

                    <img src="../assets/img/task-3.webp" alt="">
                </picture>
            </div>
            </div>

        </q-carousel-slide>

        <q-carousel-slide :name="4">
            <div class="task__box">
                <div class="task__left">
                <p class="task__info">Воспользуйтесь текстом «Продажи по регионам». Для ответа на вопрос выберите нужные варианты ответа из списка.</p>
                <div class="task__question">
                    <p>Отдел аналитики, опираясь на результаты продаж за февраль, должен распределить 1200 единиц товара по следующим складам хранения:</p>
                    <ul class="task__list">
                        <li class="task_item">Склад «Москва» (Москва и Московская область),</li>
                        <li class="task_item">Склад «Санкт-Петербург» (Санкт-Петербург и Ленинградская область),</li>
                        <li class="task_item">Склад «Екатеринбург» (Свердловская область),</li>
                        <li class="task_item">Склад «Краснодар» (Краснодарский край),</li>
                        <li class="task_item">Склад «Казань» (Республика Татарстан).</li>
                    </ul>
                </div>

                <form class="task__form task__form--4 form">
                    <span>Выберите нужные варианты ответа в выпадающих меню.</span>
                    <table class="task__table">
                        <thead>
                            <tr>
                                <th>Название склада</th>
                                <th>Количество единиц товара, шт.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>Москва</span></td>
                                <td><multiselect v-model="value1" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                            </tr>
                            <tr>
                                <td><span>Санкт-Петербург</span></td>
                                <td><multiselect v-model="value2" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                            </tr>
                            <tr>
                                <td><span>Екатеринбург</span></td>
                                <td><multiselect v-model="value3" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                            </tr>
                            <tr>
                                <td><span>Краснодар</span></td>
                                <td><multiselect v-model="value4" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                            </tr>
                            <tr>
                                <td><span>Казань</span></td>
                                <td><multiselect v-model="value5" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn-reset form__btn">Принять ответ</button>
                </form>
            </div>
            <div class="task__right">
                <h3 class="task__title">Продажи по регионам</h3>
                <p class="task__desc">Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам. </p>
                <p class="task__desc">Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.</p>
                <picture>
                    <source srcset="../assets/img/task-3-360.webp" media="(max-width: 640px)">
                    <source srcset="../assets/img/task-3-1024.webp" media="(max-width: 1200px)">

                    <img src="../assets/img/task-3.webp" alt="">
                </picture>
            </div>
            </div>

        </q-carousel-slide>


        <template v-slot:control>

          <q-carousel-control
            class="carousel__btns"
            style="margin: 0;"
          >
            <!-- <button @click="$emit('back-levels')" class="carousel__btn" v-if="this.slide == 1">Назад</button>
            <q-btn class="carousel__btn" @click="prevSlide()" v-if="this.slide > 1">Назад</q-btn> -->
            <q-btn class="carousel__btn" @click="nextSlide()" v-if="this.slide < slidesCount">Далее</q-btn>
            <button class="carousel__btn" v-if="this.slide == slidesCount" @click="$emit('open-modal')">Далее</button>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    </div>
    <!-- <NextTaskModal @close-modal="closeNextTaskModal()" v-if="showNextTaskModal"/> -->
  </template>

<script>
import { ref } from 'vue'
import NextTaskModal from './NextTaskModal.vue'
import Multiselect from 'vue-multiselect'
export default {
    components: {NextTaskModal, Multiselect},
    data() {
        return {
            slidesCount: 4,
            showNextTaskModal: false,
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            options: [820, 110, 60, 170, 40],
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

}
</script>

<style>


    .level-3 .form__label {
        max-width: max-content;
    }

    .account.level-3-1 {
        background-image: url(../assets/img/task-3-1.webp);
        background-size: cover;
    }

    .task-3 .q-carousel__slide {
        padding: 0;
    }

    .task-3 .q-carousel {
        border-radius: 0;
    }

    .task-3 .task__left .form__label.form__label--radio {
        max-width: 100%;
    }

    .task__list {
        margin-bottom: 40px;
        padding-left: 20px;
    }

    .task_item {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task-3 .task__form > .task__table td span {
        max-width: 337px;
    }

    .task-3 .task__form > .task__table {
        display: table;
        overflow: auto;
    }

    /* .task-3 .task__form {
        overflow: auto;
    } */

    .task-3 tbody,
    .task-3 thead {
        display: table-row-group;
    }

    .task-3 .task__form > .task__table tr {
        display: table-row;
    }

    .task-3 .task__form > .task__table td,
    .task-3 .task__form > .task__table th {
        display: table-cell;
    }

    .task-3 .form__label {
        justify-content: center;
    }

    @media (max-width: 1440px) {
        .level-3 .task__form {
            overflow-x: auto;
        }
    }

    @media (max-width: 1200px) {
        .task.task-3 .task__table td,
        .task.task-3 .task__table th {
            padding: 12px 20px;

        }



        .account.level-3-1 {
            background-image: url(../assets/img/task-3-1-1024.webp);
        }

        .task-3 .task__form--4 > .task__table {
            display: block;
        }

        .task-3 .task__form--4 tbody,
        .task-3 .task__form--4 thead {
            display: block;
        }

        .task-3 .task__form--4 > .task__table tr {
            display: flex;
        }


    }

    @media (max-width: 640px) {
        .task__right picture {
            margin-bottom: 20px;
        }

        .task-3 .task__form {
            display: block;
        }
    }

    @media (max-width: 576px) {

        .task-3 .task__form--4 > .task__table {
            display: table;
        }

        .task-3 .task__form--4 tbody,
        .task-3 .task__form--4 thead {
            display: table-row-group;
        }

        .task-3 .task__form--4 > .task__table tr {
            display: table-row;
        }

        .task.task-3 .task__form--4 .task__table td,
        .task.task-3 .task__form--4 .task__table th {
            display: table-cell;
        }
    }

    @media (max-width: 360px) {
        .account.level-3-1 {
            background-image: url(../assets/img/task-3-1-360.webp);
        }
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

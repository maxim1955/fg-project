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
                <p class="task__info">Прочитайте текст «{{ task.name }}». Для ответа на вопрос отметьте нужные варианты ответа.</p>
                <p class="task__question" v-html="question.textquestion"></p>
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 0" class="task__form form">
                            <label class="form__label">
                                <span>{{ question.btntext }}</span>
                                <div class="flex items-center">
                                    <input v-model="answer" placeholder="Введите ответ" type="text" class="form__input" @change="checkAnswer(question, null, $event)" :disabled="disabledInput">
                                </div>
                            </label>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 1" class="task__form form">
                            <span>{{ question.btntext }}</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox" v-for="answer in question.answers" :key="answer.id">
                                    <input @change="addCheckbox(answer.id)" :value="answer.id" name="checkbox" type="checkbox" class="form__input form__input--checkbox" :disabled="disabledInput">
                                    <span class="checkbox"></span>
                                    {{ answer.text }}
                                </label>
                            </div>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 2" class="task__form form">
                            <span>{{ question.btntext }}</span>
                            <div class="form__box form__box--radio">
                                <label class="form__label form__label--radio" v-for="answer in question.answers" :key="answer.position">
                                    <input :value="answer.id" v-model="radio" type="radio" class="form__input form__input--radio" @change="checkAnswer(question, item.id)" :disabled="disabledInput">
                                    <span class="radio"></span>
                                    {{ answer.text }}
                                </label>
                            </div>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 3 && question.type === 'radio'" class="task__form form">
                            <span>{{ question.btntext }}</span>
                            <table class="task__table">
                                <thead>
                                    <tr>
                                        <th>Высказывание</th>
                                        <th>Верно</th>
                                        <th>Неверно</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in question.promts" :key="item.position">
                                        <td><span>{{ item.text }}</span></td>
                                        <td v-for="answer in question.answers" :key="answer.id">
                                            <label class="form__label form__label--radio">
                                                <input v-if="answer.value === 0" :name="item.id" :value="0" type="radio" class="form__input form__input--radio" @change="checkAnswer(question, item.id, answer.id, $event)" :disabled="disabledInput">
                                                <input v-else :value="1" :name="item.id" type="radio" class="form__input form__input--radio" @change="checkAnswer(question, item.id, answer.id, $event)" :disabled="disabledInput">
                                                <span class="radio"></span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 3 && question.type === 'select'" class="task__form form">
                            <span>{{ question.btntext }}</span>
                            <table class="task__table">
                                <thead>
                                    <tr>
                                        <th>Название склада</th>
                                        <th>Количество единиц товара, шт.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in question.promts" :key="item.id">
                                        <td><span>{{ item.text }}</span></td>
                                        <td>
                                            <multiselect @select="checkAnswer(question, item.id)" :custom-label="customLabel" :allow-empty="true" v-model="options[index]" select-label="" :searchable="false" :options="getOptionsForQuestion(question.id, item.id)" placeholder="Выберите ответ" :disabled="disabledInput">
                                            </multiselect>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
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

        <!-- <q-carousel-slide :name="2">
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
                    <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
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
                    <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
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
                    <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
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

        </q-carousel-slide> -->
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
import Multiselect from 'vue-multiselect'
import userStore from "../store/UserStore.js";
import axios from 'axios';
import {useTimerAndDateStore} from "../store/TimerStore.js";
export default {
    components: {NextTaskModal, Multiselect},
    data() {
        return {
            slidesCount: 4,
            showNextTaskModal: false,
            disabledNext: true,
            slide: 1,
            answer: '',
            radio: null,
            checkboxes: [],
            showMessage: false,
            messageText: '',

            task: {
                id: 0,
                name: 'Продажи по регионам',
                intro: ``,
                position: 1,
                level_id: 3,

                questions: [
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 1,
                                text: 'В статистике чаще используют круговые диаграммы, чем столбчатые.',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                text: 'Можно точнее сравнить данные по регионам между собой.',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                text: 'Хорошо видна доля каждого региона в общем числе продаж.',
                                trueorfalse: 1,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                text: 'Хорошо видна доля продаж, которая приходится на регион — лидер продаж.',
                                trueorfalse: 1,
                            },
                            {
                                id: 5,
                                question_id: 1,
                                text: 'Для столбчатой диаграммы нужны числовые данные, а их, наверное, нет.',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 1,
                                truecount: 2,
                                points: 2,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                truecount: 1,
                                points: 1,
                            },

                        ],
                        id: 1,
                        point1: 0,
                        point2: 0,
                        position: 1,
                        questiontype: 1,
                        btntext: 'Отметьте все верные варианты ответа.',
                        textquestion: 'Почему для представления данных о продажах могла быть выбрана круговая диаграмма, а не столбчатая?',
                        textright: `
                        Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам.
                        <br><br>
                        Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 2,
                                value: 1,
                                trueorfalse: 0,

                            },
                            {
                                id: 2,
                                question_id: 2,
                                value: 0,
                                trueorfalse: 0,
                            },


                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 2,
                                truecount: 4,
                                points: 2,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                truecount: 3,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 2,
                                text: 'Большая доля продаж совершается в Москве и Московской области.',
                                answer_id: 1,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                text: 'В Краснодарском крае и Свердловской области одинаковое количество продаж.',
                                answer_id: 2,
                            },
                            {
                                id: 3,
                                question_id: 2,
                                text: 'Продажи в Краснодарском крае, Свердловской области и в Республике Татарстан в сумме составляют примерно четверть от общего числа продаж.',
                                answer_id: 1,
                            },
                            {
                                id: 4,
                                question_id: 2,
                                text: 'Свердловская область опережает Санкт-Петербург и Ленинградскую область по продажам.',
                                answer_id: 1,
                            },

                        ],
                        id: 2,
                        position: 2,
                        questiontype: 3,
                        type: 'radio',
                        btntext: 'Отметьте «Верно» или «Неверно» для каждого высказывания.',
                        textquestion: 'На круговой диаграмме показаны доли продаж в разных регионах РФ одного из товаров магазина. Какие высказывания о продажах товара можно счесть верными, а какие — нет?',
                        textright: `
                        Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам.
                        <br><br>
                        Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.`,
                    },
                    {
                        id: 3,
                        position: 3,
                        questiontype: 0,
                        answer1: 3,
                        answer2: null,
                        point1: 1,
                        point2: 0,
                        btntext: 'Запишите свой ответ в виде числа. Ответ дайте в процентах, округлив результат до целого.',
                        textquestion: 'В феврале во всех субъектах Российской Федерации было куплено 587 единиц товара, 16 из которых купили в Татарстане. Какую долю от общих продаж составляют продажи в Татарстане? Ответ дайте в процентах, округлив результат до целого.',
                        textright: `
                        Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам.
                        <br><br>
                        Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 4,
                                text: '820',
                                trueorfalse: 1,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: '110',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: '60',
                                trueorfalse: 0,
                            },
                            {
                                id: 4,
                                question_id: 4,
                                text: '170',
                                trueorfalse: 0,
                            },
                            {
                                id: 5,
                                question_id: 4,
                                text: '40',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 4,
                                truecount: 5,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 4,
                                text: 'Москва',
                                answer_id: 1
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: 'Санкт-Петербург',
                                answer_id: 3,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: 'Екатеринбург',
                                answer_id: 2,
                            },
                            {
                                id: 4,
                                question_id: 4,
                                text: 'Краснодар',
                                answer_id: 4,
                            },
                            {
                                id: 5,
                                question_id: 4,
                                text: 'Казань',
                                answer_id: 5,
                            },

                        ],
                        id: 4,
                        position: 4,
                        questiontype: 3,
                        type: 'select',
                        btntext: 'Выберите нужные варианты ответа в выпадающих меню.',
                        images: {
                            desc: '',
                            img: ['../assets/img/task-2-4.webp']
                        },
                        textquestion: `
                        <div class="task__question">
                            <p>Отдел аналитики, опираясь на&nbsp;результаты продаж за&nbsp;февраль, должен распределить 1200&nbsp;единиц товара по&nbsp;следующим складам хранения:</p>
                            <ul class="task__list">
                                <li class="task_item">Склад «Москва» (Москва и&nbsp;Московская область),</li>
                                <li class="task_item">Склад «Санкт-Петербург» (Санкт-Петербург и&nbsp;Ленинградская область),</li>
                                <li class="task_item">Склад «Екатеринбург» (Свердловская область),</li>
                                <li class="task_item">Склад «Краснодар» (Краснодарский край),</li>
                                <li class="task_item">Склад «Казань» (Республика Татарстан).</li>
                            </ul>
                        </div>`,
                        textright: `
                        Интернет-магазин продаёт свои товары на территории России. Каждый месяц отдел аналитики собирает статистику по продажам, чтобы правильно распределить количество товара по региональным складам.
                        <br><br>
                        Данные по продажам одного из товаров магазина в разных регионах России за февраль представлены на круговой диаграмме.`,
                    },

                ]
            },
            validate: false,
            radio1: [],
            options: [],
            disabledInput: false,
        }
    },

    setup () {
            const timerStore = useTimerAndDateStore(); // Получаем доступ к хранилищу

            return {
            startTimer: timerStore.startTimer,
            stopTimer: timerStore.stopTimer,
            resetTimer: timerStore.resetTimer,
            formattedTime: timerStore.formattedTime,
            timerStore
            }


    },

    mounted() {
        this.timerStore.startTimer();
    },
    methods: {
    nextSlide() {
        this.$refs.carousel.next();
        this.disabledNext = true;
        this.showMessage = false;
        this.disabledInput = false;
        this.answer = '';
        this.radio = null;
        this.checkboxes = [];
        this.options = [];
        this.radio1 = [];
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
            if (this.answer == question.answer2) {
                points = question.point2
            } else points = 0
        }

        if (question.questiontype === 1) {
            this.checkboxes.forEach(el => {
                let trueanswer = 0;
                const answer = question.answers.find(answer => answer.id === el);
                if (answer.trueorfalse === 1) {
                    trueanswer += 1;
                    console.log(trueanswer)
                }

                const point = question.points.find(point => point.question_id === question.id && point.truecount === trueanswer);
                if (point) {
                    points += point.points;
                }

            })
        }

        if (question.questiontype === 2) {
            const answer = question.answers.find(answer => answer.id === this.radio);
            console.log(answer)
            if (answer.trueorfalse === 1) {
                const point = question.points.find(point => point.question_id === question.id && point.truecount === 1);
                console.log(point)
                if (point) {
                    points += point.points;
                }
            }


        }


        if (question.questiontype === 3) {
            if (question.type === 'radio') {
                let trueanswer = 0;
                this.radio1.forEach(option => {

                const promt = question.promts.find(promt => promt.id === option.promt_id);
                console.log(promt)
                if (option.answer_id == promt.answer_id) {
                    trueanswer += 1;
                }
                const point = question.points.find(point => point.question_id === question.id && point.truecount === trueanswer);
                if (point) {
                    points += point.points;
                    console.log(points)
                }
            })
            }

            if (question.type === 'select') {
                let trueanswer = 0;
                this.options.forEach(option => {

                const promt = question.promts.find(promt => promt.id === option.promt_id);
                console.log(promt)
                if (option.answer_id == promt.answer_id) {
                    trueanswer += 1;
                }
                const point = question.points.find(point => point.question_id === question.id && point.truecount === trueanswer);
                if (point) {
                    points += point.points;
                    console.log(points)
                }
            })
            }

        }


        let result = {
            user_id: this.user.id,
            level_id: this.task.level_id,
            task_id: this.task.id,
            question_id: question.id,
            points: points
        }

        console.log(result)


            try {
                const response = await axios.post('/api/taskresults', result)
                .then(response => {
                    console.log(response.data)
                    this.showMessage = true;
                    this.messageText = 'Ваш ответ принят';
                    this.disabledNext = false;
                    this.validate = false;
                    this.disabledInput = true;

                    this.getUserInfo();
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

    // getImgUrl(imageNameWithExtension) {
    //    return new URL(`${imageNameWithExtension}`, import.meta.url).href
    // },

    async getUserInfo() {
            try {
                const response = await axios.get('/api/userinfo', {
                    params: {
                        id: this.user.id
                    }
                })
                .then(response => {
                    console.log(response.data)
                    userStore().updateUserInfo(response.data.data);
                })
                .catch(error => {
                    console.log(error)
                })

                return response;
            } catch (error) {
                console.error('Ошибка при запросе===:', error);
                throw error;
            }
    },


    addCheckbox(id) {
        const res = this.checkboxes.some(el => el === id);
        this.validate = true;
        if (!res) {
            this.checkboxes.push(id)
        }
        else {
            const index = this.checkboxes.indexOf(id);
            this.checkboxes.splice(index, 1);
        }
    },
    getOptionsForQuestion(questionId, promtId) {
        const question = this.task.questions.find(question => question.id === questionId);
        if (question) {
            return question.answers.map(answer =>
            (
                {
                promt_id: promtId,
                answer_id: answer.id,
                text: answer.text
            }
            )
        )
        }
        return []
    },

    customLabel ({text}) {
      return `${text}`
    },

    checkAnswer(question, promtID, answerID, event) {
        this.validate = true;
        if (question.questiontype === 3 && question.type === 'radio') {
            const res = this.radio1.some(item => item.promt_id === promtID);
            if (!res) {
                this.radio1.push({
                answer_id: answerID,
                answer: event.target.value,
                promt_id: promtID
            })
            } else {
                this.radio1.forEach(item => {
                    item.answer = event.target.value;
                })
            }

        }
    }

  },

  computed: {
    user() {
        return userStore().user;
    },

  },

}
</script>

<style>


    .level-3 .form__label {
        max-width: max-content;
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

</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

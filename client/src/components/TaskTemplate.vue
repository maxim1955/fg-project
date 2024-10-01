<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">{{ task.name }}</p>
            <p class="intro__text">Давно установленный факт, что читатель будет отвлекаться на читаемое содержимое страницы при просмотре её макета. Смысл использования Lorem Ipsum в том, что в нем более или менее нормальное распределение букв, в отличие от использования «Контент здесь, контент здесь», что делает его похожим на читаемый английский.</p>
            <img class="intro__img" src="../assets/img/profile-avatar.png" alt="">

            <div class="carousel__btns">
                <!-- <button class="carousel__btn" @click="$emit('back-levels')">Назад</button> -->
                <button class="carousel__btn" @click="this.intro = false">Далее</button>
            </div>
        </div>
        <div v-if="!this.intro">
            <p class="task__number">Задание {{ this.slide }}/{{ this.questions.length }}</p>
            <div class="q-pa-md">
            <q-carousel
                swipeable
                animated
                v-model="slide"
                ref="carousel"
            >
                <q-carousel-slide v-for="question in questions" :key="question.id" :name="question.id">
                    <div class="task__box">
                        <div class="task__left">
                        <p class="task__info">Прочитайте текст «{{ task.name }}». Для ответа на вопрос отметьте нужный вариант ответа.</p>
                        <p class="task__question">Какое утверждение объясняет с научной точки зрения подъём воздушного шара, заполненного нагретым воздухом?</p>
                        <form v-if="question.questiontуpes == 0" class="task__form form">
                            <label class="form__label">
                                <span>Запишите свой ответ.</span>
                                <div class="flex items-center">
                                    <input placeholder="Введите ответ" type="text" class="form__input">
                                </div>
                            </label>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form v-if="question.questiontуpes == 1" class="task__form form">
                            <span>Отметьте два верных варианта ответа.</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox" v-for="answer in answers" :key="answer.id">
                                    <input name="balls-3" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    {{ answer.text }}
                                </label>
                            </div>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form v-if="question.questiontуpes == 2" class="task__form form">
                            <span>Отметьте один верный вариант ответа.</span>
                            <div class="form__box form__box--radio">
                                <label class="form__label form__label--radio" v-for="answer in answers" :key="answer.id">
                                    <input name="balls-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    {{ answer.text }}
                                </label>
                            </div>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>

                        <form v-if="question.questiontуpes == 3" class="task__form form">
                        <div class="form__box">
                            <label v-for="item in promt" :key="item.id" class="form__label form__label--select">
                                {{ item.text }}
                                <multiselect select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                        </div>
                        <button class="btn-reset form__btn">Принять ответ</button>
                    </form>

                    </div>
                    <div class="task__right">
                        <h3 class="task__title">{{ task.name }}</h3>
                        <p class="task__desc">{{ question.textright }}</p>
                        <img :src="question.url" alt="">
                    </div>
                    </div>
                </q-carousel-slide>



                <template v-slot:control>

                <q-carousel-control
                    class="carousel__btns"
                    style="margin: 0;"
                >
                    <!-- <button @click="this.intro=!this.intro" class="carousel__btn" v-if="this.slide == 1">Назад</button>
                    <q-btn class="carousel__btn" @click="prevSlide()" v-if="this.slide > 1">Назад</q-btn> -->
                    <q-btn class="carousel__btn" @click="nextSlide()" v-if="this.slide < this.questions.length">Далее</q-btn>
                    <button class="carousel__btn" v-if="this.slide == this.questions.length" @click="$emit('open-modal')">Далее</button>
                </q-carousel-control>
                </template>
            </q-carousel>
            </div>
        </div>

    </div>
    <!-- <NextTaskModal @close-modal="closeNextTaskModal()" v-if="showNextTaskModal"/> -->
</template>

<script>
import { ref } from 'vue'
import NextTaskModal from './NextTaskModal.vue'
import Multiselect from 'vue-multiselect'
import {getQuestions, getAnswers, getPromts} from "../dbquery/getQuestions";
import levelsStore from "../store/LevelsStore.js";
export default {
    components: {NextTaskModal, Multiselect },
    props: ['task', 'levelNum', 'taskNum'],
    data() {
        return {
            // slidesCount: 4,
            showNextTaskModal: false,
            intro: true,
            questions: [
                {
                    id: 1,
                    idtask: 1,
                    textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
                                «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
                                Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
                    url: '../assets/img/profile-avatar.png',
                    textquestion: `Какое из приведённых ниже суждений может лучше всего
                                    объяснить, почему учёный-филолог была особенно
                                    удивлена рассказом одной участницы?`,
                    questiontуpes: 0,
                    answer1: 'Точный ответ',
                    answer2: 'Близкий ответ',
                    point1: 1,
                    point2: 2,
                    position: 1
                },
                {
                    id: 2,
                    idtask: 1,
                    textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
                                «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
                                Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
                    url: '../assets/img/profile-avatar.png',
                    textquestion: `Какое из приведённых ниже суждений может лучше всего
                                    объяснить, почему учёный-филолог была особенно
                                    удивлена рассказом одной участницы?`,
                    questiontуpes: 1,
                    answer1: 'Точный ответ',
                    answer2: 'Близкий ответ',
                    point1: 1,
                    point2: 2,
                    position: 2
                },
                {
                    id: 3,
                    idtask: 1,
                    textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
                                «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
                                Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
                    url: '../assets/img/profile-avatar.png',
                    textquestion: `Какое из приведённых ниже суждений может лучше всего
                                    объяснить, почему учёный-филолог была особенно
                                    удивлена рассказом одной участницы?`,
                    questiontуpes: 2,
                    answer1: 'Точный ответ',
                    answer2: 'Близкий ответ',
                    point1: 1,
                    point2: 2,
                    position: 3
                },
                {
                    id: 4,
                    idtask: 1,
                    textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
                                «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
                                Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
                    url: '../assets/img/profile-avatar.png',
                    textquestion: `Какое из приведённых ниже суждений может лучше всего
                                    объяснить, почему учёный-филолог была особенно
                                    удивлена рассказом одной участницы?`,
                    questiontуpes: 3,
                    answer1: 'Точный ответ',
                    answer2: 'Близкий ответ',
                    point1: 1,
                    point2: 2,
                    position: 3
                },
            ],

            answers: [
                {
                    id: 1,
                    idquestion: 1,
                    text: 'Она удивилась, что рассказчица ездит на работу на трамвае в час пик.',
                    trueanswer: 1
                },
                {
                    id: 2,
                    idquestion: 2,
                    text: 'Она удивилась, потому что у рассказчицы было негативное представление о людях, которых она даже не видела.',
                    trueanswer: 0
                }

            ],

            promt: [
                {
                    id: 1,
                    idquestion: 4,
                    text: 'Текст 1',
                    idanswer: 1,
                },
                {
                    id: 2,
                    idquestion: 4,
                    text: 'Текст 2',
                    idanswer: 2,
                },
                {
                    id: 3,
                    idquestion: 4,
                    text: 'Текст 3',
                    idanswer: 3,
                },
            ],

            options: ['Отбор пробы соли', 'Растворение', 'Фильтрование', 'Выпаривание'],
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
        if (this.slide > this.questions.length) {
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

  computed: {
    getLevel() {
        const level = levelsStore().levels.find((level) => {
            return level.id == this.levelNum
        })
    }

  },

      // ТУТ ПОЛУЧАЕМ ВОПРОСЫ И ОТВЕТЫ К ЗАДАНИЯМ

  //   mounted() {
//     let getQuestionsOb = async () => {
//             try {
//                 let questions = await getQuestions();
//                 console.log(questions) // Надо проверить что приходит и опдставить правильные данные
//                 this.questions = questions.data

//                 console.log('Data from API:', this.questions);
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getQuestionsOb();


    // ТУТ ПОЛУЧАЕМ ВАРИАНТЫ ОТВЕТОВ ДЛЯ questiontypes=1,2,3

        //  let getAnswersOb = async () => {
//             try {
//                 let answers = await getAnswers();
//                 console.log(answers) // Надо проверить что приходит и опдставить правильные данные
//                 this.answers = answers.data

//                 console.log('Data from API:', this.answers);
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getAnswersOb();

//  ТУТ ПОЛУЧАЕМ ВАРИАНТЫ УТВЕРРЖДЕНИЙ ДЛЯ questiontypes = 3

//  let getPromtsOb = async () => {
//             try {
//                 let promts = await getPromts();
//                 console.log(promts) // Надо проверить что приходит и опдставить правильные данные
//                 this.promts = promts.data

//                 console.log('Data from API:', this.promts);
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getPromtsOb();
//   }

}
</script>

<style>
.intro__img {
    max-width: 380px;
}

.tasks .q-carousel__slide {
    padding: 0;
}

.tasks .q-carousel {
    border-radius: 0;
}

body .form__label--select .multiselect__tags {
    min-height: 64px;
    display: block;
    padding: 20px 40px 0 20px;
    border-radius: 50px;
    border: 1px solid #E8E8E8;
    background-color: rgba(242, 241, 236, 1);
}

@media (max-width: 1200px) {
    .task__block {
        padding: 20px;
    }

    .intro__img {
        max-width: 280px;
    }
}


</style>


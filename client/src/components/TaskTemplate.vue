<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">{{ getTask.name }}</p>
            <p class="intro__text">{{ getTask.intro }}</p>
            <img class="intro__img" :src="getTask.img" alt="">

            <div class="carousel__btns">
                <button class="carousel__btn" @click="this.intro = false">Далее</button>
            </div>
        </div>
        <div v-if="!this.intro">
            <p class="task__number">Задание {{ this.slide }}/{{ getTask.questions.length }}</p>
            <div class="q-pa-md">
            <q-carousel
                swipeable
                animated
                v-model="slide"
                ref="carousel">
                <q-carousel-slide v-for="question in getTask.questions" :key="question.id" :name="question.position">
                    <div class="task__box">
                        <div class="task__left">
                        <p class="task__info">Прочитайте текст «{{ getTask.name }}». Для ответа на вопрос отметьте нужный вариант ответа.</p>
                        <p class="task__question">{{ question.textquestion }}</p>
                        <form v-if="question.questiontype == 0" class="task__form form">
                            <label class="form__label">
                                <span>Запишите свой ответ.</span>
                                <div class="flex items-center">
                                    <input v-model="answer" placeholder="Введите ответ" type="text" class="form__input">
                                </div>
                            </label>
                            <span class="form__error" v-show="showMessage">Ваш ответ принят</span>
                            <button :disabled="showMessage" @click.prevent="submitAnswer(question)" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form v-if="question.questiontype == 1" class="task__form form">
                            <span>Отметьте два верных варианта ответа.</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox" v-for="answer in question.answers" :key="answer.id">
                                    <input :value="answer.id" name="checkbox" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    {{ answer.text }}
                                </label>
                            </div>
                            <span class="form__error" v-show="showMessage">Ваш ответ принят</span>
                            <button :disabled="showMessage" @click.prevent="submitAnswer(question)" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form v-if="question.questiontype == 2" class="task__form form">
                            <span>Отметьте один верный вариант ответа.</span>
                            <div class="form__box form__box--radio">
                                <label class="form__label form__label--radio" v-for="answer in question.answers" :key="answer.id">
                                    <input name="balls-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    {{ answer.text }}
                                </label>
                            </div>
                            <span class="form__error" v-show="showMessage">Ваш ответ принят</span>
                            <button :disabled="showMessage" @click.prevent="submitAnswer(question)" class="btn-reset form__btn">Принять ответ</button>
                        </form>

                        <form v-if="question.questiontype == 3" class="task__form form">
                            <div class="form__box">
                                <label v-for="item in question.promts" :key="item.id" class="form__label form__label--select">
                                    {{ item.text }}
                                    <multiselect select-label="" :searchable="false" :options="question.options" placeholder="Выберите ответ"></multiselect>
                                </label>
                            </div>
                            <span class="form__error" v-show="showMessage">Ваш ответ принят</span>
                            <button :disabled="showMessage" @click.prevent="submitAnswer(question)" class="btn-reset form__btn">Принять ответ</button>
                        </form>

                    </div>
                    <div class="task__right">
                        <h3 class="task__title">{{ getTask.name }}</h3>
                        <p class="task__desc">{{ question.textright }}</p>
                        <img :src="question.img" alt="">
                    </div>
                    </div>
                </q-carousel-slide>



                <template v-slot:control>

                <q-carousel-control class="carousel__btns" style="margin: 0;">
                    <q-btn :disabled="disabledNext" class="carousel__btn" @click="nextSlide(getTask)" v-if="this.slide < getTask.questions.length">Далее</q-btn>
                    <button :disabled="disabledNext" class="carousel__btn" v-if="this.slide == getTask.questions.length" @click="$emit('open-modal')">Далее</button>
                </q-carousel-control>
                </template>
            </q-carousel>
            </div>
        </div>

    </div>
</template>

<script>
import NextTaskModal from './NextTaskModal.vue'
import Multiselect from 'vue-multiselect'
import levelsStore from "../store/LevelsStore.js";
import userStore from "../store/UserStore.js";
import axios from 'axios';
import {useTimerAndDateStore} from "../store/TimerStore.js";
export default {
    components: {NextTaskModal, Multiselect },
    props: ['task', 'taskNum'],
    data() {
        return {
            showNextTaskModal: false,
            intro: true,
            // questions: [
            //     {
            //         id: 1,
            //         idtask: 1,
            //         textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
            //                     «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
            //                     Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
            //         url: '../assets/img/profile-avatar.png',
            //         textquestion: `Какое из приведённых ниже суждений может лучше всего
            //                         объяснить, почему учёный-филолог была особенно
            //                         удивлена рассказом одной участницы?`,
            //         questiontуpes: 0,
            //         answer1: 'Точный ответ',
            //         answer2: 'Близкий ответ',
            //         point1: 1,
            //         point2: 2,
            //         position: 1
            //     },
            //     {
            //         id: 2,
            //         idtask: 1,
            //         textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
            //                     «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
            //                     Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
            //         url: '../assets/img/profile-avatar.png',
            //         textquestion: `Какое из приведённых ниже суждений может лучше всего
            //                         объяснить, почему учёный-филолог была особенно
            //                         удивлена рассказом одной участницы?`,
            //         questiontуpes: 1,
            //         answer1: 'Точный ответ',
            //         answer2: 'Близкий ответ',
            //         point1: 1,
            //         point2: 2,
            //         position: 2
            //     },
            //     {
            //         id: 3,
            //         idtask: 1,
            //         textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
            //                     «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
            //                     Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
            //         url: '../assets/img/profile-avatar.png',
            //         textquestion: `Какое из приведённых ниже суждений может лучше всего
            //                         объяснить, почему учёный-филолог была особенно
            //                         удивлена рассказом одной участницы?`,
            //         questiontуpes: 2,
            //         answer1: 'Точный ответ',
            //         answer2: 'Близкий ответ',
            //         point1: 1,
            //         point2: 2,
            //         position: 3
            //     },
            //     {
            //         id: 4,
            //         idtask: 1,
            //         textright: `Учёный-филолог Ю.В. Щербинина рассказывает:
            //                     «Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова».
            //                     Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»`,
            //         url: '../assets/img/profile-avatar.png',
            //         textquestion: `Какое из приведённых ниже суждений может лучше всего
            //                         объяснить, почему учёный-филолог была особенно
            //                         удивлена рассказом одной участницы?`,
            //         questiontуpes: 3,
            //         answer1: 'Точный ответ',
            //         answer2: 'Близкий ответ',
            //         point1: 1,
            //         point2: 2,
            //         position: 3
            //     },
            // ],

            // answers: [
            //     {
            //         id: 1,
            //         idquestion: 1,
            //         text: 'Она удивилась, что рассказчица ездит на работу на трамвае в час пик.',
            //         trueanswer: 1
            //     },
            //     {
            //         id: 2,
            //         idquestion: 2,
            //         text: 'Она удивилась, потому что у рассказчицы было негативное представление о людях, которых она даже не видела.',
            //         trueanswer: 0
            //     }

            // ],

            // promt: [
            //     {
            //         id: 1,
            //         idquestion: 4,
            //         text: 'Текст 1',
            //         idanswer: 1,
            //     },
            //     {
            //         id: 2,
            //         idquestion: 4,
            //         text: 'Текст 2',
            //         idanswer: 2,
            //     },
            //     {
            //         id: 3,
            //         idquestion: 4,
            //         text: 'Текст 3',
            //         idanswer: 3,
            //     },
            // ],

            options: [],
            slide: 1,
            disabledNext: true,
            answer: '',
            showMessage: false,
            radio: null,
            checkboxes: []
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
        this.answer = '';
        this.radio = null;
        this.checkboxes = [];
        this.options = [];
        this.showMessage = false;
        this.disabledNext = true;
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
                const answer = question.answers.find(answer => answer.id === el);
                if (answer.trueorfalse === 1) {
                    const point = question.points.find(point => point.id === el );
                    points += point.points;
                }
            })
        }

        if (question.questiontype === 2) {
            const answer = question.answers.find(answer => answer.id === this.radio);
            if (answer.trueorfalse === 1) {
                    const point = question.points.find(point => point.id === this.radio );
                    points += point.points;
                }
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


            // this.disabledNext = false;

        let result = {
            user_id: this.user.id,
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

    getImgUrl(imageNameWithExtension) {
       return new URL(`${imageNameWithExtension}`, import.meta.url).href
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

    checkAnswer(question) {
        this.validate = true;
    }
  },

  computed: {
    getTask() {
        const level = levelsStore().levels.find(level => level.level_id === levelsStore().currentLevel)
        if (level) {
            const task = level.tasks.find(task => task.id === this.taskNum);
            if (task) return task
            else return null;
        } else {
            return null
        }

    },

    user() {
        return userStore().user;
    }
  },

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


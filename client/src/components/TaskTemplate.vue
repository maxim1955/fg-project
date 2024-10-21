<template>
    <div class="task__block">
        <div v-if="intro" class="task__intro intro">
            <p class="intro__title">{{ getTask.name }}</p>
            <p class="intro__text">{{ getTask.intro }}</p>
            <img class="intro__img" :src="getTask.img" alt="">

            <div class="carousel__btns">
                <button class="carousel__btn" @click="intro = false">Далее</button>
            </div>
        </div>
        <div v-if="!intro">
            <p class="task__number">Задание {{ slide }}/{{ getTask.questions.length }}</p>
            <div class="q-pa-md">
            <q-carousel v-if="getTask.questions.length > 0"
                swipeable
                animated
                v-model="slide"
                ref="carousel">
                <q-carousel-slide v-for="(question, index) in getTask.questions" :key="question.id" :name="index + 1">
                    <div class="task__box">
                        <div class="task__left">
                        <p class="task__info">Прочитайте текст «{{ getTask.name }}». Для ответа на вопрос отметьте нужный вариант ответа.</p>
                        <p class="task__question">{{ question.textquestion }}</p>
                        <div v-if="getTask.position === 1 && currentLevel === 4 && question.position === 3" class="task__images">
                            <img v-for="(el, index) in task.img" :key="index" class="task__img" :src="getImgUrl(el)" alt="">
                        </div>
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 0" class="task__form form">
                            <label class="form__label">
                                <span>{{ question.btntext }}</span>
                                <div class="flex items-center">
                                    <input v-model="answer" placeholder="Введите ответ" type="text" class="form__input" @change="checkAnswer(question)" :disabled="disabledInput">
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
                                    <input :value="answer.id" v-model="radio" type="radio" class="form__input form__input--radio" @change="checkAnswer(question)" :disabled="disabledInput">
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
                        <form @submit.prevent="submitAnswer(question)" v-else-if="question.questiontype == 3 && question.type === 'select'" class="task__form form">
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
                        <form @submit.prevent="submitAnswer(question)" v-else-if="question.questiontype == 3 && getTask.position === 1 && currentLevel === 2 && question.position === 4" class="task__form form">
                            <span>{{ question.btntext }}</span>
                            <table class="task__table task__table--noborder">
                                <thead>
                                    <tr>
                                        <th><span>Положение воздушных шариков</span></th>
                                        <th><span>Газ для наполнения шариков</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in question.promts" :key="item.id">
                                        <td><span>{{ item.text }}</span></td>
                                        <td>
                                            <multiselect @select="checkAnswer(question)" :custom-label="customLabel" :allow-empty="true" v-model="options[index]" select-label="" :searchable="false" :options="getOptionsForQuestion(question.id, item.id)" placeholder="Выберите ответ" :disabled="disabledInput">
                                            </multiselect>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                        <form @submit.prevent="submitAnswer(question)" v-else-if="question.questiontype == 3 && getTask.position === 1 && currentLevel === 3 && question.position === 2" class="task__form form">
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
                        <form @submit.prevent="submitAnswer(question)" v-else-if="question.questiontype == 3 && getTask.position === 1 && currentLevel === 3 && question.position === 4" class="task__form form">
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
                        <form @submit.prevent="submitAnswer(question)" v-else-if="question.questiontype == 3" class="task__form form">
                            <span>{{ question.btntext }}</span>
                                <div class="form__box">
                                    <label class="form__label" v-for="(item, index) in question.promts" :key="item.id">
                                        {{ item.text }}
                                        <multiselect @select="checkAnswer(question)" :custom-label="customLabel" :allow-empty="true" v-model="options[index]" select-label="" :searchable="false" :options="getOptionsForQuestion(question.id, item.id)" placeholder="Выберите ответ" :disabled="disabledInput">
                                        </multiselect>
                                    </label>
                                </div>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>


                    </div>
                    <div class="task__right">
                        <h3 class="task__title">{{ getTask.name }}</h3>
                        <p class="task__desc">{{ question.textright }}</p>
                        <!-- <div v-if="question.img">
                            <div class="task__images">
                                <img v-for="(img, index) in JSON.parse(question.img)" :key="index" :class="{task__img: JSON.parse(question.img).length > 1}" :src="'storage/' + img" alt="">
                            </div>
                            <p class="task__info">{{ question.imgdesc }}</p>
                        </div> -->
                    </div>
                    </div>
                </q-carousel-slide>



                <template v-slot:control>

                <q-carousel-control class="carousel__btns" style="margin: 0;">
                    <q-btn :disabled="disabledNext" class="carousel__btn" @click="nextSlide(getTask)" v-if="this.slide < getTask.questions.length">Далее</q-btn>
                    <button :disabled="disabledNext" class="carousel__btn" v-if="this.slide === getTask.questions.length" @click="$emit('open-modal')">Далее</button>
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
            options: [],
            slide: 1,
            disabledNext: true,
            answer: '',
            showMessage: false,
            radio: null,
            radio1: [],
            checkboxes: [],
            showTimerModal: false,
            questions: [],
            messageText: '',
            disabledInput: false,
            validate: false,

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
        this.disabledInput = false;
        if (this.slide === this.getTask.questions.length) {
            this.questions = userStore().user.pointspupils.filter(item => item.level_id === levelsStore().currentLevel && item.task_id === task.id);
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
            let trueanswer = 0;
            this.options.forEach(option => {

                const promt = question.promts.find(promt => promt.id === option.promt_id);
                if (option.answer_id === promt.answer_id) {
                    trueanswer += 1;
                }
                console.log(trueanswer)
                const point = question.points.find(point => point.question_id === question.id && point.truecount === trueanswer);
                if (point) {
                    points += point.points;
                }
            })
        }


            // this.disabledNext = false;

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
        const question = this.getTask.questions.find(question => question.id === questionId);
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
    },


  },

  computed: {
    getTask() {
        const level = levelsStore().levels.find(level => level.level_id === levelsStore().currentLevel)
        if (level) {
            const task = level.tasks.find(task => task.position === levelsStore().currentTask);
            if (task) return task
            else return null;
        } else {
            return null
        }

    },

    user() {
        return userStore().user;
    },

    currentLevel() {
        return levelsStore().currentLevel;
    }
  },

}
</script>

<style>
 .account.level-1-1 {
    background-image: url(../assets/img/task-1-1.webp);
    background-size: cover;
}
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

    .account.level-2-1 {
        background-image: url(../assets/img/task-2-1.webp);
        background-size: cover;
    }

    .level-2-1 .task__table tbody tr {
        flex-wrap: wrap;
    }

    .level-2-1 .task__table {
        overflow: visible;
    }

    .level-2-1 .task__table thead {
        border-radius: 20px 20px 0 0;
    }

    .level-2-1 .task__table tbody {
        border-radius: 0 0 20px 20px;
    }

    .account.level-3-1 {
        background-image: url(../assets/img/task-3-1.webp);
        background-size: cover;
    }

    .level-3-1 .task__table {
        overflow: visible;
    }

    .level-3-1 .task__table thead {
        border-radius: 20px 20px 0 0;
    }

    .level-3-1 .task__table tbody {
        border-radius: 0 0 20px 20px;
    }

@media (max-width: 1200px) {
    .task__block {
        padding: 20px;
    }

    .intro__img {
        max-width: 280px;
    }

    .account.level-1-1 {
        background-image: url(../assets/img/task-1-1-1024.webp);
        background-position: left top;
    }

    .account.level-2-1 {
        background-image: url(../assets/img/task-2-1-1024.webp);
    }

    .account.level-3-1 {
            background-image: url(../assets/img/task-3-1-1024.webp);
        }
}

    @media (max-width: 360px) {
        .account.level-1-1 {
            background: url(../assets/img/task-1-1-top.webp) no-repeat top, url(../assets/img/task-1-1-bottom.webp) no-repeat bottom;
        }

        .account.level-2-1 {
            background-image: url(../assets/img/task-2-1-360.webp);
        }

        .account.level-3-1 {
            background-image: url(../assets/img/task-3-1-360.webp);
        }
    }


</style>


<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">Введение</p>
            <p class="intro__text">Прочитайте введение. Затем приступайте к выполнению заданий.</p>
            <p class="intro__subtitle">{{ task.name }}</p>
            <p class="intro__desc" v-html="task.intro"></p>
            <div class="carousel__btns">
                <!-- <button class="carousel__btn" @click="$emit('back-levels')">Назад</button> -->
                <button class="carousel__btn" @click="this.intro = false">Далее</button>
            </div>
        </div>
        <div v-if="!this.intro">
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
                        <p class="task__info">Прочитайте текст «{{ task.name }}». Для ответа на вопрос отметьте нужный вариант ответа.</p>
                        <p class="task__question">{{ task.textquestion }}</p>
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
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 3" class="task__form form">
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
                    </div>
                    <div class="task__right">
                        <h3 class="task__title">{{ task.name }}</h3>
                        <p class="task__desc" v-html="question.textright"></p>

                        <div v-if="question.images">
                            <div class="task__images">
                                <img v-for="(img, index) in question.images.img" :key="index" :class="{task__img: question.images.img.length > 1}" :src="getImgUrl(img)" alt="">
                            </div>
                            <p class="task__info">{{ question.images.desc }}</p>
                        </div>

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
    </div>
</template>

<script>
import NextTaskModal from './NextTaskModal.vue'
import Multiselect from 'vue-multiselect'
import userStore from "../store/UserStore.js";
import axios from 'axios';
export default {
    components: {NextTaskModal, Multiselect },
    data() {
        return {
            slidesCount: 4,
            showNextTaskModal: false,
            value1: null,
            value2: null,
            value3: null,
            options: [],
            selectedOptions: [],
            intro: true,
            disabledNext: true,
            slide: 1,
            answer: '',
            radio: null,
            checkboxes: [],
            showMessage: false,
            messageText: '',
            task: {
                id: 0,
                name: 'Воздушные шары',
                intro: `Вы наверняка много раз держали их в руках. Круглые, яркие, летящие — они способны превратить обычный день в праздник и заставить улыбнуться даже самого грустного человека. Догадались, о чём идёт речь? Конечно, о воздушных шариках Сегодня их знают все на свете и используют в качестве подарков, игрушек и элементов праздничного украшения. А на большом воздушном шаре можно совершить незабываемую прогулку.
                        <br><br>Обыкновенные воздушные шары имеют большую историю и хранят немало тайн.`,
                position: 1,
                level_id: 2,

                questions: [
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 1,
                                text: 'Атмосферное давление при подъёме уменьшается.',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                text: 'Плотность горячего воздуха меньше, чем плотность холодного воздуха.',
                                trueorfalse: 1,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                text: 'Все газы, из которых состоит дым, легче воздуха.',
                                trueorfalse: 0,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                text: 'Газы при нагревании уменьшаются в объёме.',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 1,
                                truecount: 1,
                                points: 1,
                            },
                        ],
                        id: 1,
                        position: 1,
                        questiontype: 2,
                        btntext: 'Отметьте один верный вариант ответа.',
                        textquestion: 'Какое утверждение объясняет с научной точки зрения подъём воздушного шара, заполненного нагретым воздухом?',
                        textright: 'Древние китайцы изобрели фонари для передачи сигналов во время военных операций. Эти фонари имели отверстие в нижней части, где был зажжён небольшой огонь. Горячий дым помогал поднять фонарь и давал ему возможность парить в воздухе. Это были первые древние воздушные шары.',
                    },
                    {
                        answer1: 3,
                        answer2: null,
                        id: 2,
                        point1: 1,
                        point2: 0,
                        position: 2,
                        questiontype: 0,
                        btntext: 'Запишите свой ответ в граммах, округлив до целого числа.',
                        images: {
                            desc: 'Рисунок 1. Эксперимент по измерению грузоподъёмности воздушного шарика.',
                            img: ['../assets/img/task-2-а.webp', '../assets/img/task-2-б.webp', '../assets/img/task-2-в.webp']
                        },
                        textquestion: 'Чему равна грузоподъёмность гелиевого шарика в этом эксперименте?',
                        textright: `
                        В истории воздухоплавания много разнообразных интересных страниц: от первого шара братьев Монгольфье до огромных дирижаблей.
                        <br><br>
                        Но одной из самых главных задач для конструкторов, создающих подобные летательные аппараты, была возможность поднимать какой‑то груз (людей, оборудование и т.п.).
                        <br><br>
                        Грузоподъёмность — это максимальная масса поднимаемого груза.
                        <br><br>
                        На уроке ребятам было предложено измерить грузоподъёмность гелиевого шарика с помощью электронных весов.
                        <br><br>
                        Для этого они использовали предмет, массу которого определили в граммах по показанию весов (рисунок 1 б).
                        <br><br>
                        Затем ребята привязали к предмету шарик и измерили получившуюся массу в граммах (рисунки 1 а, б, в).`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 3,
                                text: 'Гелий, как и водород, не имеет цвета и запаха.',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 3,
                                text: 'Гелий, в отличие от водорода, не взрывается.',
                                trueorfalse: 1,
                            },
                            {
                                id: 3,
                                question_id: 3,
                                text: 'Гелий, как и водород, встречается в космосе.',
                                trueorfalse: 0,
                            },
                            {
                                id: 4,
                                question_id: 3,
                                text: 'Гелий, как и водород, лёгкий газ.',
                                trueorfalse: 1,
                            },
                            {
                                id: 5,
                                question_id: 3,
                                text: 'Гелий, как и водород, мало растворяется в воде.',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 3,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 2,
                                question_id: 3,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 3,
                                question_id: 3,
                                truecount: 2,
                                points: 0,
                            },
                            {
                                id: 4,
                                question_id: 3,
                                truecount: 2,
                                points: 0,
                            },
                            {
                                id: 5,
                                question_id: 3,
                                truecount: 2,
                                points: 0,
                            },
                        ],
                        id: 3,
                        position: 3,
                        questiontype: 1,
                        btntext: 'Отметьте два верных варианта ответа.',
                        textquestion: 'Почему для заполнения воздушных шаров водород заменили гелием?',
                        textright: `
                        Чтобы не использовать горючее и не зажигать открытое пламя, воздушные шары стали наполнять самым лёгким газом — водородом. Благодаря этому газу воздушные шары смогли улетать высоко в небо. Но позже стали использовать в качестве наполнителя другой лёгкий газ — гелий. Гелий относится к инертным газам, которые в обычных условиях не взаимодействуют с другими веществами.
                        <br><br>
                        Эта замена связана с тем, что водород с кислородом может образовывать взрывоопасные смеси. Так, однажды человек, который хотел подшутить, случайно взорвал всё шоу воздушных шаров, заполненных водородом.`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 4,
                                text: 'Гелий',
                                trueorfalse: 1,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: 'Азот',
                                trueorfalse: 1,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: 'Углекислый газ',
                                trueorfalse: 1,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 4,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 4,
                                question_id: 4,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 5,
                                question_id: 3,
                                truecount: 2,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 4,
                                text: 'Лежат на полу',
                                answer_id: 3
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: 'Свободно парят в воздухе, но не улетают',
                                answer_id: 2,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: 'Поднимаются высоко в небо',
                                answer_id: 3,
                            },

                        ],
                        id: 4,
                        point1: 0,
                        point2: 0,
                        position: 4,
                        questiontype: 3,
                        btntext: 'Выберите нужные варианты ответа в выпадающих меню.',
                        images: {
                            desc: '',
                            img: ['../assets/img/task-2-4.webp']
                        },
                        textquestion: 'Каким газом надо заполнить воздушные шарики в каждом из указанных положений?',
                        textright: `
                        Воздушные шарики для праздников наполняют различными газами, которые бывают тяжёлыми и лёгкими. Продавцы шаров, надувая их газами легче или тяжелее воздуха, добиваются разных эффектов.
                        <br><br>
                        Воздушные шары, заполненные различными газами, ведут себя по‑разному.
                        <br><br>
                        В магазин поступил заказ на украшение зала в школе. Одни шарики должны лежать на поверхностях, другие — парить в воздухе, а третьи — подниматься высоко вверх.
                        <br><br>
                        Работники магазина при выполнении заказа заполнили шары разными газами с учётом их плотности:`,
                    },

                ]
            },
            validate: false,
            disabledInput: false,
        }
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
    user() {
        return userStore().user;
    },

  },



}
</script>

<style>
    .level-2 .task__right > .task__table {
        max-width: 320px
    }

    .account.level-2-0 {
        background-image: url(../assets/img/task-2-1.webp);
        background-size: cover;
    }

    .level-2 .task__form > .task__table {
        display: block;
        overflow: visible;
    }

    .level-2 tbody, .level-2 thead {
        display: block;
    }

    .level-2 thead {
        border-radius: 20px 20px 0 0;
    }

    .level-2 tbody {
        border-radius: 0 0 20px 20px;
        overflow: hidden;
    }

    .level-2 .task__form > .task__table td, .level-2 .task__form > .task__table th {
        display: inline-block;
    }

    .level-2 .task__form > .task__table tr {
        display: flex;
    }

    .level-2-0 .task__table tbody tr {
        flex-wrap: wrap;
    }

    .level-2-0 .task__table {
        overflow: visible;
    }

    .level-2-0 .task__table thead {
        border-radius: 20px 20px 0 0;
    }

    .level-2-0 .task__table tbody {
        border-radius: 0 0 20px 20px;
    }

    @media (max-width: 1660px) {
        .level-2 .task__form > .task__table tr {
            flex-direction: column;
            align-items: start;
        }
    }

    @media (max-width: 1200px) {
        .account.level-2-1 {
            background-image: url(../assets/img/task-2-1-1024.webp);
        }
    }

    @media (max-width: 768px) {
        .level-2 .task__form > .task__table {
            display: table;
        }

        .level-2 .task__form > .task__table tbody,
        .level-2 .task__form > .task__table thead {
            display: table-row-group;
        }

        .level-2 .task__form > .task__table tr {
            display: table-row;
        }

        .level-2 .task__form > .task__table td,
        .level-2 .task__form > .task__table th {
            display: table-cell;
            padding: 12px 20px;
        }

        .level-2 .task__form {
            overflow: auto;
            display: block;
        }

    }

    @media (max-width: 640px) {
        .task-2 .task__right .task__table {
            margin-bottom: 20px;
            order: -1;
        }

        .task-2 .task__form > .task__table {
            margin-bottom: 20px;
        }

        .task-2 .task__form > .task__table tr {
            flex-wrap: nowrap;
            flex-direction: row;
            align-items: center;
        }

        .task-2 .task__form > .task__table td {
            flex-shrink: 0;
        }

        .task-2 .task__form > .task__table td span {
            width: 200px;
        }

    }

    @media (max-width: 360px) {
        .account.level-2-1 {
            background-image: url(../assets/img/task-2-1-360.webp);
        }
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

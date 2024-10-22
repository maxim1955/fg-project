<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">Введение</p>
            <p class="intro__text">Прочитайте введение. Затем приступайте к выполнению заданий.</p>
            <p class="intro__desc">Для обозначения различных вариантов недоброжелательного речевого поведения учёные предложили название «речевая агрессия». Речевая агрессия захватила множество сфер современного общества: её примеры можно найти в политике и СМИ, она проникла в бизнес и рекламу, закрепилась в семье и школе. Грубое и обидное общение, словесное недоброжелательство, резкость высказываний становятся едва ли не нормой повседневности. Мы ругаемся, ссоримся, злословим, сплетничаем. Нам угрожают, нас обвиняют, над нами насмехаются. Но существуют и стратегии сдерживания грубости в речи, приёмы защиты от словесных нападок.</p>
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
                        <div class="task__left" :class="{'task__last': question.id === 5}">
                        <p class="task__info">{{ question.questionname }}</p>
                        <p class="task__question" v-html="question.textquestion"></p>
                        <div v-if="task.images" class="task__images">
                                <img v-for="(img, index) in task.images" :key="index" class="task__img" :src="getImgUrl(img)" alt="">
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
                        <form @submit.prevent="submitAnswer(question)" v-if="question.questiontype == 3" class="task__form form">
                            <span>{{ question.btntext }}</span>
                                <div class="form__box">
                                    <div class="task__selects selects" :class="{'selects-5': question.id === 5}">
                                        <label class="form__label" v-for="(item, index) in question.promts" :key="item.id">
                                            {{ item.text }}
                                            <img v-if="item.img" :src="getImgUrl(item.img)" alt="">
                                            <multiselect @select="checkAnswer(question)" :custom-label="customLabel" :allow-empty="true" v-model="options[index]" select-label="" :searchable="false" :options="getOptionsForQuestion(question.id, item.id)" placeholder="Выберите ответ" :disabled="disabledInput">
                                            </multiselect>
                                        </label>
                                    </div>

                                </div>
                            <span class="form__error" v-show="showMessage">{{ messageText }}</span>
                            <button :disabled="!validate" type="submit" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                    </div>
                    <div class="task__right" v-if="question.id !== 5">
                        <h3 class="task__title">{{ question.questiontitle }}</h3>
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

            <q-carousel-control
                class="carousel__btns"
                style="margin: 0;"
            >
                <!-- <button @click="this.intro=!this.intro" class="carousel__btn" v-if="this.slide == 1">Назад</button>
                <q-btn class="carousel__btn" @click="prevSlide()" v-if="this.slide > 1">Назад</q-btn> -->
                <q-btn :disabled="disabledNext" class="carousel__btn" @click="nextSlide()" v-if="this.slide < slidesCount">Далее</q-btn>
                <button :disabled="disabledNext" class="carousel__btn" v-if="this.slide == slidesCount" @click="$emit('open-modal')">Далее</button>
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
import userStore from "../store/UserStore.js";
import axios from 'axios';
import {useTimerAndDateStore} from "../store/TimerStore.js";
export default {
    components: {NextTaskModal, Multiselect },
    data() {
        return {
            slidesCount: 5,
            showNextTaskModal: false,
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
                name: 'Вопросы к специалисту',
                intro: `<p class="intro__desc">Для обозначения различных вариантов недоброжелательного речевого поведения учёные предложили название «речевая агрессия». Речевая агрессия захватила множество сфер современного общества: её примеры можно найти в политике и СМИ, она проникла в бизнес и рекламу, закрепилась в семье и школе. Грубое и обидное общение, словесное недоброжелательство, резкость высказываний становятся едва ли не нормой повседневности. Мы ругаемся, ссоримся, злословим, сплетничаем. Нам угрожают, нас обвиняют, над нами насмехаются. Но существуют и стратегии сдерживания грубости в речи, приёмы защиты от словесных нападок.</p>`,
                position: 1,
                level_id: 5,

                questions: [
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 1,
                                text: 'Она удивилась, что рассказчица ездит на работу на трамвае в час пик.',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                text: 'Она удивилась, потому что у рассказчицы было негативное представление о людях, которых она даже не видела.',
                                trueorfalse: 1,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                text: 'Она удивилась, потому что в общественном транспорте не бывает размолвок между пассажирами.',
                                trueorfalse: 0,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                text: 'Она удивилась, потому что не ожидала увидеть на тренинге участников пожилого и старшего возраста.',
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
                        questiontitle: 'Вопросы к специалисту',
                        questionname: 'Прочитайте текст «Вопросы к специалисту». Для ответа на вопрос отметьте нужный вариант ответа.',
                        btntext: 'Отметьте один верный вариант ответа.',
                        textquestion: 'Какое из приведённых ниже суждений может лучше всего объяснить, почему учёный-филолог была особенно удивлена рассказом одной участницы?',
                        textright: `
                        <p class="task__desc">Учёный-филолог Ю.В.&nbsp;Щербинина рассказывает:</p>
                        <p class="task__desc">«Лекции тренинги по&nbsp;культуре речи обычно начинаются с&nbsp;таких вопросов и&nbsp;просьб: «Приходится воевать с&nbsp;коллегами! Как&nbsp;поставить их&nbsp;на&nbsp;место?»; «Надо&nbsp;как‑то ответить соседу грубияну&nbsp;— достал уже!»; «У&nbsp;меня словесные баталии с&nbsp;дочерью! Можно&nbsp;ли&nbsp;как‑то воздействовать?»; «В&nbsp;доме скандалят и&nbsp;скандалят! Надо&nbsp;что‑то делать, подскажите нужные слова». </p>
                        <p class="task__desc">Особенно удивила меня своим рассказом одна немолодая участница. Вот&nbsp;её&nbsp;слова: «Езжу на&nbsp;работу на&nbsp;трамвае в&nbsp;час&nbsp;пик. Даже&nbsp;заходить в&nbsp;вагон не&nbsp;хочется: все, кто&nbsp;внутри, ничего хорошего тебе не&nbsp;пожелают. Да&nbsp;и&nbsp;чего&nbsp;ждать от&nbsp;этих хамов?»</p>`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 2,
                                text: 'Люди спорят и ругаются на работе, дома это случается редко.',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                text: 'Лучше использовать метро, а не трамвай, в метро быстрее добираться до места работы.',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 2,
                                text: 'Многие участники тренингов стремятся узнать «волшебные слова», которые помогут им победить в словесном споре.',
                                trueorfalse: 1,
                            },
                            {
                                id: 4,
                                question_id: 2,
                                text: 'В сознании участников общения появляется стереотип — образ опасного врага.',
                                trueorfalse: 1,
                            },
                            {
                                id: 5,
                                question_id: 2,
                                text: 'Грубость неискоренима.',
                                trueorfalse: 0,
                            },
                            {
                                id: 6,
                                question_id: 2,
                                text: 'Участвовать в тренингах совершенно бесполезно, для развития речи нужно больше читать.',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 2,
                                truecount: 2,
                                points: 1,
                            },
                        ],
                        id: 2,
                        position: 2,
                        questiontype: 1,
                        questiontitle: 'Вопросы к специалисту',
                        questionname: 'Воспользуйтесь текстом «Вопросы к специалисту». Для ответа на вопрос отметьте нужные варианты ответа.',
                        btntext: 'Отметьте все верные варианты ответа.',
                        textquestion: 'Какие из представленных ниже суждений отражают мнения участников тренингов и лекций по культуре речи, о которых рассказала учёный-филолог?',
                        textright: `
                        <p class="task__desc">Учёный-филолог Ю.В.&nbsp;Щербинина рассказывает:</p>
                        <p class="task__desc">«Лекции тренинги по&nbsp;культуре речи обычно начинаются с&nbsp;таких вопросов и&nbsp;просьб: «Приходится воевать с&nbsp;коллегами! Как&nbsp;поставить их&nbsp;на&nbsp;место?»; «Надо&nbsp;как‑то ответить соседу грубияну&nbsp;— достал уже!»; «У&nbsp;меня словесные баталии с&nbsp;дочерью! Можно&nbsp;ли&nbsp;как‑то воздействовать?»; «В&nbsp;доме скандалят и&nbsp;скандалят! Надо&nbsp;что‑то делать, подскажите нужные слова». </p>
                        <p class="task__desc">Особенно удивила меня своим рассказом одна немолодая участница. Вот&nbsp;её&nbsp;слова: «Езжу на&nbsp;работу на&nbsp;трамвае в&nbsp;час&nbsp;пик. Даже&nbsp;заходить в&nbsp;вагон не&nbsp;хочется: все, кто&nbsp;внутри, ничего хорошего тебе не&nbsp;пожелают. Да&nbsp;и&nbsp;чего&nbsp;ждать от&nbsp;этих хамов?»</p>`,
                    },
                    {
                        id: 3,
                        position: 3,
                        questiontype: 3,
                        questiontitle: 'День вежливости',
                        questionname: 'Прочитайте текст «День вежливости». Для ответа на вопрос выберите в выпадающих меню нужные варианты ответа.',
                        answers: [
                            {
                                id: 1,
                                question_id: 3,
                                text: 'Да, могли',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 3,
                                text: 'Нет, не могли',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 3,
                                truecount: 7,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 3,
                                text: 'Выражать расположенность, быть доброжелательным.',
                                answer_id: 1,

                            },
                            {
                                id: 2,
                                question_id: 3,
                                text: 'Использовать ехидные и колкие замечания, но улыбаться, когда произносишь их.',
                                answer_id: 2,

                            },
                            {
                                id: 3,
                                question_id: 3,
                                text: 'Никогда не участвовать в разговоре: «всегда лучше молчать, чем говорить»',
                                answer_id: 2,
                            },
                            {
                                id: 4,
                                question_id: 3,
                                text: 'Внимательно слушать собеседника и не перебивать его.',
                                answer_id: 1,
                            },
                            {
                                id: 5,
                                question_id: 3,
                                text: 'Исключить из употребления нецензурные и бранные слова.',
                                answer_id: 1,
                            },
                            {
                                id: 6,
                                question_id: 3,
                                text: 'Надеть наушники и избегать общения.',
                                answer_id: 2,
                            },
                            {
                                id: 7,
                                question_id: 3,
                                text: 'Употреблять формулы соответствии с ситуацией.',
                                answer_id: 1,
                            },

                        ],
                        btntext: 'Выберите нужные варианты ответа в выпадающих меню.',
                        textquestion: 'Какие из предложенных приёмов общения могли помочь участникам Дня вежливости продемонстрировать это качество?',
                        textright: `
                        <p class="task__desc">Во время тренинга по культуре речи один участник поделился воспоминанием: «Это было в 90-е годы. Я перешёл в 10 класс. Во время летних каникул мы с одноклассниками поехали в школьный трудовой лагерь. Каждый день в течение 4 часов мы собирали клубнику, малину или сливы, а после этого занимались спортом, читали, даже решали задачки по математике с нашим учителем. Как я сейчас понимаю, нам было очень интересно во многом потому, что с нами были весёлые учителя</p>
                        <p class="task__desc">Каждый день происходило что‑то неожиданное и непредсказуемое. Однажды мы проснулись под громогласный призыв: «Здравствуйте, добро пожаловать на День вежливости». Никогда не забуду этот день: каждая произнесённая фраза должна была показывать, что именно ты — самый вежливый человек на свете. Я не думал так о форме выражения мысли, даже когда сочинение писал. Конечно, можно было и не участвовать, подумаешь, никто же не заставлял. Но когда это касается всех, и взрослых, которых ты уважаешь, и школьников, среди которых не хочется ударить лицом в грязь, то, само собой, начинаешь выражать свои мысли ну очень старательно, думаешь над каждым словом.</p>
                        <p class="task__desc">И ещё я понял: даже вежливое общение не всегда бывает позитивным. Можно очень вежливо наговорить неприятных вещей, после чего и общаться с человеком не захочется».</p>`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 4,
                                text: '«Красная тряпка»',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: '«Боксёрская груша»',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: '«Белая ворона»',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 4,
                                truecount: 6,
                                points: 2,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                truecount: 5,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 4,
                                text: '',
                                img: '../assets/img/task-5-1.webp',
                                answer_id: 3,

                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: '',
                                img: '../assets/img/task-5-2.webp',
                                answer_id: 2,

                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: '',
                                img: '../assets/img/task-5-3.webp',
                                answer_id: 3,

                            },
                            {
                                id: 4,
                                question_id: 4,
                                text: '',
                                img: '../assets/img/task-5-4.webp',
                                answer_id: 2,
                            },
                            {
                                id: 5,
                                question_id: 4,
                                text: '',
                                img: '../assets/img/task-5-5.webp',
                                answer_id: 1,
                            },
                            {
                                id: 6,
                                question_id: 4,
                                text: '',
                                img: '../assets/img/task-5-6.webp',
                                answer_id: 1,
                            },

                        ],
                        id: 4,
                        position: 4,
                        questiontype: 3,
                        questiontitle: 'Информация психолога',
                        questionname: 'Прочитайте текст «Информация психолога», расположенный справа. Для ответа на вопрос подберите к иллюстрации из списка название типа поведения.',
                        btntext: 'Выберите нужные варианты ответа в выпадающих меню.',
                        textquestion: `Какой из типов поведения показан на каждом рисунке?`,
                        textright: `
                        <p class="task__desc">Школьный психолог рассказал восьмиклассникам о типах поведения, которое чаще других вызывает словесную агрессию. Он назвал их «красная тряпка» (вызывающее или провокативное поведение), «боксёрская груша» (безропотное поведение, боязнь ответить) и «белая ворона» (поведение непохожего на других, отличающегося от большинства).</p>`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 5,
                                text: 'Объясняет',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 5,
                                text: 'Не объясняет',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 5,
                                truecount: 5,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 5,
                                text: 'Всем людям свойственно вести себя агрессивно.',
                                answer_id: 2,

                            },
                            {
                                id: 2,
                                question_id: 5,
                                text: 'Речь отражает уровень образования и культуры человека, его мышление.',
                                answer_id: 1,

                            },
                            {
                                id: 3,
                                question_id: 5,
                                text: 'В общении помогает эмпатия — умение сопереживать людям, понимать, что они чувствуют в данный момент, она помогает сдерживаться, даже когда человек раздражён или обижен.',
                                answer_id: 1,
                            },
                            {
                                id: 4,
                                question_id: 5,
                                text: 'Знать бранные слова и грубые выражения вовсе не означает употреблять их в речи.',
                                answer_id: 1,
                            },
                            {
                                id: 5,
                                question_id: 5,
                                text: 'Существуют социальные группы, в которых грубость и сквернословие являются нормой поведения.',
                                answer_id: 2,
                            },
                        ],
                        id: 5,
                        position: 5,
                        questiontype: 3,
                        questionname: 'Отметьте в таблице нужные варианты ответа.',
                        btntext: 'Отметьте «Объясняет» или «Не объясняет» для каждого утверждения.',
                        textquestion: `<p class="text__question">На занятии с восьмиклассниками школьный психолог привёл высказывание из книги «Речевая защита. Учимся управлять агрессией»: «Вполне очевидно, что полностью изжить речевую агрессию, избавиться от неё ни в повседневно-бытовом, ни в профессионально — деловом общении невозможно. Однако предупреждать, сдерживать, контролировать агрессию в своей и чужой речи — вполне посильная задача для каждого из нас».</p>
                        <p class="text__question">Какие из предложенных ниже суждений объясняют, почему можно контролировать или научиться контролировать речевую агрессию, а какие — не объясняют?</p>`,
                        textright: ``,
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
            if (this.answer === question.answer1) {
                points = question.point1
            } else
            if (this.answer === question.answer2) {
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

    getImgUrl(imageNameWithExtension) {
       return new URL(`${imageNameWithExtension}`, import.meta.url).href
    },

    checkAnswer(question, promtID, event) {
        this.validate = true;
        if (question.questiontype === 3 && question.type === 'radio') {
            const res = this.radio1.some(item => item.promt_id === promtID);
            if (!res) {
                this.radio1.push({
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
    .task__last {
        margin-bottom: 40px;
    }

    .account.level-5-0 {
        background-image: url(../assets/img/task-bg-5-1.webp);
        background-size: cover;
    }

    .task__selects {
        margin-bottom: 40px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px 12px;
        align-items: center;
        padding: 12px 20px;
        border-radius: 20px;
        background-color: var(--bg);
    }

    .selects-5 {
        grid-template-columns: 1fr auto;
    }

    .task__selects.selects .form__label {
        display: contents;
    }

    .task__selects--auto {
        grid-template-columns: repeat(2, auto);
    }

    .selects__item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .q-carousel__slide {
        padding: 0;
    }

    .q-carousel {
        border-radius: 0;
    }
    .task-5 .task__form > .task__table tr {
        margin-bottom: 0;
    }

    .task-5 .task__form > .task__table td span {
        max-width: 883px;
    }

    .task-5 .task__form > .task__table tr {
        flex-wrap: nowrap;
    }

    .task-5 .task__form > .task__table {
        overflow: visible;
    }

    .task-5 .task__form > .task__table--5 {
        overflow: hidden;
    }

    @media (max-width: 1660px) {
        .task__selects {
            grid-template-columns: 1fr;
        }

        .task__selects--auto {
            grid-template-columns: repeat(2, auto);
        }
    }

    @media (max-width: 1200px) {
        .task__selects span {
            font-size: 16px;
            font-weight: 600;
            line-height: 19.2px;
        }

        .task__selects {
            margin-bottom: 20px;
        }

        .account.level-5-1 {
            background-image: url(../assets/img/task-bg-5-1-1024.webp);
        }
    }

    @media (max-width: 768px) {
        .task__selects--auto {
            grid-template-columns: 1fr;
        }
    }



    @media (max-width: 640px) {
        .task-5 .task__form > .task__table {
            margin-bottom: 20px;
        }

        .task-5.task .form__btn {
            /* margin-bottom: 40px; */
            width: 100%;
        }
    }

    @media (max-width: 576px) {
        .task__selects span {
            font-size: 14px;
            line-height: 16.8px;
        }
    }

    @media (max-width: 360px) {
        .account.level-5-1 {
            background-image: url(../assets/img/task-bg-5-1-360.webp);
        }
    }

    @media (max-width: 375px) {
        .task-5 .task__table img {
            width: 100%;
        }


    }


</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

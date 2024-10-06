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
            <q-carousel-slide :name="1">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «Вопросы к специалисту». Для ответа на вопрос отметьте нужный вариант ответа.</p>
                    <p class="task__question">Какое из приведённых ниже суждений может лучше всего объяснить, почему учёный-филолог была особенно удивлена рассказом одной участницы?</p>
                    <form class="task__form form">
                            <span>Отметьте один верный вариант ответа.</span>
                            <div class="form__box form__box--radio">
                                <label class="form__label form__label--radio">
                                    <input name="specialist-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Она удивилась, что рассказчица ездит на работу на трамвае в час пик.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="specialist-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Она удивилась, потому что у рассказчицы было негативное представление о людях, которых она даже не видела.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="specialist-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Она удивилась, потому что в общественном транспорте не бывает размолвок между пассажирами.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="specialist-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Она удивилась, потому что не ожидала увидеть на тренинге участников пожилого и старшего возраста.
                                </label>
                            </div>
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Вопросы к специалисту</h3>
                    <p class="task__desc">Учёный-филолог Ю.В. Щербинина рассказывает:</p>
                    <p class="task__desc">«Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова». </p>
                    <p class="task__desc">Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="2">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Воспользуйтесь текстом «Вопросы к специалисту». Для ответа на вопрос отметьте нужные варианты ответа.</p>
                    <p class="task__question">Какие из представленных ниже суждений отражают мнения участников тренингов и лекций по культуре речи, о которых рассказала учёный-филолог?</p>
                    <form class="task__form form">
                            <span>Отметьте все верные варианты ответа.</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox">
                                    <input name="specialist-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Люди спорят и ругаются на работе, дома это случается редко.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="specialist-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Лучше использовать метро, а не трамвай, в метро быстрее добираться до места работы.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="specialist-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Многие участники тренингов стремятся узнать «волшебные слова», которые помогут им победить в словесном споре.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="specialist-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    В сознании участников общения появляется стереотип — образ опасного врага.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="specialist-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Грубость неискоренима.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="specialist-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Участвовать в тренингах совершенно бесполезно, для развития речи нужно больше читать.
                                </label>
                            </div>
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Вопросы к специалисту</h3>
                    <p class="task__desc">Учёный-филолог Ю.В. Щербинина рассказывает:</p>
                    <p class="task__desc">«Лекции тренинги по культуре речи обычно начинаются с таких вопросов и просьб: «Приходится воевать с коллегами! Как поставить их на место?»; «Надо как‑то ответить соседу грубияну — достал уже!»; «У меня словесные баталии с дочерью! Можно ли как‑то воздействовать?»; «В доме скандалят и скандалят! Надо что‑то делать, подскажите нужные слова». </p>
                    <p class="task__desc">Особенно удивила меня своим рассказом одна немолодая участница. Вот её слова: «Езжу на работу на трамвае в час пик. Даже заходить в вагон не хочется: все, кто внутри, ничего хорошего тебе не пожелают. Да и чего ждать от этих хамов?»</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="3">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «День вежливости». Для ответа на вопрос выберите в выпадающих меню нужные варианты ответа.</p>
                    <p class="task__question">Какие из предложенных приёмов общения могли помочь
                        участникам Дня вежливости продемонстрировать это качество?</p>
                        <form class="task__form form">
                            <span>Выберите нужные варианты ответа в выпадающих меню.</span>
                            <div class="task__selects selects">
                                    <span>Выражать расположенность, быть
                                        доброжелательным.</span>
                                    <multiselect v-model="value1" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Использовать ехидные и колкие замечания, но улыбаться, когда произносишь их.</span>
                                    <multiselect v-model="value2" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Никогда не участвовать в разговоре: «всегда
                                        лучше молчать, чем говорить»</span>
                                    <multiselect v-model="value3" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Внимательно
                                        слушать собеседника и не перебивать его.</span>
                                    <multiselect v-model="value4" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Исключить из употребления нецензурные и бранные слова.</span>
                                    <multiselect v-model="value5" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Надеть наушники и избегать общения.</span>
                                    <multiselect v-model="value6" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Употреблять формулы
                                        соответствии с ситуацией.</span>
                                    <multiselect v-model="value7" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </div>
                            <!-- <table class="task__table">
                                <tbody>
                                    <tr>
                                        <td><span>Выражать расположенность, быть
                                            доброжелательным.</span></td>
                                        <td><multiselect v-model="value1" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Использовать ехидные и колкие замечания, но улыбаться, когда произносишь их.</span></td>
                                        <td><multiselect v-model="value2" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Никогда не участвовать в разговоре: «всегда
                                            лучше молчать, чем говорить»</span></td>
                                        <td><multiselect v-model="value3" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Внимательно
                                            слушать собеседника и не перебивать его.</span></td>
                                        <td><multiselect v-model="value4" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Исключить из употребления нецензурные и бранные слова.</span></td>
                                        <td><multiselect v-model="value5" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Надеть наушники и избегать общения.</span></td>
                                        <td><multiselect v-model="value6" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Употреблять формулы
                                            соответствии с ситуацией.</span></td>
                                        <td><multiselect v-model="value7" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                </tbody>
                            </table> -->
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">День вежливости</h3>
                    <p class="task__desc">Во время тренинга по культуре речи один участник поделился воспоминанием: «Это было в 90-е годы. Я перешёл в 10 класс. Во время летних каникул мы с одноклассниками поехали в школьный трудовой лагерь. Каждый день в течение 4 часов мы собирали клубнику, малину или сливы, а после этого занимались спортом, читали, даже решали задачки по математике с нашим учителем. Как я сейчас понимаю, нам было очень интересно во многом потому, что с нами были весёлые учителя.</p>
                    <p class="task__desc">Каждый день происходило что‑то неожиданное и непредсказуемое. Однажды мы проснулись под громогласный призыв: «Здравствуйте, добро пожаловать на День вежливости». Никогда не забуду этот день: каждая произнесённая фраза должна была показывать, что именно ты — самый вежливый человек на свете. Я не думал так о форме выражения мысли, даже когда сочинение писал. Конечно, можно было и не участвовать, подумаешь, никто же не заставлял. Но когда это касается всех, и взрослых, которых ты уважаешь, и школьников, среди которых не хочется ударить лицом в грязь, то, само собой, начинаешь выражать свои мысли ну очень старательно, думаешь над каждым словом. </p>
                    <p class="task__desc">И ещё я понял: даже вежливое общение не всегда бывает позитивным. Можно очень вежливо наговорить неприятных вещей, после чего и общаться с человеком не захочется».</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="4">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «Информация психолога», расположенный
                        справа. Для ответа на вопрос подберите к иллюстрации из списка название типа поведения.</p>
                    <p class="task__question">Какой из типов поведения показан на каждом рисунке?</p>
                        <form class="task__form form">
                            <span>Выберите нужные варианты ответа в выпадающих меню.</span>
                            <div class="task__selects selects">
                                    <img src="../assets/img/task-5-1.webp" alt="">
                                    <multiselect v-model="value41" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <img src="../assets/img/task-5-2.webp" alt="">
                                    <multiselect v-model="value42" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <img src="../assets/img/task-5-3.webp" alt="">
                                    <multiselect v-model="value43" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <img src="../assets/img/task-5-4.webp" alt="">
                                    <multiselect v-model="value44" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <img src="../assets/img/task-5-5.webp" alt="">
                                    <multiselect v-model="value45" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <img src="../assets/img/task-5-6.webp" alt="">
                                    <multiselect v-model="value46" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </div>
                            <!-- <table class="task__table">
                                <tbody>
                                    <tr>
                                        <td><img src="../assets/img/task-5-1.webp" alt=""></td>
                                        <td><multiselect v-model="value41" select-label="" :searchable="false" :options="options1" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/task-5-2.webp" alt=""></td>
                                        <td><multiselect v-model="value42" select-label="" :searchable="false" :options="options1" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/task-5-3.webp" alt=""></td>
                                        <td><multiselect v-model="value43" select-label="" :searchable="false" :options="options1" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/task-5-4.webp" alt=""></td>
                                        <td><multiselect v-model="value44" select-label="" :searchable="false" :options="options1" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/task-5-5.webp" alt=""></td>
                                        <td><multiselect v-model="value45" select-label="" :searchable="false" :options="options1" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/task-5-6.webp" alt=""></td>
                                        <td><multiselect v-model="value46" select-label="" :searchable="false" :options="options1" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                </tbody>
                            </table> -->
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">День вежливости</h3>
                    <p class="task__desc">Во время тренинга по культуре речи один участник поделился воспоминанием: «Это было в 90-е годы. Я перешёл в 10 класс. Во время летних каникул мы с одноклассниками поехали в школьный трудовой лагерь. Каждый день в течение 4 часов мы собирали клубнику, малину или сливы, а после этого занимались спортом, читали, даже решали задачки по математике с нашим учителем. Как я сейчас понимаю, нам было очень интересно во многом потому, что с нами были весёлые учителя.</p>
                    <p class="task__desc">Каждый день происходило что‑то неожиданное и непредсказуемое. Однажды мы проснулись под громогласный призыв: «Здравствуйте, добро пожаловать на День вежливости». Никогда не забуду этот день: каждая произнесённая фраза должна была показывать, что именно ты — самый вежливый человек на свете. Я не думал так о форме выражения мысли, даже когда сочинение писал. Конечно, можно было и не участвовать, подумаешь, никто же не заставлял. Но когда это касается всех, и взрослых, которых ты уважаешь, и школьников, среди которых не хочется ударить лицом в грязь, то, само собой, начинаешь выражать свои мысли ну очень старательно, думаешь над каждым словом. </p>
                    <p class="task__desc">И ещё я понял: даже вежливое общение не всегда бывает позитивным. Можно очень вежливо наговорить неприятных вещей, после чего и общаться с человеком не захочется».</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="5">
                <div class="task__last">
                    <p class="task__info">Отметьте в таблице нужные варианты ответа.</p>
                    <p class="task__question">На занятии с восьмиклассниками школьный психолог привёл высказывание из книги «Речевая защита. Учимся управлять агрессией»: «Вполне очевидно, что полностью изжить речевую агрессию, избавиться от неё ни в повседневно-бытовом, ни в профессионально — деловом общении невозможно. Однако предупреждать, сдерживать, контролировать агрессию в своей и чужой речи — вполне посильная задача для каждого из нас».
                        <br><br>Какие из предложенных ниже суждений объясняют, почему можно контролировать или научиться контролировать речевую агрессию, а какие — не объясняют?</p>
                        <form class="task__form form">
                            <span>Выберите нужные варианты ответа в выпадающих меню.</span>
                            <div class="task__selects task__selects--auto selects">
                                    <span>Всем людям свойственно вести себя агрессивно.</span>
                                    <multiselect v-model="value51" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Речь отражает уровень образования и культуры человека, его мышление.</span>
                                    <multiselect v-model="value52" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>В общении помогает эмпатия — умение сопереживать людям, понимать, что они чувствуют в данный момент, она помогает сдерживаться, даже когда человек раздражён или обижен.</span>
                                    <multiselect v-model="value53" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Знать бранные слова и грубые выражения вовсе не означает употреблять их в речи.</span>
                                    <multiselect v-model="value54" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                                    <span>Существуют социальные группы, в которых грубость и сквернословие являются нормой поведения.</span>
                                    <multiselect v-model="value55" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>

                            </div>
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
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
export default {
    components: {NextTaskModal, Multiselect },
    data() {
        return {
            slidesCount: 5,
            showNextTaskModal: false,
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value41: null,
            value42: null,
            value43: null,
            value44: null,
            value45: null,
            value46: null,
            value51: null,
            value52: null,
            value53: null,
            value54: null,
            value55: null,
            options: ['Да, могли', 'Нет, не могли'],
            options1: ['«Красная тряпка»', '«Боксёрская груша»', '«Белая ворона»'],
            options2: ['Объясняет', 'Не объясняет'],
            intro: true,
            slide: 1,
            disabledNext: true,
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
        this.disabledNext = true;
        if (this.slide > this.slidesCount) {
            this.showNextTaskModal = true;
        }
    },

    openNextTaskModal() {
        this.showNextTaskModal = true;
    },

    closeNextTaskModal() {
        this.showNextTaskModal = false;
    },

    submitAnswer() {
        this.disabledNext = false;
    }
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

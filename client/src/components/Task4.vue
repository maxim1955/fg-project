<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">Введение</p>
            <p class="intro__text">Прочитайте введение. Затем приступайте к выполнению заданий.</p>
            <p class="intro__subtitle">СОЛЁНОЕ ЗОЛОТО</p>
            <p class="intro__desc">Поваренная соль (хлорид натрия) известна всем. Поваренная соль — противоречивое вещество, его называют и «белым золотом», и «белой смертью», всё зависит от количества и качества соли. <br><br>
                Трудно найти подобное вещество, которое является одновременно и полезным ископаемым, и пищевым продуктом, и химическим сырьём, и лекарственным средством. С самых давних времён соль высоко ценилась людьми и даже использовалась в качестве денег во многих странах. В старину караваны с солью охраняли воины, которым платили солью. Их даже стали называть солдатами. Соли на Земле огромное количество. Соль скрыта и в земле, и в воде. Но добыть её не так просто. Да и добывается соль по‑разному, поэтому бывает соль каменная, выварочная, морская, осадочная и др.</p>
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


            <!-- <q-carousel-slide :name="1">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «Солёное золото». Для ответа на вопрос отметьте нужные варианты ответа.</p>
                    <p class="task__question">Какие процессы происходят при образовании соли на берегу соляного озера?</p>
                    <form class="task__form form">
                            <span>Отметьте все верные варианты ответа.</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Кристаллизация
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Замерзание
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Плавление
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Испарение
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Возгонка
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Сублимация
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-1" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Дистилляция
                                </label>
                            </div>
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Солёное золото</h3>
                    <p class="task__desc">Тысячи рек и ручейков вымывают соль из недр земли и приносят в озёра и моря. Самое известное соляное озеро в России — озеро Баскунчак. Вода в озере испаряется, и соль остаётся по берегам и на отмелях в виде кристаллов. После купания в этом озере тело человека покрывается тонким белым слоем соли, который быстро осыпается.</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="2">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «Солёное золото». Отметьте нужный вариант ответа, а затем объясните свой ответ.</p>
                    <p class="task__question">Правдива ли эта легенда с научной точки зрения?</p>
                    <form class="task__form form">
                            <span>Отметьте один верный вариант ответа.</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Это могло быть.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="lake-2" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Этого не могло быть.
                                </label>
                            </div>
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Солёное золото</h3>
                    <p class="task__desc">Соль обладает лечебными свойствами, поэтому многие соляные озера стали курортами.</p>
                    <p class="task__desc">В районе соляного озера Шира существует легенда, по которой охотник случайно ранил на охоте вблизи озера свою собаку. Он оставил её местному жителю, так как был уверен, что она не выживет. Но собака, купаясь в озере, залечила все раны, и через некоторое время прибежала домой совершенно здоровой.</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="3">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «Солёное золото». Отметьте правильную последовательность.</p>
                    <p class="task__question">Какой будет последовательность ваших действий для очистки поваренной соли от примеси песка в лаборатории?</p>
                    <div class="task__images">
                                <img class="task__img" src="../assets/img/task-4-1.webp" alt="">
                                <img class="task__img" src="../assets/img/task-4-2.webp" alt="">
                                <img class="task__img" src="../assets/img/task-4-3.webp" alt="">
                                <img class="task__img" src="../assets/img/task-4-4.webp" alt="">
                    </div>
                    <form class="task__form form">
                        <div class="form__box">
                            <label class="form__label">
                                Выберите название первой операции
                                <multiselect v-model="value1" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                            <label class="form__label">
                                Выберите название второй операции
                                <multiselect v-model="value2" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                            <label class="form__label">
                                Выберите название третьей операции
                                <multiselect v-model="value3" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                            <label class="form__label">
                                Выберите название четвёртой операции
                                <multiselect v-model="value4" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                        </div>
                        <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                    </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Воздушные шары</h3>
                    <p class="task__desc">Чтобы не использовать горючее и не зажигать открытое пламя, воздушные шары стали наполнять самым лёгким газом — водородом. Благодаря этому газу воздушные шары смогли улетать высоко в небо. Но позже стали использовать в качестве наполнителя другой лёгкий газ — гелий. Гелий относится к инертным газам, которые в обычных условиях не взаимодействуют с другими веществами. </p>
                    <p class="task__desc">Эта замена связана с тем, что водород с кислородом может образовывать взрывоопасные смеси. Так, однажды человек, который хотел подшутить, случайно взорвал всё шоу воздушных шаров, заполненных водородом.</p>
                </div>
                </div>

            </q-carousel-slide>

            <q-carousel-slide :name="4">
                <div class="task__box">
                    <div class="task__left">
                    <p class="task__info">Прочитайте текст «Солёное золото». Для ответа на вопрос отметьте нужный варианты ответа.</p>
                    <p class="task__question">Что помогает больным вылечиться от аллергии, бронхитов и
                        других заболеваний дыхательных путей в соляных пещерах?</p>

                        <form class="task__form form">
                            <span>Отметьте один верный вариант ответа.</span>
                            <div class="form__box form__box--radio">
                                <label class="form__label form__label--radio">
                                    <input :value="0" v-model="lake1" name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере поддерживается постоянные температура.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input :value="1" v-model="lake1" name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере влажность сохраняется на одном уровне.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input :value="2" v-model="lake1" name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере воздух насыщен ионами натрия и хлора.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input :value="3" v-model="lake1" name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере сохраняется определённое давление.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input :value="4" v-model="lake1" name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере отсутствуют вредные микроорганизмы.
                                </label>
                            </div>
                            <button @click.prevent="submitAnswer()" class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Солёное золото</h3>
                    <p class="task__desc">В природе каменная соль — минерал галит — образует огромные пласты. При добыче соли в шахтах образуются большие подземные пространства. В подземных соляных залах и галереях создают лечебницы и санатории.</p>
                    <p class="task__desc">В соляных пещерах воздух стерилен из-за практического отсутствия вредных микроорганизмов. В них создаётся особенный микроклимат. Круглый год там наблюдаются постоянные температура, влажность, давление, насыщенность ионами.</p>
                    <p class="task__desc">Поэтому в соляных залах можно десятилетиями хранить запасы продуктов, и они не будут портиться. Хранят в таких подземельях и киноленты старых фильмов, древние книги, ценные меха и многое другое. Соль оберегает доверенные ей ценности от разрушения и порчи.</p>
                </div>
                </div>
            </q-carousel-slide> -->
            <template v-slot:control>

            <q-carousel-control class="carousel__btns" style="margin: 0;" >
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
import {useTimerAndDateStore} from "../store/TimerStore.js";
export default {
    components: {NextTaskModal, Multiselect },
    data() {
        return {
            slidesCount: 4,
            showNextTaskModal: false,
            options: ['Отбор пробы соли', 'Растворение', 'Фильтрование', 'Выпаривание'],
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
                name: 'Солёное золото',
                intro: `<p class="intro__desc">Поваренная соль (хлорид натрия) известна всем. Поваренная соль&nbsp;— противоречивое вещество, его&nbsp;называют и&nbsp;«белым золотом», и&nbsp;«белой смертью», всё&nbsp;зависит от&nbsp;количества и&nbsp;качества соли. <br><br> Трудно найти подобное вещество, которое является одновременно и&nbsp;полезным ископаемым, и&nbsp;пищевым продуктом, и&nbsp;химическим сырьём, и&nbsp;лекарственным средством. С&nbsp;самых давних времён соль высоко ценилась людьми и&nbsp;даже&nbsp;использовалась в&nbsp;качестве денег во&nbsp;многих странах. В&nbsp;старину караваны с&nbsp;солью охраняли воины, которым платили солью. Их&nbsp;даже&nbsp;стали называть солдатами. Соли на&nbsp;Земле огромное количество. Соль скрыта и&nbsp;в&nbsp;земле, и&nbsp;в&nbsp;воде. Но&nbsp;добыть её&nbsp;не&nbsp;так&nbsp;просто. Да&nbsp;и&nbsp;добывается соль по‑разному, поэтому бывает соль каменная, выварочная, морская, осадочная&nbsp;и&nbsp;др.</p>`,
                position: 1,
                level_id: 4,

                questions: [
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 1,
                                text: 'Кристаллизация',
                                trueorfalse: 1,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                text: 'Замерзание',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                text: 'Плавление',
                                trueorfalse: 0,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                text: 'Испарение',
                                trueorfalse: 1,
                            },
                            {
                                id: 5,
                                question_id: 1,
                                text: 'Возгонка',
                                trueorfalse: 0,
                            },
                            {
                                id: 6,
                                question_id: 1,
                                text: 'Сублимация',
                                trueorfalse: 0,
                            },
                            {
                                id: 7,
                                question_id: 1,
                                text: 'Дистилляция',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 1,
                                truecount: 2,
                                points: 1,
                            },
                        ],
                        id: 1,
                        position: 1,
                        questiontype: 1,
                        btntext: 'Отметьте все верные варианты ответа.',
                        textquestion: 'Какие процессы происходят при образовании соли на берегу соляного озера?',
                        textright: `
                        Тысячи рек и ручейков вымывают соль из недр земли и приносят в озёра и моря. Самое известное соляное озеро в России — озеро Баскунчак. Вода в озере испаряется, и соль остаётся по берегам и на отмелях в виде кристаллов. После купания в этом озере тело человека покрывается тонким белым слоем соли, который быстро осыпается.`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 2,
                                text: 'Это могло быть.',
                                trueorfalse: 1,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                text: 'Этого не могло быть.',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 2,
                                truecount: 1,
                                points: 1,
                            },
                        ],
                        id: 2,
                        position: 2,
                        questiontype: 1,
                        btntext: 'Отметьте один верный вариант ответа.',
                        textquestion: 'Правдива ли эта легенда с научной точки зрения?',
                        textright: `
                        <p class="task__desc">Соль обладает лечебными свойствами, поэтому многие соляные озера стали курортами.</p>
                        <p class="task__desc">В&nbsp;районе соляного озера Шира существует легенда, по&nbsp;которой охотник случайно ранил на&nbsp;охоте вблизи озера свою собаку. Он&nbsp;оставил её&nbsp;местному жителю, так&nbsp;как&nbsp;был&nbsp;уверен, что&nbsp;она&nbsp;не&nbsp;выживет. Но&nbsp;собака, купаясь в&nbsp;озере, залечила все&nbsp;раны, и&nbsp;через&nbsp;некоторое время прибежала домой совершенно здоровой.</p>`,
                    },
                    {
                        id: 3,
                        position: 3,
                        questiontype: 3,
                        images: {
                            desc: '',
                            img: ['../assets/img/task-4-1.webp', '../assets/img/task-4-2.webp', '../assets/img/task-4-3.webp', '../assets/img/task-4-4.webp']
                        },
                        answers: [
                            {
                                id: 1,
                                question_id: 4,
                                text: 'Отбор пробы соли',
                                trueorfalse: 1,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: 'Растворение',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: 'Фильтрование',
                                trueorfalse: 0,
                            },
                            {
                                id: 4,
                                question_id: 4,
                                text: 'Выпаривание',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 4,
                                truecount: 4,
                                points: 2,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                truecount: 2,
                                points: 1,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 4,
                                text: 'Выберите название первой операции',
                                answer_id: 1,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: 'Выберите название второй операции',
                                answer_id: 2,

                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: 'Выберите название третьей операции',
                                answer_id: 3,

                            },
                            {
                                id: 4,
                                question_id: 4,
                                text: 'Выберите название четвёртой операции',
                                answer_id: 4,

                            },



                        ],
                        btntext: '',
                        textquestion: 'Какой будет последовательность ваших действий для очистки поваренной соли от примеси песка в лаборатории?',
                        textright: `
                        <p class="task__desc">На Руси, начиная ещё с Х века, получали соль путём выпаривания в больших чанах воды из солёных озёр или Белого моря. Но соль получалась «грязной» – содержала примеси посторонних веществ. Такая соль могла принести вред здоровью. Со временем её научились очищать, отделять от примесей.</p>
                        <p class="task__desc">Загрязнённую песком соль можно очистить в лаборатории.
                        Для этого смесь соли с песком разделяют, используя различные операции, при помощи лабораторного оборудования.</p>`,
                    },
                    {
                        answers: [
                            {
                                id: 1,
                                question_id: 4,
                                text: 'В соляной пещере поддерживается постоянные температура.',
                                trueorfalse: 0,
                            },
                            {
                                id: 2,
                                question_id: 4,
                                text: 'В соляной пещере влажность сохраняется на одном уровне.',
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 4,
                                text: 'В соляной пещере воздух насыщен ионами натрия и хлора.',
                                trueorfalse: 1,
                            },
                            {
                                id: 4,
                                question_id: 4,
                                text: 'В соляной пещере сохраняется определённое давление.',
                                trueorfalse: 0,
                            },
                            {
                                id: 5,
                                question_id: 4,
                                text: 'В соляной пещере отсутствуют вредные микроорганизмы.',
                                trueorfalse: 0,
                            },
                        ],
                        points: [
                            {
                                id: 1,
                                question_id: 4,
                                truecount: 1,
                                points: 1,
                            },
                        ],
                        id: 4,
                        position: 4,
                        questiontype: 2,
                        btntext: 'Выберите нужные варианты ответа в выпадающих меню.',
                        textquestion: `Что помогает больным вылечиться от аллергии, бронхитов и
                        других заболеваний дыхательных путей в соляных пещерах?`,
                        textright: `
                        <p class="task__desc">В природе каменная соль — минерал галит — образует огромные пласты. При добыче соли в шахтах образуются большие подземные пространства. В подземных соляных залах и галереях создают лечебницы и санатории.</p>
                        <p class="task__desc">В соляных пещерах воздух стерилен из-за практического отсутствия вредных микроорганизмов. В них создаётся особенный микроклимат. Круглый год там наблюдаются постоянные температура, влажность, давление, насыщенность ионами.</p>
                        <p class="task__desc">Поэтому в соляных залах можно десятилетиями хранить запасы продуктов, и они не будут портиться. Хранят в таких подземельях и киноленты старых фильмов, древние книги, ценные меха и многое другое. Соль оберегает доверенные ей ценности от разрушения и порчи.</p>`,
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

  },

  computed: {
    user() {
        return userStore().user;
    },

  },

}
</script>

<style>

    .account.level-4-0 {
        background-image: url(../assets/img/task-bg-4-1.webp);
        background-size: cover;
    }

    .task-4 .q-carousel__slide {
        padding: 0;
    }

    .task-4 .q-carousel {
        border-radius: 0;
    }
    .task-4 .task__form > span {
        display: inline-block;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task-4 .task__right .task__table {
        max-width: 320px;
    }

    .level-4-0 .task__img {
        width: calc((100% - 24px)/4);
        box-shadow: 4px 5px 50px 0px #ECEAE1;
    }

    .level-4-0 .task__images {
        margin-bottom: 40px;
    }

    .level-4-0 .task .multiselect__tags {
        background-color: rgba(242, 241, 236, 1);
    }


    @media (max-width: 1400px) {
        .task-4 .task__images {
            flex-wrap: wrap;
            margin-bottom: 40px;
        }

        .task-4 .task__img {
            width: calc((100% - 12px)/2);
        }
    }

    @media (max-width: 1200px) {
        .task-4 .form__label {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task-4.task .form__label {
            width: 100%;
            max-width: 100%;
        }

        .task-4.task .form__label > div {
            max-width: 100%;
        }

        .account.level-4-1 {
            background-image: url(../assets/img/task-bg-4-1-1024.webp);
        }
    }

    @media (max-width: 640px) {
        .task-4 .task__images {
            order: 0;
        }

        .task-4 .task__img {
            max-height: 100%;
        }

        .account.level-4-1 {
            background-image: url(../assets/img/task-bg-4-1-360.webp);
        }
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

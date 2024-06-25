<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">Введение</p>
            <p class="intro__text">Прочитайте введение. Затем приступайте к выполнению заданий.</p>
            <p class="intro__subtitle">СОЛЁНОЕ ЗОЛОТО</p>
            <p class="intro__desc">Поваренная соль (хлорид натрия) известна всем. Поваренная соль — противоречивое вещество, его называют и «белым золотом», и «белой смертью», всё зависит от количества и качества соли. <br><br>
                Трудно найти подобное вещество, которое является одновременно и полезным ископаемым, и пищевым продуктом, и химическим сырьём, и лекарственным средством. С самых давних времён соль высоко ценилась людьми и даже использовалась в качестве денег во многих странах. В старину караваны с солью охраняли воины, которым платили солью. Их даже стали называть солдатами. Соли на Земле огромное количество. Соль скрыта и в земле, и в воде. Но добыть её не так просто. Да и добывается соль по‑разному, поэтому бывает соль каменная, выварочная, морская, осадочная и др.</p>
            <div class="carousel__btns">
                <button class="carousel__btn" @click="openNextTaskModal()">Назад</button>
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
                            <button class="btn-reset form__btn">Принять ответ</button>
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
                            <button class="btn-reset form__btn">Принять ответ</button>
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
                                Выберите название второй операции
                                <multiselect v-model="value1" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                            <label class="form__label">
                                Выберите название второй операции
                                <multiselect v-model="value2" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                            <label class="form__label">
                                Выберите название второй операции
                                <multiselect v-model="value3" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                            <label class="form__label">
                                Выберите название второй операции
                                <multiselect v-model="value4" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect>
                            </label>
                        </div>
                        <button class="btn-reset form__btn">Принять ответ</button>
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
                                    <input name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере поддерживается постоянные температура.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере влажность сохраняется на одном уровне.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере воздух насыщен ионами натрия и хлора.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере сохраняется определённое давление.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="lake-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    В соляной пещере отсутствуют вредные микроорганизмы.
                                </label>
                            </div>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>
                </div>
                <div class="task__right">
                    <h3 class="task__title">Солёное золото</h3>
                    <p class="task__desc">В природе каменная соль — минерал галит — образует огромные пласты. При добыче соли в шахтах образуются большие подземные пространства. В подземных соляных залах и галереях создают лечебницы и санатории.</p>
                    <p class="task__desc">В соляных пещерах воздух стерилен из-за практического отсутствия вредных микроорганизмов. В них создаётся особенный микроклимат. Круглый год там наблюдаются постоянные температура, влажность, давление, насыщенность ионами.</p>
                    <p class="task__desc">Поэтому в соляных залах можно десятилетиями хранить запасы продуктов, и они не будут портиться. Хранят в таких подземельях и киноленты старых фильмов, древние книги, ценные меха и многое другое. Соль оберегает доверенные ей ценности от разрушения и порчи.</p>
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

    </div>
    <NextTaskModal @close-modal="closeNextTaskModal()" v-if="showNextTaskModal"/>
</template>

<script>
import { ref } from 'vue'
import NextTaskModal from './NextTaskModal.vue'
import Multiselect from 'vue-multiselect'
export default {
    components: {NextTaskModal, Multiselect },
    data() {
        return {
            slidesCount: 4,
            showNextTaskModal: false,
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            options: ['Отбор пробы соли', 'Растворение', 'Фильтрование', 'Выпаривание'],
            intro: true,
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
    document.body.classList.toggle('task-2');
  }
}
</script>

<style scoped>
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
    }

    @media (max-width: 640px) {
        .task-4 .task__images {
            order: 0;
        }

        .task-4 .task__img {
            max-height: 100%;
        }
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

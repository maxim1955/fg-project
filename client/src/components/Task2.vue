<template>
    <div class="task__block">
        <div v-if="this.intro" class="task__intro intro">
            <p class="intro__title">Введение</p>
            <p class="intro__text">Прочитайте введение. Затем приступайте к выполнению заданий.</p>
            <p class="intro__subtitle">ВОЗДУШНЫЕ ШАРЫ</p>
            <p class="intro__desc">Вы наверняка много раз держали их в руках. Круглые, яркие, летящие — они способны превратить обычный день в праздник и заставить улыбнуться даже самого грустного человека. Догадались, о чём идёт речь? Конечно, о воздушных шариках Сегодня их знают все на свете и используют в качестве подарков, игрушек и элементов праздничного украшения. А на большом воздушном шаре можно совершить незабываемую прогулку.
                <br><br>
                Обыкновенные воздушные шары имеют большую историю и хранят немало тайн.</p>
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
                        <p class="task__info">Прочитайте текст «Воздушные шары». Для ответа на вопрос отметьте нужный вариант ответа.</p>
                        <p class="task__question">Какое утверждение объясняет с научной точки зрения подъём воздушного шара, заполненного нагретым воздухом?</p>
                        <form class="task__form form">
                            <span>Отметьте один верный вариант ответа.</span>
                            <div class="form__box form__box--radio">
                                <label class="form__label form__label--radio">
                                    <input name="balls-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Атмосферное давление при подъёме уменьшается.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="balls-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Плотность горячего воздуха меньше, чем плотность холодного воздуха.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="balls-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Все газы, из которых состоит дым, легче воздуха.
                                </label>
                                <label class="form__label form__label--radio">
                                    <input name="balls-1" type="radio" class="form__input form__input--radio">
                                    <span class="radio"></span>
                                    Газы при нагревании уменьшаются в объёме.
                                </label>
                            </div>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>
                    </div>
                    <div class="task__right">
                        <h3 class="task__title">Воздушные шары</h3>
                        <p class="task__desc">Древние китайцы изобрели фонари для передачи сигналов во время военных операций. Эти фонари имели отверстие в нижней части, где был зажжён небольшой огонь. Горячий дым помогал поднять фонарь и давал ему возможность парить в воздухе. Это были первые древние воздушные шары.</p>
                    </div>
                    </div>

                </q-carousel-slide>

                <q-carousel-slide :name="2">
                    <div class="task__box">
                        <div class="task__left">
                        <p class="task__info">Прочитайте текст «Воздушные шары». Запишите свой ответ на вопрос в виде числа.</p>
                        <p class="task__question">Чему равна грузоподъёмность гелиевого шарика в этом эксперименте?</p>
                        <form class="task__form form">
                            <label class="form__label">
                                <span>Запишите свой ответ в граммах, округлив до целого числа.</span>
                                <div class="flex items-center">
                                    <input placeholder="Введите ответ" type="text" class="form__input">
                                </div>

                            </label>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>
                    </div>
                    <div class="task__right">
                        <h3 class="task__title">Воздушные шары</h3>
                        <p class="task__desc">В истории воздухоплавания много разнообразных интересных страниц: от первого шара братьев Монгольфье до огромных дирижаблей.</p>
                        <p class="task__desc">Но одной из самых главных задач для конструкторов, создающих подобные летательные аппараты, была возможность поднимать какой‑то груз (людей, оборудование и т.п.). </p>
                        <p class="task__desc">Грузоподъёмность — это максимальная масса поднимаемого груза. </p>
                        <p class="task__desc">На уроке ребятам было предложено измерить грузоподъёмность гелиевого шарика с помощью электронных весов.</p>
                        <p class="task__desc">Для этого они использовали предмет, массу которого определили в граммах по показанию весов (рисунок 1 б).</p>
                        <p class="task__desc">Затем ребята привязали к предмету шарик и измерили получившуюся массу в граммах (рисунки 1 а, б, в).</p>

                            <div class="task__images">
                                <img class="task__img" src="../assets/img/task-2-а.webp" alt="">
                                <img class="task__img" src="../assets/img/task-2-б.webp" alt="">
                                <img class="task__img" src="../assets/img/task-2-в.webp" alt="">
                            </div>
                            <p class="task__info">Рисунок 1. Эксперимент по измерению грузоподъёмности воздушного шарика.</p>

                    </div>
                    </div>

                </q-carousel-slide>

                <q-carousel-slide :name="3">
                    <div class="task__box">
                        <div class="task__left">
                        <p class="task__info">Прочитайте текст «Воздушные шары». Для ответа на вопрос отметьте нужные варианты ответа.</p>
                        <p class="task__question">Почему для заполнения воздушных шаров водород заменили гелием?</p>
                        <form class="task__form form">
                            <span>Отметьте два верных варианта ответа.</span>
                            <div class="form__box form__box--checkboxes">
                                <label class="form__label form__label--checkbox">
                                    <input name="balls-3" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Гелий, как и водород, не имеет цвета и запаха.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="balls-3" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Гелий, в отличие от водорода, не взрывается.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="balls-3" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Гелий, как и водород, встречается в космосе.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="balls-3" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Гелий, как и водород, лёгкий газ.
                                </label>
                                <label class="form__label form__label--checkbox">
                                    <input name="balls-3" type="checkbox" class="form__input form__input--checkbox">
                                    <span class="checkbox"></span>
                                    Гелий, как и водород, мало растворяется в воде.
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
                        <p class="task__info">Прочитайте текст «Воздушные шары». Для ответа на вопрос выберите в выпадающих меню нужные варианты ответа.</p>
                        <p class="task__question">Каким газом надо заполнить воздушные шарики в каждом из указанных положений?</p>

                        <form class="task__form form">
                            <span>Выберите нужные варианты ответа в выпадающих меню.</span>
                            <table class="task__table task__table--noborder">
                                <thead>
                                    <tr>
                                        <th><span>Положение воздушных шариков</span></th>
                                        <th><span>Газ для наполнения шариков</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>Лежат на полу</span></td>
                                        <td><multiselect v-model="value1" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Свободно парят в воздухе, но не улетают</span></td>
                                        <td><multiselect v-model="value2" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                    <tr>
                                        <td><span>Поднимаются высоко в небо</span></td>
                                        <td><multiselect v-model="value3" select-label="" :searchable="false" :options="options" placeholder="Выберите ответ"></multiselect></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn-reset form__btn">Принять ответ</button>
                        </form>
                    </div>
                    <div class="task__right">
                        <h3 class="task__title">Воздушные шары</h3>
                        <p class="task__desc">Воздушные шарики для праздников наполняют различными газами, которые бывают тяжёлыми и лёгкими. Продавцы шаров, надувая их газами легче или тяжелее воздуха, добиваются разных эффектов.  </p>
                        <p class="task__desc">В магазин поступил заказ на украшение зала в школе. Одни шарики должны лежать на поверхностях, другие — парить в воздухе, а третьи — подниматься высоко вверх. </p>
                        <p class="task__desc">Работники магазина при выполнении заказа заполнили шары разными газами с учётом их плотности:</p>
                        <table class="task__table">
                                <thead>
                                    <tr>
                                        <th>Газ</th>
                                        <th><span class="text-right" style="max-width: 140px">Плотность, кг/м3</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Воздух</td>
                                        <td>1,29</td>
                                    </tr>
                                    <tr>
                                        <td>Азот</td>
                                        <td>1,25</td>
                                    </tr>
                                    <tr>
                                        <td>Гелий</td>
                                        <td>0,18</td>
                                    </tr>
                                    <tr>
                                        <td>Углекислый газ</td>
                                        <td>1,98</td>
                                    </tr>
                                </tbody>
                            </table>
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
            options: ['Гелий', 'Азот', 'Углекислый газ'],
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
    /* .task-2 .task__form > span {
        display: inline-block;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task-2 .task__right .task__table {
        max-width: 320px;
    } */

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

        /* .task-2 .task__form > .task__table tbody,
        .task-2 .task__form > .task__table thead {
            display: table-row-group;
        } */

        /* .task-2 .task__form > .task__table {
            display: table;
        }

        .task-2 .task__form > .task__table tr {
            display: table-row;
        } */
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

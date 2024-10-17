<template>
    <div class="tasks">
        <div v-if="!this.showTask" >
            <div class="breadcrumb">
            <button class="btn-reset breadcrumb__home" @click="$emit('show-level')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.59998 9.98047H4C3.45 9.98047 3 10.4305 3 10.9805V19.6005C3 20.1505 3.45 20.6005 4 20.6005H5.59998C6.14998 20.6005 6.59998 20.1505 6.59998 19.6005V10.9805C6.59998 10.4305 6.14998 9.98047 5.59998 9.98047Z" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7992 6.78906H11.1992C10.6492 6.78906 10.1992 7.23906 10.1992 7.78906V19.5991C10.1992 20.1491 10.6492 20.5991 11.1992 20.5991H12.7992C13.3492 20.5991 13.7992 20.1491 13.7992 19.5991V7.78906C13.7992 7.23906 13.3492 6.78906 12.7992 6.78906Z" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.0004 3.59961H18.4004C17.8504 3.59961 17.4004 4.04961 17.4004 4.59961V19.5996C17.4004 20.1496 17.8504 20.5996 18.4004 20.5996H20.0004C20.5504 20.5996 21.0004 20.1496 21.0004 19.5996V4.59961C21.0004 4.04961 20.5504 3.59961 20.0004 3.59961Z" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            /
            <span>Уровень {{ this.levelNum }}</span>
        </div>
        <div class="tasks__container">
            <div class="rules">
                <button @click="this.rules=!this.rules" class="rules__btn" :class="{open: this.rules}">Правила прохождения заданий</button>
                <div class="rules__block" :class="{open: this.rules}">
                    <ul class="rules__list">
                        <li class="rules__item">
                            На прохождение заданий у тебя есть 30 минут в сутки. Если время закончится в процессе выполнения заданий, то в следующий раз ты сможешь продолжить с того вопроса, на котором оно закончились.
                        </li>
                        <li class="rules__item">
                            Каждое задание представляет собой набор из нескольких вопросов, при правильном ответе на каждый ты получишь максимальный балл.
                        </li>
                        <li class="rules__item">
                            Обрати внимание, что в каждом задании ты можешь изменить ответы на вопросы только один раз.
                        </li>
                        <li class="rules__item">
                            При повторном прохождении задания предыдущие результаты аннулируются.
                        </li>
                    </ul>
                    <span class="rules__text">Готов приступить к выполнению заданий? Тогда вперед, к новым знаниям и достижениям!</span>
                </div>

            </div>



            <div class="tasks__list">
                <div>
                    <button class="tasks__item task" :class="{'tasks__item--violet': filteredTask.id == 1, 'tasks__item--orange': filteredTask.id == 2, 'tasks__item--green': filteredTask.id == 3, 'tasks__item--red': filteredTask.id == 4, 'tasks__item--lightgreen': filteredTask.id == 5}" @click="openModalStart(filteredTask)">
                        <span class="task__name">{{ filteredTask.name }}</span>
                        <!-- <span v-else class="task__name">Задание 1</span> -->
                        <span class="task__points">0 из {{ totalPoints(filteredTask)}} баллов</span>
                    </button>
                    <span v-if="this.points < this.level.minpoints && this.levelNum == this.level.level_id" class="tasks__error">Чтобы получить доступ к следующим заданиям, вам необходимо ответить на все вопросы в предыдущем</span>
                </div>
                <div v-for="task of level.tasks" :key="task.id">
                    <button class="tasks__item task" :class="{'tasks__item--violet': task.id == 1, 'tasks__item--orange': task.id == 2, 'tasks__item--green': task.id == 3, 'tasks__item--red': task.id == 4, 'tasks__item--lightgreen': task.id == 5}" @click="openModalStart(task)" :disabled="this.points < this.level.min">
                        <!-- <span v-if="task.id == 1" class="task__name">{{ task.name }}</span> -->
                        <span class="task__name">Задание {{ task.id + 1}}</span>
                        <span class="task__points">0 из {{ totalPoints(task)}} баллов</span>
                    </button>
                    <span v-if="this.points < this.level.minpoints && this.levelNum == this.level.level_id" class="tasks__error">Чтобы получить доступ к следующим заданиям, вам необходимо ответить на все вопросы в предыдущем</span>
                </div>

            </div>
        </div>
        <StartLevelModal :currentTask="this.currentTask" @close-modal="closeModalStart()" @open-task="handleOpenTask()" v-show="this.showModalStart"></StartLevelModal>
        </div>
        <div class="task" :class="`task-${this.levelNum.id}`" v-else>
        <Task1 ref="childComponent" :slide="slide" @try-again="tryAgain" @back-levels="backLevels()" @open-modal="openModal()" v-if="this.currentTask.id == 0 && this.currentTask.level_id == 1 && !showTaskTemplate" />
        <Task2 ref="childComponent" @try-again="tryAgain" @back-levels="backLevels()" @open-modal="openModal()" v-else-if="this.currentTask.id == 0 && this.currentTask.level_id == 2 && !showTaskTemplate" />
        <Task3 ref="childComponent" @try-again="tryAgain" @back-levels="backLevels()" @open-modal="openModal()" v-else-if="this.currentTask.id == 0 && this.currentTask.level_id == 3 && !showTaskTemplate"/>
        <Task4 ref="childComponent" @try-again="tryAgain" @back-levels="backLevels()" @open-modal="openModal()" v-else-if="this.currentTask.id == 0 && this.currentTask.level_id == 4 && !showTaskTemplate"/>
        <Task5 ref="childComponent" @try-again="tryAgain" @back-levels="backLevels()" @open-modal="openModal()" v-else-if="this.currentTask.id == 0 && this.currentTask.level_id == 5 && !showTaskTemplate"/>
        <TaskTemplate ref="childComponent" @try-again="tryAgain" v-if="showTaskTemplate || this.currentTask.id != 0" @back-levels="backLevels()" @open-modal="openModal()" :levelNum="this.getLevelNum" :taskNum="this.currentTaskId" :task="this.currentTask"/>

        <NextTaskModal :currentTask="this.task" @next-task="nextTask()" @close-modal="closeModal()" @try-again="tryAgain()" v-if="this.showNextTaskModal"/>

        <!-- <TimesModal v-if="this.timerStore.secondsRemaining <= 0"/> -->
    </div>
    </div>

</template>

<script>
import StartLevelModal from './StartLevelModal.vue';
import Task1 from './Task1.vue'
import Task2 from './Task2.vue'
import Task3 from './Task3.vue'
import Task4 from './Task4.vue'
import Task5 from './Task5.vue'
import TaskTemplate from './TaskTemplate.vue'
import NextTaskModal from './NextTaskModal.vue'
import levelsStore from "../store/LevelsStore.js";
import TimesModal from './TimesModal.vue';
import {useTimerAndDateStore} from "../store/TimerStore.js";
export default {
  props: ['points', 'levelNum'],
  components: {StartLevelModal, Task1, Task2, Task3, Task4, Task5, TaskTemplate, NextTaskModal, TimesModal},

  data() {
    return {
        task1: {
                id: 0,
                name: 'Абонемент в бассейн',
                intro: '',
                position: 0,
                level_id: 1,
                questions: [
                    {
                        answer1: 1600,
                        answer2: null,
                        id: 1,
                        point1: 1,
                        point2: 0,
                        position: 1,
                        questiontype: 0,
                        textquestion: 'Сколько рублей сэкономила Анна при покупке абонемента по сравнению с покупкой такого же числа разовых тренировок без учёта кешбэка?',
                        textright: 'В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента. Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов',
                    },
                    {
                        answer1: '06.01',
                        answer2: null,
                        id: 2,
                        point1: 1,
                        point2: 0,
                        position: 2,
                        questiontype: 0,
                        textquestion: 'На первое занятие Анна с ребёнком пришли во вторник 8 декабря. Какого числа и какого месяца закончится действие абонемента? Запишите дату в формате: ДД.ММ',
                        textright: 'В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента. Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов',
                    },
                    {
                        answer1: 15000,
                        answer2: null,
                        id: 3,
                        point1: 1,
                        point2: 0,
                        position: 3,
                        questiontype: 0,
                        textquestion: 'В январе Анна купила абонемент на 12 занятий и использовала кешбэк от покупки абонемента, купленного в декабре. Сколько рублей заплатила Анна за абонемент в январе с учётом кешбэка?',
                        textright: 'В детском бассейне при покупке абонемента на плавание действует кешбэк — 10% от стоимости абонемента. Возвращённые деньги можно использовать при покупке следующего абонемента. Термин «кешбэ́к» используется в сфере торговли для обозначения разновидности бонусной программы для привлечения клиентов. Схема кешбэка состоит в следующем: покупатель оплачивает продавцу цену товара или услуги, а часть этой суммы ему возвращается на счёт или в виде бонусов',
                    },

                ]
            },
        task2: {
                id: 0,
                name: 'Воздушные шары',
                intro: `Вы наверняка много раз держали их в руках. Круглые, яркие, летящие — они способны превратить обычный день в праздник и заставить улыбнуться даже самого грустного человека. Догадались, о чём идёт речь? Конечно, о воздушных шариках Сегодня их знают все на свете и используют в качестве подарков, игрушек и элементов праздничного украшения. А на большом воздушном шаре можно совершить незабываемую прогулку.
                        <br><br>Обыкновенные воздушные шары имеют большую историю и хранят немало тайн.`,
                position: 0,
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
                                points: 2,
                            },
                            {
                                id: 2,
                                question_id: 3,
                                truecount: 1,
                                points: 1,
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
                                truecount: 3,
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
                                answer_id: 1,
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
        task3: {
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
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
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
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 3,
                                question_id: 2,
                                truecount: 1,
                                points: 0,
                            },
                        ],
                        promts: [
                            {
                                id: 1,
                                question_id: 2,
                                text: 'Большая доля продаж совершается в Москве и Московской области.',
                                answer_id: 1,
                                trueorfalse: 1,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                text: 'В Краснодарском крае и Свердловской области одинаковое количество продаж.',
                                answer_id: 0,
                                trueorfalse: 0,
                            },
                            {
                                id: 3,
                                question_id: 2,
                                text: 'Продажи в Краснодарском крае, Свердловской области и в Республике Татарстан в сумме составляют примерно четверть от общего числа продаж.',
                                answer_id: 1,
                                trueorfalse: 1,
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
                        point1: 0,
                        point2: 0,
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
        task4: {
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
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 5,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 6,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 7,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
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
                            {
                                id: 2,
                                question_id: 2,
                                truecount: 1,
                                points: 0,
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
        task5: {
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
                                points: 0,
                            },
                            {
                                id: 2,
                                question_id: 1,
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 3,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 4,
                                question_id: 1,
                                truecount: 1,
                                points: 0,
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
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 2,
                                question_id: 2,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 3,
                                question_id: 2,
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 4,
                                question_id: 2,
                                truecount: 1,
                                points: 1,
                            },
                            {
                                id: 5,
                                question_id: 2,
                                truecount: 1,
                                points: 0,
                            },
                            {
                                id: 6,
                                question_id: 2,
                                truecount: 1,
                                points: 0,
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
                                points: 1,
                            },
                            {
                                id: 4,
                                question_id: 3,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 5,
                                question_id: 3,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 6,
                                question_id: 3,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 7,
                                question_id: 3,
                                truecount: 2,
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
                                question_id: 4,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 6,
                                question_id: 4,
                                truecount: 2,
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
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 2,
                                question_id: 5,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 3,
                                question_id: 5,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 4,
                                question_id: 5,
                                truecount: 2,
                                points: 1,
                            },
                            {
                                id: 5,
                                question_id: 5,
                                truecount: 2,
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
        rules: false,
        // level: {},
        showTasks: false,
        PointsPupils: [
            {
                id: 1,
                idtask: 1,
                idquestion: 1,
                points: 1
            },
            {
                id: 1,
                idtask: 1,
                idquestion: 2,
                points: 1
            },
            {
                id: 1,
                idtask: 1,
                idquestion: 3,
                points: 0
            },

        ],
        showModalStart: false,
        currentTask: {},
        showTask: false,
        showNextTaskModal: false,
        currentTaskId: null,
        showTaskTemplate: false,
        showLevels: false,
        slide: 1,
        showTimerModal: false
    }
  },

  methods: {
    openModalStart(task) {
        this.showModalStart = true;
        this.currentTask = task;
        this.currentTaskId = task.id;
        levelsStore().updateCurrentTask(task.id);
    },
    closeModalStart() {
        this.showModalStart = false;
    },

    handleOpenTask() {
        this.showModalStart = false;
        this.showTask = true;
    },
    openModal() {
            this.showNextTaskModal = true;
        },
    closeModal() {
        this.showNextTaskModal = false;
    },

    nextTask() {
        if (levelsStore().currentTask === 0) {
            levelsStore().levels.forEach(level => {
                if (level.level_id == levelsStore().currentLevel) {
                    if (level.tasks.length) {
                        this.currentTaskId = level.tasks[0].id;
                        this.showTaskTemplate = true;
                        levelsStore().updateCurrentTask(this.currentTaskId);
                    } else {
                        this.showTaskTemplate = false;
                        this.$emit('show-levels');
                    }

                }
            })
        } else {
            levelsStore().levels.forEach(level => {
                if (level.level_id == levelsStore().currentLevel) {
                    const task = level.tasks.find(task => {
                        task.id == this.currentTaskId
                    })
                    if (!task) {
                        this.showTaskTemplate = false;
                        this.$emit('show-levels');

                    }
                    else {
                        this.currentTaskId += 1;
                        levelsStore().updateCurrentTask(this.currentTaskId);
                        this.showTaskTemplate = true;
                    }
                }
            })
        }

        this.showNextTaskModal = false;
    },

    tryAgain() {
        this.showNextTaskModal = false;
        this.$refs.childComponent.slide = 1;
        this.$refs.childComponent.disabledNext = true;
        this.$refs.childComponent.showMessage = false;
        this.$refs.childComponent.answer = '';
        this.$refs.childComponent.radio = null;
        this.$refs.childComponent.checkboxes = [];
        this.$refs.childComponent.options = [];
        this.$refs.childComponent.radio1 = [];
        this.$refs.childComponent.disabledInput = false;

    },

    backLevels() {
        this.$emit('back-levels-parent');
    },

    totalPoints(task) {
        return task.questions.reduce((total, question) => {
            if (question.point1) {
            total += question.point1;
        }
        // Если баллы хранятся в массиве points
        if (question.points && question.points.length > 0) {
            total += question.points.reduce((maxPoints, currentPoints) => {
                console.log(maxPoints, currentPoints)
                if (currentPoints.points > maxPoints.points) {
                    return currentPoints.points
                } else return maxPoints
            }, question.points[0].points);
        }
        return total
        }, 0)
    },
    pointsReceived() {

    }

  },

  setup () {
        const timerStore = useTimerAndDateStore(); // Получаем доступ к хранилищу
        return {
        timerStore
        }
    },

  watch: {
    showTask(newValue) {
        this.$emit('show-task', newValue)
    },

    currentTaskId(newValue) {
      this.$emit("task-class", newValue);
    },
  },


  computed: {
    level() {
        this.levels = levelsStore().levels;
        const level = this.levels.filter(el => el.level_id == this.levelNum);
        console.log(JSON.parse(JSON.stringify(level)))
        console.log(JSON.parse(JSON.stringify(level))[0].tasks)
        return JSON.parse(JSON.stringify(level))[0];
    },

    // watchTimer() {
    //     return
    //     if (this.timerStore.secondsRemaining <= 0) {
    //         this.showTimerModal = true;
    //     }
    // },

    task() {
        let currentTask
        if (this.currentTaskId === 0) currentTask = this.currentTask
        else {
            const task = this.level.tasks.find(task => task.id === this.currentTaskId);
            currentTask = task
        }

        return currentTask
    },

    filteredTask() {
        if (this.levelNum == 1) return this.task1
        if (this.levelNum == 2) return this.task2
        if (this.levelNum == 3) return this.task3
        if (this.levelNum == 4) return this.task4
        if (this.levelNum == 5) return this.task5
    }

  },


}
</script>

<style>

    .q-panel-parent {
        overflow: visible;
    }
    .multiselect--above.multiselect--active .multiselect__current, .multiselect--above.multiselect--active .multiselect__input, .multiselect--above.multiselect--active .multiselect__tags {
        border-radius: 50px;
    }

    .tasks .multiselect__content-wrapper {
        z-index: 100;
    }

    .multiselect__content {
        max-height: 250px;
        overflow: auto;
    }

    .task {
        padding-top: 12px;
    }

    .tasks__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px 40px;
        width: 100%;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        border: none;
        background-color: #D9DFE2;
        border-radius: 22px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .tasks__list {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .tasks__container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .tasks__item--violet {
        background-color: var(--violet);
        color: white;
    }

    .tasks__item--orange {
        background-color: var(--orange);
    }

    .tasks__item--green {
        background-color: var(--green);
        color: white;
    }

    .tasks__item--red {
        background-color: var(--red);
        color: white;
    }

    .tasks__item--lightgreen {
        background-color: var(--light-green);
    }

    .breadcrumb {
        margin-bottom: 60px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .breadcrumb__home {
        height: 24px;
    }

    .rules__btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px 20px;
        width: 100%;
        box-shadow: none;
        border: none;
        background-color: white;
        border-radius: 22px;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: var(--violet);
        text-align: left;
        transition: border-radius .3s ease-out;
        text-transform: uppercase;
        cursor: pointer;

    }

    .rules__btn::after {
        content: '';
        flex-shrink: 0;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url(../assets/img/arrow-down.svg);
        transition: transform .3s ease-in-out;
    }

    .rules__btn.open::after {
        transform: rotate(180deg);
    }

    .rules {
        position: relative;
    }


    .rules__btn.open {
        border-radius: 22px 22px 0 0;
    }

    .rules__block {
        position: absolute;
        top: calc(100% - 20px);
        width: 100%;
        padding: 20px;
        border-bottom-left-radius: 22px;
        border-bottom-right-radius: 22px;
        background-color: white;
        opacity: 0;
        transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
        visibility: hidden;
    }

    .rules__block.open {
        opacity: 1;
        visibility: visible;
    }

    .rules__item {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .rules__text {
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        text-transform: uppercase;
    }

    .rules__list {
        margin-bottom: 20px;
        padding-left: 20px;
    }

    .tasks .q-pa-md,
    .tasks .q-carousel__slide {
        padding: 0;
    }
    .tasks .q-carousel {
        height: auto;
        border-radius: 0;
    }

    .tasks .q-panel {
        overflow: visible;
        border-radius: 0;
    }

    /* .task {
        padding-top: 12px;
    } */

    .task__block {
        padding: 40px;
        border-radius: 32px;
        background-color: white;
    }


    .task__box {
        margin-bottom: 40px;
        display: flex;
        gap: 40px;
    }

    .task__left,
    .task__right {
        width: calc((100% - 40px)/2);
    }

    .task__title {
        margin-bottom: 20px;
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        color: var(--violet);
        text-transform: uppercase;
    }

    .task__number {
        margin-bottom: 40px;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: var(--violet);
    }


    .task__info {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task__info:last-child {
        margin-bottom: 0;
    }

    .task__question {
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task__tables {
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
        align-items: start;
        flex-wrap: wrap;
    }


    .task .form__label {
        gap: 12px;
        /* max-width: max-content; */
    }

    .task .form__label span {
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;
    }

    .task .form__input {
        padding: 20px 22px;
        border-radius: 50px;
        background-color: var(--bg);
    }

    .task .form__label > div {
        margin-bottom: 40px;
        gap: 8px;
        font-weight: 600;
    }

    .task .form__btn {
        padding: 20px 32px;
    }

    .task__desc {
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task__desc:last-child {
        margin-bottom: 20px;
    }

    .task__table {

        border-spacing: 0 2px;
        border-radius: 20px;
        overflow: hidden;
    }

    .task__tables .task__table {
        max-width: 284px;
    }

    .task__table th {
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        text-align: left;
        /* border-radius: 20px 20px 0 0; */
        color: white;
        text-transform: uppercase;

    }

    .task__table th:first-child {
        border-top-left-radius: 20px;
    }

    .task__table th:last-child {
        border-top-right-radius: 20px;
    }

    .task__table thead {
        background-color: var(--violet);
    }


    .task__table td,
    .task__table th {
        padding: 8px;
    }

    .task__table td:first-child {
        padding-left: 20px;
        padding-right: 5px;
    }

    .task__table td:last-child {
        padding-right: 20px;
        padding-left: 5px;
    }

    .task__table tbody tr {
        margin-bottom: 2px;
        align-items: center;
        background-color: var(--bg);
    }

    .task__table tbody tr:last-child td:first-child {
        border-radius: 0 0 0 20px;
    }

    .task__table tbody tr:last-child td:last-child {
        border-radius: 0 0 20px 0;
    }

    .task__table td {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task__table tbody tr td:last-child {
        text-align: right;
    }

    body .q-carousel__control {
        margin: 0;
    }

    .carousel__btns {
        position: static;
        display: flex;
        justify-content: end;

    }

    .carousel__btns .carousel__btn {
        padding: 20px 32px;
        border-radius: 50px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        border: 2px solid var(--light-green);
        background-color: transparent;
        color: #414143;
        text-transform: none;
        cursor: pointer;
        transition: border-color .3s ease-in-out;
    }

    .carousel__btns .carousel__btn::before {
        content: none;
    }

    .carousel__btns .carousel__btn:hover {
        border-color: #B4E321;
    }

    .carousel__btns .carousel__btn:active {
        border-color: #C9FF22;
        background: linear-gradient(109.56deg, rgba(201, 255, 34, 0.42) 14.7%, rgba(201, 255, 34, 0) 66.8%);
    }

    .task .form__input--radio,
    .task .form__input--checkbox {
        display: none;
    }

    .task .form__label.form__label--radio,
    .task .form__label.form__label--checkbox {
        align-items: center;
        flex-direction: row;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task .form__box--radio,
    .task .form__box--checkboxes {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .task .form__label--radio span {
        flex-shrink: 0;
        position: relative;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 2px solid var(--violet);
        background-color: white;
    }

    .task .form__label--checkbox span {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background-color: var(--violet);
    }

    .task .form__input--radio:checked ~ span {
        background-color: var(--violet);
    }

    .task .form__input--checkbox:checked ~ span {
        background-image: url(../assets/img/task-check.svg);
        background-position: center;
        background-repeat: no-repeat;
    }

    .task .form__input--radio:checked ~ span::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        transform: translate(-50%, -50%);
    }

    .task__images {
        margin-bottom: 8px;
        display: flex;
        gap: 12px;
    }

    .task__img {
        flex-shrink: 1;
        width: calc((100% - 24px)/3);
    }

    .task__images ~ .task__info {
        text-align: center;
    }

    .task .multiselect {
        min-width: 240px;
    }

    .task .multiselect__tags {
        padding: 20px 22px;
        min-height: 64px;
        border-radius: 50px;
        border: none;
        background-color: white;
    }

    .task .multiselect__placeholder {
        padding-top: 0;
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;
        color: rgba(65, 65, 67, 0.4);
    }

    .task .multiselect__select {
        padding: 0;
        top: 50%;
        right: 22px;
        width: 24px;
        height: 24px;
        transform: translateY(-50%);
    }

    .task .multiselect__select::before {
        margin: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border: none;
        content: url(../assets/img/select-arrow-down.svg);
    }

    .task .multiselect--active .multiselect__select {
        transform: rotateZ(180deg) translateY(50%);
    }

    .multiselect--active:not(.multiselect--above) .multiselect__current,
    .multiselect--active:not(.multiselect--above) .multiselect__tags {
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    .task .multiselect__content-wrapper {
        margin-top: 6px;
        padding: 12px;
        border-radius: 28px;
        background-color: var(--violet);
    }

    .task .multiselect__option--highlight.multiselect__option,
    .task .multiselect__option--selected {
        border-radius: 20px;
        background-color: white;
        color: var(--text);
    }

    .task .multiselect__option--selected.multiselect__option--highlight::after {
        content: none;
    }

    .task .multiselect__option--selected.multiselect__option::after {
        content: none;
    }

    .task .multiselect__option--selected.multiselect__option {
        color: var(--text);
    }

    .task .multiselect__option {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
        color: white;
    }

    .task .multiselect__input {
        margin: 0;
        padding: 0;
        max-width: max-content;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;

    }

    .task .multiselect__input::placeholder {
        color: rgba(65, 65, 67, 0.4);
    }

    .task .multiselect__single {
        padding: 0;
        margin: 0;
        max-width: max-content;
    }

    .task__form > .task__table {
        margin-bottom: 40px;
        width: 100%;
        border-collapse: collapse;
    }

    .task__form > .task__table td {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task__form > .task__table td span {
        display: block;
        max-width: 245px;
    }

    table {
        display: block;
    }
    tr {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    td {
        display: inline-block;
    }

    tbody, thead {
        display: block;
    }

    .task__form > span {
        display: block;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task__intro {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .intro__title {
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: var(--violet);
        text-transform: uppercase;
    }

    .intro__subtitle {
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        color: var(--violet);
        text-transform: uppercase;
    }

    .intro__text {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .intro__desc {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task-4 .task__img {
        width: calc((100% - 36px)/4);
        box-shadow: 4px 5px 50px 0px rgba(236, 234, 225, 1);
    }

    .task-4 .multiselect {
        max-width: 385px;
    }

    .task-4 .multiselect .multiselect__tags {
        background-color: var(--bg);
    }

    .task__table--noborder tbody tr {
        margin-bottom: 0;
    }



    .task__form > .task__table th span {

        max-width: 245px;
    }

    .task__table th span,
    .task__table td span {
        display: block;
    }

    @media (min-width: 1921px) {
        .task__tables .task__table {
            width: calc((100% - 20px)/2);
            max-width: 100%;
        }
    }


    @media (max-width: 1400px) {
        .task__images {
            flex-direction: column;
        }

        .task__img {
            width: auto;
        }
    }

    @media (max-width: 1200px) {

        .task {
            padding-top: 20px;
        }

        .level-1 .task {
            padding-top: 114px;
        }

        .task__number {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__info {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__question {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__title {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task .form__label span {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .form__label > div {
            font-size: 16px;
            line-height: 19.2px;
        }



        .task__desc {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__table td {
            font-size: 14px;
            line-height: 16.8px;
        }

        .carousel__btns .carousel__btn {
            padding: 14px 20px;
            font-size: 20px;
            line-height: 27.28px;
        }

        .task__box {
            gap: 20px;
        }


        .task__block {
            padding: 20px 10px;
            border-radius: 24px;
        }

        .task__images {
            flex-direction: row;
        }

        .task__img {
            width: calc((100% - 24px)/3);
        }

        .task.task-2 {
            padding-top: 20px;
        }

        .task .form__label.form__label--radio {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .form__box--radio {
            margin-bottom: 20px;
        }

        .task__left, .task__right {
            width: calc((100% - 20px)/2);
        }

        .task__form > .task__table tr {
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        .task__form > span {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .form__box--radio,
        .task .form__box--checkboxes {
            margin-bottom: 20px;
        }

        .task .form__label.form__label--radio,
        .task .form__label.form__label--checkbox {
            font-size: 16px;
            line-height: 19.2px;
        }

        .intro__title {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__intro {
            gap: 20px;
        }

        .intro__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .intro__desc {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__form > .task__table td span {
            max-width: 100%;
        }

        .task__form > .task__table td {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .multiselect__placeholder {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__table tr {
            padding: 12px 8px;
            gap: 12px;
        }

        .task .task__table td,
        .task .task__table th {
            padding: 0;
            /* width: 100%; */
        }

        .task__form .task__table td {
            width: 100%;
        }

        .task_item {
            font-size: 16px;
            line-height: 19.2px;
        }

        .breadcrumb {
            font-size: 16px;
            line-height: 19.2px;
        }

        .rules__btn {
            padding: 20px;
            font-size: 16px;
            font-weight: 700;
            line-height: 19.2px;
            border-radius: 16px;
        }

        .rules__btn::after {
            width: 32px;
            height: 32px;
            background-size: 32px;
        }

        .rules__item {
            font-size: 16px;
            line-height: 19.2px;
        }

        .rules__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .tasks__item {
            padding: 22px;
            font-size: 16px;
            line-height: 19.2px;
            border-radius: 16px;
        }

        .tasks__container {
            gap: 20px;
        }

        .tasks__list {
            gap: 20px;
        }


    }


    @media (max-width: 768px) {
        .task__img {
            width: 100%;
            max-height: 216px;
        }

        .task__images {
            overflow: auto;
        }
    }

    @media (max-width: 640px) {
        .task {
            padding-top: 28px;
        }

        .task__number {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__info {
            font-size: 12px;
            line-height: 14.4px;
            order: -1;
        }

        .task__title {
            order: -1;
            font-size: 12px;
            line-height: 16.8px;
        }

        .task__question {
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__box {
            flex-direction: column;
            gap: 0;
        }

        .task__block {
            padding: 28px 20px;
            border-radius: 32px;
        }


        .task__left,
        .task__right {
            display: contents;
        }

        .task__form {
            display: contents;
        }


        .task__desc {
            order: -1;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__tables {
            flex-direction: column;
            order: -1;
            gap: 12px;
        }

        .task__table {
            width: 100%;
        }

        .task__table th {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task__table td {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task__info {
            margin-bottom: 12px;
        }

        .task__info:last-child {
            margin-bottom: 20px;
        }

        .task .form__label > div {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__images {
            order: -1;
        }

        .task-2 .task__desc {
            margin-bottom: 20px;
        }

        .task .form__label span {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task__right picture {
            order: -1;
        }

        .task__form > span {
            margin-bottom: 12px;
            display: inline-block;
            font-size: 12px;
            line-height: 14.4px;
        }

        .task .form__label.form__label--radio,
        .task .form__label.form__label--checkbox {
            font-size: 14px;
            line-height: 16.8px;
        }

        .intro__title {
            font-size: 14px;
            line-height: 16.8px;
        }

        .intro__text {
            font-size: 12px;
            line-height: 14.4px;
        }

        .intro__subtitle {
            font-size: 12px;
            line-height: 14.4px;
        }

        .intro__desc {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task_item {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__list {
            margin-bottom: 0;
        }


    }



    @media (max-width: 576px) {
        .breadcrumb {
            margin-bottom: 40px;
            gap: 4px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .breadcrumb__home svg {
            width: 18px;
            height: 18px;
        }

        .rules__btn {
            font-size: 14px;
            line-height: 16.8px;
        }

        .tasks__item {
            flex-direction: column;
            align-items: start;
            gap: 20px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .rules__item {
            font-size: 14px;
            line-height: 16.8px;
        }

        .rules__text {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task {
            padding-top: 28px;
        }
    }

</style>

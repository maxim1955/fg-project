<template>
    <div v-if="!this.showTask" class="tasks">
        <div class="breadcrumb">
            <button class="btn-reset breadcrumb__home" @click="$emit('show-level')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.59998 9.98047H4C3.45 9.98047 3 10.4305 3 10.9805V19.6005C3 20.1505 3.45 20.6005 4 20.6005H5.59998C6.14998 20.6005 6.59998 20.1505 6.59998 19.6005V10.9805C6.59998 10.4305 6.14998 9.98047 5.59998 9.98047Z" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7992 6.78906H11.1992C10.6492 6.78906 10.1992 7.23906 10.1992 7.78906V19.5991C10.1992 20.1491 10.6492 20.5991 11.1992 20.5991H12.7992C13.3492 20.5991 13.7992 20.1491 13.7992 19.5991V7.78906C13.7992 7.23906 13.3492 6.78906 12.7992 6.78906Z" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.0004 3.59961H18.4004C17.8504 3.59961 17.4004 4.04961 17.4004 4.59961V19.5996C17.4004 20.1496 17.8504 20.5996 18.4004 20.5996H20.0004C20.5504 20.5996 21.0004 20.1496 21.0004 19.5996V4.59961C21.0004 4.04961 20.5504 3.59961 20.0004 3.59961Z" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            /
            <span>Уровень {{ this.getLevelNum }}</span>
        </div>
        <div class="tasks__container">
            <div class="rules">
                <button @click="this.rules=!this.rules" class="rules__btn btn-reset" :class="{open: this.rules}">Правила прохождения заданий</button>
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
                <div v-for="task of filteredTasks" :key="task.id">
                    <button class="tasks__item task btn-reset" :class="{'tasks__item--violet': task.id == 1, 'tasks__item--orange': task.id == 2, 'tasks__item--green': task.id == 3, 'tasks__item--red': task.id == 4, 'tasks__item--lightgreen': task.id == 5}" @click="openModalStart(task.id)" :disabled="this.points < level.min">
                        <span v-if="task.id == 1" class="task__name">{{ task.name }}</span>
                        <span v-else class="task__name">Задание {{ task.id }}</span>
                        <span class="task__points">0 из 20 баллов</span>
                    </button>
                    <span v-if="this.points < level.minpoints && this.getLevelNum == level.id" class="tasks__error">Чтобы получить доступ к следующим заданиям, вам необходимо ответить на все вопросы в предыдущем</span>
                </div>

            </div>
        </div>
        <StartLevelModal :currentTask="this.currentTask" @close-modal="closeModalStart()" @open-task="handleOpenTask()" v-show="this.showModalStart"></StartLevelModal>

    </div>
    <Task :currentLevel="this.getLevelNum" :currentTask="this.currentTask" v-else/>
</template>

<script>
import StartLevelModal from './StartLevelModal.vue';
import Task from './Task.vue';
export default {
  props: ['points', 'levelNum'],
  components: {StartLevelModal, Task},
  data() {
    return {
        tasks1: [
            {
                id: 1,
                idlevels: 1,
                name: 'Абонемент в бассейн',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 1,
            },
            {
                id: 2,
                idlevels: 1,
                name: 'Задание 2',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 2,
            },
            {
                id: 3,
                idlevels: 1,
                name: 'Задание 3',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 3,
            },
            {
                id: 4,
                idlevels: 1,
                name: 'Задание 4',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 4,
            },
            {
                id: 5,
                idlevels: 1,
                name: 'Задание 5',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 5,
            },

        ],
        tasks2: [
            {
                id: 1,
                idlevels: 1,
                name: 'Воздушные шары',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 1,
            },
            {
                id: 2,
                idlevels: 1,
                name: 'Задание 2',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 2,
            },
            {
                id: 3,
                idlevels: 1,
                name: 'Задание 3',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 3,
            },
            {
                id: 4,
                idlevels: 1,
                name: 'Задание 4',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 4,
            },
            {
                id: 5,
                idlevels: 1,
                name: 'Задание 5',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 5,
            },

        ],
        tasks3: [
            {
                id: 1,
                idlevels: 1,
                name: 'Продажи по регионам',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 1,
            },
            {
                id: 2,
                idlevels: 1,
                name: 'Задание 2',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 2,
            },
            {
                id: 3,
                idlevels: 1,
                name: 'Задание 3',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 3,
            },
            {
                id: 4,
                idlevels: 1,
                name: 'Задание 4',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 4,
            },
            {
                id: 5,
                idlevels: 1,
                name: 'Задание 5',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 5,
            },

        ],
        tasks4: [
            {
                id: 1,
                idlevels: 1,
                name: 'Солёное золото',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 1,
            },
            {
                id: 2,
                idlevels: 1,
                name: 'Задание 2',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 2,
            },
            {
                id: 3,
                idlevels: 1,
                name: 'Задание 3',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 3,
            },
            {
                id: 4,
                idlevels: 1,
                name: 'Задание 4',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 4,
            },
            {
                id: 5,
                idlevels: 1,
                name: 'Задание 5',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 5,
            },

        ],
        tasks5: [
            {
                id: 1,
                idlevels: 1,
                name: 'Вопросы к специалисту',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 1,
            },
            {
                id: 2,
                idlevels: 1,
                name: 'Задание 2',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 2,
            },
            {
                id: 3,
                idlevels: 1,
                name: 'Задание 3',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 3,
            },
            {
                id: 4,
                idlevels: 1,
                name: 'Задание 4',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 4,
            },
            {
                id: 5,
                idlevels: 1,
                name: 'Задание 5',
                intro: 'Здесь должен быть текст',
                url: '',
                position: 5,
            },

        ],
        rules: false,
        level: {},
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
        currentTask: null,
        showTask: false,

    }
  },
  methods: {
    openModalStart(id) {
        this.showModalStart = true;
        this.currentTask = id;
    },
    closeModalStart() {
        this.showModalStart = false;
    },

    handleOpenTask() {
        this.showModalStart = false;
        this.showTask = true;
    }


  },

  computed: {
    getLevelNum() {
        return this.levelNum.id;
    },

    filteredTasks() {
        if (this.getLevelNum == 1) return this.tasks1
        if (this.getLevelNum == 2) return this.tasks2
        if (this.getLevelNum == 3) return this.tasks3
        if (this.getLevelNum == 4) return this.tasks4
        if (this.getLevelNum == 5) return this.tasks5
    }
  }
}
</script>

<style scoped>
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
        background-color: #D9DFE2;
        border-radius: 22px;
        text-transform: uppercase;
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



    @media (max-width: 1200px) {
        .tasks {
            padding-top: 60px;
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
    }

</style>

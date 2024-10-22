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
                <div class="tasks__el" v-for="(task, index) of level.tasks" :key="task.position">
                        <button class="tasks__item task" @click="openModalStart(task)" :disabled="index > 0 && (level.tasks[[index - 1]].questions.length > sumPoints(level.tasks[index - 1]))">
                            <span class="task__name">{{ task.name}}</span>
                            <span class="task__points">{{ sumPoints(task) }} из {{ totalPoints(task)}} баллов</span>
                        </button>
                        <span v-if="level.tasks.slice(0, index).every(t => t.questions.length <= sumPoints(t)) && task.questions.length > sumPoints(task)" class="tasks__error">Чтобы получить доступ к следующим заданиям, вам необходимо ответить на все вопросы в предыдущем</span>
                </div>
            </div>
        </div>
        </div>
        <div class="task" :class="`task-${currentLevel}`" v-else>
        <TaskTemplate ref="childComponent" @try-again="tryAgain" v-if="showTaskTemplate" @back-levels="backLevels()" @open-modal="openModal()" :levelNum="this.getLevelNum" :taskNum="this.currentTaskId" :task="this.currentTask"/>


    </div>
        <NextTaskModal :currentTask="currentTask" @next-task="nextTask(currentTask)" @close-modal="closeModal()" @try-again="tryAgain()" v-if="showNextTaskModal"/>
        <!-- <TimesModal @close-timer-modal="closeTimerModal()" v-if="this.showTimerModal"/> -->
        <StartLevelModal :currentTask="currentTask" @close-modal="closeModalStart()" @open-task="handleOpenTask()" v-if="this.showModalStart"></StartLevelModal>
    </div>

</template>

<script>
import StartLevelModal from './StartLevelModal.vue';
import TaskTemplate from './TaskTemplate.vue'
import NextTaskModal from './NextTaskModal.vue'
import levelsStore from "../store/LevelsStore.js";
import TimesModal from './TimesModal.vue';
import {useTimerAndDateStore} from "../store/TimerStore.js";
import userStore from "../store/UserStore.js";
import { ref } from 'vue';
export default {
  props: ['points', 'levelNum'],
  components: {StartLevelModal, TaskTemplate, NextTaskModal, TimesModal},

  data() {
    return {
        rules: false,
        showTasks: false,
        showModalStart: false,
        currentTask: {},
        showTask: false,
        showNextTaskModal: false,
        currentTaskId: null,
        showTaskTemplate: false,
        showLevels: false,
        slide: 1,
        showTimerModal: false,
        questions: []
    }
  },

  methods: {
    questionsCount(task) {
        return userStore().user.pointspupils.filter(item => item.level_id === levelsStore().currentLevel && item.task_id === task.id);
    },

    sumPoints(task) {
        const questions = userStore().user.pointspupils.filter(item => item.level_id === levelsStore().currentLevel && item.task_id === task.id);
        return questions.reduce((total, question) => {
            return total += question.points
        }, 0)
    },

    openModalStart(task) {
        // if (this.timerStore.secondsRemaining <= 0) this.showTimerModal = true
        // else
        {
            levelsStore().updateCurrentTask(task.position);
            this.currentTask = task;
            this.currentTaskId = task.id;
            this.questions = userStore().user.pointspupils.filter(item => item.level_id === levelsStore().currentLevel && item.task_id === task.id);
            console.log(this.questions.length, this.currentTask.questions.length)

            console.log(this.questions.length)

            if (this.questions.length == this.currentTask.questions.length) {
                this.showNextTaskModal = true;
            }
            else {
                this.showModalStart = true;
            }
        }

    },
    closeModalStart() {
        this.showModalStart = false;
    },

    closeTimerModal() {
        this.showTimerModal = false;
        this.showTask = false;

    },

    handleOpenTask() {
        this.showModalStart = false;
        this.showTask = true;
        this.showTaskTemplate = true;
        levelsStore().updateCurrentTask(task.position);
    },
    openModal() {
            this.showNextTaskModal = true;
        },
    closeModal() {
        this.showNextTaskModal = false;
    },

    nextTask(currentTask) {
        console.log(currentTask)
        const position = currentTask.position + 1;
        let task;
        task = this.level.tasks.find(task => task.position == this.currentTaskId);
        this.currentTask = task;

        if (!task) {
            this.showTaskTemplate = false;
            this.$emit('show-levels');
        }

        levelsStore().updateCurrentTask(position);
        if (!this.showTaskTemplate) {
            this.showTaskTemplate = true;
            this.showTask = true;
            this.showNextTaskModal = false;

        }
        // else {

        //     levelsStore().levels.forEach(level => {
        //     if (level.level_id === levelsStore().currentLevel) {
        //             task = level.tasks.find(task => task.position == position)
        //     }
        //     if (!task) {
        //         this.showTaskTemplate = false;
        //         this.$emit('show-levels');
        //     }
        //     else {
        //         if (!this.showTaskTemplate) {
        //             this.showTaskTemplate = true;
        //             this.showTask = true;
        //             this.currentTaskId += 1;
        //             const task = level.tasks.find(task => task.position == this.currentTaskId);
        //             this.currentTask = task;

        //         }

        //     }
        // })
        // }

        this.$refs.childComponent.slide = 1;
        this.$refs.childComponent.disabledNext = true;
        this.$refs.childComponent.showMessage = false;
        this.$refs.childComponent.answer = '';
        this.$refs.childComponent.radio = null;
        this.$refs.childComponent.checkboxes = [];
        this.$refs.childComponent.options = [];
        this.$refs.childComponent.radio1 = [];
        this.$refs.childComponent.disabledInput = false;



        this.showNextTaskModal = false;
    },

    tryAgain() {
        if (!this.showTaskTemplate) {
            this.showTask = true;
            this.showTaskTemplate = true;
            this.showNextTaskModal = false;
        } else {
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
        }

    },

    backLevels() {
        this.$emit('back-levels-parent');
    },

    sumPoints(task) {
        const questions = userStore().user.pointspupils.filter(item => item.level_id === task.level_id && item.task_id === task.id);
        return questions.reduce((total, question) => {
            return total += question.points
        }, 0)
    },

    questionCount(task) {
        const questions = userStore().user.pointspupils.filter(item => item.level_id === task.level_id && item.task_id === task.id);
        if (questions) return questions.length
        else return 0
    },

    totalPoints(task) {
        return task.questions.reduce((total, question) => {
            if (question.point1) {
            total += question.point1;
        }
        // Если баллы хранятся в массиве points
        if (question.points && question.points.length > 0) {
            total += question.points.reduce((maxPoints, currentPoints) => {

                if (currentPoints.points > maxPoints.points) {
                    return currentPoints.points
                } else return maxPoints
            }, question.points[0].points);
        }
        return total
        }, 0)
    },


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

    showTimerModal(newValue) {
        this.showTimerModal = newValue;
    }
  },


  computed: {
    level() {
        this.levels = levelsStore().levels;
        const level = this.levels.filter(el => el.level_id == this.levelNum);
        return JSON.parse(JSON.stringify(level))[0];
    },

    task() {
        let currentTask
        if (this.currentTaskId === 0) currentTask = this.currentTask
        else {
            const task = this.level.tasks.find(task => task.id === this.currentTaskId);
            currentTask = task
        }

        return currentTask
    },

    timerModal() {
        console.log(this.timerStore.secondsRemaining)
        if (this.timerStore.secondsRemaining <= 0) this.showTimerModal = true
    },

    currentLevel() {
        return levelsStore().currentLevel;
    }

  },


}
</script>

<style>

    .tasks__error {
        display: inline-block;
        padding-top: 20px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: var(--red);
    }

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
        transition: all .3s ease-in-out;
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


    .tasks__el:nth-child(5n + 1) .tasks__item {
        background-color: var(--violet);
        color: white;
    }

    .tasks__el:nth-child(5n + 2) .tasks__item {
        background-color: var(--orange);
    }


    .tasks__el:nth-child(5n + 1) .tasks__item:hover {
        background-color: #9D4EB7;
    }

    .tasks__el:nth-child(5n + 1) .tasks__item:focus-visible,
    .tasks__el:nth-child(5n + 1) .tasks__item:active {
        background-color: #C85FEA;
    }


    .tasks__el:nth-child(5n + 2) .tasks__item:hover {
        background-color: #FDC165;
    }

    .tasks__el:nth-child(5n + 2) .tasks__item:focus-visible,
    .tasks__el:nth-child(5n + 2) .tasks__item:active {
        background-color: #F4A020;
    }

    .tasks__el:nth-child(5n + 3) .tasks__item {
        background-color: var(--green);
        color: white;
    }

    .tasks__el:nth-child(5n + 3) .tasks__item:hover {
        background-color: #218B17;
    }

    .tasks__el:nth-child(5n + 3) .tasks__item:focus-visible,
    .tasks__el:nth-child(5n + 3) .tasks__item:active {
        background-color: #41E131;
    }

    .tasks__el:nth-child(5n + 4) .tasks__item {
        background-color: var(--red);
        color: white;
    }

    .tasks__el:nth-child(5n + 4) .tasks__item:hover {
        background-color: #E0535B;
    }

    .tasks__el:nth-child(5n + 4) .tasks__item:focus-visible,
    .tasks__el:nth-child(5n + 4) .tasks__item:active {
        background-color: #BE3B42;
    }

    .tasks__el:nth-child(5n + 5) .tasks__item {
        background-color: var(--light-green);
    }

    .tasks__el:nth-child(5n + 5) .tasks__item:hover {
        background-color: #D9FF62;
    }

    .tasks__el:nth-child(5n + 5) .tasks__item:focus-visible,
    .tasks__el:nth-child(5n + 5) .tasks__item:active {
        background-color: #A8D41C;
    }

    .tasks__el .tasks__item:disabled,
    .tasks__el .tasks__item:disabled:hover,
    .tasks__el .tasks__item:disabled:focus-visible,
    .tasks__el .tasks__item:disabled:active {
        background-color: #D9DFE2;
        color: #414143;
        opacity: 1 !important;
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
        justify-content: start;
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
        flex-wrap: wrap;
        align-items: start;
        gap: 12px;
    }

    .task__img {
        flex-shrink: 1;
        object-fit: contain;
    }

    .task__images ~ .task__info {
        text-align: center;
    }

    .task .multiselect {
        min-width: 240px;
        border-radius: 50px;
    }

    .task .multiselect__tags {
        padding: 20px 22px;
        min-height: 64px;
        border-radius: 50px;
        border: none;
        background: rgba(242, 241, 236, 1);
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

    .task-5.task .form__label > .multiselect {
        margin-bottom: 0;
        min-width: auto;
    }

    .task-5.task .form__label > .multiselect .multiselect__tags {
        background-color: white;
    }

    .task__form > .task__table.task__table--3 {
        overflow: auto;
    }

    .task__form > .task__table.task__table--3 tr {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
    }

    .task__form > .task__table.task__table--3 thead th:not(:first-child) {
        text-align: center;
    }




    @media (min-width: 1921px) {
        .task__tables .task__table {
            width: calc((100% - 20px)/2);
            max-width: 100%;
        }
    }

    @media (max-width: 1600px) {
        .task__form > .task__table.task__table--3 thead,
        .task__form > .task__table.task__table--3 tbody {
            display: table-row-group;
        }
    }


    @media (max-width: 1400px) {
        .task__images {
            flex-direction: column;
        }

        .task__img {
            width: auto;
        }

        .task__selects.selects .form__label {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task-5.task .task__selects {
            gap: 12px;
        }
    }

    @media (max-width: 1200px) {

        .task__selects.selects .form__label {
            font-size: 14px;
            line-height: 16.8px;
        }

        .tasks__error {
            padding-top: 12px;
            font-size: 16px;
            line-height: 19.2px;
        }

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
        }

        .task__images {
            overflow: auto;
        }

        .level-4-1 .task__img {
            width: auto;
        }
    }

    @media (max-width: 640px) {
        .task {
            padding-top: 28px;
        }

        .task .form__input {
            width: 100%;
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
            order: 0;
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
            display: block;
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
        .tasks__error {
            padding-top: 8px;
            font-size: 14px;
            line-height: 16.8px;
        }

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

<template>
    <div class="modal">
        <div class="modal__overlay">
            <div class="modal__window">
                <button @click="$emit('close-modal')" class="btn-reset modal__close"></button>
                <div class="modal__block">
                    <h2 v-if="currentTask.questions.length <= sumPoints" class="modal__title">Ты прошёл задание «{{ currentTask.name }}»</h2>
                    <h2 v-else class="modal__title">Ты не прошёл задание «{{ currentTask.name }}»</h2>
                    <p v-if="currentTask.questions.length <= sumPoints" class="modal__text">У тебя {{ sumPoints }} из {{ totalPoints(currentTask) }} баллов. Тебе доступно следующее задание. Ты также можешь пройти задание заново, но тогда текущий результат будет аннулирован.</p>
                    <div v-if="questions">
                        <p  v-for="(question, index) in questions" :key="question.id" class="modal__text">
                            Задание {{ index + 1 }}: {{ question.points }} из {{ getQuestionPoint(question) }} баллов
                        </p>
                    </div>

                </div>
                <button v-if="currentTask.questions.length <= sumPoints" @click="$emit('next-task')" class="modal__btn btn-reset flex items-center">
                        Следующее задание
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4297 6.42969L20.4997 12.4997L14.4297 18.5697" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 12.5H20.33" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </button>
                <button @click="$emit('try-again')" class="btn-reset modal__btn modal__btn--reset">Пройти заново</button>

            </div>
        </div>
    </div>
</template>

<script>
import levelsStore from "../store/LevelsStore.js";
import userStore from "../store/UserStore.js";
export default {
    data() {
        return {
            showTask: false,
            points: null,
        }
    },

    props: ['currentTask'],

    methods: {
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

        getQuestionPoint(item) {
            console.log(item)
            const questionItem = this.currentTask.questions.find(question => question.id === item.question_id);
            console.log(questionItem)
            if (questionItem !== undefined) {
                if (questionItem.questiontype === 0) return questionItem.point1
                else {
                    return questionItem.points.reduce((maxPoints, currentPoints) => {
                        console.log(maxPoints, currentPoints)
                        if (currentPoints.points > maxPoints) {
                            return currentPoints.points
                        } else return maxPoints
                    }, 0);
                }
            } else {

            }

        }
    },

    computed: {
        currentLevel() {
            return levelsStore().currentLevel;
        },
        levels() {
            return levelsStore().levels;
        },

        questions() {
            return userStore().user.pointspupils.filter(item => item.level_id === levelsStore().currentLevel && item.task_id === this.currentTask.id);
        },

        sumPoints() {
            return this.questions.reduce((total, question) => {
                return total += question.points
            }, 0)
        },





    }
}
</script>

<style scoped>
    .modal__window {
        max-width: 100%;
        height: auto;
    }

    .modal__block {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .modal__title {
        margin-bottom: 0;
    }

    .modal__title:nth-child(2) {
        margin-bottom: 20px;
    }

    .modal__btn  {
        margin-bottom: 20px;
        align-self: center;
        gap: 10px;
        padding: 20px 32px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        border-radius: 50px;
        outline: 2px solid #C9FF22;
        background-color: var(--light-green);
        transition: all .3s ease-in-out;
    }

    .modal__btn:hover {
        background-color: white;
    }

    .modal__btn:focus-visible,
    .modal__btn:active {
        outline-width: 4px;
    }

    .modal__btn--reset {
        margin-bottom: 0;
        outline: 2px solid var(--light-green);
        background-color: transparent;
    }

    .modal__btn--reset:hover {
        outline-color: #B4E321;
        background-color: transparent;
    }

    .modal__btn--reset:focus-visible,
    .modal__btn--reset:active {
        outline-color: #C9FF22;
        background: linear-gradient(109.56deg, rgba(201, 255, 34, 0.42) 14.7%, rgba(201, 255, 34, 0) 66.8%);
    }


</style>

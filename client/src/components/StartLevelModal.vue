<template>
    <div v-if="!showTask" class="modal">
        <div class="modal__overlay">
            <div class="modal__window">
                <button @click="$emit('close-modal')" class="btn-reset modal__close"></button>
                <div class="modal__block">
                    <h2 class="modal__title">
                        На&nbsp;прохождение задания у&nbsp;тебя сегодня 30&nbsp;минут</h2>
                        <h2 class="modal__title">Начинаем?</h2>
                        <button @click="openTask()" class="modal__btn btn-reset">Начать</button>
                </div>

            </div>
        </div>
    </div>
    <Task v-else/>
</template>

<script>
import Task from './Task.vue';
export default {
    data() {
        return {
            showTask: false,
        }
    },
    components: {Task},
    props: ['currentTask'],

    methods: {
        openTask() {
            this.$emit('open-task');
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
        padding: 20px 32px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        border-radius: 50px;
        background-color: var(--light-green);
    }
</style>

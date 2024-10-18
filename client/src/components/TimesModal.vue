<template>
    <div class="modal">
        <div class="modal__overlay">
            <div class="modal__window">
                <button @click="$emit('close-timer-modal')" class="btn-reset modal__close"></button>
                <div class="modal__block">
                    <h2 class="modal__title">Сегодня время истекло, жду тебя завтра
                        <br>
                        До встречи!</h2>
                    <router-link :to="{name: 'home'}" class="modal__btn btn-reset flex items-center">На главную</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

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
        background-color: var(--light-green);
    }

    .modal__btn--reset {
        margin-bottom: 0;
        border: 2px solid var(--light-green);
        background-color: transparent;
    }


</style>

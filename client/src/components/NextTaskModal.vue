<template>
    <div class="modal">
        <div class="modal__overlay">
            <div class="modal__window">
                <button @click="$emit('close-modal')" class="btn-reset modal__close"></button>
                <div class="modal__block">
                    <h2 class="modal__title">Ты прошёл задание «Абонемент в бассейн»</h2>
                    <p class="modal__text">У тебя 20 из 30 баллов. Тебе доступно следующее задание. Ты также можешь пройти задание заново, но тогда текущий результат будет аннулирован.</p>
                    <p class="modal__text">Задание 1: 4 из 6 баллов</p>
                    <p class="modal__text">Задание 2: 6 из 6 баллов</p>
                    <p class="modal__text">Задание 3: 6 из 6 баллов</p>

                </div>
                <button @click="$emit('next-task')" class="modal__btn btn-reset flex items-center">
                        Следующее задание
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4297 6.42969L20.4997 12.4997L14.4297 18.5697" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 12.5H20.33" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </button>
                <button class="btn-reset modal__btn modal__btn--reset">Пройти заново</button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTask: false,
        }
    },
    props: [''],

    methods: {

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
        background-color: var(--light-green);
    }

    .modal__btn--reset {
        margin-bottom: 0;
        border: 2px solid var(--light-green);
        background-color: transparent;
    }


</style>

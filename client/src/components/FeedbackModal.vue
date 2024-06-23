<template>
    <div class="modal">
        <div class="modal__overlay">
            <div class="modal__window">
                <button @click="$emit('close-modal')" class="btn-reset modal__close"></button>
                <div class="modal__block">
                    <h1 class="modal__title">Спасибо!</h1>
                    <p class="modal__text">Мы ценим каждое обращение и ответим в ближайшее время на ваш e-mail</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style>
    .modal {
        position: fixed;
        top: -1px;
        left: -1px;
        width: 101%;
        height: 101%;
        background-color: #FFFFFF1A;
        backdrop-filter: blur(5px);
        z-index: 10000;
    }

    .modal__window {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50%;
        left: 50%;
        max-width: 573px;
        height: 276px;
        transform: translate(-50%, -50%);
        padding: 28px;
        border-radius: 40px;
        background-color: var(--bg);
    }

    .modal__close {
        align-self: end;
        flex-shrink: 0;
        margin-bottom: 12px;
        width: 40px;
        height: 40px;
        background-image: url(../assets/img/close.svg);
    }

    .modal__title {
        margin-bottom: 10px;
        font-family: Unbounded;
        font-size: 48px;
        font-weight: 700;
        line-height: 57.6px;
        text-transform: uppercase;
        text-align: center;
    }

    .modal__text {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        text-align: center;
    }


    @media (max-width: 768px) {
        .modal__window {
            padding: 20px;
            width: 100%;
            max-width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .modal__block {
            margin: auto 0;
        }

        .modal__close {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 24px;
            height: 24px;
            background-size: 24px;
        }

        .modal__title {
            margin-bottom: 20px;
            font-size: 26px;
            line-height: 31.2px;
        }

        .modal__text {
            font-size: 16px;
            line-height: 19.2px;
        }
    }

</style>

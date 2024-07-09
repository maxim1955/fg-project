<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog
            v-model="dialog"
            class="q-dialog"
            :maximized="$q.platform.is.mobile?maximizedToggle:false"
        >
            <q-card class="modal-auth">
                <q-card-actions align="right">
                    <q-btn
                        icon="close"
                        flat
                        dense
                        v-close-popup
                        @click="emit('closeModal', false)"
                        class="modal-auth__close"
                    />
                </q-card-actions>
                <q-card-section class="modal-auth__content">
                    <q-card-section
                        class="row items-center justify-center q-pb-none modal-auth__title"
                    >
                        Авторизация
                    </q-card-section>

                    <q-card-section class="modal-auth__login">
                        <label for="login" class="modal-auth__label"
                            >Логин</label
                        >
                        <q-input
                            class="modal-auth__input"
                            placeholder="Введите логин"
                            id="login"
                            rounded
                            outlined
                            v-model="login"
                            :error="loginError !== null"
                            :error-message="loginError"
                        />
                    </q-card-section>

                    <q-card-section class="modal-auth__password">
                        <label for="password" class="modal-auth__label"
                            >Пароль</label
                        >
                        <q-input
                            :type="showPassword ? 'text' : 'password'"
                            class="modal-auth__input"
                            placeholder="Введите пароль"
                            id="password"
                            rounded
                            outlined
                            v-model="password"
                            :error="passwordError !== null"
                            :error-message="passwordError"
                        />
                        <a
                            href="#"
                            class="modal-auth__password-icon"
                            @click.prevent="showPassword = !showPassword"
                        ></a>
                    </q-card-section>

                    <q-card-section class="modal-auth__btn-wrapper">
                        <q-btn
                            unelevated
                            rounded
                            color="primary"
                            label="Войти"
                            class="modal-auth__btn"
                            @click="submitForm"
                        />
                    </q-card-section>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    openModal: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["closeModal"]);

const dialog = computed(() => props.openModal);
const maximizedToggle = ref(true)
const login = ref("");
const password = ref("");
const showPassword = ref(false);
const loginError = ref(null);
const passwordError = ref(null);

function validateForm() {
    let isValid = true;

    if (!login.value) {
        loginError.value = "Пожалуйста, введите логин";
        isValid = false;
    } else {
        loginError.value = null;
    }

    if (!password.value) {
        passwordError.value = "Пожалуйста, введите пароль";
        isValid = false;
    } else {
        passwordError.value = null;
    }

    return isValid;
}

function submitForm() {
    if (validateForm()) {
        console.log("Логин:", login.value);
        console.log("Пароль:", password.value);
    }
}

console.log(props.openModal);
</script>

<style scoped>
.q-card__section--vert {
    padding: 0;
}

.modal-auth__title {
    font-family: "Unbounded";
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    text-align: left;
    padding: 0;
}

.modal-auth__login,
.modal-auth__password,
.modal-auth__btn-wrapper {
    margin-top: 20px;
    width: 480px;
}

.q-dialog__backdrop {
    backdrop-filter: blur(10px) !important;
}

.modal-auth__content {
    margin: 0 80px 80px 80px;
}

label {
    position: relative;
}

.modal-auth__password-icon {
    background: url("../assets/img/password-eye.svg") no-repeat center;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 45px;
    right: 37px;
}

.modal-auth {
    border-radius: 40px;
    background-color: #f2f1ec;
    box-shadow: none;
}

.modal-auth__btn {
    font-family: "Nunito Sans";
    font-size: 24px;
    font-weight: 700;
    line-height: 32.74px;
    text-align: left;
    color: #414143 !important;
    width: 480px;
    background: #c9ff22 !important;
}

.modal-auth__label {
    font-family: "Nunito Sans";
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
}

.modal-auth__btn-wrapper {
    padding-bottom: 0;
}

.modal-auth__close {
    font-size: 1.2em;
    margin-top: 30px;
    margin-right: 30px;
}

@media (max-width: 1920px) {
    .q-dialog__inner--minimized > div {
        max-width: 640px;
    }
}

@media (max-width: 1120px) {
    .q-dialog__inner--minimized{
        padding: 0!important;
    }
    .q-dialog__inner--minimized > div {
        max-width: 462px;
    }
    .modal-auth__title {
        font-size: 26px;
    }
    .modal-auth__login,
    .modal-auth__password,
    .modal-auth__btn-wrapper {
        max-width: 302px;
    }
    .modal-auth__btn {
        max-width: 302px;
    }
}
@media (max-width: 992px) {
    .modal-auth {
        height: 100%;
        min-width: 100%;
        border-radius: 0;
    }
    .modal-auth__login,
    .modal-auth__password,
    .modal-auth__btn-wrapper,
    .modal-auth__btn {
        min-width: 100%;
    }
    .modal-auth__content {
        margin: 0 20px 20px 20px;
    }
    .modal-auth__close {
        font-size: 1em;
        margin-top: 5px;
        margin-right: 5px;
    }
}
</style>

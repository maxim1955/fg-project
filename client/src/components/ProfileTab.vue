<template>
    <div class="profile">
        <h2 class="profile__title"><span>Профиль</span></h2>
        <div class="avatar">
            <button class="btn-reset avatar__btn" @click="openChoiceAvatar()">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white"/>
            <path d="M11 26.1703V28.383C11 28.5466 11.065 28.7036 11.1807 28.8193C11.2964 28.935 11.4534 29 11.617 29H13.8297C13.9931 29 14.1497 28.9352 14.2654 28.8198L24.755 18.3302L21.6698 15.245L11.1802 25.7346C11.0648 25.8503 11 26.0069 11 26.1703ZM24.0689 12.8459L27.1541 15.9311L28.6387 14.4465C28.87 14.2151 29 13.9013 29 13.574C29 13.2468 28.87 12.933 28.6387 12.7015L27.2985 11.3613C27.067 11.13 26.7532 11 26.426 11C26.0987 11 25.7849 11.13 25.5535 11.3613L24.0689 12.8459Z" stroke="#414143" stroke-width="1.5"/>
            </svg>
        </button>
        <img class="avatar__img" src="../assets/img/profile-avatar.png" />
        </div>

        <form class="profile__form form">
            <div>
                <span class="form__text">Фамилия</span>
                <label class="form__label">
                    <input :value="user.surname" class="form__input" type="text">
                </label>
            </div>
            <div>
                <span class="form__text">Имя</span>
                <label class="form__label">
                    <input :value="user.name" class="form__input" type="text">
                </label>
            </div>
            <div>
                <span class="form__text">Отчество</span>
                <label class="form__label">
                    <input :value="user.lastname" class="form__input" type="text">
                </label>
            </div>
            <div>
                <span class="form__text">Класс</span>
                <label class="form__label">
                    <input :value="user.classNumber" class="form__input" type="text">
                </label>
            </div>
        </form>

        <ChoiceAvatarModal @close-choiceAvatarModal="closeChoiceAvatar" :user="this.user" v-show="showChoiceAvatar"></ChoiceAvatarModal>
    </div>
</template>

<script>
import ChoiceAvatarModal from './ChoiceAvatarModal.vue';
export default {
    components: {ChoiceAvatarModal},
    data() {
    return {
        user: {
            name: 'Иван',
            surname: 'Иванов',
            lastname: 'Иванович',
            classNumber: '8 Б',
            gender: 'female',
            avatar: ''
        },

      showChoiceAvatar: false,

    };
  },
  methods: {
    openChoiceAvatar() {
        this.showChoiceAvatar = true;
    },
    closeChoiceAvatar() {
        this.showChoiceAvatar = false;
    },
    getImgUrl(imageNameWithExtension) {
       return new URL(`${imageNameWithExtension}`, import.meta.url).href
    }
  },

  computed: {

  }

}
</script>

<style scoped>
    .content {
        justify-content: start;
    }

    .profile {
        position: relative;
        flex-direction: column;
        align-items: start;
        gap: 60px;
    }


    .profile .form__text {
        display: block;
        margin-bottom: 8px;
        font-size: 20px;
        line-height: 24px;
        color: var(--text);
    }

    .profile__form {
        display: flex;
        max-width: 1176px;
        gap: 40px 20px;
        flex-wrap: wrap;
        width: 100%;
    }

    .avatar {
        position: relative;
    }

    .avatar__btn {
        position: absolute;
        right: 14px;
        bottom: 14px;
    }

    .avatar__img {
        width: 277px;
        aspect-ratio: 1/1;
        border-radius: 28px;
    }

    .profile__title {
        position: relative;
        font-family: Unbounded;
        font-size: 48px;
        font-weight: 700;
        line-height: 57.6px;
        text-transform: uppercase;
    }

    .profile__title span::before {
        content: '';
        position: absolute;
        bottom: -22px;
        width: 100%;
        height: 21px;
        left: 0;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(../assets/img/account-title.svg);
    }

    @media (max-width: 1400px) {
        .profile__form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .profile .form__text {
            font-size: 16px;
            line-height: 19.2px;
        }

        .profile {
            gap: 40px;
        }

        .profile .form__input {
            font-size: 16px;
            line-height: 19.2px;
        }
    }

    @media (max-width: 1200px) {
        .profile__title {
            font-size: 26px;
            line-height: 31.2px;
        }
    }


    @media (max-width: 576px) {
        .avatar__img {
            width: 320px;
            border-radius: 24px;
        }

        .profile__form {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .profile__title {
            font-size: 24px;
            line-height: 28.8px;
        }

    }
</style>

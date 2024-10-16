<template>
    <div class="modal avatars-modal">
        <div class="modal__overlay">
            <div class="modal__window">
                <button class="btn-reset modal__close" @click="$emit('close-choiceAvatarModal')"></button>
                <form @submit="changeAvatar()" class="modal__avatars form">
                    <h2 class="modal__title">Выберите персонажа</h2>
                    <div class="avatars">
                        <label v-for="img in female" :key="img.id" class="avatars__label">
                        <input :value="img.src" v-model="avatar" class="avatars__input" type="radio" name="avatar">
                        <span class="avatars__check"></span>
                        <img class="avatars__img" :src="img.src" alt="">
                    </label>
                    </div>
                    <button type="submit" class="modal__btn btn-reset">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import avatarFemale1 from '../assets/img/female-avatar-1.webp'
import avatarFemale2 from '../assets/img/female-avatar-2.webp'
import avatarFemale3 from '../assets/img/female-avatar-3.webp'
import avatarMale1 from '../assets/img/male-avatar-1.webp'
import avatarMale2 from '../assets/img/male-avatar-2.webp'
import avatarMale3 from '../assets/img/male-avatar-3.webp'
import userStore from "../store/UserStore.js";
export default {
    props: ['user'],
    data() {
        return {
            female: [
                {
                    id: 1,
                    src: avatarFemale1,
                },
                {
                    id: 2,
                    src: avatarFemale2,
                },
                {
                    id: 3,
                    src: avatarFemale3,
                },
            ],
            male: [
                {
                    id: 1,
                    src: avatarMale1,
                },
                {
                    id: 2,
                    src: avatarMale2,
                },
                {
                    id: 3,
                    src: avatarMale3,
                },
            ],
            avatar: null
        }
    },
    computed: {
        user() {
            return userStore().user;
        },
        filteredAvatars() {
            if (this.user.gender == 'female') return this.female
            if (this.user.gender == 'male') return this.male
        }
    },

    methods: {
        async changeAvatar() {
            const res = {
                id: this.user.id,
                avatar: this.avatar
            }
            try {
                const response = await api.post('/api/avatarchange', res);
                console.log(response)
                return response.data;
            } catch (error) {
                console.error('Ошибка при запросе===:', error);
                throw error;
            }
        }
    }
}
</script>

<style scoped>
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .modal__overlay {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
    }

    .modal__window {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 80px 148px;
        width: auto;
        max-width: 100%;
        height: auto;
        background-color: white;
        border-radius: 40px;
        box-shadow: 4px 5px 50px 0px #ECEAE1;

    }

    .modal__close {
        position: absolute;
        top: 28px;
        right: 28px;
    }

    .modal__avatars {
        display: flex;
        flex-direction: column;
        gap: 60px;
        align-items: center;
    }

    .modal__title {
        margin-bottom: 0;
    }

    .avatars {
        display: flex;
        gap: 20px;
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
    }

    .avatars::-webkit-scrollbar {
        width: 0;
    }

    .avatars__label {
        position: relative;
    }

    .avatars__img {
        min-width: 277px;
        border-radius: 40px;
    }

    .avatars__input {
        display: none;
    }

    .avatars__input:checked ~ .avatars__check {
        position: absolute;
        right: 14px;
        bottom: 14px;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url(../assets/img/check-avatar.svg);
    }

    .modal__btn {
        padding: 20px 32px;
        max-width: max-content;
        font-family: Nunito Sans;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        border-radius: 50px;
        background-color: var(--light-green);
    }

    @media (max-width: 1024px) {
        .modal__window {
            padding: 20px;
        }

        .modal__close {
            position: static;
        }

        .modal__avatars {
            gap: 40px;
        }
    }

    @media (max-width: 768px) {
        .modal__window {
            right: 40px;
            left: 40px;
            transform: translateY(-50%);
        }

        .modal__close {
            margin-bottom: 20px;
            width: 40px;
            height: 40px;
            background-size: 40px;
            background-repeat: no-repeat;
        }
    }

    @media (max-width: 576px) {
        .modal__window {
            width: 100%;
            height: 100%;
            border-radius: 0;
            left: 0;
            right: 0;
        }

        .modal__close {
            margin-bottom: 40px;
            width: 24px;
            height: 24px;
            background-size: 24px;
        }

        .modal__title {
            font-size: 24px;
            line-height: 28.8px;
        }

        .modal__btn {
            max-width: 100%;
            font-size: 20px;
            line-height: 27.28px;
        }

        .modal__avatars {
            align-items: normal;
        }
    }
</style>

<template>
    <q-header>
        <header
            class="header"
            ref="header"
            :class="{ 'header-radius': radius }"
        >
            <div class="container">
                <div class="header__container">
                    <router-link :to="{ name: 'main' }" class="header__logo">
                        <picture class="header__picture">
                            <source
                                srcset="../assets/img/logo-360.svg"
                                media="(max-width:768px)"
                            />
                            <source
                                srcset="../assets/img/logo-1024.svg"
                                media="(max-width:1024px)"
                            />

                            <img src="../assets/img/logo.svg" alt="" />
                        </picture>

                        <picture class="header__picture header__picture--mob">
                            <source
                                srcset="../assets/img/logo-menu-360.svg"
                                media="(max-width:768px)"
                            />
                            <img
                                src="../assets/img/logo-menu-1024.svg"
                                alt=""
                            />
                        </picture>
                    </router-link>

                    <div class="header__menu flex">
                        <nav class="header__nav nav">
                            <ul class="nav__list list-reset flex">
                                <li class="nav__item" @click="closeMenu()">
                                    <a href="#advantages" class="nav__link"
                                        >Преимущества</a
                                    >
                                </li>
                                <li class="nav__item" @click="closeMenu()">
                                    <a href="#training" class="nav__link"
                                        >Обучение</a
                                    >
                                </li>
                                <li class="nav__item" @click="closeMenu()">
                                    <a href="#auditorium" class="nav__link"
                                        >Для кого</a
                                    >
                                </li>
                                <li class="nav__item" @click="closeMenu()">
                                    <a href="#partners" class="nav__link"
                                        >Партнеры</a
                                    >
                                </li>
                                <li class="nav__item" @click="closeMenu()">
                                    <a href="#feedback" class="nav__link"
                                        >Обратная связь
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <router-link
                            :to="{ name: 'home' }"
                            class="header__sign sign btn-reset"
                        >
                            <div class="sign__bg">
                                <svg
                                    width="212"
                                    height="58"
                                    viewBox="0 0 212 58"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.5 0.5C12.7599 0.5 0 13.2599 0 29C0 44.7401 12.7599 57.5 28.5 57.5H122.5C133.111 57.5 142.368 51.7011 147.274 43.0996C148.469 41.004 150.588 39.5 153 39.5C155.412 39.5 157.531 41.004 158.726 43.0996C163.632 51.7011 172.889 57.5 183.5 57.5C199.24 57.5 212 44.7401 212 29C212 13.2599 199.24 0.5 183.5 0.5C172.374 0.5 162.738 6.87494 158.044 16.1712C157.065 18.1088 155.171 19.5 153 19.5C150.829 19.5 148.935 18.1088 147.956 16.1712C143.262 6.87493 133.626 0.5 122.5 0.5H28.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span class="sign__text">Войти</span>
                            <span class="sign__img">
                                <svg
                                    width="28"
                                    height="29"
                                    viewBox="0 0 28 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="4.66667"
                                        cy="4.66667"
                                        r="4.66667"
                                        transform="matrix(-1 0 0 1 18.666 4)"
                                        fill="#414143"
                                        stroke="#414143"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M5.83301 20.2565C5.83301 19.2527 6.464 18.3573 7.40928 18.0197C11.6711 16.4977 16.3283 16.4977 20.5901 18.0197C21.5353 18.3573 22.1663 19.2527 22.1663 20.2565V22.11C22.1663 23.3271 21.0884 24.262 19.8835 24.0899L17.8181 23.7948C15.2853 23.433 12.714 23.433 10.1813 23.7948L8.11585 24.0899C6.91099 24.262 5.83301 23.3271 5.83301 22.11V20.2565Z"
                                        fill="#414143"
                                        stroke="#414143"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </span>
                        </router-link>

                         <q-btn @click="modalLogin = !modalLogin">
                            <div class="sign__bg">
                                <svg
                                    width="212"
                                    height="58"
                                    viewBox="0 0 212 58"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.5 0.5C12.7599 0.5 0 13.2599 0 29C0 44.7401 12.7599 57.5 28.5 57.5H122.5C133.111 57.5 142.368 51.7011 147.274 43.0996C148.469 41.004 150.588 39.5 153 39.5C155.412 39.5 157.531 41.004 158.726 43.0996C163.632 51.7011 172.889 57.5 183.5 57.5C199.24 57.5 212 44.7401 212 29C212 13.2599 199.24 0.5 183.5 0.5C172.374 0.5 162.738 6.87494 158.044 16.1712C157.065 18.1088 155.171 19.5 153 19.5C150.829 19.5 148.935 18.1088 147.956 16.1712C143.262 6.87493 133.626 0.5 122.5 0.5H28.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span class="sign__text">Войти</span>
                            <span class="sign__img">
                                <svg
                                    width="28"
                                    height="29"
                                    viewBox="0 0 28 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="4.66667"
                                        cy="4.66667"
                                        r="4.66667"
                                        transform="matrix(-1 0 0 1 18.666 4)"
                                        fill="#414143"
                                        stroke="#414143"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M5.83301 20.2565C5.83301 19.2527 6.464 18.3573 7.40928 18.0197C11.6711 16.4977 16.3283 16.4977 20.5901 18.0197C21.5353 18.3573 22.1663 19.2527 22.1663 20.2565V22.11C22.1663 23.3271 21.0884 24.262 19.8835 24.0899L17.8181 23.7948C15.2853 23.433 12.714 23.433 10.1813 23.7948L8.11585 24.0899C6.91099 24.262 5.83301 23.3271 5.83301 22.11V20.2565Z"
                                        fill="#414143"
                                        stroke="#414143"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </span>
                        </q-btn>
                    </div>

                    <button class="burger btn-reset" @click="toggleMenu()">
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                    </button>
                </div>
            </div>
        </header>
    </q-header>
    <login :openModal="modalLogin" @closeModal="modalLogin = false" />
</template>

<script>
import { ref } from "vue";
import Login from "./login.vue";
export default {
    components: { Login },
    data() {
        return {
            radius: false,
        };
    },
    setup() {
        const modalLogin = ref(false);

        return {
            modalLogin,
        };
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle("open-menu");
            document.querySelector(".header__menu").classList.toggle("open");
        },

        closeMenu() {
            document.body.classList.remove("open-menu");
            document.querySelector(".header__menu").classList.remove("open");
        },
    },

    created() {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= this.$refs.header.clientHeight) {
                this.radius = true;
            } else this.radius = false;
        });

        window.addEventListener("load", () => {
            if (document.documentElement.clientWidth <= 992) {
                console.log(document.documentElement.clientWidth);
            }
        });
    },
};
</script>

<style>
.header-radius {
    border-radius: 0px 0px 60px 60px;
}

.header__picture--mob {
    opacity: 0;
    visibility: hidden;
    display: none;
    transition: opacity 0.3s ease-in-out;
}

.header {
    padding: 20px 0;
    background-color: var(--red);
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo {
    z-index: 4;
}

.nav__list {
    display: flex;
    align-items: center;
    gap: 20px;
}

.header__sign {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 2;
}

.sign__bg {
    position: absolute;
    z-index: -1;
    height: 100%;
}

.sign__text {
    padding: 12px 40px;
    font-weight: 700;
    line-height: 32.74px;
    font-size: 24px;
    color: var(--text);
    transition: color 0.3s ease-in-out;
}

.sign__img {
    display: flex;
    padding: 14px;
}

.nav__link {
    position: relative;
    font-weight: 600;
    line-height: 24px;
}

.nav__link:before {
    content: "";
    position: absolute;
    height: 0.6px;
    width: 100%;
    bottom: -3px;
    background-color: white;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    border-radius: 10px;
}

.nav__link:after {
    content: "";
    position: absolute;
    height: 0.6px;
    left: 50%;
    width: 50%;
    bottom: -8px;
    background-color: white;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    transform: translateX(-50%);
    border-radius: 10px;
}

.nav__link:hover:before {
    opacity: 1;
}

.nav__link:hover:after {
    opacity: 1;
}

.header__sign:hover .sign__text {
    color: var(--red);
}

.sign__img svg path,
.sign__img svg circle {
    transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
}

.sign__bg path {
    transition: fill 0.3s ease-in-out;
}

.header__sign:hover .sign__img svg path,
.header__sign:hover .sign__img svg circle {
    fill: var(--red);
    stroke: var(--red);
}

.header__sign:active .sign__bg path {
    fill: var(--light-green);
}

.header__sign:active .sign__text {
    color: var(--text);
}

.header__sign:active .sign__img svg path,
.header__sign:active .sign__img svg circle {
    fill: var(--text);
    stroke: var(--text);
}

.header__menu {
    align-items: center;
    width: 100%;
}

.header__nav {
    margin: 0 auto;
}

.burger {
    display: none;
}

@media (max-width: 1400px) {
    .nav__link {
        font-size: 16px;
        line-height: 19.2px;
    }

    .sign__text {
        padding: 8px 21px;
        font-size: 20px;
        line-height: 27.28px;
    }

    .sign__img svg {
        width: 18px;
        height: 18px;
    }

    .sign__bg svg {
        width: 145px;
        height: 42px;
    }

    .sign__img {
        padding: 12px;
    }
}

@media (max-width: 992px) {
    .header__menu {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 20px 40px;
        padding-top: 172px;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: var(--bg);
        transform: translateY(-200%);
        transition: transform 0.2s ease-in-out;
    }

    .nav__link::before,
    .nav__link::after {
        content: none;
    }

    .header__menu.open {
        transform: translate(0);
    }

    .nav__list {
        flex-direction: column;
        gap: 28px;
    }

    .burger {
        display: block;
        position: relative;
        width: 30px;
        height: 26px;
        z-index: 3;
    }

    .burger__line {
        position: absolute;
        height: 2px;
        background-color: white;
        border-radius: 2px;
    }

    .burger__line:nth-child(1) {
        top: 0;
        right: 0;
        width: 100%;
    }

    .burger__line:nth-child(3) {
        bottom: 0;
        right: 0;
        width: 100%;
    }

    .burger__line:nth-child(2) {
        top: 50%;
        right: 0;
        width: 55%;
        transform: translateY(-50%);
    }

    header {
        position: relative;
    }

    .nav__link {
        font-size: 24px;
        line-height: 28.8px;
        color: var(--text);
    }

    .header__sign .sign__bg path {
        fill: var(--light-green);
    }

    .sign__img {
        padding: 4px 10px;
    }

    .open-menu .burger {
        height: 30px;
    }

    .open-menu .header__picture {
        opacity: 0;
        visibility: hidden;
        display: none;
        transition: opacity 0.3s ease-in-out;
    }

    .open-menu .header__picture--mob {
        opacity: 1;
        visibility: visible;
        display: block;
    }
}

@media (max-width: 768px) {
    .burger {
        width: 18px;
        height: 14px;
    }

    .open-menu .open-menu {
        height: 18px;
    }

    .header {
        padding: 12px 0;
    }

    .header-radius {
        border-radius: 0px 0px 40px 40px;
    }
}
</style>

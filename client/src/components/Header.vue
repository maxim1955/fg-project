<template>
    <q-header>
        <header class="header">
            <div class="container">
                <div class="header__container">
                    <a href="" class="header__logo">
                        <img src="../assets/img/logo.svg" alt="">
                    </a>
                    <nav class="header__nav nav">
                        <ul class="nav__list list-reset flex">
                            <li class="nav__item">
                                <a href="" class="nav__link">Преимущества</a>
                            </li>
                            <li class="nav__item">
                                <a href="" class="nav__link">Обучение</a>
                            </li>
                            <li class="nav__item">
                                <a href="" class="nav__link">Для кого</a>
                            </li>
                            <li class="nav__item">
                                <a href="" class="nav__link">Партнеры</a>
                            </li>
                            <li class="nav__item">
                                <a href="" class="nav__link">Обратная связь </a>
                            </li>
                        </ul>
                    </nav>

                    <button class="header__sign sign btn-reset">
                        <span class="sign__text">Войти</span>
                        <img class="sign__img" src="../assets/img/User.svg" alt="">
                    </button>
                </div>
            </div>
        </header>
    </q-header>
</template>

<script></script>

<style>

.header {
    padding: 20px 0;
    background-color: var(--red);
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.banner {
    border-radius: 0px 0px 80px 80px;
    background-color: var(--red);
    color: white;
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
    background-image: url(../assets/img/sign.svg);
}



.sign__text {
    padding: 12px 40px;
    font-weight: 700;
    line-height: 32.74px;
    font-size: 24px;
    color: var(--text);


}

.sign__img {
    padding: 14px;
}

.nav__link {
    font-weight: 600;
    line-height: 24px;
}
</style>

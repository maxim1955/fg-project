<template>
    <div class="not-found">
        <h1 class="not-found__title">СТРАНИЦА НЕ НАЙДЕНА</h1>
        <picture class="not-found__picture">
            <source srcset="../assets/img/NotFoundMedium.svg" media="(max-width: 768px)">
            <source srcset="../assets/img/NotFoundSmall.svg" media="(max-width: 360px)">

            <img class="not-found__image" src="../assets/img/NotFoundLarge.svg" alt="" />
        </picture>
        <router-link :to="{name: 'home'}">
            <button class="not-found__button">Вернуться на главную</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    props: {

    }
}
</script>

<style>
.not-found {
    background-color: #F2F1EC;
    background-image: url('../assets/img/NotFoundBackgroundLarge.svg');
    background-repeat: no-repeat;
    background-size: 1340px 730px;
    background-position: top right;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #414143;
    padding: 0 60px;
}

.not-found__title {
    margin-top: 142px;
    margin-bottom: 50px;
    font-family: Unbounded;
    font-weight: 700;
    font-size: 45px;
    line-height: 57.6px;
    text-align: center;
}

.not-found__picture {
    margin-top: 5px;
    max-width: 1210px;
    max-height: 520px;
}

.not-found__image {
    max-width: 100%;
    max-height: 100%;
}

.not-found__button {
    margin-top: 35px;
    max-width: 327px;
    max-height: 73px;
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 23px;
    line-height: 32.74px;
    padding: 14px 24px;
    white-space: nowrap;
    background-color: transparent;
    border: 2px solid #C9FF22;
    border-radius: 50px;
    cursor: pointer;
    color: #414143;
    transition: border 0.3s;
}

.not-found__button:hover {
    border: 2px solid #B4E321;
}

@media screen and (max-width: 1100px) {
    .not-found__title {
        font-size: 26px;
        line-height: 31.2px;
    }

    .not-found__button {
        padding: 14px 20px;
        font-size: 20px;
        line-height: 27.28px;
        max-width: 259px;
    }
}

@media screen and (max-width: 768px) {
    .not-found {
        background-image: url('../assets/img/NotFoundBackgroundMedium.svg');
        background-size: 660px 685px;
        padding: 0 40px;
    }

    .not-found__title {
        margin-top: 152px;
    }

    .not-found__button {
        margin-top: 55px;
    }

}

@media screen and (max-width: 500px) {
    .not-found {
        padding: 0 20px;
    }

    .not-found__button {
        max-width: 320px;
        padding: 20px 32px;
    }
}

@media screen and (max-width: 360px) {
    .not-found {
        background-image: url('../assets/img/NotFoundBackgroundSmall.svg');
        background-size: 358px 406px;
    }

    .not-found__title {
        max-width: 220px;
        font-size: 24px;
        margin-bottom: 37px;
    }

    .not-found__picture {
        margin-top: 0;
    }

    .not-found__button {
        margin-top: 36px;
        width: 100%;
        padding: 18px 32px;
    }

}
</style>

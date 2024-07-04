<template>
    <div class="no-auth">
        <div class="no-auth__text-container">
            <h1 class="no-auth__title">ТЫ НЕ АВТОРИЗОВАН</h1>
            <h2 class="no-auth__text">Пожалуйста, войдите в систему или создайте учётную запись, чтобы получить доступ к
                этой странице.</h2>
            <router-link class="no-auth__router">
                <button class="no-auth__button no-auth__button-auth">Авторизоваться</button>
            </router-link>
            <router-link class="no-auth__router" :to="{ name: 'main' }">
                <button class="no-auth__button no-auth__button-return">Вернуться на главную</button>
            </router-link>
        </div>
        <picture class="no-auth__image-container">
            <source srcset="../assets/img/NoAuthMedium.svg" media="(max-width: 743px)">
            <source srcset="../assets/img/NoAuthSmall.svg" media="(max-width: 360px)">

            <img class="no-auth__image" src="../assets/img/NoAuthLarge.svg" alt="" />
        </picture>
    </div>
    <div class="account__footer">
        <span>&copy;&nbsp;2024&nbsp;МАОУ &laquo;СОШ &#8470;&nbsp;55&nbsp;имени дважды Героя Советского Союза Г.Ф. Сивкова&raquo;</span>
    </div>
</template>

<script>
  export default {
    name: 'NoAuth',
    props: {
    }
  }
</script>

<style scoped>
.no-auth {
    background-color: #F2F1EC;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 47px 71px 0;
    font-family: Nunito Sans;
    color: #414143;
}

.no-auth__text-container {
    display: flex;
    flex-direction: column;
    max-width: 698px;
    margin-left: 3px;
}

.no-auth__title {
    font-family: Unbounded;
    font-weight: 700;
    font-size: 45px;
    line-height: 57.6px;
    white-space: nowrap;
    margin-bottom: 36px;
    text-align: left;
}

.no-auth__text {
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    margin-bottom: 35px;
}

.no-auth__image-container {
    margin-top: 6px;
    margin-right: 4px;
    max-width: 1018px;
    max-height: 515px;
}

.no-auth__image {
    width: 100%;
    height: 100%;
}

.no-auth__router {
    max-width: 401px;
}

.no-auth__button {
    display: inline-block;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 22px;
    line-height: 32.74px;
    color: #414143;
    width: 100%;
    height: 66px;
    border: 2px solid #C9FF22;
    border-radius: 50px;
    padding: 16px 0px;
    background-color: #C9FF22;
    cursor: pointer;
    margin-bottom: 20px;
}

.no-auth__button-auth {
    transition: background-color 0.3s;
}

.no-auth__button-auth:hover {
    background-color: #FFFFFF;
}

.no-auth__button-return {
    background-color: transparent;
    margin-bottom: 0;
    transition: border 0.3s;
}

.no-auth__button-return:hover {
    border: 2px solid #B4E321;
}

@media screen and (max-width: 1400px) {

    .no-auth__title {
        font-size: 26px;
        line-height: 31.2px;
    }

    .no-auth__text {
        font-size: 16px;
        line-height: 19.2px;
    }

    .no-auth__router {
        width: 259px;
    }

    .no-auth__button {
        max-height: 55px;
        font-size: 20px;
        line-height: 27.28px;
        padding: 14px 20px;
        white-space: nowrap;
    }
}

@media screen and (max-width: 1111px) {
    .no-auth {
        flex-direction: column-reverse;
        padding: 50px 40px;
    }

    .no-auth__text-container {
        align-items: center;
    }

    .no-auth__text {
        text-align: center;
    }
}

@media screen and (max-width: 768px) {
    .no-auth {
        justify-content: start;
    }

    .no-auth__image-container {
        margin-top: 135px;
        max-width: 662px;
        max-height: 402px;
    }

    .no-auth__text-container {
        margin-top: 50px;
    }

    .no-auth__title {
        margin-bottom: 20px;
    }

    .no-auth__text {
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 484px) {
    .no-auth {
        padding: 0 10px;
    }

    .no-auth__text-container {
        align-items: start;
        max-width: 320px;
        margin-top: 10px;
    }

    .no-auth__title {
        font-size: 20px;
        line-height: 24px;
    }

    .no-auth__text {
        text-align: justify;
        font-size: 14px;
        line-height: 16.8px;
        margin-bottom: 22px;
    }

    .no-auth__router {
        width: 100%;
    }

    .no-auth__button {
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 32px 20px;
        margin-bottom: 13px;
    }

    .no-auth__image-container {
        margin-top: 70px;
    }
}
</style>

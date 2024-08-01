<template>
    <div class="resources">
        <h2 class="rosources__title"><span>Ресурсы</span></h2>
        <div class="resources__container resource">
            <div class="resource__card">
                <h3 class="resource__title">Книги:</h3>
                <ul class="resource__list">
                    <li class="resource__item">«Я говорю — меня слушают», Нина Зверева</li>
                    <li class="resource__item">«Думай как математик», Барбара Оакли</li>
                    <li class="resource__item">«Магия чисел», Артур Бенджамин и Майкл Шермер</li>
                    <li class="resource__item">«5 минут на размышление», Яков Перельман</li>
                    <li class="resource__item">«Управление мышлением», Эдвард де Боно</li>
                    <li class="resource__item">«Сам себе финансист: Как тратить с умом и копить правильно», Анастасия Тарасова</li>
                    <li class="resource__item">«Это так не работает!», Маркус Бакингем, Эшли Гуделл</li>
                    <li class="resource__item">«Джедайские техники конструктивного общения», Александр Орлов</li>
                    <li class="resource__item">«30 правил настоящего мечтателя», Е. Кац</li>
                    <li class="resource__item">«Жить по принципу 80/20», Р. Кох</li>
                    <li class="resource__item">«Рисовый штурм и еще 21 способ мыслить нестандартно», Майкл Микалко</li>
                    <li class="resource__item">«Взлом креатива». Майкл Микалко</li>
                    <li class="resource__item">Твой первый миллион. Джеймс Маккена, Джанин Глайста, Мэтт Фонтейн</li>
                </ul>
            </div>
            <div class="resource__card">
                <h3 class="resource__title">Платформы:</h3>
                <ul class="resource__list">
                    <li class="resource__item">Учи.ру</li>
                    <li class="resource__item">Российская электронная школа</li>
                    <li class="resource__item">Яндекс.Учебник</li>
                </ul>
            </div>
            <div class="resource__card">
                <h3 class="resource__title">Мобильные приложения:</h3>
                <ul class="resource__list">
                    <li class="resource__item">СберKids</li>
                    <li class="resource__item">Финзнайка</li>
                    <li class="resource__item">Эврика!</li>
                    <li class="resource__item">Math Puzzles - игра для развития математических способностей </li>
                    <li class="resource__item">Khan Academy - образовательное приложение для изучения математики</li>
                    <li class="resource__item">StudyGe</li>
                    <li class="resource__item">Знающий</li>
                    <li class="resource__item">Plants</li>
                    <li class="resource__item">Диктанты. Русский язык</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .resources {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 93px;
    }
    .rosources__title {
        position: relative;
        font-family: Unbounded;
        font-size: 48px;
        font-weight: 700;
        line-height: 57.6px;
        text-transform: uppercase;
    }

    .rosources__title span::before {
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

    .resource__title {
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
    }

    .resource__card {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .resource__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;
    }

    .resource__item {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
    }

    .resources__container {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    @media (max-width: 1200px) {
        .rosources__title {
            font-size: 26px;
            line-height: 31.2px;
        }

        .resources {
            gap: 40px;
        }

        .resource__item {
            font-size: 16px;
            line-height: 19.2px;
        }

        .resource__list {
            gap: 10px;
        }

        .resources__container {
            gap: 40px;
        }

        .resource__title {
            font-size: 16px;
            line-height: 19.2px;
        }

        .resource__card {
            gap: 20px;
        }
    }

    @media (max-width: 576px) {
        .rosources__title {
            font-size: 24px;
            line-height: 28.8px;
        }

        .resource__title {
            font-size: 14px;
            line-height: 16.8px;
        }

        .resource__card {
            gap: 12px;
        }

        .resources {
            gap: 32px;
        }

        .resources__container {
            gap: 20px;
        }

        .resource__item {
            font-size: 14px;
            line-height: 16.8px;
        }
    }
</style>

<template>
  <q-tab-panel name="home">
            <div class="home cards">
                        <div class="card">
                            <h2 class="cards__title">Пройди тест</h2>
                            <p class="cards__text">Определи свой уровень функциональной грамотности.</p>
                            <img class="cards__img" src="../assets/img/home-card-1-360.webp" alt="">
                            <a class="cards__btn" href="">Пройти</a>
                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Индивидуальный балл</h2>
                                <div class="card__amount">{{ this.individualPoints }}</div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Доступный балл для обмена</h2>
                                <div class="card__amount"><span>{{ this.points }}</span></div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Рейтинг среди учеников</h2>
                                <div class="card__amount"><span>{{ this.rating }}</span></div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="flex justify-between">
                                <h2 class="cards__title">Лимит времени</h2>
                                <div class="card__amount"><span>{{ this.limitTime }} Ч</span></div>
                            </div>

                        </div>

            </div>
            </q-tab-panel>
</template>

<script>
export default {
    data() {
            return {
                points: 100,
                individualPoints: 0,
                rating: 0,
                limitTime: 0,
            }
        },
}
</script>

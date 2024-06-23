<template>
    <div v-if="!this.showTasks" class="levels">
        <h2 class="levels__title"><span>Уровни</span></h2>
        <div class="levels__container">
            <div class="rules">
                <button @click="this.rules=!this.rules" class="rules__btn btn-reset" :class="{open: this.rules}">Правила прохождения уровней</button>
                <div class="rules__block" :class="{open: this.rules}">
                    <ul class="rules__list">
                        <li class="rules__item">
                            Каждый уровень содержит различные задания по функциональной грамотности.
                        </li>
                        <li class="rules__item">
                            Сложность заданий увеличивается при повышении уровня.
                        </li>
                        <li class="rules__item">
                            Ты можешь начать проходить задания с любого открытого для тебя уровня.
                        </li>
                        <li class="rules__item">
                            Для перехода к следующему уровню необходимо набрать определенное количество баллов на текущем.
                        </li>
                    </ul>
                    <span class="rules__text">Двигайся только вперед и совершенствуй свои навыки!</span>
                </div>

            </div>



            <div class="levels__list">
                <div v-for="level of levels" :key="level.id">
                    <button class="levels__item btn-reset" :class="{'levels__item--open': this.points >= level.min}" @click="getLevel(level)" :disabled="this.points < level.min">
                        <span>{{ level.name }}</span>
                    </button>
                    <span v-if="this.points < level.minpoints && this.currentLevel == level.id" class="levels__error">Чтобы получить доступ к следующему уровню, вам необходимо набрать минимальное количество баллов</span>
                </div>

            </div>
        </div>

    </div>
    <Tasks @show-level="showLevel()" :levelNum="this.level" v-else></Tasks>
</template>

<script>
import Tasks from './Tasks.vue';
export default {
  props: ['points'],
  components: {Tasks},
  data() {
    return {
        levels: [
            {
                id: 1,
                name: 'Уровень 1',
                min: 0,
                minpoints: 7
            },
            {
                id: 2,
                name: 'Уровень 2',
                min: 8,
                minpoints: 10
            },
            {
                id: 3,
                name: 'Уровень 3',
                min: 11,
                minpoints: 12
            },
            {
                id: 4,
                name: 'Уровень 4',
                min: 13,
                minpoints: 14
            },
            {
                id: 5,
                name: 'Уровень 5',
                min: 15,
                minpoints: 16
            },

        ],
        rules: false,
        currentLevel: 2,
        level: {},
        showTasks: false

    }
  },
  methods: {
    getLevel(level) {
        this.level = level;
        // this.$router.push({name: 'tasks'})
    },
    showLevel() {
        this.showTasks = false;
    }
  }
}
</script>


<style scoped>
    .levels__title {
        margin-bottom: 93px;
        position: relative;
        font-family: Unbounded;
        font-size: 48px;
        font-weight: 700;
        line-height: 57.6px;
        text-transform: uppercase;
    }

    .levels__title span::before {
        content: '';
        position: absolute;
        bottom: -22px;
        width: 100%;
        height: 21px;
        left: 0;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(../assets/img/levels-title.svg);
    }

    .rules__btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px 20px;
        width: 100%;
        box-shadow: none;
        background-color: white;
        border-radius: 22px;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: var(--violet);
        text-align: left;
        transition: border-radius .3s ease-out;
        text-transform: uppercase;

    }

    .rules__btn::after {
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url(../assets/img/arrow-down.svg);
        transition: transform .3s ease-in-out;
    }

    .rules__btn.open::after {
        transform: rotate(180deg);
    }


    .levels__container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .levels__list {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .levels__item {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 80px;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        background-color: white;
        border-radius: 22px;
        text-transform: uppercase;
        overflow: hidden;
    }

    .levels__item:disabled {
        opacity: 1 !important;
    }

    .levels__item span {
        padding: 27px;
    }

    .levels__item::before {
        content: url(../assets/img/level.svg);
        display: inline-block;
        height: 79px;

    }

    .levels__item.levels__item--open::before {
        content: url(../assets/img/level-open.svg);
    }

    .rules {
        position: relative;
    }


    .rules__btn.open {
        border-radius: 22px 22px 0 0;
    }

    .rules__block {
        position: absolute;
        top: calc(100% - 20px);
        width: 100%;
        padding: 20px;
        border-bottom-left-radius: 22px;
        border-bottom-right-radius: 22px;
        background-color: white;
        opacity: 0;
        transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
        visibility: hidden;
    }

    .rules__block.open {
        opacity: 1;
        visibility: visible;
    }

    .rules__item {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .levels__error {
        display: inline-block;
        padding-top: 20px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: var(--red);
    }

    .rules__text {
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        text-transform: uppercase;
    }

    .rules__list {
        margin-bottom: 20px;
        padding-left: 20px;
    }

</style>

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
                <div v-for="level in levels" :key="level.level_id">
                    <button class="levels__item btn-reset" :class="{'levels__item--open': user.sumpoint >= level.minpoints}" @click="getLevelId(level.level_id)">
                       <!-- :disabled="user.sumpoint < level.minpoints" -->
                        <span>{{ level.name }}</span>
                    </button>
                    <span v-if="user.sumpoint < level.minpoints && this.currentLevel == level.level_id && level !== levels[levels.length - 1]" class="levels__error">Чтобы получить доступ к следующему уровню, вам необходимо набрать минимальное количество баллов</span>
                </div>
            </div>
        </div>

    </div>
    <Tasks @show-levels="showLevels()" @show-task="getShowTask" @level-class="getLevelClass" @task-class="getTaskClass" @show-level="showLevel()" @back-levels-parent="backLevels()" :levelNum="this.levelId" v-else></Tasks>
</template>

<script>
import Tasks from './Tasks.vue';
import levelsStore from "../store/LevelsStore.js";
import userStore from "../store/UserStore.js";
export default {
  props: ['points'],
  components: {Tasks},
  data() {
    return {
        // levels: [
        //     {
        //         id: 1,
        //         name: 'Уровень 1',
        //         min: 0,
        //         minpoints: 7
        //     },
        //     {
        //         id: 2,
        //         name: 'Уровень 2',
        //         min: 8,
        //         minpoints: 10
        //     },
        //     {
        //         id: 3,
        //         name: 'Уровень 3',
        //         min: 11,
        //         minpoints: 12
        //     },
        //     {
        //         id: 4,
        //         name: 'Уровень 4',
        //         min: 13,
        //         minpoints: 14
        //     },
        //     {
        //         id: 5,
        //         name: 'Уровень 5',
        //         min: 15,
        //         minpoints: 16
        //     },

        // ],
        rules: false,
        // currentLevel: 2,
        levelId: null,
        showTasks: false,
        points: 30,
        taskClass: null,
        currentLevel: null,
        showTask: false,
        currentTask: null,
        levels: null

    }
  },
  methods: {
    getLevelId(levelId) {
        this.levelId = levelId;
        this.currentLevel = levelId;
        this.showTasks = true;
        console.log(this.levelId)
        levelsStore().updateCurrentLevel(levelId);
    },
    showLevel() {
        this.showTasks = false;
    },
    backLevels() {
        this.showTasks = false;
        this.showTask = false;
    },

    getShowTask(newValue) {
        this.showTask = newValue;
    },

    getTaskClass(newValue) {
        this.currentTask = newValue;
    },

    showLevels() {
        this.showTasks = false;
    },

    async fetchLevels() {
        try {
            await levelsStore().getLevels(); // Ожидаем разрешения промиса
            this.levels = levelsStore().levels; // Получаем данные из хранилища
            console.log(this.levels);
        } catch (error) {
            console.log(error);
        }
    }

  },

  watch: {
    currentLevel(newValue) {
      this.$emit("level-class", newValue);
    },

    currentTask(newValue) {
      this.$emit("task-class", newValue);
    },

    showTask(newValue) {
        this.$emit('show-tasks', newValue)
    },


  },

  computed: {
    user() {
        return userStore().user;
    }
  },

    // ТУТ ПОЛУЧАЕМ УРОВНИ

    mounted() {
        this.fetchLevels();
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

    .levels__title span {
        position: relative;
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
        border: none;
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
        cursor: pointer;

    }

    .rules__btn::after {
        content: '';
        flex-shrink: 0;
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

    @media (max-width: 1200px) {
        .levels__title {
            margin-bottom: 74px;
            font-size: 26px;
            line-height: 31.2px;
        }

        .rules__btn {
            padding: 20px;
            font-size: 16px;
            font-weight: 700;
            line-height: 19.2px;
            border-radius: 16px;
        }

        .rules__btn::after {
            width: 32px;
            height: 32px;
            background-size: 32px;
        }

        .rules__item {
            font-size: 16px;
            line-height: 19.2px;
        }

        .rules__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .levels__item span {
            padding: 16px 20px;
            font-size: 16px;
            line-height: 19.2px;
        }

        .levels__item {
            min-height: 52px;
            border-radius: 16px;
        }

        .levels__item.levels__item--open::before {
            height: 52px;
            content: url(../assets/img/level-open-1024.svg);
        }

        .levels__error {
            padding-top: 12px;
            font-size: 16px;
            line-height: 19.2px;
        }

        .levels__list {
            gap: 20px;
        }

        .levels__item::before {
            height: 52px;
            content: url(../assets/img/level-1024.svg);
        }

        .levels__container {
            gap: 20px;
        }
    }

    @media (max-width: 576px) {
        .levels__title {
            margin-bottom: 60px;
            font-size: 24px;
            line-height: 28.8px;
        }

        .rules__btn {
            font-size: 14px;
            line-height: 16.8px;
        }

        .levels__item span {
            padding: 20px 28px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .levels__item {
            min-height: 57px;
        }

        .levels__item.levels__item--open::before {
            height: 57px;
            content: url(../assets/img/level-open-360.svg);
        }

        .levels__item::before {
            height: 57px;
            content: url(../assets/img/level-360.svg);
        }

        .levels__error {
            padding-top: 8px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .rules__item {
            font-size: 14px;
            line-height: 16.8px;
        }

        .rules__text {
            font-size: 12px;
            line-height: 14.4px;
        }
    }

</style>

<template>
    <div class="boneses">
        <p class="bonuses__text">Выбери вознаграждение из доступных тебе учебных курсов.</p>
        <ul class="bonuses__container">
            <li v-for="bonus in bonuses" :key="bonus.id" class="bonuses__item bonus list-reset">
                <div class="bonus__block">
                    <div>
                        <h2 class="bonus__title">{{ bonus.name }}</h2>
                        <p class="bonus__text">{{ bonus.text }}</p>
                    </div>
                    <img class="bonus__img" :src="getImgUrl(bonus.url)" alt="">
                </div>
                <div class="bonus__points">{{ bonus.bonuspoints }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const getImgUrl = (imageNameWithExtension)=> new URL(`${imageNameWithExtension}`, import.meta.url).href
const bonuses = [
                {
                    id: 1,
                    name: 'Название курса',
                    text: 'Это означает, что ты сможешь легко и чётко выражать свои мысли, понимать и смело взаимодействовать с другими.',
                    url: '../assets/img/bonus.webp',
                    bonuspoints: 24
                },
                {
                    id: 2,
                    name: 'Название курса',
                    text: 'Это означает, что ты сможешь легко и чётко выражать свои мысли, понимать и смело взаимодействовать с другими.',
                    url: '../assets/img/bonus.webp',
                    bonuspoints: 24
                },
                {
                    id: 3,
                    name: 'Название курса',
                    text: 'Это означает, что ты сможешь легко и чётко выражать свои мысли, понимать и смело взаимодействовать с другими.',
                    url: '../assets/img/bonus.webp',
                    bonuspoints: 24
                },
                {
                    id: 4,
                    name: 'Название курса',
                    text: 'Это означает, что ты сможешь легко и чётко выражать свои мысли, понимать и смело взаимодействовать с другими.',
                    url: '../assets/img/bonus.webp',
                    bonuspoints: 24
                },
                {
                    id: 5,
                    name: 'Название курса',
                    text: 'Это означает, что ты сможешь легко и чётко выражать свои мысли, понимать и смело взаимодействовать с другими.',
                    url: '../assets/img/bonus.webp',
                    bonuspoints: 24
                },
                {
                    id: 6,
                    name: 'Название курса',
                    text: 'Это означает, что ты сможешь легко и чётко выражать свои мысли, понимать и смело взаимодействовать с другими.',
                    url: '../assets/img/bonus.webp',
                    bonuspoints: 24
                },

            ]


</script>

<style scoped>
    .bonus__block {
        display: flex;
        gap: 40px;
        align-items: start;
        margin-bottom: 20px;
    }

    .bonuses__container {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        gap: 20px;
        grid-auto-flow: column;
    }

    .bonuses__text {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .bonuses__item  {
        padding: 28px;
        border-radius: 32px;
    }

    .bonus__title {
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: 700;
        line-height: 28.8px;
    }

    .bonus__text {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .bonus__points {
        padding-left: 36px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        background-image: url(../assets/img/points-min.svg);
        background-size: 28px;
        background-position: left center;
        background-repeat: no-repeat;
    }

    .bonuses__item:nth-child(odd) {
        background-color: white;
    }

    .bonuses__item:nth-child(even) {
        background-color: var(--violet);
        color: white;
    }

    .bonuses__item:nth-child(even) .bonus__points {
        background-image: url(../assets/img/points-min-green.svg);
    }

    .bonus__img {
        width: 136px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    @media (max-width: 1400px) {
        .bonus__block {
            flex-wrap: wrap;
        }


    }

    @media (max-width: 1200px) {
        .bonuses__container {
            grid-template-columns: 1fr;
            grid-auto-flow: row;
        }

        .bonus__block {
            flex-wrap: nowrap;
        }

        .bonuses__text {
            font-size: 16px;
            line-height: 19.2px;
        }

        .bonus__title {
            font-size: 20px;
            line-height: 27.28px;
        }

        .bonus__text {
            font-size: 16px;
            line-height: 19.2px;
        }

        .bonus__points {
            padding-top: 9px;
            font-size: 16px;
            line-height: 19.2px;
        }

        .bonuses__item {
            border-radius: 28px;
        }
    }

    @media (max-width: 576px) {
        .bonuses__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .bonuses__item {
            padding: 20px 24px;
            border-radius: 32px;
        }

        .bonus__title {
            margin-bottom: 12px;
            font-size: 16px;
            line-height: 19.2px;
        }

        .bonus__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .bonus__block {
            margin-bottom: 12px;
            gap: 0;
        }

        .bonus__points {
            padding-left: 24px;
            padding-top: 3px;
            font-size: 14px;
            line-height: 16.8px;
            background-size: 20px;
        }

        .bonus__img {
            width: 100px;
        }
    }
</style>

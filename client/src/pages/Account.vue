<template>
  <div class="">
    <div class="account row justify-between no-wrap">
        <div class="menu" :class="{collapse: this.collapse}">
            <button class="menu__collapse btn-reset" @click="collapseMenu()"></button>
            <router-link :to="{name: 'home'}" class="menu__logo" href=""><img src="../assets/img/account-logo.svg" alt="Логотип"></router-link>
            <q-tabs
            v-model="tab"
            vertical
            class=""
            >
          <q-tab class="menu__item menu__item--home" name="home" label="Главная" />
          <q-tab class="menu__item menu__item--levels" name="levels" label="Уровни" />
          <q-tab class="menu__item menu__item--bonuses" name="bonuses" label="Бонусы" />
          <q-tab class="menu__item menu__item--resources" name="resources" label="Ресурсы" />
          <q-tab class="menu__item menu__item--chat" name="chat" label="Чат" />
          <!-- <q-tab class="menu__item menu__item--chat" name="profile" label="Профиль" /> -->
        </q-tabs>
        </div>

        <div class="content flex justify-end">
            <div>
                <div class="account__header">
                    <a class="account__logo" href=""><img src="../assets/img/account-logo-1024.svg" alt="Логотип"></a>
                    <div class="points">
                        <div class="points__amount">{{ this.points }}</div>
                    </div>
                    <div class="profile">

                        <q-btn class="profile__btn">
                            <img class="profile__img" src="../assets/img/avatar.webp" alt="">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" fill="#C9FF22" stroke="#C9FF22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.1162 17.9004L19.9995 23.7671L25.8829 17.9004" stroke="#414143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <q-menu class="profile__menu" :offset="[0, 12]">
                                <q-list style="min-width: 100px">
                                    <q-item clickable v-close-popup>
                                    <q-item-section class="profile__item profile__item--profile">
                                        <router-link :to="{name: 'profile'}">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1322 9.05768C10.0488 9.04935 9.94883 9.04935 9.85716 9.05768C7.87383 8.99102 6.29883 7.36602 6.29883 5.36602C6.29883 3.32435 7.94883 1.66602 9.99883 1.66602C12.0405 1.66602 13.6988 3.32435 13.6988 5.36602C13.6905 7.36602 12.1155 8.99102 10.1322 9.05768Z" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.96563 12.134C3.94896 13.484 3.94896 15.684 5.96563 17.0257C8.25729 18.559 12.0156 18.559 14.3073 17.0257C16.324 15.6757 16.324 13.4757 14.3073 12.134C12.024 10.609 8.26562 10.609 5.96563 12.134Z" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Профиль
                                        </router-link>


                                    </q-item-section>
                                    </q-item>
                                    <q-item clickable v-close-popup>
                                    <q-item-section class="profile__item profile__item--chat">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.167 17.0827H5.83366C3.33366 17.0827 1.66699 15.8327 1.66699 12.916V7.08268C1.66699 4.16602 3.33366 2.91602 5.83366 2.91602H14.167C16.667 2.91602 18.3337 4.16602 18.3337 7.08268V12.916C18.3337 15.8327 16.667 17.0827 14.167 17.0827Z" stroke="#414143" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.1663 7.5L11.558 9.58333C10.6997 10.2667 9.29134 10.2667 8.433 9.58333L5.83301 7.5" stroke="#414143" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Чат</q-item-section>
                                    </q-item>
                                    <q-item clickable v-close-popup>
                                    <q-item-section class="profile__item profile__item--exit">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.41699 6.29922C7.67533 3.29922 9.21699 2.07422 12.592 2.07422H12.7003C16.4253 2.07422 17.917 3.56589 17.917 7.29089V12.7242C17.917 16.4492 16.4253 17.9409 12.7003 17.9409H12.592C9.24199 17.9409 7.70033 16.7326 7.42533 13.7826" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.499 10H3.01562" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.87467 7.20898L2.08301 10.0007L4.87467 12.7923" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Выход</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-btn>
                    </div>
                </div>
            <div class="account__main">
                <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
                >
            <q-tab-panel name="home">
                <HomeTab></HomeTab>
            </q-tab-panel>

          <q-tab-panel name="levels">
            <div class="text-h4 q-mb-md">Alarms</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="bonuses">
            <BonusesTab></BonusesTab>
          </q-tab-panel>

          <q-tab-panel name="resources">
            <ResourcesTab></ResourcesTab>
          </q-tab-panel>

          <q-tab-panel name="chat">
            <ChatTab></ChatTab>
          </q-tab-panel>

            </q-tab-panels>
            </div>
            <div class="account__footer">
              <span>&copy;&nbsp;2024&nbsp;МАОУ &laquo;СОШ &#8470;&nbsp;55&nbsp;имени дважды Героя Советского Союза Г.Ф. Сивкова&raquo;</span>
            </div>

            </div>

        </div>

    </div>

  </div>
</template>

<script>
    import { ref } from 'vue';
    import HomeTab from '../components/HomeTab.vue';
    import BonusesTab from '../components/BonusesTab.vue';
    import ResourcesTab from '../components/ResourcesTab.vue';
    import ChatTab from '../components/ChatTab.vue';
    export default {
        components: {HomeTab, BonusesTab, ResourcesTab, ChatTab},
        data() {
            return {
                points: 100,
                individualPoints: 0,
                rating: 0,
                limitTime: 0,
                collapse: false,
            }
        },
        setup () {
            return {
            tab: ref('home'),
            splitterModel: ref(20)
            }
        },

        methods: {
            collapseMenu() {
                this.collapse = !this.collapse;
            }
        }
    }
</script>

<style>

    .cards__img {
        display: none;
    }

    .account__logo {
        display: none;
    }

    .account {
        height: 100vh;
        height: 100dvh;
        overflow: hidden;
        background-image: url(../assets/img/account-bg.webp);
        background-position: top right;
        background-repeat: no-repeat;
    }

    .q-splitter__panel {
        width: 357px;
    }


    .q-tab--active .q-tab__indicator {
        display: none;
    }


    .menu {
        position: relative;
        padding: 40px;
        width: 357px;
        height: 100vh;
        height: 100dvh;
        z-index: 10;
        border-radius: 0px 40px 40px 0px;
        background-color: var(--red);
        transition: width .3s ease-in-out;
    }

    .content {
        padding: 0 80px;
        padding-left: 168px;
        overflow-y: auto;
        width: 100%;
    }

    .menu__logo {
        display: block;
        margin-bottom: 140px;
    }

    .q-tabs--vertical .q-tab {
        padding: 0;
        padding: 12px 20px;
        justify-content: start;
        min-height: auto;
        border-radius: 50px;

    }

    .menu__item .q-tab__content {
        padding-left: 60px;
        padding-top: 8px;
        padding-bottom: 8px;
        min-height: 40px;
        background-position: left;
        background-repeat: no-repeat;
    }

    .menu__item--home .q-tab__content {
        background-image: url(../assets/img/home.svg);
    }

    .menu__item--levels .q-tab__content {
        background-image: url(../assets/img/levels.svg);
    }

    .menu__item--bonuses .q-tab__content {
        background-image: url(../assets/img/bonuses.svg);
    }

    .menu__item--resources .q-tab__content {
        background-image: url(../assets/img/resources.svg);
    }

    .menu__item--chat .q-tab__content {
        background-image: url(../assets/img/chat.svg);
    }

    body.desktop .q-focusable:focus > .q-focus-helper, body.desktop .q-manual-focusable--focused > .q-focus-helper {
        opacity: 0;
    }

    body .q-ripple {
        opacity: 0;
    }

    body .q-tabs--vertical .q-tab:hover .q-focus-helper {
        background-color: transparent;
        opacity: 0;
    }

    .q-tabs--vertical .q-tab--active {
        background-color: rgba(255, 255, 255, 0.32);
    }

    .q-tabs--vertical .q-tab:not(:last-child) {
        margin-bottom: 40px;
    }

    .q-tab__content {
        padding: 0;
    }

    .q-tab__label {
        font-family: Nunito Sans;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: white;
        text-transform: none;
    }

    .profile__btn {
        padding: 0;
    }

    .profile__btn .q-btn__content {
        gap: 8px;
    }

    .profile__btn.q-btn:before,
    .profile__btn.q-btn:hover,
    .q-btn--actionable.q-btn--standard:active:before, .q-btn--actionable.q-btn--standard.q-btn--active:before,
    .q-btn--actionable.q-btn--standard:before {
        box-shadow: none;
    }

    body.desktop .q-focusable:focus > .q-focus-helper, body.desktop .q-manual-focusable--focused > .q-focus-helper, body.desktop .q-hoverable:hover > .q-focus-helper {
        background: none;
        opacity: 0;
    }

    .q-tabs--vertical.q-tabs--not-scrollable .q-tabs__content {
        min-width: 277px;
    }

    .account__header {
        display: flex;
        padding: 28px 0;
        gap: 40px;
        justify-content: end;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .points__amount {
        padding: 20px 40px;
        border-radius: 40px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        background-color: white;
    }

    .points {
        display: flex;
        align-items: center;
        padding-left: 60px;
        background-image: url(../assets/img/points.svg);
        background-position: left center;
        background-repeat: no-repeat;
    }

    .profile__img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
    }

    .q-tab-panels {
        background-color: transparent;
    }

    .cards__title {
        margin-bottom: 20px;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
    }

    .card {
        padding: 28px;
        padding-left: 40px;
        border-radius: 32px;
        background-color: white;
    }

    .home.cards {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(3, auto);
        gap: 20px;
    }

    .home.cards .card {
        background-repeat: no-repeat;
        min-height: 228px;
    }

    .home.cards .card:nth-child(1) {
        grid-column: 9 span;
        background-image: url(../assets/img/home-card-1.webp);
        background-position: calc(100% - 40px) center;
    }

    .home.cards .card:nth-child(2) {
        grid-column: 5 span;
        background-color: var(--light-green);
        background-image: url(../assets/img/home-card-2.svg);
        background-position: left bottom;
    }

    .home.cards .card:nth-child(3) {
        grid-column: 4 span;
        background-image: url(../assets/img/home-card-3.svg);
        background-position: left top;
    }

    .home.cards .card:nth-child(4) {
        grid-column: 5 span;
        background-image: url(../assets/img/home-card-4.svg);
        background-position: bottom;
    }

    .home.cards .card:nth-child(5) {
        grid-column: 4 span;
        background-image: url(../assets/img/home-card-5.svg);
        background-position: bottom;
    }

    .q-tab-panel {
        padding: 0;
        padding-top: 13px;
        overflow: hidden;
    }

    .cards__text {
        margin-bottom: 47px;
        max-width: 50%;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .cards__btn {
        display: inline-block;
        padding: 20px 32px;
        border-radius: 50px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        background-color: var(--light-green);
    }

    .card__amount {
        padding: 20px 40px;
        min-width: 166px;
        border-radius: 40px;
        font-family: Unbounded;
        font-size: 36px;
        font-weight: 700;
        line-height: 43.2px;
        color: var(--violet);
        text-align: center;
    }

    .home.cards .card:nth-child(2) .card__amount,
    .home.cards .card:nth-child(4) .card__amount,
    .home.cards .card:nth-child(5) .card__amount {
        background-color: var(--bg);
    }

    .home.cards .card:nth-child(3) .card__amount {
        background-color: var(--light-green);
    }

    .home.cards .card:nth-child(3) .card__amount span {
        padding-left: 41px;
        background-image: url(../assets/img/points-min.svg);
        background-position: left;
        background-repeat: no-repeat;
    }

    .home.cards .card:nth-child(3) .cards__title {
        max-width: 290px;
    }


    .content > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* width: 1315px; */
        transition: width .3s ease-in-out;
    }

    .profile__menu {
        right: 0;
        padding: 12px;
        left: auto;
        max-width: 140px !important;
        border-radius: 20px;
        box-shadow: 4px 5px 50px 0px #ECEAE1;

    }

    .profile__item {
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
        background-position: left center;
        background-repeat: no-repeat;
        transition: all .3s ease-in-out;

    }


    .profile__menu .q-item {
        padding: 8px;
        min-height: auto;
        border-radius: 12px;
        transition: all .3s ease-in-out;
    }

    .profile__menu .q-item:hover {
        background-color: var(--red);
    }

    .profile__menu .q-item:hover .profile__item {
        color: white;
    }

    .profile__menu .q-item .profile__item path {
        transition: all .3s ease-in-out;
    }

    .profile__menu .q-item:hover .profile__item path {
        stroke: white;
    }

    .account__main {
        margin-bottom: 97px;
    }

    .account__footer {
        margin-top: auto;
        padding: 28px 0;
        text-align: right;
    }

    .account__footer span {
        display: inline-block;
        max-width: 425px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .menu__collapse {
        position: absolute;
        right: -20px;
        top: 17%;
        width: 40px;
        height: 40px;
        background-image: url(../assets/img/collapse.svg);
        background-repeat: no-repeat;
    }

    .menu.collapse {
        width: 190px;
    }

    .menu.collapse .q-tab__label {
        display: none;
    }

    .menu.collapse ~ .content > div {
        width: 1463px;
    }

    .menu.collapse .q-tab__content {
        padding-left: 40px;

    }

    .menu.collapse .q-tab {
        align-self: center;
        max-width: max-content;
    }

    .menu.collapse .q-tabs--vertical .q-tabs__content {
        display: flex !important;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }

    .menu.collapse .q-tabs--vertical.q-tabs--not-scrollable .q-tabs__content {
        min-width: auto;
    }

    @media (max-width: 1400px) {
        .content {
            padding-left: 80px;
        }
    }

    @media (max-width: 1024px) {
        .menu {
            padding: 12px 52px;
            position: fixed;
            width: 100%;
            bottom: 0;
            height: auto;
            border-radius: 28px 28px 0px 0px;
        }

        .q-tabs--vertical .q-tabs__content {
            display: flex !important;
        }

        .menu__item .q-tab__content {
            padding: 0;
            padding-top: 36px;
            background-position: top center;
            background-size: 32px;
        }

        .q-tab__label {
            font-size: 14px;
            font-weight: 600;
            line-height: 16.8px;
        }

        .menu__logo {
            display: none;
        }

        .menu__collapse {
            display: none;
        }

        .q-tabs--vertical .q-tab {
            justify-content: center;
            border-radius: 16px;
        }

        .q-tabs--vertical .q-tab:not(:last-child) {
            margin: 0;
        }

        .account__logo {
            display: block;
            margin-right: auto;
        }

        .points__amount {
            padding: 6px 12px;
            font-size: 14px;
            line-height: 19.1px;
        }

        .points {
            padding-left: 28px;
            background-size: 28px;
        }

        .profile__img {
            width: 40px;
            height: 40px;
        }

        .account__header {
            padding: 20px 0;
            gap: 12px;
        }

        .profile__btn svg {
            width: 28px;
            height: 28px;
        }

        .profile__item {
            font-size: 14px;
            line-height: 16.8px;
        }

        .content {
            padding: 0 40px;
        }

        .cards__title {
            margin-bottom: 16px;
            font-size: 16px;
            line-height: 19.2px;
        }

        .cards__text {
            margin-bottom: 60px;
            font-size: 16px;
            line-height: 19.2px;
        }

        .cards__btn {
            font-size: 20px;
            line-height: 27.28px;
        }

        .home.cards .card {
            padding: 20px 16px 36px 24px;
        }

        .home.cards .card .flex {
            flex-direction: column;
        }

        .card__amount {
            align-self: flex-end;
            padding: 17px 32px;
            min-width: 121px;
            font-size: 24px;
            line-height: 28.8px;
        }

        .home.cards {
            grid-template-columns: repeat(2, 1fr);
        }

        .home.cards .card:nth-child(1) {
            grid-column: 2 span;
            background-image: url(../assets/img/home-card-1-1024.webp);
            background-position: calc(100% - 18px) center;
        }

        .home.cards .card:nth-child(2) {
            grid-column: 1;
            grid-row: 2;
        }

        .home.cards .card:nth-child(3) {
            grid-column: 2;
            grid-row: 2;
        }

        .home.cards .card:nth-child(4) {
            grid-column: 1;
            grid-row: 3;
        }

        .home.cards .card:nth-child(5) {
            grid-column: 2;
            grid-row: 3;
        }

        .home.cards .card:nth-child(2) .cards__title {
            max-width: 219px;
        }

        .home.cards .card:nth-child(4) .cards__title {
            max-width: 188px;
        }

        .account__footer {
            padding: 20px 0;
        }

        .account__main {
            margin-bottom: 110px;
        }

        .content > div {
            padding-bottom: 100px;
        }

        .home.cards .card:nth-child(1) .cards__text {
            max-width: 38%;
        }

        .account__footer span {
            max-width: 350px;
            font-size: 12px;
            line-height: 14.4px;
        }



        .q-tab-panel {
            padding-top: 40px;
        }

        .account {
            background-image: url(../assets/img/account-bg-1024.webp);
        }


    }

    @media (max-width: 768px) {
        .home.cards .card:nth-child(2) {
            background-image: url(../assets/img/home-card-2-1024.svg);
            background-size: cover;
        }

        .home.cards .card:nth-child(3) {
            background-image: url(../assets/img/home-card-3-1024.svg);
            background-size: contain;
        }

        .home.cards .card:nth-child(4) {
            background-image: url(../assets/img/home-card-4-1024.svg);
            background-size: contain;
        }

        .home.cards .card:nth-child(5) {
            background-image: url(../assets/img/home-card-5-1024.svg);
            background-size: contain;
        }
    }

    @media (max-width: 576px) {
        .profile__btn svg {
            display: none;
        }

        .content {
            padding: 0 20px;
        }

        .account__header {
            padding: 12px 0;
        }

        .q-tab-panel {
            padding-top: 28px;
        }

        .cards__title {
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .home.cards .card {
            padding: 20px 24px;
            min-height: 178px;
        }

        .cards__text {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .home.cards {
            grid-template-columns: 1fr;
        }

        .home.cards .card:nth-child(1) {
            grid-column: 1;
            background-image: none
        }

        .home.cards .card:nth-child(1) .cards__text {
            max-width: 272px;
        }

        .cards__img {
            margin-bottom: 20px;
            display: block;
            width: 100%;
        }

        .cards__btn {
            width: 100%;
            text-align: center;
        }

        .home.cards .card:nth-child(2) {
            grid-column: 1;
            grid-row: 2;
            background-image: url(../assets/img/home-card-2-360.svg);
            background-size: contain;
        }

        .home.cards .card:nth-child(3) {
            grid-column: 1;
            grid-row: 3;
            background-image: url(../assets/img/home-card-3-360.svg);
        }

        .home.cards .card:nth-child(4) {
            grid-column: 1;
            grid-row: 4;
            background-image: url(../assets/img/home-card-4-360.svg);
        }

        .home.cards .card:nth-child(5) {
            grid-column: 1;
            grid-row: 5;
            background-image: url(../assets/img/home-card-5-360.svg);
        }

        .account__footer {
            padding: 12px 0;
        }

        .account__main {
            margin-bottom: 28px;
        }

        .menu {
            padding: 4px 20px;
        }

        .q-tab__label {
            font-size: 10px;
            line-height: 12px;
        }

        .q-tabs--vertical .q-tab {
            padding: 4px;
        }

        .menu__item .q-tab__content {
            padding-top: 28px;
            background-size: 24px;
        }
    }

    @media (max-width: 360px) {
        .account {
            background-image: url(../assets/img/account-bg-360.webp);
        }
    }


</style>

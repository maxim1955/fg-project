<template>
    <div class="">
      <div class="account row justify-between no-wrap">
          <div class="menu" :class="{collapse: this.collapse}">
              <button class="menu__collapse btn-reset" @click="collapseMenu()"></button>
              <router-link :to="{name: 'home'}" class="menu__logo" href=""><img src="../assets/img/account-logo.svg" alt="Логотип"></router-link>
              <router-link :to="{name: 'account'}">
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
                </q-tabs>
              </router-link>

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
                                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.1322 9.05768C10.0488 9.04935 9.94883 9.04935 9.85716 9.05768C7.87383 8.99102 6.29883 7.36602 6.29883 5.36602C6.29883 3.32435 7.94883 1.66602 9.99883 1.66602C12.0405 1.66602 13.6988 3.32435 13.6988 5.36602C13.6905 7.36602 12.1155 8.99102 10.1322 9.05768Z" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M5.96563 12.134C3.94896 13.484 3.94896 15.684 5.96563 17.0257C8.25729 18.559 12.0156 18.559 14.3073 17.0257C16.324 15.6757 16.324 13.4757 14.3073 12.134C12.024 10.609 8.26562 10.609 5.96563 12.134Z" stroke="#414143" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>

                                          Профиль

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
                    
                    <q-tab-panel name="profile">
                        <ProfileTab></ProfileTab>
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
    import { ref } from 'vue'
    import HomeTab from '../components/HomeTab.vue'
    import ProfileTab from '../components/ProfileTab.vue'
      export default {
          components: {HomeTab, ProfileTab},
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
              tab: ref('profile'),
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
  @media (max-width: 576px) {
    .content > div {
        padding-bottom: 56px;
    }
  }


  </style>

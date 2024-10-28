<template>
    <div class="banner">
            <Header></Header>
            <section class="hero">
                <div class="container">
                    <div class="hero__container">
                        <div class="hero__left">
                            <h1 class="hero__title"><span class="hero__title--icon">Быть функционально</span> грамотным — <br><span class="hero__title--bold">быть
                                    успешным</span> </h1>
                        </div>
                        <div class="hero__right">
                            <p class="hero__desc">Учись, играй и познавай мир вместе с нами. <br> Это не скучно, проверь сам.</p>
                            <picture>
                                <source srcset="../assets/img/hero-img-360.svg" media="(max-width: 576px)">
                                <source srcset="../assets/img/hero-img-1024.svg" media="(max-width: 1400px)">
                                <img class="img-animation" src="../assets/img/hero-img.svg" alt="">
                            </picture>

                        </div>
                    </div>
                    <img class="star star-1" src="../assets/img/star-1.svg" alt="">
                    <img class="star star-2" src="../assets/img/star-2.svg" alt="">
                    <img class="star star-3" src="../assets/img/star-3.svg" alt="">
                    <picture>
                        <source srcset="../assets/img/hero-360.webp" media="(max-width:576px)">
                        <source srcset="../assets/img/hero-1024.webp" media="(max-width:1024px)">
                        <img src="../assets/img/hero.webp" alt="">
                    </picture>

                </div>
            </section>
        </div>


        <q-page>
        <section :style="{ 'scroll-margin-top': this.headerHeight + 'px' }" id="advantages" class="advantages section">
            <div class="container">
                <h2 class="section__title advantages__title"><span>Быть функционально-грамотным — это</span></h2>
                <div class="advantages__container">
                    <div class="advantages__card advantages__card--one">
                        <div class="advantages__box">
                            <div>
                            <h3 class="advantages__subtitle section__subtitle">Суперспособность в&nbsp;общении</h3>
                            <p class="advantages__desc section__desc">Это означает, что ты&nbsp;сможешь легко и&nbsp;чётко выражать
свои мысли, понимать и&nbsp;смело взаимодействовать с&nbsp;другими, что сделает тебя героем в&nbsp;общении.
                            </p>
                        </div>
                        <img src="../assets/img/advantages-11.webp" alt="">
                        </div>

                    </div>
                    <div class="advantages__card advantages__card--two">
                        <h3 class="advantages__subtitle section__subtitle">Супер планирование&nbsp;&mdash; путь к&nbsp;целям</h3>
                        <p class="advantages__desc section__desc">Ты&nbsp;будешь правильно планировать свои дела и&nbsp;время,
а&nbsp;главное&nbsp;&mdash; всегда знать, что точно можешь сделать для достижения своих целей.</p>
                    </div>
                    <div class="advantages__card advantages__card--three">
                        <picture>
                            <!-- <source srcset="../assets/img/advantages-3-360.webp" media="(max-width: 768px)"> -->
                            <img src="../assets/img/advantages-3.webp" alt="">
                        </picture>
                    </div>
                    <div class="advantages__card advantages__card--four">
                        <h3 class="advantages__subtitle section__subtitle">Это супер важно не&nbsp;только в&nbsp;школе, но&nbsp;и&nbsp;в&nbsp;жизни</h3>
                        <p class="advantages__desc section__desc">Ты&nbsp;будешь лучше учиться, находить интересные факты
в&nbsp;книгах. Кроме того, сможешь получить хорошую работу. А&nbsp;это ключ к&nbsp;новым возможностям.</p>
                    </div>
                </div>
            </div>
        </section>

        <section :style="{ 'scroll-margin-top': this.headerHeight + 'px' }" id="training" class="training section">
            <div class="container">
                <h2 class="section__title training__title"><span>Обучение с ФГ_Рулит — это</span></h2>
                <div class="training__container">
                    <div class="training__card training__card--one">
                        <picture>
                            <source srcset="../assets/img/training-icon-1024.svg" media="(max-width: 1400px)">
                            <img class="img-animation" src="../assets/img/training-icon.svg" alt="">
                        </picture>

                        <p class="training__desc section__desc">В личном кабинете ты узнаешь свои баллы и место в списке
                            лучших в классе,
                            выберешь себе красивого персонажа из нескольких вариантов, обменяешь бонусные баллы
                            на крутые призы.</p>
                    </div>
                    <div class="training__card training__card--two">
                        <swiper :modules="modules"
                            :slides-per-view="1"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                            :pagination="{ clickable: true }">
                            <swiper-slide>
                                <picture>
                                    <source srcset="../assets/img/training-21-360.png" media="(max-width:576px)">
                                    <source srcset="../assets/img/training-21-1024.png" media="(max-width:1024px)">
                                    <img src="../assets/img/training-21.webp" alt="">
                                </picture>
                            </swiper-slide>
                            <swiper-slide>
                                <picture>
                                    <source srcset="../assets/img/training-22-360.png" media="(max-width:576px)">
                                    <source srcset="../assets/img/training-22-1024.png" media="(max-width:1024px)">
                                    <img src="../assets/img/training-22.webp" alt="">
                                </picture>
                            </swiper-slide>
                            <swiper-slide>
                                <picture>
                                    <source srcset="../assets/img/training-23-360.png" media="(max-width:576px)">
                                    <source srcset="../assets/img/training-23-1024.png" media="(max-width:1024px)">
                                    <img src="../assets/img/training-23.webp" alt="">
                                </picture>
                            </swiper-slide>
                            <swiper-slide>
                                <picture>
                                    <source srcset="../assets/img/training-24-360.png" media="(max-width:576px)">
                                    <source srcset="../assets/img/training-24-1024.png" media="(max-width:1024px)">
                                    <img src="../assets/img/training-24.webp" alt="">
                                </picture>
                            </swiper-slide>
                            <swiper-slide>
                                <picture>
                                    <source srcset="../assets/img/training-25-360.png" media="(max-width:576px)">
                                    <source srcset="../assets/img/training-25-1024.png" media="(max-width:1024px)">
                                    <img src="../assets/img/training-25.webp" alt="">
                                </picture>
                            </swiper-slide>
                        </swiper>

                    </div>
                    <div class="training__card training__card--three">
                        <p class="training__desc section__desc">Мы поможем тебе стать ещё лучше! Ты поймешь, какие
                            навыки нужно развивать, чтобы стать грамотным. Мы поделимся с тобой советами, чтобы ты мог
                            стать настоящим чемпионом.</p>
                        <img src="../assets/img/training-31.webp" alt="">
                    </div>
                    <div class="training__card training__card--four">
                        <p class="training__desc section__desc">Пройди путь от начала до конца и прокачай свою
                            функциональную грамотность.</p>
                    </div>
                </div>
            </div>
        </section>

        <section :style="{ 'scroll-margin-top': this.headerHeight + 'px' }" id="auditorium" class="auditorium section">
            <div class="container">
                <h2 class="section__title auditorium__title"><span>Наша аудитория&mdash; это</span></h2>
                <div class="auditorium__container">
                    <div class="auditorium__card auditorium__card--one">
                        <img src="../assets/img/auditorium-1.webp" alt="">
                    </div>
                    <div class="auditorium__card auditorium__card--two">
                        <div>
                            <h3 class="auditorium__subtitle section__subtitle">Родители</h3>
                        <p class="auditorium__desc section__desc">Отслеживают успехи ребёнка и дополнительно развивают
                            навыки функциональной грамотности в повседневности.</p>
                        </div>
                        <img src="../assets/img/auditorium-21.webp" alt="">
                    </div>
                    <div class="auditorium__card auditorium__card--three">
                        <div>
                            <h3 class="auditorium__subtitle section__subtitle">Ученики</h3>
                        <p class="auditorium__desc section__desc">Развивают навыки функциональной грамотности в игровой
                            форме совместно с персонажами-аватарами, получают, накапливают баллы и меняют
                            их на вознаграждение.</p>
                        </div>
                        <img src="../assets/img/auditorium-31.webp" alt="">
                    </div>
                    <div class="auditorium__card auditorium__card--four">
                        <picture>
                            <source srcset="../assets/img/auditorium-4-1024.webp" media="(max-width: 1024px)">
                            <source srcset="../assets/img/auditorium-4-360.webp" media="(max-width: 576px)">
                            <img src="../assets/img/auditorium-4.webp" alt="">
                        </picture>
                    </div>
                    <div class="auditorium__card auditorium__card--five">
                        <img src="../assets/img/auditorium-5.webp" alt="">
                    </div>
                    <div class="auditorium__card auditorium__card--six">
                        <picture>
                            <source srcset="../assets/img/auditorium-6-1024.webp" media="(max-width: 1024px)">
                            <img src="../assets/img/auditorium-6.webp" alt="">
                        </picture>

                        <div>
                            <h3 class="auditorium__subtitle section__subtitle">Учителя</h3>
                        <p class="auditorium__desc section__desc">Следят за динамикой прогресса обучающихся, мотивируют
                            к новым достижениям. Дают индивидуальные рекомендации по каждому заданию в форме
                            дополнительной литературы или заданий на закрепление материала.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section :style="{ 'scroll-margin-top': this.headerHeight + 'px' }" id="partners" class="partners section">
            <div class="container">
                <h2 class="section__title partners__title"><span>Наши партнёры</span></h2>
            </div>
                <div class="partners__container">
                    <ul v-for="(item, index) in 3" :key="index"v-if="partners.length >= 4" class="partners__list list-reset partners__list--animation">
                        <li class="partners_item" v-for="partner in partners" :key="partner.id">
                            <a :href="partner.site" class="partners__link flex"><img :src="'/storage/' + partner.img" alt=""></a>
                        </li>
                    </ul>
                    <ul v-else class="partners__list list-reset">
                        <li class="partners_item" v-for="partner in partners" :key="partner.id">
                            <a :href="partner.site" class="partners__link flex"><img :src="'/storage/' + partner.img" alt=""></a>
                        </li>
                    </ul>
                </div>

        </section>

        <section :style="{ 'scroll-margin-top': this.headerHeight + 'px' }" id="feedback" class="feedback section">
            <div>
                <div class="container">
                <div class="feedback__container">
                    <h2 class="feedback__title">Если остались вопросы&nbsp;&mdash; мы&nbsp;поможем</h2>
                    <Form class="feedback__form form" @InvalidSubmit="onInvalidSubmit" @submit="onSubmit()" method="post">
                        <div class="form__block">
                            <div>
                                <span class="form__text">Имя</span>
                                <label class="form__label">
                                <button class="btn-reset clear-btn hidden" @click.prevent="clearInput"></button>
                                <Field v-model="name" :rules="validateName" name="name" type="text" class="form__input" :class="{'form__input--error': errorName}" placeholder="Введи Имя" @input="inputChange" @keydown="deleteNumber"/>

                            </label>
                            <ErrorMessage class="form__error" name="name"/>
                            </div>
                            <div>
                                <span class="form__text">Email</span>
                                <label class="form__label">
                                <button class="btn-reset clear-btn hidden" @click.prevent="clearInput"></button>
                                <Field v-model="email" :rules="validateEmail" :class="{'form__input--error': errorEmail}" name="email" type="text" class="form__input" placeholder="Введи Email" @input="inputChange"/>

                            </label>
                            <ErrorMessage class="form__error" name="email"/>
                            </div>

                        </div>
                        <div>
                            <span class="form__text">Сообщение</span>
                            <label class="form__label textarea">
                            <button class="btn-reset clear-btn hidden" @click.prevent="clearInput"></button>
                            <Field v-model="message" :rules="validateMessage" :class="{'form__input--error': errorMessage}" as="textarea" class="form__input form__input--textarea" name="message" id="" placeholder="Введи сообщение" @input="inputChange"/>

                        </label>
                        <ErrorMessage class="form__error" name="message"/>
                        </div>

                        <label class="form__label checkbox">
                            <Field v-model="personal" :rules="validatePersonal" name="personal" type="checkbox" value="false"/>
                            <span class="form__checkbox"></span>
                            <span class="checkbox__text">Соглашаюсь с условиями <a target="_blank" href="https://docs.google.com/document/d/1bvu8LaYXfBBOyenb9K_73980SOiNBdC5Ka6F7HBhro0/edit">Пользовательского соглашения</a> и <a target="_blank" href="https://docs.google.com/document/d/1Z5DFIfdqGlYQx4WHMDMiMUjkPWbSDQL6sVRE0yvJLh0/edit">Политикой
                                о персональных данных</a></span>
                        </label>

                        <button :disabled="!validate" class="form__btn btn-reset" type="submit">Отправить</button>
                    </Form>
                </div>
            </div>
            </div>

        </section>



        </q-page>
        <Footer></Footer>

        <FeedbackModal @close-modal="closeModal()" v-show="feedbackModal"></FeedbackModal>

</template>

<script>
"use client";
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import FeedbackModal from '../components/FeedbackModal.vue';
    import { Pagination, Autoplay  } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Form, Field, ErrorMessage, configure} from 'vee-validate';
    import {getPartners} from '../dbquery/getPartners.js'

    import 'swiper/css';
    import 'swiper/css/pagination';


    configure({
        validateOnBlur: false,
        validateOnChange: true,
        validateOnInput: true,
        validateOnModelUpdate: true,
    });

    export default {
        data() {
            return {
                partners: [],
                // partners: [
                //     {
                //         id: 1,
                //         src: '../assets/img/footer-logo-1.svg'
                //     },
                //     {
                //         id: 2,
                //         src: '../assets/img/footer-logo-3.svg'
                //     },
                //     {
                //         id: 3,
                //         src: '../assets/img/footer-logo-2.svg'
                //     },
                //     {
                //         id: 4,
                //         src: '../assets/img/footer-logo-2.svg'
                //     },

                // ],
                headerHeight: 0,
                name: '',
                email: '',
                message: '',
                errorName: false,
                errorEmail: false,
                errorMessage: false,
                personal: false,
                feedbackModal: false,
            }
        },
        components: {Header, Footer, FeedbackModal, Swiper, SwiperSlide, Form, Field, ErrorMessage},
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Pagination, Autoplay],
            };
            },

        methods: {
            getImgUrl(imageNameWithExtension) {
                return new URL(`${imageNameWithExtension}`, import.meta.url).href;
            },
            openModal() {
                this.feedbackModal = true;
                document.body.classList.add('open-menu');
            },

            closeModal() {
                this.feedbackModal = false;
                document.body.classList.remove('open-menu');
            },

            resizeHeader() {
                this.headerHeight = document.querySelector('.header').clientHeight;
            },
            validateName(value) {
                if (!value) {
                    return 'Введи имя';
                }

                return true;
            },
            validateEmail(value) {
                if (!value) {
                    return 'Введи E-mail!';
                }
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'Введи корректный E-mail!';
                }

                return true;
            },

            validateMessage(value) {
                if (!value) {
                    return 'Введи сообщение';
                }

                return true;
            },

            validatePersonal(value) {
                if (!value) {
                    return false;
                }

                return true;
            },

            onInvalidSubmit(e) {
                console.log(e)
                if (e.errors.name) {
                    this.errorName = true;
                };

                if (e.errors.email) {
                    this.errorEmail = true;
                };

                if (e.errors.message) {
                    this.errorMessage = true;
                };

                if (e.errors.personal) {
                    this.errorMessage = true;
                };

            },

            onSubmit() {
                this.openModal();
            },

            inputChange(e) {
            const btn = e.target.previousSibling;
            if (e.target.getAttribute('name') == 'name') {
                this.errorName = false;
            }


            if (e.target.getAttribute('name') == 'email') {
                this.errorEmail = false;
            }

            if (e.target.getAttribute('name') == 'message') {
                this.errorMessage = false;;
            }


            if (e.target.value != '') {
                btn.classList.remove('hidden')

            } else btn.classList.add('hidden')

        },

            clearInput(e) {
                e.target.classList.add('hidden');
                console.log(e.target)
                if (e.target.nextSibling.getAttribute('name') == 'name') {
                    this.name = '';
                    this.errorName = true;
                }
                if (e.target.nextSibling.getAttribute('name') == 'email') {
                    this.email = '';
                    this.errorEmail = true;
                }

                if (e.target.nextSibling.getAttribute('name') == 'message') {
                    this.message = '';
                    this.errorMessage = true;
                }
        },

                deleteNumber(e) {
                    if (e.key.match(/[0-9]/)) return e.preventDefault();
                },

        },

        computed: {
            validate() {
                if (this.validateName(this.name) == true && this.validateEmail(this.email) == true && this.validateMessage(this.message) == true && this.validatePersonal(this.personal) == true)
                    return true

            },
        },

        mounted() {
            this.resizeHeader();
            let partnersOb = async () => {
            try {
                let response = await getPartners();
                console.log(response.data)
                this.partners = response.data;
            } catch (error) {
                console.log(error)
            }
            }
            partnersOb();
        },

    }




</script>

<style>

.banner {
    border-radius: 0px 0px 80px 80px;
    background-color: var(--red);
    color: white;
}

.form__input.form__input--error::placeholder {
    color: var(--red);
}

.clear-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 22px;
    width: 20px;
    height: 20px;
    background-image: url(../assets/img/clear.svg);
}

.textarea .clear-btn {
    top: 32px;
}

.form__error {
    padding-left: 22px;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.4px;
    background-image: url(../assets/img/alert-circle.svg);
    background-position: left center;
    background-repeat: no-repeat;
}

.hero {
    position: relative;
    padding-top: 80px;
    padding-bottom: 26px;
    overflow: hidden;
}

.hero__container {
    margin-bottom: 90px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.hero__left {
    grid-column: 7 span;
}

.hero__right {
    grid-column: 5 span;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 48px;
}

.hero__title {
    max-width: 1018px;
    font-family: 'Unbounded';
    font-size: 64px;
    line-height: 76.8px;
}

.hero__title--icon {
    position: relative;
}

.hero__title--icon::after {
    position: absolute;
    bottom: 0;
    right: -90px;
    content: '';
    width: 93px;
    height: 112px;
    background-image: url(../assets/img/hero-title.svg);
    background-repeat: no-repeat;

}

.hero__title--bold::after {
    content: '';
    position: absolute;
    bottom: -46px;
    left: 0;
    width: 100%;
    height: 27px;
    background-image: url(../assets/img/hero-title-icon2.svg);
    background-size: 100%;
    background-repeat: no-repeat;

}

.hero__title--bold {
    position: relative;
    font-weight: 700;
}

.hero__desc {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
}

.img-animation {
    animation: rotate 8s infinite linear;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

.section {
    padding: 60px 0;
}

.advantages.section {
    padding-top: 120px;
}

.section__title  {
    position: relative;
    margin-bottom: 80px;
    font-family: 'Unbounded';
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    text-align: center;
    text-transform: uppercase;
}

.section__subtitle {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
}

.section__desc {
    font-weight: 600;
    line-height: 24px;
}

.advantages__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.advantages__card {
    padding: 40px 28px;
    border-radius: 40px;
    overflow: hidden;
}

.advantages__card--one {
    padding: 0;
    grid-column: 8 span;
    grid-row: 1;
    background: right url(../assets/img/advantages-mask.webp), url(../assets/img/advantages-1.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    /* background-position: right; */
    filter: drop-shadow(0 0 20px #ECEAE1);
}

.advantages__card--one img {
    padding-top: 46px;
}

.advantages__box {
    display: flex;
    align-items: end;
    justify-content: space-between;
    /* -webkit-clip-path: polygon(64px 0, 100% 0%, 100% 100%, 0 100%, 0 64px);
    clip-path: polygon(64px 0, 100% 0%, 100% 100%, 0 100%, 0 64px); */
}

.advantages__box > div {
    padding: 40px 28px;
    max-width: 640px;

}

.advantages__card--two {
    padding-top: 140px;
    align-self: end;
    grid-column: 4 span;
    grid-row: 1;
    background-image: url(../assets/img/advantages-2.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
    color: white;
}

.advantages__card--three {
    padding: 0;
    grid-column: 2/6;
    grid-row: 2;
}

.advantages__card--three img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.advantages__card--four {
    padding-top: 140px;
    grid-column: 6/13;
    grid-row: 2;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 20px;
    background-image: url(../assets/img/advantages-4.svg);
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: var(--red);
    color: white;
}

.advantages__card--four .advantages__subtitle {
    margin-bottom: 0;
    max-width: 400px;
}

.advantages__card--four .advantages__desc {
    max-width: 422px;
}

.training__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.training__card {
    padding: 40px 28px;
    border-radius: 40px;
    overflow: hidden;
}

.training__card--one {
    display: flex;
    justify-content: space-between;
    gap: 109px;
    align-self: end;
    flex-direction: column;
    grid-column: 5 span;
    background-image: url(../assets/img/training-1.webp);
    background-repeat: no-repeat;
    background-size: cover;
}

.training__card--one picture {
    align-self: end;
    max-width: max-content;
}

.training__card--two {
    padding: 0;
    grid-column: 7 span;
    align-self: end;
}

.training__card--two img {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    object-fit: cover;
}

.training__card--three {
    padding: 0;
    padding-top: 40px;
    display: flex;
    align-items: end;
    grid-column: 4/9;
    background-image: url(../assets/img/training-3.webp);
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 4px 5px 50px 0px #ECEAE1;

}

.training__card--three .training__desc {
    padding: 40px 28px;
}

.training__card--three img {
    position: relative;
    bottom: 0;
}

.training__card--four {
    display: flex;
    align-items: end;
    grid-column: 9/13;
    background-image: url(../assets/img/training-4.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.auditorium__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

.auditorium__card {
    border-radius: 40px;
    overflow: hidden;
}

.auditorium__card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.auditorium__card--one {
    padding: 0;
    grid-column: 5 span;
    grid-row: 1;
}

.auditorium__card--two {
    padding-top: 35px;
    display: flex;
    align-items: end;
    align-self: end;
    justify-content: space-between;
    grid-column: 6 span;
    grid-row: 1;
    gap: 23px;
    background-image: url(../assets/img/auditorium-2.webp);
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 4px 5px 50px 0px #ECEAE1;

}

.auditorium__card--two > div {
    padding: 40px 28px;
    max-width: 543px;
}

.auditorium__card--two img {
    position: relative;
    right: 40px;
    width: 28%;
}

.auditorium__card--three {
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-column: 3/8;
    grid-row: 2;
    background-image: url(../assets/img/auditorium-3.webp);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
}

.auditorium__card--three > div {
    padding: 40px 28px;
}

.auditorium__card--three img {
    position: relative;
    right: 10px;
    align-self: end;
    width: 45%;
}

.auditorium__card--four {
    padding: 0;
    grid-column: 8/13;
    grid-row: 2;
}


.auditorium__card--five {
    padding: 0;
    grid-column: 2/8;
    grid-row: 3;
}


.auditorium__card--six {
    padding: 40px 28px;
    grid-column: 8/13;
    grid-row: 3;
    align-self: start;
    background-color: var(--green);
    color: white;
}

.auditorium__card--six picture,
.auditorium__card--six picture img {
    width: 100%;
}

.partners {
    padding-bottom: 120px;
}

.partners__list {
    display: flex;
    gap: 40px;
    overflow: auto;

}

.partners__list--animation {
    animation: scroll 8s linear infinite;
}

.partners__container:hover .partners__list {
    animation-play-state: paused;
}


.partners__link {
    padding: 51px 70px;
    justify-content: center;
    /* widows: 290px; */
}

.partners_item {
    flex-shrink: 0;
    width: 290px;
    background-color: white;
    border-radius: 28px;

}

.partners__container {
    display: flex;
    justify-content: center;
    gap: 40px;
    overflow: hidden;
}

.form__block .form__input {
    width: inherit;
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-100% - 20px));
    }
}

.feedback__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    align-items: center;
    padding-bottom: 4px;
}

.form__label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.feedback__title {
    grid-column: 1/6;
}

.feedback__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-column: 8/13;
}

.feedback {
    position: relative;
    padding: 137px 0;
}



.feedback > div  {
    background-color: var(--red);
    color: white;
}

.feedback > div::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 137px;
    background-image: url(../assets/img/feedback.webp);
    background-repeat: no-repeat;
    background-size: cover;
}

.feedback > div::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 137px;
    background-image: url(../assets/img/feedback.webp);
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(180deg);
}

.feedback__title {
    font-family: 'Unbounded';
    font-size: 64px;
    font-weight: 700;
    line-height: 76.8px;
    text-align: left;
    color: white;
}

.form__text {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: white;
}

.form__input {
    padding: 20px 22px;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: white;

}

.form__input::placeholder {
    font-family: 'Nunito Sans';
    font-size: 18px;
    font-weight: 600;
    line-height: 21.6px;
    color: #41414366;
}

.form__input--textarea {
    border-radius: 32px;
}

.form__block {
    display: flex;
    gap: 20px;
}

.checkbox input {
    display: none;
}

.checkbox input:checked ~ .form__checkbox {
    background-image: url(../assets/img/check.svg);
    background-position: center;
    background-repeat: no-repeat;
}

.form__checkbox {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: white;
    transition: background-image .3s ease-in-out;
}

.form__label.checkbox {
    flex-direction: row;
    gap: 22px;
}

.checkbox__text {
    font-size: 14px;
}

.form__btn {
    padding: 20px;
    border-radius: 50px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.74px;
    background-color: var(--light-green);
    color: var(--text);
    outline: 2px solid var(--light-green);
    transition: background-color .3s ease-out, outline .3s ease-out;
}

.form__btn:hover {
    background-color: white;
}

.form__btn:focus-visible {
    outline-width: 4px;
    background-color: white;
}

.form__btn:active {
    outline-width: 4px;
    background-color: white;
}

.form__btn:disabled {
    color: #9A9A9A;
    background-color: #C9FF2280;
}

.section__title span {
    position: relative;
    padding-bottom: 46px;
    text-align: left;
}

.section__title span::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 21px;
    left: 0;
    background-repeat: no-repeat;
    background-size: contain;
}

.section__title.advantages__title span::after {
    background-image: url(../assets/img/advantages-title.svg);
}

.section__title.training__title span::after {
    background-image: url(../assets/img/training-title.svg);
}

.section__title.auditorium__title span::after {
    background-image: url(../assets/img/auditorium-title.svg);
}

.section__title.partners__title span::after {
    background-image: url(../assets/img/partners-title.svg);
}

.swiper-pagination-bullet {
    width: 24px;
    height: 24px;
    background-color: rgba(232, 61, 70, 0.4);
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 32px;
    height: 32px;
    background-color: rgba(232, 61, 70, 1);
}

.swiper-pagination {
    bottom: 28px !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auditorium {
    position: relative;
    overflow: clip;
}

.auditorium::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 95%;
    top: 0;
    left: 50%;
    background-color: #F9F8F6;
    border-radius: 50%;
    z-index: -1;
    transform: translate(-50%);
}

.star {
    position: absolute;
}

.star-1 {
    left: 13%;
}

.star-2 {
    right: 90px;
}

.star-3 {
    left: 32%;
    bottom: 60px;
}

.form__block > div {
    width: 100%;
}

.feedback__form .form__input {
    padding-right: 50px;
}

.feedback__form textarea {
    resize: vertical;
}

@media (max-width: 1400px) {

    .banner {
        border-radius: 0px 0px 60px 60px;
    }

    .hero__right {
        flex-direction: column;
        align-self: end;
        gap: 20px;
    }

    .hero__title {
        max-width: 520px;
        font-size: 32px;
        line-height: 38.4px;
    }

    .hero__title--icon::after {
        right: -70px;
        bottom: 7px;
        width: 66px;
        height: 73px;
        background-size: 66px 73px;
    }

    .hero__container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 167px;
    }

    .hero__right img {
        position: absolute;
        right: 40px;
    }

    .advantages__container {
        grid-template-columns: repeat(2, 1fr);
    }

    .advantages__card--one {
        grid-column: 2 span;
        grid-row: 1;
        padding: 0;
        background: right url(../assets/img/advantages-mask-1.webp), left top / cover url(../assets/img/advantages-1.webp);
        background-repeat: no-repeat;
    }

    .advantages__card--one img {
        padding-top: 0;
        max-width: 324px;
    }

    .advantages__card--two {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 100%;
        background-image: url(../assets/img/advantages-2-1024.webp);
    }

    .advantages__card.advantages__card--three {
        padding: 0;
        grid-column: 1;
        grid-row: 2;
    }

    .advantages__card--four {
        grid-column: 2 span;
        grid-row: 3;
        background-image: url(../assets/img/advantages-4-1024.svg);
    }

    .section {
        padding: 40px 0;
    }

    .advantages.section {
        padding-top: 80px;
    }

    .training__container {
        grid-template-columns: repeat(8, 1fr);
    }



    .auditorium__container {
        grid-template-columns: repeat(8, 1fr);
    }

    .auditorium__card {
        padding: 28px 20px;
        border-radius: 28px;
    }

    .auditorium__card--two > div,
    .auditorium__card--three > div {
        padding: 28px 20px;
    }

    .auditorium__card--one,
    .auditorium__card--five {
        display: none;
    }

    .auditorium__card--two {
        padding: 0;
        grid-column: 3 / 9;
        grid-row: 1;
    }

    .auditorium__card--three,
    .auditorium__card--four {
        padding: 0;
        grid-column: 4 span;
        grid-row: 2;
    }

    .auditorium__card--six {
        grid-column: 2 / 7;
        grid-row: 3;
    }

    /* .feedback {
        padding: 137px 0;
    } */

    .feedback__container {
        grid-template-columns: repeat(8, 1fr);
    }

    .feedback__title {
        grid-column: 3 span;
        font-size: 26px;
        line-height: 31.2px;
    }

    .feedback__form {
        grid-column: 5 span;
    }

    .feedback > div::before {
        height: 79px;
        background-image: url(../assets/img/feedback-1024.webp);
    }

    .feedback > div::after {
        height: 79px;
        background-image: url(../assets/img/feedback-1024.webp);
    }

    .feedback {
        padding: 79px 0;
    }

    .hero {
        padding-top: 57px;
    }

    .hero__desc {
        font-size: 16px;
        line-height: 19.2px;
    }

    .section__title {
        margin-bottom: 46px;
        font-size: 26px;
        line-height: 31.2px;
    }

    .section__subtitle {
        margin-bottom: 16px;
        font-size: 24px;
        line-height: 28.8px;
    }

    .section__desc {
        font-size: 16px;
        line-height: 19.2px;
    }

    .advantages__card {
        padding: 28px 20px;
        border-radius: 28px;
    }

    .advantages__box > div {
        padding: 28px 20px;
    }


    .advantages__card--two {
        padding-top: 88px;
    }

    .advantages__card--four {
        padding-top: 150px;
    }

    .training__card {
        padding: 28px 20px;
        border-radius: 28px;
    }

    .training__card--two {
        padding: 0;
        grid-column: 5 span;
        grid-row: 1;
    }

    .training__card--three img {
        display: none;
    }

    .training__card--three .training__desc {
        padding: 0;
    }

    .training__card--one {
        grid-column: 3 span;
        grid-row: 1;
        gap: 25px;

    }


    .training__card--three {
        padding: 28px 20px;
        padding-top: 184px;
        grid-column: 4 span;
        grid-row: 2;
    }

    .training__card--four {
        grid-column: 4 span;
        grid-row: 2;
    }

    .auditorium__card--two img {
        right: 36px;
        width: 24%;
    }

    .auditorium__card--three img {
        width: 34%;
    }

    .partners__link {
        padding: 23px 49px;
    }

    .form__text {
        font-size: 16px;
        line-height: 19.2px;
    }

    .form__input::placeholder {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .checkbox__text {
        font-size: 12px;
    }

    .form__btn {
        padding: 14px;
        font-size: 20px;
        font-weight: 700;
        line-height: 27.28px;
    }

    .form__input {
        padding: 16px 20px;
    }



    .advantages__card--two .section__subtitle {
        max-width: 422px;
    }

    .section__title span {
        display: inline-block;
        padding-bottom: 30px;
    }

    .section__title span::after {
        display: block;
        height: 14px;
    }

    .section__title span::after {
        background-size: auto;
    }

    .section__title.advantages__title span::after {
        background-image: url(../assets/img/advantages-title-1024.svg);
    }

    .section__title.training__title span::after {
        background-image: url(../assets/img/training-title-1024.svg);
    }

    .section__title.auditorium__title span::after {
        background-image: url(../assets/img/auditorium-title-1024.svg);
    }

    .section__title.partners__title span::after {
        background-image: url(../assets/img/partners-title-1024.svg);
    }

    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 18px;
        height: 18px;
    }

    .partners {
        padding-bottom: 84px;
    }

    .partners__list {
        gap: 28px;
    }

    .partners__container {
        gap: 28px;
    }


}

@media (max-width: 1024px) {
    .star-1 {
        top: 16rem;
        left: 16%;
        width: 49px;
    }

    .star-2 {
        right: 28%;
        top: 19rem;
        width: 49px;
    }

    .star-3 {
       display: none;
    }
}


@media (max-width: 768px) {

    .banner {
        border-radius: 0px 0px 40px 40px;
    }

    .img-animation {
        animation: none;
    }

    .hero__title--icon::after {
        content: none;
    }

    .section__title {
        margin-bottom: 40px;
        font-size: 24px;
        line-height: 28.8px;
    }

    .section__desc {
        font-size: 14px;
        line-height: 16.8px;
    }

    .section__subtitle {
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 24px;
    }

    .advantages__card {
        padding: 14px;
        border-radius: 20px;
    }

    .advantages__card--one .advantages__box {
        flex-direction: column;
        align-items: start;
    }



    .advantages__card--one .advantages__box img {
        margin-bottom: 8px;
        padding-top: 0;
        align-self: end;
        order: -1;
        width: 50%;
    }

    .advantages__container {
        grid-template-columns: 1fr;
        gap: 12px;
    }



    .advantages__card--three {
        grid-column: 1;
        grid-row: 3;
    }

    .advantages__card--four {
        padding-top: 84px;
        align-items: start;
        grid-column: 1;
        grid-row: 4;
        flex-direction: column;
    }

    .advantages__card--one .advantages__box > div {
        padding: 0;
    }



    .advantages__card--two {
        grid-column: 1;
        grid-row: 2;
        padding-top: 100px;
    }

    .advantages__card--four .advantages__subtitle {
        max-width: 100%;
    }

    .advantages__card--four .advantages__desc {
        max-width: 100%;
    }

    .section__title span {
        padding-bottom: 20px;
    }

    .section__title span::after {
        height: 16px;
        background-size: contain;
    }

    .training__container {
       display: flex;
       flex-direction: column;
       gap: 12px;
    }

    .training__card {
        padding: 14px;
        border-radius: 20px;
    }

    .training__card--one {
        grid-column: 1;
        grid-row: 1;
    }

    .training__card--two {
        padding: 0;
        width: 100%;
    }

    .training__card--three {
        grid-column: 1;
        grid-row: 3;
        flex-direction: column;
    }

    .training__card--four {
        grid-column: 1;
        grid-row: 4;
    }

    .swiper-pagination {
        bottom: 14px !important;
    }

    .training__card--three img {
        margin-bottom: 10px;
        display: block;
        width: 34%;
        order: -1;
    }

    .training__card--four {
        padding-top: 135px;
    }

    .advantages__card.advantages__card--three {
        grid-row: 3;
    }



    .advantages__card--one {
        grid-column: 1;
        grid-row: 1;
    }

    .auditorium__container {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .auditorium::before {
        width: 265%;
        height: 100%;
        border-radius: 48%;
    }

    .auditorium__card {
        border-radius: 20px;
    }


    .auditorium__card--two {
        grid-column: 1;
        grid-row: 1;
        flex-direction: column;
        align-items: start;
        gap: 0;
    }

    .auditorium__card--two img {
        position: relative;
        align-self: end;
        order: -1;
        bottom: -36px;
    }

    .auditorium__card--two > div {
        padding: 14px;
    }

    .auditorium__card--three {
        grid-column: 1;
        grid-row: 2;
        gap: 14px;
    }

    .auditorium__card--three > div {
        padding: 14px;
    }

    .auditorium__card--four {
        grid-column: 1;
        grid-row: 4;
    }

    .auditorium__card--six {
        grid-column: 1;
        grid-row: 3;
        padding: 14px;
    }

    .partners {
        padding-bottom: 80px;
    }

    .partners__container {
        gap: 12px;
    }

    .partners__link {
        padding: 34px 57px;
    }

    .partners__list {
        gap: 12px;
    }

    .feedback__container {
        grid-template-columns: 1fr;
        gap: 40px;
    }


    .feedback__title {
        grid-column: 1;
        grid-row: 1;
        font-size: 26px;
        line-height: 31.2px;
    }

    .feedback__form {
        grid-column: 1;
        grid-row: 2;
        gap: 12px;
    }

    .form__block {
        gap: 12px;
    }

    .form__btn {
        padding: 18px;
    }



    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 14px;
        height: 14px;
    }

    .form__input--textarea {
        border-radius: 28px;
    }

    .star-1 {
        top: 18rem;
        left: 16%;
        width: 55px;
    }

    .star-2 {
        right: 28%;
        top: 24rem;
        width: 31px;
    }


}

@media (max-width: 576px) {
    .hero__container {
        position: relative;
        flex-direction: column;
        align-items: start;
        gap: 34px;
        margin-bottom: 119px;
    }

    .hero__title {
        font-size: 26px;
        line-height: 31.2px;
    }

    .hero__desc {
        font-size: 14px;
        line-height: 16.8px;
    }

    .hero__title--bold::after {
        bottom: -14px;
        height: 12px;
    }

    .hero__right img {
        position: absolute;
        top: 100%;
        left: 40%;
        width: 180px;
    }

    .hero picture img {
        max-width: 216px;
    }

    .hero {
        padding-top: 16px;
        padding-bottom: 28px;
    }

    .hero__right {
        align-self: start;
    }


    .banner {
        border-radius: 0px 0px 40px 40px;
    }

    .form__block {
        flex-direction: column;
    }

    .star-1 {
        top: 13rem;
        left: 8%;
    }

    .star-2 {
        right: auto;
        left: 71%;
        top: 26rem;
        width: 31px;
    }

    .star-3 {
        display: block;
        left: 60%;
        top: 32rem;
        width: 18px;
    }

    .advantages__card--one .advantages__box img {
        max-width: 132px;
    }

    .advantages__card--one {
        background: right url(../assets/img/advantages-mask-2.webp), left top / cover url(../assets/img/advantages-1.webp);
        background-repeat: no-repeat;
    }


}

@media (max-width: 360px) {
    .advantages__card--one {
        background-image: url(../assets/img/advantages-1-360.webp);
    }

    .section__title.advantages__title span::after {
        background-image: url(../assets/img/advantages-title-360.svg);
    }

    .section__title.training__title span::after {
        background-image: url(../assets/img/training-title-360.svg);
    }

    .section__title.auditorium__title span::after {
        background-image: url(../assets/img/auditorium-title-360.svg);
    }

    .section__title.partners__title span::after {
        background-image: url(../assets/img/partners-title-360.svg);
    }

    .star-1 {
        top: 15rem;
        left: 13%;
    }

    .star-2 {
        left: 80%;
        top: 28rem;
    }

    .star-3 {
        left: 72%;
        top: 34rem;
    }


    .feedback > div::before {
        height: 86px;
        background-image: url(../assets/img/feedback-360.webp);
    }

    .feedback > div::after {
        height: 86px;
        background-image: url(../assets/img/feedback-360.webp);
    }

     .feedback {
        padding: 86px 0;
    }
}



</style>

<template>
    <q-footer>
        <footer class="footer">
        <div class="container">
            <div class="footer__container flex">
                <div class="footer__left flex column">
                    <div class="footer__logos flex">
                        <router-link :to="{name: 'home'}"><img src="../assets/img/footer-logo-1.svg" alt=""></router-link>
                        <a target="_blank" href="https://shkola55perm.ru"><img src="../assets/img/footer-logo-2.svg" alt=""></a>
                    </div>
                    <div class="footer__copyright">&copy;&nbsp;2024&nbsp;МАОУ &laquo;СОШ &#8470;&nbsp;55&nbsp;имени дважды Героя Советского Союза Г.Ф. Сивкова&raquo;</div>
                </div>
                <div class="footer__middle flex column">
                    <div class="footer__terms flex column">
                        <a target="_blank" href="/docs/agreement.pdf" class="footer__link">Пользовательское соглашение</a>
                        <a target="_blank" href="/docs/policy.pdf" class="footer__link">Политика о персональных данных</a>
                    </div>
                    <a target="_blank" href="https://xn--g1ani7c.xn--p1ai/?ysclid=lroyqtkpvl175668603/"><img src="../assets/img/footer-logo-3.svg" alt=""></a>
                </div>
                <div class="footer__right social flex column">
                    <span class="social__text">Соц.сети</span>
                    <ul class="social__list list-reset flex">
                        <li class="social__item social__item--tg">
                            <a target="_blank" href="https://t.me/school55_perm" class="social__link">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#C9FF22" />
                                    <path
                                        d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z"
                                        fill="#414143" />
                                </svg>
                            </a>
                        </li>
                        <li class="social__item social__item--vk">
                            <a target="_blank" href="https://vk.com/school55_perm" class="social__link">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#C9FF22" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M39.2658 16.5348C39.4884 15.7932 39.2658 15.248 38.2071 15.248H34.7062C33.816 15.248 33.4059 15.7189 33.1834 16.2383C33.1834 16.2383 31.403 20.5775 28.8809 23.3962C28.0649 24.2121 27.6941 24.4715 27.249 24.4715C27.0264 24.4715 26.7044 24.2121 26.7044 23.4705V16.5348C26.7044 15.6446 26.4461 15.248 25.7041 15.248H20.2028C19.6467 15.248 19.3121 15.6611 19.3121 16.0527C19.3121 16.8967 20.5729 17.0912 20.703 19.4648V24.6202C20.703 25.7505 20.4989 25.9555 20.0538 25.9555C18.867 25.9555 15.9804 21.5965 14.268 16.6091C13.9324 15.6396 13.5958 15.248 12.7011 15.248H9.20028C8.20005 15.248 8 15.7189 8 16.2383C8 17.1655 9.18703 21.7646 13.5263 27.847C16.4195 32.0005 20.4949 34.2525 24.2038 34.2525C26.4293 34.2525 26.7044 33.7524 26.7044 32.8909V29.7514C26.7044 28.7512 26.9152 28.5517 27.6196 28.5517C28.1392 28.5517 29.0292 28.8112 31.1064 30.8139C33.4799 33.1872 33.871 34.2525 35.2064 34.2525H38.7072C39.7074 34.2525 40.2075 33.7524 39.919 32.7654C39.6034 31.7817 38.4701 30.3548 36.9663 28.6629C36.1503 27.6985 34.9263 26.66 34.5557 26.1408C34.0363 25.4732 34.1846 25.1766 34.5557 24.5835C34.5557 24.5835 38.8207 18.5751 39.2658 16.5351V16.5348Z"
                                        fill="#414143" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </q-footer>
</template>

<script>
export default {

}
</script>


<style>
    .q-footer {
        position: inherit;
    }

    footer {
        padding-top: 120px;
    }

    .footer {
        padding: 40px 0;
        font-weight: 600;
        border-radius: 80px 80px 0px 0px;
        background-color: #F9F8F6;
        color: var(--text);
    }

    .footer__container {
        justify-content: space-between;
    }

    .footer__logos {
        align-items: start;
        gap: 40px;
    }

    .footer__left {
        justify-content: space-between;
        gap: 20px;
    }

    .footer__copyright {
        max-width: 465px;
    }

    .footer__middle {
        justify-content: space-between;
    }

    .footer__terms {
        gap: 8px;
    }

    .footer__middle img {
        max-width: max-content;
    }

    .social__list {
        gap: 20px;
    }

    .footer__right {
        gap: 12px;
    }

    .social__item rect,
    .social__item path {
        transition: fill .3s ease-in-out;
    }

    .social__item--tg:hover rect {
        fill: #34ABDF;
    }

    .social__item:hover path {
        fill: white;
    }

    .social__item--tg:focus-visible rect,
    .social__item--tg:active rect {
        fill: #2097CB;
    }

    .social__item:focus-visible path,
    .social__item:active path {
        fill: white;
    }




    .social__item--vk:hover rect {
        fill: #5181B8;
    }


    .social__item--vk:focus-visible rect,
    .social__item--vk:active rect {
        fill: #3D6DA4;
    }


    @media (max-width: 1400px) {
        .footer {
            font-size: 16px;
            border-radius: 60px 60px 0px 0px;
        }

        .footer__copyright {
            font-size: 14px;
        }

        footer {
            padding-top: 84px;
        }
    }

    @media (max-width: 768px) {
        .footer__left {
            display: contents;
        }

        .footer__middle {
            display: contents;
        }

        .footer__container {
            flex-direction: column;
            gap: 40px;
        }

        .footer__logos {
            order: -1;
        }

        .footer__terms {
            order: -1;
        }

        .footer__right {
            order: -1;
        }

        .footer__copyright {
            order: 1;
            font-size: 12px;
            line-height: 14.4px;
        }

        .footer__link,
        .social__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .footer {
            border-radius: 40px 40px 0px 0px;
        }

        footer {
            padding-top: 80px;
        }
    }


</style>

<template>
    <main-layouts/>
</template>

<script setup>
import MainLayouts from "./layouts/mainLayouts.vue";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');
    p, h1, h2, h3, ul, ol {
    padding: 0;
    margin: 0;
}

body .q-page-container {
    padding-bottom: 0 !important;
}


.q-layout__section--marginal {
    background-color: transparent;
}

*, *::after, *::before {
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

p, h1, h2, h3, ul, ol {
    padding: 0;
    margin: 0;
}

h1 {
    letter-spacing: 0;
}

img {
    max-width: 100%;
}

:root {
    --red: #E83D46;
    --orange: #ECA73E;
    --green: #39B52C;
    --violet: #812D9C;
    --light-green: #C9FF22;
    --text: #414143;
    --bg: #F2F1EC;
}

.btn-reset {
    padding: 0;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
}

.list-reset {
    list-style: none;
}

.container {
    margin: 0 auto;
    padding: 0 40px;
    max-width: 1800px;

}

body {
    margin: 0;
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 20px;
    color: var(--text);
    background-color: var(--bg);
}

body.open-menu {
    overflow-y: hidden;
}

.open-menu .burger__line {
    background-color: var(--text);
    transition: transform .3s ease-in-out;
}

.open-menu .burger__line:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.open-menu .burger__line:nth-child(2) {
    opacity: 0;
}

.open-menu .burger__line:nth-child(3) {
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(-45deg);
}

@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }
}


</style>

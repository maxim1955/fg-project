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

:root {
    --red: #E83D46;
    --orange: #ECA73E;
    --green: #39B52C;
    --violet: #812D9C;
    --light-green: #C9FF22;
    --text: #414143;
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
    padding: 0 20px;
    max-width: 1800px;

}

body {
    margin: 0;
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 20px;
    color: var(--text);
}


</style>

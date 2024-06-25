<template>
    <div :class="`task task-${this.getLevelId}`">
        <Task1 v-if="this.getTaskId == 1 && this.getLevelId == 1"/>
        <Task2 v-if="this.getTaskId == 1 && this.getLevelId == 2"/>
        <Task3 v-if="this.getTaskId == 1 && this.getLevelId == 3"/>
        <Task4 v-if="this.getTaskId == 1 && this.getLevelId == 4"/>
        <Task5 v-if="this.getTaskId == 1 && this.getLevelId == 5"/>
    </div>

</template>

<script>
import Task1 from './Task1.vue'
import Task2 from './Task2.vue'
import Task3 from './Task3.vue'
import Task4 from './Task4.vue'
import Task5 from './Task5.vue'

    export default {
        components: {Task1, Task2, Task3, Task4, Task5},
        props: ['currentTask', 'currentLevel'],
        computed: {
            getTaskId() {
                return this.currentTask;
            },
            getLevelId() {
                return this.currentLevel;
            }
        }
    }
</script>

<style>

    .q-pa-md,
    .q-carousel__slide {
        padding: 0;
    }
    .q-carousel {
        height: auto;
    }

    .q-panel {
        overflow: visible;
    }

    .task {
        padding-top: 12px;
    }

    .task__block {
        padding: 40px;
        border-radius: 32px;
        background-color: white;
    }


    .task__box {
        margin-bottom: 40px;
        display: flex;
        gap: 40px;
    }

    .task__left,
    .task__right {
        width: calc((100% - 40px)/2);
    }

    .task__title {
        margin-bottom: 20px;
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        color: var(--violet);
        text-transform: uppercase;
    }

    .task__number {
        margin-bottom: 40px;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: var(--violet);
    }


    .task__info {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task__info:last-child {
        margin-bottom: 0;
    }

    .task__question {
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task__tables {
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
        align-items: start;
        flex-wrap: wrap;
    }


    .task .form__label {
        gap: 12px;
        max-width: max-content;
    }

    .task .form__label span {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task .form__input {
        padding: 20px 22px;
        border-radius: 50px;
        background-color: var(--bg);
    }

    .task .form__label > div {
        margin-bottom: 40px;
        gap: 8px;
        font-weight: 600;
    }

    .task .form__btn {
        padding: 20px 32px;
    }

    .task__desc {
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task__desc:last-child {
        margin-bottom: 20px;
    }

    .task__table {

        border-spacing: 0 2px;
        border-radius: 20px;
        overflow: hidden;
    }

    .task__tables .task__table {
        /* width: calc((100% - 20px)/2); */
        max-width: 288px;
    }

    .task__table th {
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        text-align: left;
        /* border-radius: 20px 20px 0 0; */
        color: white;
        text-transform: uppercase;

    }

    .task__table th:first-child {
        border-top-left-radius: 20px;
    }

    .task__table th:last-child {
        border-top-right-radius: 20px;
    }

    .task__table thead {
        background-color: var(--violet);
    }

    .task__table td,
    .task__table th {
        padding: 12px 20px;
    }

    .task__table td:first-child {
        padding-left: 20px;
        padding-right: 5px;
    }

    .task__table td:last-child {
        padding-right: 20px;
        padding-left: 5px;
    }

    .task__table tbody tr {
        margin-bottom: 2px;
        align-items: center;
        background-color: var(--bg);
    }

    .task__table tbody tr:last-child td:first-child {
        border-radius: 0 0 0 20px;
    }

    .task__table tbody tr:last-child td:last-child {
        border-radius: 0 0 20px 0;
    }

    .task__table td {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task__table tbody tr td:last-child {
        text-align: right;
    }

    body .q-carousel__control {
        margin: 0;
    }

    .carousel__btns {
        position: static;
        display: flex;
        justify-content: space-between;
        align-content: center;

    }

    .carousel__btns .carousel__btn {
        padding: 20px 32px;
        border-radius: 50px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32.74px;
        border: 2px solid var(--light-green);
        background-color: transparent;
        color: #414143;
        text-transform: none;
        cursor: pointer;
    }

    .carousel__btns .carousel__btn::before {
        content: none;
    }

    .task .form__input--radio,
    .task .form__input--checkbox {
        display: none;
    }

    .task .form__label.form__label--radio,
    .task .form__label.form__label--checkbox {
        align-items: center;
        flex-direction: row;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task .form__box--radio,
    .task .form__box--checkboxes {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .task .form__label--radio span {
        flex-shrink: 0;
        position: relative;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 2px solid var(--violet);
        background-color: white;
    }

    .task .form__label--checkbox span {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background-color: var(--violet);
    }

    .task .form__input--radio:checked ~ span {
        background-color: var(--violet);
    }

    .task .form__input--checkbox:checked ~ span {
        background-image: url(../assets/img/task-check.svg);
        background-position: center;
        background-repeat: no-repeat;
    }

    .task .form__input--radio:checked ~ span::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        transform: translate(-50%, -50%);
    }

    .task__images {
        margin-bottom: 8px;
        display: flex;
        gap: 12px;
    }

    .task__img {
        flex-shrink: 1;
        width: calc((100% - 24px)/3);
    }

    .task__images ~ .task__info {
        text-align: center;
    }

    .task .multiselect {
        min-width: 240px;
    }

    .task .multiselect__tags {
        padding: 20px 22px;
        min-height: 64px;
        border-radius: 50px;
        border: none;
    }

    .task .multiselect__placeholder {
        padding-top: 0;
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;
        color: rgba(65, 65, 67, 0.4);
    }

    .task .multiselect__select {
        top: 50%;
        transform: translateY(-50%);
    }

    .task .multiselect__select::before {
        margin: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border: none;
        content: url(../assets/img/select-arrow-down.svg);
    }

    .task .multiselect--active .multiselect__select {
        transform: rotateZ(180deg) translateY(50%);
    }

    .multiselect--active:not(.multiselect--above) .multiselect__current,
    .multiselect--active:not(.multiselect--above) .multiselect__tags {
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    .task .multiselect__content-wrapper {
        margin-top: 6px;
        padding: 12px;
        border-radius: 28px;
        background-color: var(--violet);
    }

    .task .multiselect__option--highlight.multiselect__option,
    .task .multiselect__option--selected {
        border-radius: 20px;
        background-color: white;
        color: var(--text);
    }

    .task .multiselect__option--selected.multiselect__option--highlight::after {
        content: none;
    }

    .task .multiselect__option--selected.multiselect__option::after {
        content: none;
    }

    .task .multiselect__option--selected.multiselect__option {
        color: var(--text);
    }

    .task .multiselect__option {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
        color: white;
    }

    .task .multiselect__input {
        margin: 0;
        padding: 0;
        max-width: max-content;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;

    }

    .task .multiselect__input::placeholder {
        color: rgba(65, 65, 67, 0.4);
    }

    .task .multiselect__single {
        padding: 0;
        margin: 0;
        max-width: max-content;
    }

    .task__form > .task__table {
        margin-bottom: 40px;
        width: 100%;
        border-collapse: collapse;
    }

    .task__form > .task__table td {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task__form > .task__table td span {
        display: block;
        max-width: 245px;
    }

    table {
        display: block;
    }
    tr {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    td {
        display: inline-block;
    }

    tbody, thead {
        display: block;
    }

    .task__form > span {
        display: block;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .task__intro {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .intro__title {
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        color: var(--violet);
        text-transform: uppercase;
    }

    .intro__subtitle {
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        color: var(--violet);
        text-transform: uppercase;
    }

    .intro__text {
        font-size: 16px;
        font-weight: 600;
        line-height: 19.2px;
    }

    .intro__desc {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .task-4 .task__img {
        width: calc((100% - 36px)/4);
        box-shadow: 4px 5px 50px 0px rgba(236, 234, 225, 1);
    }

    .task-4 .multiselect {
        max-width: 385px;
    }

    .task-4 .multiselect .multiselect__tags {
        background-color: var(--bg);
    }

    .task__table--noborder tbody tr {
        margin-bottom: 0;
    }



    .task__form > .task__table th span {

        max-width: 245px;
    }

    .task__table th span,
    .task__table td span {
        display: block;
    }


    @media (max-width: 1400px) {
        .task__images {
            flex-direction: column;
        }

        .task__img {
            width: auto;
        }
    }

    @media (max-width: 1200px) {
        .task {
            padding-top: 114px;
        }

        .task__number {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__info {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__question {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__title {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task .form__label span {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .form__label > div {
            font-size: 16px;
            line-height: 19.2px;
        }



        .task__desc {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__table td {
            font-size: 14px;
            line-height: 16.8px;
        }

        .carousel__btns .carousel__btn {
            padding: 14px 20px;
            font-size: 20px;
            line-height: 27.28px;
        }

        .task__box {
            gap: 20px;
        }


        .task__block {
            padding: 20px 10px;
            border-radius: 24px;
        }

        .task__images {
            flex-direction: row;
        }

        .task__img {
            width: calc((100% - 24px)/3);
        }

        .task.task-2 {
            padding-top: 20px;
        }

        .task .form__label.form__label--radio {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .form__box--radio {
            margin-bottom: 20px;
        }

        .task__left, .task__right {
            width: calc((100% - 20px)/2);
        }

        .task__form > .task__table tr {
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        .task__form > span {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .form__box--radio,
        .task .form__box--checkboxes {
            margin-bottom: 20px;
        }

        .task .form__label.form__label--radio,
        .task .form__label.form__label--checkbox {
            font-size: 16px;
            line-height: 19.2px;
        }

        .intro__title {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__intro {
            gap: 20px;
        }

        .intro__text {
            font-size: 14px;
            line-height: 16.8px;
        }

        .intro__desc {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__form > .task__table td span {
            max-width: 100%;
        }

        .task__form > .task__table td {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task .multiselect__placeholder {
            font-size: 16px;
            line-height: 19.2px;
        }

        .task__table tr {
            padding: 12px 8px;
            gap: 12px;
        }

        .task .task__table td,
        .task .task__table th {
            padding: 0;
            /* width: 100%; */
        }

        .task__form .task__table td {
            width: 100%;
        }

        .task_item {
            font-size: 16px;
            line-height: 19.2px;
        }


    }

    @media (max-width: 768px) {
        .task__img {
            width: 100%;
            max-height: 216px;
        }

        .task__images {
            overflow: auto;
        }
    }

    @media (max-width: 640px) {
        .task {
            padding-top: 28px;
        }

        .task__number {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__info {
            font-size: 12px;
            line-height: 14.4px;
            order: -1;
        }

        .task__title {
            order: -1;
            font-size: 12px;
            line-height: 16.8px;
        }

        .task__question {
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__box {
            flex-direction: column;
            gap: 0;
        }

        .task__block {
            padding: 28px 20px;
            border-radius: 32px;
        }


        .task__left,
        .task__right {
            display: contents;
        }

        .task__form {
            display: contents;
        }


        .task__desc {
            order: -1;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__tables {
            flex-direction: column;
            order: -1;
            gap: 12px;
        }

        .task__table {
            width: 100%;
        }

        .task__table th {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task__table td {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task__info {
            margin-bottom: 12px;
        }

        .task__info:last-child {
            margin-bottom: 20px;
        }

        .task .form__label > div {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__images {
            order: -1;
        }

        .task-2 .task__desc {
            margin-bottom: 20px;
        }

        .task .form__label span {
            font-size: 12px;
            line-height: 14.4px;
        }

        .task__right picture {
            order: -1;
        }

        .task__form > span {
            margin-bottom: 12px;
            display: inline-block;
            font-size: 12px;
            line-height: 14.4px;
        }

        .task .form__label.form__label--radio,
        .task .form__label.form__label--checkbox {
            font-size: 14px;
            line-height: 16.8px;
        }

        .intro__title {
            font-size: 14px;
            line-height: 16.8px;
        }

        .intro__text {
            font-size: 12px;
            line-height: 14.4px;
        }

        .intro__subtitle {
            font-size: 12px;
            line-height: 14.4px;
        }

        .intro__desc {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task_item {
            font-size: 14px;
            line-height: 16.8px;
        }

        .task__list {
            margin-bottom: 0;
        }


    }

    @media (min-width: 1921px) {
        .task__tables .task__table {
            width: calc((100% - 20px)/2);
            max-width: 100%;
        }
    }


</style>

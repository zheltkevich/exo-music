<template>
    <div class="blured-circles">
        <div class="blured-circles__item blured-circles__item--1"></div>
        <div class="blured-circles__item blured-circles__item--2"></div>
        <div class="blured-circles__item blured-circles__item--3"></div>
        <div class="blured-circles__item blured-circles__item--4"></div>
        <div class="blured-circles__item blured-circles__item--5"></div>
    </div>
</template>

<script>
export default {
    name: 'BluredCircles',
};
</script>

<style lang="scss">
.blured-circles {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    filter: blur(80px);

    &__item {
        flex-shrink: 0;
        width: 33.33%;
        border-radius: 50%;

        &--1 {
            background-color: var(--clr-green);
        }

        &--2 {
            background-color: var(--clr-purple);
        }

        &--3 {
            background-color: var(--clr-orange);
        }

        &--4 {
            width: 50%;
            background-color: var(--clr-light-blue);
        }

        &--5 {
            width: 50%;
            background-color: var(--clr-blue);
        }
    }
}
</style>

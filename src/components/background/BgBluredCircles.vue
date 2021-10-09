<template>
    <div class="bg-blured-circles">
        <!-- <div class="blured-circles__item blured-circles__item--1"></div> -->
        <div class="bg-blured-circles__item bg-blured-circles__item--2"></div>
        <div class="bg-blured-circles__item bg-blured-circles__item--3"></div>
        <div class="bg-blured-circles__item bg-blured-circles__item--4"></div>
        <div class="bg-blured-circles__item bg-blured-circles__item--1"></div>
    </div>
</template>

<script>
export default {
    name: 'BgBluredCircles',
};
</script>

<style lang="scss">
.bg-blured-circles {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    filter: blur(80px);
    transition: 0.3s ease-in-out;

    @media (min-width: $tablet) {
        opacity: 0.08;
    }

    &__item {
        flex-basis: 50%;
        flex-grow: 1;
        flex-shrink: 0;
        min-width: 100px;
        min-height: 100px;
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
            background-color: var(--clr-blue-light);
        }

        &--5 {
            background-color: var(--clr-blue);
        }
    }
}
</style>

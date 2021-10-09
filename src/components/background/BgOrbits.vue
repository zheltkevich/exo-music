<template>
    <div class="bg-orbits">
        <div class="bg-orbits__item bg-orbits__item--1"></div>
        <div class="bg-orbits__item bg-orbits__item--2"></div>
        <div class="bg-orbits__item bg-orbits__item--3"></div>
        <div class="bg-orbits__item bg-orbits__item--4"></div>
    </div>
</template>

<script>
export default {
    name: 'BgOrbits',
};
</script>

<style lang="scss">
.bg-orbits {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__item {
        position: absolute;
        top: 50%;
        left: 50%;
        border: 1px solid var(--clr-elements);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.2;

        &--1 {
            width: 620px;
            height: 620px;
        }

        &--2 {
            width: 720px;
            height: 720px;
        }

        &--3 {
            width: 810px;
            height: 810px;
        }

        &--4 {
            width: 1130px;
            height: 1130px;
        }
    }
}
</style>

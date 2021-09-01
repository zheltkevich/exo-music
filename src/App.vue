<template>
    <div class="view">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',

};
</script>

<style lang="scss">
.view {
    position: relative;
    display: grid;
    height: 100vh;
    overflow: hidden;
    background-color: var(--bgcolor-main);

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
    }
}
</style>

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
    height: 100vh;
    overflow: hidden;
    background-color: var(--bgcolor-main);
}
</style>

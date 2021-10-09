<template>
    <div class="view">
        <Background />
        <router-view />
    </div>
</template>

<script>
import Background from '@/components/background/Background.vue';
export default {
    name: 'App',
    components: {
        Background,
    },
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

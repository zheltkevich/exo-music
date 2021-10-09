<template>
    <div class="view">
        <router-view />
        <Background />
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
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    overflow: hidden;
    background-color: var(--bgcolor-main);
}
</style>

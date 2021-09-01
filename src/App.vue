<template>
    <div class="view">
        <router-view />
        <ViewBackground class="view__background" />
    </div>
</template>

<script>
import ViewBackground from '@/components/ViewBackground.vue';
export default {
    name: 'App',
    components: {
        ViewBackground,
    },
};
</script>

<style lang="scss">
.view {
    position: relative;
    display: grid;
    background-color: var(--bgcolor-main);

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>

<template>
    <div
        class="home"
        data-theme="default">
        dsagasdgs
        <img
            alt="Логотип ExoMusic"
            src="../assets/svg/logo.svg">
        <ViewBackground class="view__background" />
    </div>
</template>

<script>
import ViewBackground from '@/components/ViewBackground.vue';

export default {
    name: 'Home',
    components: {
        ViewBackground,
    },
};
</script>

<style lang="scss">
.home {
    color: var(--text-main);
    background-color: var(--bg-main);
}
</style>

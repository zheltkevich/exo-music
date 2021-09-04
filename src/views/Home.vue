<template>
    <ViewBackground
        class="background"
        data-theme="default">
        <template #main>
            <main class="main">
                <header class="main__header">
                    <img
                        alt="Логотип ExoMusic"
                        src="../assets/svg/logo.svg"
                        width="250"
                        height="90">
                </header>
                <section class="main__content">
                    Content Content Content
                </section>
            </main>
        </template>
    </ViewBackground>
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
.main {
    width: 100%;
    height: 100%;

    &__header {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
}
</style>

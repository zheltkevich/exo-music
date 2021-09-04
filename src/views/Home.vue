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
                    <nav class="main__nav main-nav">
                        <ul class="main-nav__list">
                            <li class="main-nav__item">
                                <NavButton />
                            </li>
                        </ul>
                    </nav>
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
import NavButton from '@/components/NavButton.vue';

export default {
    name: 'Home',
    components: {
        ViewBackground,
        NavButton,
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
        padding: 3%;
    }
}
</style>

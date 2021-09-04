<template>
    <ViewBackground
        class="background"
        data-theme="default">
        <template #main>
            <main class="main">
                <header class="main__header main-header">
                    <img
                        class="main-header__logo"
                        alt="Логотип ExoMusic"
                        src="../assets/svg/logo.svg"
                        width="250"
                        height="90">
                    <nav class="main-header__navigation navigation">
                        <ul class="navigation__list">
                            <li class="navigation__item">
                                <NavButton class="navigation__button" />
                            </li>
                        </ul>
                    </nav>
                </header>
                <section class="main__content main-content">
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
        padding: 3%;
    }
}

.main-header {
    &__logo {
        margin: 0 auto;
    }
}

.navigation {
    &__list {
        display: flex;
        flex-wrap: wrap;
    }

    &__item {
        flex-basis: 50%;
        flex-grow: 0;
        flex-shrink: 0;
    }
}
</style>

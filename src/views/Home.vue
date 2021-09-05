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
                            <li
                                v-for="(item, i) in navItems"
                                :key="i"
                                :index="i"
                                class="navigation__item">
                                <NavButton
                                    class="navigation__button"
                                    :title="item.title" />
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

const NAV_ITEMS = [
    {
        title: 'Каталог',
    },
    {
        title: 'Контакты',
    },
    {
        title: 'Конструктор',
    },
    {
        title: 'Галерея',
    },
];

export default {
    name: 'Home',
    components: {
        ViewBackground,
        NavButton,
    },
    data() {
        return {
            navItems: NAV_ITEMS,
        };
    },
    computed: {

    },
};
</script>

<style lang="scss">
.main {
    width: 100%;
    height: 100%;

    &__header {
        height: 100%;
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
        display: flex;
        flex-basis: 50%;
        flex-grow: 0;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
    }
}
</style>

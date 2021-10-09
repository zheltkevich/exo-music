<template>
    <div>
        <Background
            class="background"
            data-theme="default" />
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
    </div>
</template>

<script>
import Background from '@/components/background/Background.vue';
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
    name: 'MainView',
    components: {
        Background,
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

.main-content {
    display: none;
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

.test-border {
    position: relative;
    width: 200px;
    height: 400px;
    margin: 0 auto;
    background-color: transparent;
}
</style>

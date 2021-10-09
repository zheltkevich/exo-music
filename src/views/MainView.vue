<template>
    <main class="main">
        <header class="main__header main-header">
            <a
                class="main-header__logo-link"
                href="/"
                rel="noopener noreferrer">
                <img
                    class="main-header__logo"
                    alt="Логотип SteelVoice"
                    src="../assets/svg/logo.svg"
                    width="250"
                    height="90">
            </a>
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
            <MainPicture />
        </section>
    </main>
</template>

<script>
import NavButton from '@/components/NavButton.vue';
import MainPicture from '@/components/MainPicture.vue';

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
        NavButton,
        MainPicture,
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
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.main-header {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;

    &__logo-link {
        position: absolute;
        display: block;
    }

    &__logo {
        margin: 0 auto;
    }
}

.main-content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.navigation {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 100%;

    &__list {
        display: flex;
        flex-grow: 1;
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

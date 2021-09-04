<template>
    <button class="nav-button">
        <svg
            class="nav-button__icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none">
            <rect
                y="32"
                width="24"
                height="4"
                rx="2"
                transform="rotate(-90 0 32)"
                fill="#8E8E8E" />
            <rect
                x="12"
                y="40"
                width="40"
                height="4"
                rx="2"
                transform="rotate(-90 12 40)"
                fill="#8E8E8E" />
            <rect
                x="24"
                y="40"
                width="40"
                height="4"
                rx="2"
                transform="rotate(-90 24 40)"
                fill="#8E8E8E" />
            <rect
                x="36"
                y="32"
                width="24"
                height="4"
                rx="2"
                transform="rotate(-90 36 32)"
                fill="#8E8E8E" />
        </svg>

        <span class="nav-button__title">
            Каталог
        </span>
    </button>
</template>

<script>
export default {
    name: 'NavButton',
    props: {
        // title: {
        //     type: String,
        //     default: 'Меню',
        // },
    },
};
</script>

<style lang="scss">
.nav-button {
    width: 180px;
    height: 180px;
    background-color: transparent;
    border: 1px solid var(--color-elements);
    border-radius: 50%;

    &__icon {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-main);
        font-weight: 500;
        font-size: 14px;
        line-height: 1.4;
        letter-spacing: 4px;
        text-transform: uppercase;
    }
}
</style>

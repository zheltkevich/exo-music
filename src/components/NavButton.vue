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
            {{ title }} fsdg
        </span>
    </button>
</template>

<script>
export default {
    name: 'NavButton',
    props: {
        title: {
            type: String,
            default: 'Меню',
        },
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
        width: 30px;
        height: 30px;
    }

    &__title {
        color: #FFFFFF;
    }
}
</style>

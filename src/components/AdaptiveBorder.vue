<template>
    <svg
        class="adaptive-border"
        width="100%"
        height="100%"
        fill="none">
        <g
            class="adaptive-border__g"
            opacity="1">
            <rect
                x="0"
                y="0"
                rx="0"
                ry="0"

                width="100%"
                height="100%"
                stroke-width="2"
                stroke-dasharray="10 10 10 10"
                stroke-dashoffset="20px"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none" />
        </g>
    </svg>
</template>

<script>
export default {
    name: 'AdaptiveBorder',
};
</script>

<style lang="scss">
.adaptive-border {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    // &__g {
    //     width: 100%;
    //     height: 100%;
    // }
}
</style>

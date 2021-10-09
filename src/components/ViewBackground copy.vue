<template>
    <div class="view-background">
        <slot name="main"></slot>

        <svg
            class="view-background__viewport"
            baseProfile="full"
            width="100%"
            height="100%"
            viewport="0 0 100% 100%"
            fill="none">
            <g class="view-background__circles">
                <circle
                    class="view-background__circle"
                    cx="25%"
                    cy="30%"
                    r="10%"
                    fill="#70FF00" />

                <circle
                    class="view-background__circle"
                    cx="50%"
                    cy="30%"
                    r="10%"
                    fill="#CC00FF" />

                <circle
                    class="view-background__circle"
                    cx="75%"
                    cy="30%"
                    r="10%"
                    fill="#FFB800" />

                <circle
                    class="view-background__circle"
                    cx="35%"
                    cy="65%"
                    r="10%"
                    fill="#00A3FF" />
                <circle
                    class="view-background__circle"
                    cx="65%"
                    cy="65%"
                    r="10%"
                    fill="#0038FF" />
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'ViewBackground',
};
</script>

<style lang="scss">
.view-background {
    position: relative;
    max-width: 100%;
    height: 100%;
    max-height: 100%;

    &__viewport {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    &__circles {
        fill: #FFFFFF;
    }

    &__circle {
        filter: blur(400px);
    }

    &__blur-container {
        flex-basis: 33%;
        flex-grow: 0;
        flex-shrink: 0;
        max-width: 33%;
        max-height: 50%;
    }
}
</style>

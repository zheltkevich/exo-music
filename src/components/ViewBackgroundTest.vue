<template>
    <div class="view-background">
        <svg
            class="view-background__viewport"
            baseProfile="full"
            width="100%"
            height="100%"
            viewport="0 0 100% 100%"
            fill="none">

            <defs>
                <linearGradient id="Gradient1">
                    <stop
                        class="stop1"
                        offset="0%" />
                    <stop
                        class="stop2"
                        offset="50%" />
                    <stop
                        class="stop3"
                        offset="100%" />
                </linearGradient>

                <linearGradient
                    id="Gradient2"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1">
                    <stop
                        offset="0%"
                        stop-color="#70FF00" />
                    <stop
                        offset="50%"
                        stop-color="#CC00FF"
                        stop-opacity="0" />
                    <stop
                        offset="100%"
                        stop-color="#FFB800" />
                </linearGradient>

                <linearGradient
                    id="Gradient3"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1">
                    <stop
                        offset="0%"
                        stop-color="red" />
                    <stop
                        offset="50%"
                        stop-color="black"
                        stop-opacity="0" />
                    <stop
                        offset="100%"
                        stop-color="blue" />
                </linearGradient>

                <linearGradient
                    id="Gradient4"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1">
                    <stop
                        offset="0%"
                        stop-color="red" />
                    <stop
                        offset="50%"
                        stop-color="black"
                        stop-opacity="0" />
                    <stop
                        offset="100%"
                        stop-color="blue" />
                </linearGradient>

                <linearGradient
                    id="Gradient5"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1">
                    <stop
                        offset="0%"
                        stop-color="red" />
                    <stop
                        offset="50%"
                        stop-color="black"
                        stop-opacity="0" />
                    <stop
                        offset="100%"
                        stop-color="blue" />
                </linearGradient>
            </defs>

            <g class="view-background__circles">
                <circle
                    class="view-background__circle"
                    cx="25%"
                    cy="30%"
                    r="10%"
                    fill="url(#Gradient1)" />

                <circle
                    class="view-background__circle"
                    cx="50%"
                    cy="30%"
                    r="10%"
                    fill="url(#Gradient2)" />

                <circle
                    class="view-background__circle"
                    cx="75%"
                    cy="30%"
                    r="10%"
                    fill="url(#Gradient3)" />

                <circle
                    class="view-background__circle"
                    cx="35%"
                    cy="65%"
                    r="10%"
                    fill="url(#Gradient4)" />
                <circle
                    class="view-background__circle"
                    cx="65%"
                    cy="65%"
                    r="10%"
                    fill="url(#Gradient5)" />
            </g>

            <text
                x="50%"
                y="50%"
                font-size="60"
                text-anchor="middle"
                fill="white">SVG</text>
            <path
                d="M 10 75 L 190 75"
                stroke="red"
                stroke-linecap="round"
                stroke-width="1"
                stroke-dasharray="5,5"
                fill="none" />

        </svg>

        <svg
            class="view-background__blur-svg"
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            fill="none">
            <g
                opacity="1"
                filter="url(#filter1)">
                <circle
                    cx="0"
                    cy="0"
                    r="200"
                    fill="#343434" />
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
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;

    &__svg {
        width: 100%;
        height: 100%;
    }

    &__circles {
        fill: #FFFFFF;
    }

    &__circle {
        filter: blur(20px);
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

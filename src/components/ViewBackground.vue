<template>
    <div class="view-background">
        <svg
            baseProfile="full"
            width="100%"
            height="100%"
            viewport="0 0 100% 100%"
            fill="none">

            <rect
                width="100%"
                height="100%"
                stroke="red"
                stroke-linecap="round"
                stroke-width="2"
                stroke-dasharray="20"
                stroke-dashoffset="20"
                rx="50"
                ry="50"
                fill="none" />

            <circle
                cx="50%"
                cy="50%"
                r="16%"
                fill="green" />

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

            <defs>
                <filter
                    id="filter"
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape" />
                    <feGaussianBlur
                        stdDeviation="250"
                        result="effect1_foregroundBlur" />
                </filter>
            </defs>
        </svg>

        <!-- <div class="view-background__blur-container view-background__blur-container--0">
            <svg
            class="view-background__blur-svg view-background__blur-svg--0"
            width="1534"
            height="1214"
            viewBox="0 0 1534 1214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
            opacity="0.15"
            filter="url(#filter0_f)">
            <circle
            cx="767.012"
            cy="446.5"
            r="266.957"
            fill="#343434" />
            </g>
            <defs>
            <filter
            id="filter0_f"
            x="0.0546875"
            y="-320.458"
            width="1533.91"
            height="1533.91"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
            <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
            <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur" />
            </filter>
            </defs>
            </svg>
            </div>

            <div class="view-background__blur-container view-background__blur-container--1">
            <svg
            class="view-background__blur-svg view-background__blur-svg--1"
            width="1054"
            height="1054"
            viewBox="0 0 1054 1054"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
            opacity="0.06"
            filter="url(#filter0_f)">
            <circle
            cx="286.957"
            cy="286.957"
            r="266.957"
            fill="#70FF00" />
            </g>
            <defs>
            <filter
            id="filter0_f"
            x="-480"
            y="-480"
            width="1533.91"
            height="1533.91"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
            <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
            <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur" />
            </filter>
            </defs>
            </svg>
            </div>

            <div class="view-background__blur-container view-background__blur-container--2">
            <svg
            class="view-background__blur-svg view-background__blur-svg--2"
            width="1534"
            height="1054"
            viewBox="0 0 1534 1054"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
            opacity="0.1"
            filter="url(#filter0_f)">
            <circle
            cx="767.012"
            cy="286.957"
            r="266.957"
            fill="#CC00FF" />
            </g>
            <defs>
            <filter
            id="filter0_f"
            x="0.0546875"
            y="-480"
            width="1533.91"
            height="1533.91"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
            <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
            <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur" />
            </filter>
            </defs>
            </svg>
            </div>

            <div class="view-background__blur-container view-background__blur-container--3">
            <svg
            class="view-background__blur-svg view-background__blur-svg--3"
            width="1054"
            height="1054"
            viewBox="0 0 1054 1054"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
            opacity="0.1"
            filter="url(#filter0_f)">
            <circle
            cx="767.276"
            cy="286.957"
            r="266.957"
            fill="#FFB800" />
            </g>
            <defs>
            <filter
            id="filter0_f"
            x="0.318848"
            y="-480"
            width="1533.91"
            height="1533.91"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
            <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
            <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur" />
            </filter>
            </defs>
            </svg>
            </div>

            <div class="view-background__blur-container view-background__blur-container--4">
            <svg
            class="view-background__blur-svg view-background__blur-svg--4"
            width="1306"
            height="1373"
            viewBox="0 0 1306 1373"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
            opacity="0.11"
            filter="url(#filter0_f)">
            <ellipse
            cx="413.328"
            cy="639.61"
            rx="392.538"
            ry="233.39"
            fill="#00A3FF" />
            </g>
            <defs>
            <filter
            id="filter0_f"
            x="-479.21"
            y="-93.78"
            width="1785.08"
            height="1466.78"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
            <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
            <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur" />
            </filter>
            </defs>
            </svg>
            </div>

            <div class="view-background__blur-container view-background__blur-container--5">
            <svg
            class="view-background__blur-svg view-background__blur-svg--5"
            width="1299"
            height="1373"
            viewBox="0 0 1299 1373"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
            opacity="0.15"
            filter="url(#filter0_f)">
            <ellipse
            cx="889.855"
            cy="644.349"
            rx="389.379"
            ry="228.651"
            fill="#0038FF" />
            </g>
            <defs>
            <filter
            id="filter0_f"
            x="0.476562"
            y="-84.3022"
            width="1778.76"
            height="1457.3"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
            <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
            <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur" />
            </filter>
            </defs>
            </svg>
            </div> -->
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

    &__blur-container {
        flex-basis: 33%;
        flex-grow: 0;
        flex-shrink: 0;
        max-width: 33%;
        max-height: 50%;
    }
}
</style>

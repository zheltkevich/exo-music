<template>
    <div class="background">
        <div class="background__relative-container">
            <BgBluredCircles class="background__bg-blured-circles" />
            <BgOrbits class="background__bg-orbits" />
            <slot name="orbits"></slot>
        </div>
    </div>
</template>

<script>
import BgBluredCircles from '@/components/background/BgBluredCircles.vue';
import BgOrbits from '@/components/background/BgOrbits.vue';

export default {
    name: 'Background',
    components: {
        BgBluredCircles,
        BgOrbits,
    },
};
</script>

<style lang="scss">
.background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    pointer-events: none;

    &__relative-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>

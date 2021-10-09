<template>
    <div class="background">
        <BluredCircles class="background__blured-circles" />
        <slot name="orbits"></slot>
    </div>
</template>

<script>
import BluredCircles from '@/components/background/BluredCircles.vue';

export default {
    name: 'Background',
    components: {
        BluredCircles,
    },
};
</script>

<style lang="scss">
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
}
</style>

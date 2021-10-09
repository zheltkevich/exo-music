<template>
    <div class="background">
        <BluredCircles />
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
.view-background {
    position: relative;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
}
</style>

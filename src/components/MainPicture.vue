<template>
    <div class="main-picture">
        <img
            class="main-picture__img"
            src="@/assets/img/picture.png">
    </div>
</template>

<script>
export default {
    name: 'MainPicture',
};
</script>

<style lang="scss">
.main-picture {
    &__img {
        display: flex;
    }
}
</style>

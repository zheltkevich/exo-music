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
    width: 40%;
    max-width: 600px;
    max-height: 500px;

    &__img {
        display: flex;
        width: 100%;
    }
}
</style>

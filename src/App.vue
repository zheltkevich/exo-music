<template>
    <div class="nav">
        <router-link to="/">
            Home
        </router-link> |
        <router-link to="/about">
            About
        </router-link>
    </div>
    <router-view />
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
#app { // stylelint-disable-line selector-max-id
    color: #2C3E50;
    font-weight: 700;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.nav {
    padding: 30px;

    a {
        color: #2C3E50;
        font-weight: 700;

        &.router-link-exact-active {
            color: #42B983;
        }
    }
}
</style>

module.exports = {
    publicPath: '/exo-music/',
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "@/scss/_utils.scss";',
            },
        },
    },
};

const { name } = require('../package.json');

module.exports = {
    publicPath: '/vueapp',
    chainWebpack: config => config.resolve.symlinks(false),
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    },
    devServer: {
        port: process.env.VUE_APP_PORT,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};
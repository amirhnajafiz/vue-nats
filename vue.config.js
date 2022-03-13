// vue.config.js

/**
 * Vue client configs.
 * 
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    devServer: {
        proxy: process.env.TELEGRAPH_HOST // Setting the proxy to connect to our backend
    }
}
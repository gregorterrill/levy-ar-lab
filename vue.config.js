// vue.config.js
var merge = require('webpack-merge')

module.exports = {
  baseUrl: './',
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(options =>
        merge(options, {
          publicPath: process.env.NODE_ENV === 'production' ? '../' : '/'
        })
      )
  }
}
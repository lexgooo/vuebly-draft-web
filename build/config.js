var path = require('path')

module.exports = {
  build: {
    port: 8080,
    distRoot: path.resolve(__dirname, '../dist'),
    distWeb: path.resolve(__dirname, '../dist/web'),
    distWebStatic: path.resolve(__dirname, '../dist/web/static'),
    distWebIndex: path.resolve(__dirname, '../dist/web/index.html'),
    distWeex: path.resolve(__dirname, '../dist/weex'),
    distWeexStatic: path.resolve(__dirname, '../dist/weex/static'),
    distWeexIndex: path.resolve(__dirname, '../dist/weex/static/js/index.js'),
    webEntry: path.resolve(__dirname, '../src/main.web.js'),
    weexViewsSrc: path.resolve(__dirname, '../src/views'),
    weexViewsEntries: path.resolve(__dirname, '../src/entries'),
    assetsPublicPath: '/',
    sourceMap: true
  },
  dev: {
    port: 8080,
    assetsPublicPath: '/',
    autoOpenBrowser: true,
    webEntry: path.resolve(__dirname, '../src/main.web.js'),
    weexViewsSrc: path.resolve(__dirname, '../src/views'),
    weexViewsEntries: path.resolve(__dirname, '../src/entries'),
    proxyTable: {},
    sourceMap: true
  }
}

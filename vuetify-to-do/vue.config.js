module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.VUE_APP_PUBLIC_PATH === 'production'
    ? '/vuetify-to-do/'
    : '/'

}

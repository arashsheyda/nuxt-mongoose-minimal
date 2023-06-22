// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-mongoose',
  ],

  mongoose: {
    uri: 'mongodb://127.0.0.1:27017/nuxt-mongoose',
  },
})

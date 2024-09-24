
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon", "@nuxtjs/i18n"],
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  app:{
    head: {
      title: 'João Pedro',
    },
  },
  css: ["~/assets/css/tailwind.css"],
});

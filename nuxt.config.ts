// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [
    "~/assets/css/input.css",
    "~/assets/css/datepicker.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@vuepic/vue-datepicker/dist/main.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@vee-validate/nuxt"],
  components: [{ path: "./components" }],
  imports: {
    dirs: ["composables/**"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
});

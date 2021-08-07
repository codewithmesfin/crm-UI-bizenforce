import colors from "vuetify/es5/util/colors";
import i18n from "./config/i18n";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - bizenforce",
    title: "bizenforce",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        defaultLocale: "en",
        locales: [
          {
            code: "en",
            name: "English"
          },
          {
            code: "am",
            name: "አማርኛ"
          },
          {
            code: "oro",
            name: "Afaan Oroomo"
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#01ae53",
          primaryDark: "#388E3C",
          secondary: "#091e30",
          accent: "#f9b22b",
          error: "#f44336",
          warning: "#ffeb3b",
          info: "#2196f3",
          success: "#1867c0"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

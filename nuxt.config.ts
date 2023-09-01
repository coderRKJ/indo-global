export default defineNuxtConfig({
  // routeRules: {
  //   "/services": { redirect: "/#services", ssr: false },
  //   "/trade": { redirect: "/#trade", ssr: false },
  //   "/events": { redirect: "/#events", ssr: false },
  //   "/resources": { redirect: "/#resources", ssr: false },
  //   "/membership": { redirect: "/#membership", ssr: false },
  //   "/support": { redirect: "/#support", ssr: false },
  //   "/contact": { redirect: "/#contact", ssr: false },
  // },
  css: ["~/assets/styles/main.scss"],

  // https://github.com/nuxt-themes/alpine
  extends: "@nuxt-themes/alpine",

  modules: [
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
  ],
});

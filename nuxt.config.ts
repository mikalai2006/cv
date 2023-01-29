// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/cv/",
  },
  css: ["@/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    ["@storyblok/nuxt", { accessToken: "AMyr3fDjVjFviDQE8WkFrQtt" }],
  ],
});

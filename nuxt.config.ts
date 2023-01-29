// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  ssr: false,
  app: {
    baseURL: "/me",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    ["@storyblok/nuxt", { accessToken: "AMyr3fDjVjFviDQE8WkFrQtt" }],
  ],
});

<template>
  <div class="bg-s-100 dark:bg-s-800">
    <div class="max-w-screen-lg mx-auto px-4 py-6 text-center md:text-left">
      <h1
        class="text-4xl md:text-6xl tracking-wide font-bold text-black dark:text-s-200 underline underline-offset-8 decoration-wavy decoration-p-500"
      >
        {{ blok.title }}
      </h1>
      <h2 class="pt-6 text-xl font-bold text-s-500 dark:text-s-300">
        {{ blok.subtitle }}
      </h2>
      <p class="pt-6">
        {{ blok.description }}
      </p>
      <div class="py-6 flex">
        <Nuxt-Link
          class="text-lg block btn b-rounded btn-second ringed fill"
          to="/projects"
        >
          View projects
        </Nuxt-Link>
        <Nuxt-Link
          class="ml-4 text-lg block btn b-rounded btn-primary ringed fill"
          to="/cv"
        >
          View cv
        </Nuxt-Link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  blok: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

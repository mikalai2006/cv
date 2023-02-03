<template>
  <div class="bg-s-50 dark:bg-s-800 pt-20 print:hidden">
    <div class="max-w-screen-lg mx-auto px-4 py-6 text-center md:text-left">
      <h1
        class="text-4xl md:text-6xl tracking-wide font-extrabold text-black dark:text-s-200 underline underline-offset-8 decoration-wavy decoration-p-500"
      >
        {{ blok.title }}
      </h1>
      <h2 class="pt-6 text-xl font-bold text-s-500 dark:text-s-300">
        {{ blok.subtitle }}
      </h2>
      <p class="pt-6">
        {{ blok.description }}
      </p>
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

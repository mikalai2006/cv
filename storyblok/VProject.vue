<template>
  <div class="p-4 bg-white dark:bg-s-800 shadow-md rounded-md">
    <div
      v-if="blok.images.length > 0"
      class="grid grid-cols-2 rounded-md overflow-hidden"
    >
      <div v-for="img in blok.images">
        <img
          :src="img.filename"
          :alt="blok.title"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
    <h3 class="mt-4 text-lg font-medium">
      {{ blok.title }}
    </h3>
    <p>
      {{ blok.description }}
    </p>
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

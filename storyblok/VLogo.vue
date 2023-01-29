<template>
  <NuxtLink
    class="logo p-2 flex items-center font-medium"
    to="/"
    :title="blok.text"
  >
    <img
      :src="blok.image.filename"
      :title="blok.text"
      class="w-6 h-6 md:mr-2"
    />
    <span class="whitespace-nowrap">{{ blok.text }}</span>
  </NuxtLink>
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

<template>
  <NuxtLink class="" :to="`/${blok.link.cached_url}`" :title="blok.title">
    <span class="whitespace-nowrap">{{ blok.title }}</span>
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

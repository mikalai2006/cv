<template>
  <nuxt-link
    :to="to"
    :title="title"
    class="text-s-300 hover:bg-s-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss">
.router-link-active {
  @apply bg-gray-900 text-white;
}
</style>

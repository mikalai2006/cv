<template>
  <nav>
    <ul class="flex space-x-2 items-center">
      <StoryblokComponent
        v-for="item in blok.links"
        :key="item._uid"
        :blok="item"
        class="px-4 py-2 hover:bg-s-200 dark:hover:bg-s-700 rounded-md"
      />
    </ul>
  </nav>
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

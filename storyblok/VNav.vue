<template>
  <nav>
    <ul
      class="flex flex-col items-stretch space-y-2 md:space-y-0 md:space-x-2 md:flex-row md:items-center"
    >
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

<template>
  <div>
    <div
      class="max-w-screen-lg mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <StoryblokComponent
        v-for="item in blok.projects"
        :key="item._uid"
        :blok="item"
      />
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

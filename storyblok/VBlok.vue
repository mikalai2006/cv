<template>
  <section
    class="max-w-screen-lg mx-auto mt-4 p-4 md:p-6 bg-white dark:bg-s-800 rounded-md print:text-sm print:p-0 print:bg-transparent"
  >
    <h3 class="text-lg font-medium mb-2">
      {{ blok.title }}
    </h3>
    <div :class="{ 'flex flex-row gap-4': blok.flex }">
      <StoryblokComponent
        v-for="item in blok.bloks"
        v-editable="item"
        :key="item._uid"
        :blok="item"
      />
    </div>
  </section>
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

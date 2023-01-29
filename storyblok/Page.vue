<template>
  <main v-editable="blok">
    <StoryblokComponent
      v-for="item in blok.body"
      v-editable="item"
      :key="item._uid"
      :blok="item"
    />
  </main>
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

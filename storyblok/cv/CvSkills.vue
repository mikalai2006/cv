<template>
  <div>
    <template v-for="(item, index) in blok.bloks" :key="item._uid">
      <StoryblokComponent v-editable="item" :blok="item" />
      <span v-if="isEnd(index)" class="mr-1"> , </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const isEnd = (index: number) => index < props.blok.bloks.length - 1;
</script>

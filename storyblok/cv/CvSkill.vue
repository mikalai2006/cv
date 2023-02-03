<template>
  <span>
    {{ blok.name }}
    <span v-if="blok.awesome != ''" class="text-s-500">
      ({{ blok.awesome }})
    </span>
  </span>
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

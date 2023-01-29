<template>
  <div>
    <h3>
      {{ blok.name }}
    </h3>
    <!-- <p>
      {{ blok.awesome }}
    </p> -->
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

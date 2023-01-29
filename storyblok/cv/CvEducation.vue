<template>
  <div class="print:text-sm print:p-0 print:bg-transparent">
    <p class="text-s-500">
      {{ blok.rate }}
    </p>
    <h3 class="text-lg">
      {{ blok.title }}
    </h3>
    <h4 class="font-medium">
      {{ blok.prof }}
    </h4>
    <p class="text-s-500">
      {{ blok.area }}
    </p>
    <p class="text-s-500">
      {{ blok.date }}
    </p>
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

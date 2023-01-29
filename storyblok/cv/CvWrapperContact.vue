<template>
  <div class="flex items-baseline mb-1">
    <i
      v-if="blok.type.icon"
      :class="[blok.type.icon, blok.type.type, 'pr-2']"
    ></i>
    <div>
      <a :title="blok.contact" :href="link.cached_url" :target="link.target">
        {{ blok.contact }}
      </a>
    </div>
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

const link = computed(() => props.blok.href || {});
</script>

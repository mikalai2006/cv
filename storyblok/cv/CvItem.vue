<template>
  <div
    class="p-4 md:p-6 bg-white dark:bg-s-800 rounded-md print:text-sm print:p-0 print:bg-transparent"
  >
    <h3 class="text-lg font-medium">
      {{ blok.title }}
    </h3>
    <h3 v-if="blok.job" class="text-lg font-medium">
      {{ blok.job }}
    </h3>
    <div class="flex flex-row text-s-500 py-2">
      <div class="flex-auto">
        <p v-if="blok.company">
          {{ blok.company }}
        </p>
      </div>
      <div class="flex-none">
        <p v-if="blok.location">
          {{ blok.location }}
        </p>
      </div>
    </div>
    <p>
      {{ blok.description }}
    </p>
    <ul class="pl-4 md:pl-6 py-2 list-disc">
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
    <p v-if="blok.date" class="text-s-500 pt-2">
      {{ blok.date }}
    </p>
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

const list = computed(() => props.blok.lists.map((x: any) => x.text) || []);
</script>

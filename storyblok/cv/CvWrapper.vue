<template>
  <div
    class="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row print:flex-row gap-4 print:p-0"
  >
    <div class="flex-1 flex flex-col gap-4">
      <div class="p-4 md:p-6 bg-white dark:bg-s-800 rounded-md">
        <img
          :src="blok.photo.filename"
          :title="blok.name"
          class="mx-auto rounded-full mb-4 w-40 h-40"
        />
        <h3
          class="text-2xl font-bold whitespace-nowrap print:whitespace-normal"
        >
          {{ blok.name }}
        </h3>
        <h4 class="text-xl font-medium whitespace-nowrap my-1">
          {{ blok.job }}
        </h4>
      </div>
      <StoryblokComponent
        v-for="item in blok.left"
        v-editable="item"
        :key="item._uid"
        :blok="item"
      />
    </div>
    <div class="flex-auto flex flex-col gap-4">
      <StoryblokComponent
        v-for="item in blok.right"
        v-editable="item"
        :key="item._uid"
        :blok="item"
      />
      <div class="text-sm text-s-500">
        <ClientOnly>
          {{ fullURL }}
        </ClientOnly>
      </div>
      <div class="print:hidden">
        <FButton @click="printPage">
          <LIcon class="inline mr-1">
            {{ iPrint }}
          </LIcon>
          Print cv
        </FButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { iPrint } from "~~/composable/useIcons";

defineProps({
  blok: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const fullURL = computed(() => (window ? window.location : ""));

const printPage = () => window.print();
</script>

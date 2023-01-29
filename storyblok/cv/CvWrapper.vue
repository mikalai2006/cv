<template>
  <div>
    <div
      class="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row print:flex-row gap-4"
    >
      <div class="flex-auto flex flex-col gap-4">
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
          <div class="mt-4">
            <StoryblokComponent
              v-for="item in blok.contacts"
              v-editable="item"
              :key="item._uid"
              :blok="item"
            />
          </div>
        </div>
        <div class="p-4 md:p-6 bg-white dark:bg-s-800 rounded-md">
          <h3 class="text-lg font-medium mb-2">Skills</h3>
          <div class="flex items-baseline flex-wrap">
            <template v-for="(item, index) in blok.skills" :key="item._uid">
              <StoryblokComponent :blok="item" v-editable="item" />
              <span v-if="index < blok.skills.length - 1" class="block mr-2">
                ,
              </span>
            </template>
          </div>
        </div>
      </div>
      <div class="flex-auto flex flex-col gap-4">
        <StoryblokComponent
          v-for="item in blok.items"
          v-editable="item"
          :key="item._uid"
          :blok="item"
        />
        <div
          class="p-4 md:p-6 bg-white dark:bg-s-800 rounded-md print:p-0 print:bg-transparent"
        >
          <h3 class="text-lg font-medium mb-2">Education</h3>
          <StoryblokComponent
            v-for="item in blok.edu"
            v-editable="item"
            :key="item._uid"
            :blok="item"
          />
        </div>
      </div>
    </div>
    <div class="print:hidden">
      <FButton @click="printPage">Print</FButton>
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

const printPage = () => window.print();
</script>

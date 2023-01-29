<template>
  <div
    v-editable="blok"
    class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"
  >
    <StoryblokComponent
      v-for="item in blok.columns"
      :key="item._uid"
      :blok="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { IBlok } from "~~/types/storyblok";

interface IBLokBody extends IBlok {
  columns: IBlok[];
}

defineProps({
  blok: {
    type: Object as PropType<IBLokBody>,
    default: () => {
      return {};
    },
  },
});
</script>

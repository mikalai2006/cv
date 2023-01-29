<template>
  <nav class="bg-s-100 dark:bg-s-800 text-black dark:text-white">
    <div class="max-w-screen-lg mx-auto">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center sm:hidden">
          <FButton
            mode="link"
            @click="openMenu = !openMenu"
            aria-label="open/close nav"
            class="text-2xl"
          >
            <LIcon v-if="!openMenu">
              {{ iList }}
            </LIcon>
            <LIcon v-else>
              {{ iClose }}
            </LIcon>
          </FButton>
        </div>
        <div class="flex-auto flex items-center">
          <StoryblokComponent
            v-for="item in headerMenu.bloks"
            :key="item._uid"
            :blok="item"
            :class="[{ 'hidden md:block': item.component == 'VNav' }]"
          />
        </div>
      </div>
    </div>

    <Transition
      enter-from-class="-translate-y-1/2 scale-y-0"
      enter-active-class="duration-200"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-from-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="duration-200"
      leave-to-class="-translate-y-1/2 scale-y-0"
    >
      <div
        v-if="openMenu"
        class="sm:hidden bg-s-800 transform transition z-50 absolute left-0 right-0 shadow-lg"
        id="mobile-menu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <StoryblokComponent
            v-for="item in headerMenu.menu"
            :key="item._uid"
            :blok="item"
            @click="openMenu = false"
          />
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { iClose, iList } from "~~/composable/useIcons";

const open = ref(false);
const openMenu = ref(false);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/global/header", {
  version: "draft",
  resolve_links: "url",
});

const headerMenu = ref(null);
headerMenu.value = data.story.content;
</script>

<style lang="postcss">
.router-link-active:not(.logo) {
  @apply bg-p-500/10 rounded-md;
}
</style>

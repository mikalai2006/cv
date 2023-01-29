<template>
  <header class="absolute top-0 w-full text-black dark:text-white">
    <div
      v-if="openMenu"
      class="md:hidden fixed inset-0 bg-black/50 z-10"
      @click="openMenu = false"
    ></div>
    <div class="relative z-50 max-w-screen-lg mx-auto">
      <div class="flex items-center justify-between h-16">
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
            v-editable="item"
            :key="item._uid"
            :blok="item"
            :class="[{ 'hidden md:block': item.component == 'VNav' }]"
          />
        </div>
      </div>
    </div>

    <Transition
      enter-from-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-active-class="duration-200"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-from-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="duration-200"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <div
        v-if="openMenu"
        class="sm:hidden bg-s-100 dark:bg-s-800 transform transition z-10 absolute top-0 pt-16 left-0 right-0 shadow-lg"
        id="mobile-menu"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <StoryblokComponent
            v-if="vnav"
            :key="vnav._uid"
            :blok="vnav"
            @click="openMenu = false"
          />
        </div>
      </div>
    </Transition>
  </header>
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

const headerMenu = data.story.content;

const vnav = computed(() =>
  headerMenu.bloks?.find((x) => x.component == "VNav")
);
</script>

<style lang="postcss">
.router-link-active:not(.logo) {
  @apply bg-p-500/10 rounded-md;
}
</style>

<script lang="ts" setup>
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/global/header", {
  version: "draft",
  resolve_links: "url",
});

const headerMenu = data.story.content;
</script>

<template>
  <header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
      <StoryblokComponent
        v-for="item in headerMenu.logo"
        :key="item._uid"
        :blok="item"
      />
      <nav v-if="headerMenu">
        <ul class="flex space-x-8">
          <StoryblokComponent
            v-for="item in headerMenu.bloks"
            :key="item._uid"
            :blok="item"
          />
        </ul>
      </nav>
    </div>
  </header>
</template>

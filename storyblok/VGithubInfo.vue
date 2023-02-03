<script setup lang="ts">
interface IProp {
  blok: {
    user: any;
    title: string;
    description: string;
    linktext: string;
  };
}

const props = defineProps<IProp>();

const colors = {
  TypeScript: "#3178c6",
  Shell: "#89e051",
  Vue: "#41b883",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Go: "#00ADD8",
  "C#": "#178600",
};

const languages = computed(() => {
  const langs: { [key: string]: number } = {};
  const allLanguage = props.blok.user?.languages || [];
  for (const langArrKey in allLanguage) {
    for (const key in allLanguage[langArrKey]) {
      if (typeof langs[key] == "undefined") {
        langs[key] = allLanguage[langArrKey][key];
      } else {
        langs[key] += allLanguage[langArrKey][key];
      }
    }
  }
  return Object.fromEntries(
    Object.entries(langs).sort(([ka, va], [kb, vb]) => vb - va)
  );
});

const user = computed(() => props.blok.user?.user);
const isMaxValue = computed(() => Math.max(...Object.values(languages.value)));
const getWidth = (value: number) => (value * 100) / isMaxValue.value;
</script>

<template>
  <section>
    <h4 class="text-lg font-medium mb-2">
      {{ blok.title }}
    </h4>
    <p class="mb-2">
      {{ blok.description }}
    </p>
    <div v-for="(value, key) in languages">
      {{ key }} ({{ Math.ceil(getWidth(value)) }}%)
      <div class="relative">
        <div class="bg-s-50 dark:bg-s-900 absolute inset-0"></div>
        <div
          class="relative h-4 rounded-sm"
          :style="{
            background: colors[key] || 'gray',
            width: `${getWidth(value)}%`,
          }"
        ></div>
      </div>
    </div>
    <a
      :href="user.html_url"
      target="_blank"
      :title="user.name"
      class="block mt-4 underline"
    >
      {{ blok.linktext }}
    </a>
  </section>
</template>

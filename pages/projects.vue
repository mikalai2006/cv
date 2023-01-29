<template>
  <div class="page">
    <div class="bg-s-800">
      <section class="max-w-screen-lg mx-auto p-6">
        <h1
          class="text-4xl font-bold text-s-200 underline underline-offset-8 decoration-2 decoration-wavy decoration-p-500"
        >
          Last projects
        </h1>
        <p class="pt-4 text-s-400 font-medium">
          Some of my latest projects where I was happy to apply my favorite js,
          vue.js
        </p>
      </section>
    </div>
    <div>
      <div class="max-w-screen-lg mx-auto p-4">
        <h2 class="text-2xl font-bold">
          Development of real estate calculator for besagash.kz
        </h2>
        <a href="https://besagashdom.kz/" target="_blank">besagashdom.kz</a>
        <p>Stack: Javascript, Vue.js, HTML, CSS, PHP, SVG</p>
        <div class="flex">
          <div class="">
            <img src="@/static/besagash.jpg" alt="Besagash project" />
          </div>
          <div class="flex-auto"></div>
        </div>
        <p>
          Development of real estate calculator using Javascript stack, Vue.js,
          HTML, CSS, PHP, SVG
        </p>
      </div>
      <div class="bg-s-200">
        <div class="max-w-screen-lg mx-auto p-4">
          <h2 class="text-2xl font-bold">Development library UI</h2>
          <p>Stack: Javascript, Vue.js, HTML, CSS</p>
          <div class="flex">
            <div class="">
              <img
                class="rounded-lg"
                src="@/static/l-vueso.jpg"
                alt="L-vueso project"
              />
            </div>
            <div class="flex-auto"></div>
          </div>
          <VTestMultiSelect :schema="schema" v-model="model" />
          <p>
            Development library UI using Javascript stack, Vue.js, HTML, CSS
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: "My projects page",
});

const schema = {
  id: "categories",
  keyValue: "id", // ключ для свойства
  keyLabel: "title",
  // keyGroup: 'parentId', // ключ для группировки
  // keyFilter: 'title',
  autofocus: true,
  component: "GMultiSelect",
  name: "categories",
  multiple: true,
  label: "Your categories",
  description: "Input categories your know",
  placeholder: "Choose categories",
  items: [
    {
      id: "one",
      title: "First",
    },
    {
      id: "two",
      title: "Second",
    },
  ],
  vtype: "array",
  rules: [
    {
      type: "required",
      params: ["This field is required"],
    },
    {
      type: "length",
      params: [1, "Languages cannot be less than 1 language"],
    },
  ],
};
const model = ref([]);
</script>

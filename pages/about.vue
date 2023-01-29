<template>
  <div>
    <h1 class="bg-blue-500 text-3xl font-bold underline">About page</h1>
    <div>
      <button @click="counterPinia.increment">++</button>
    </div>
  </div>
</template>
<script setup>
import { useGlobal } from "@/stores/useGlobal";
const counterPinia = useGlobal();

definePageMeta({
  title: "My about page",
});
</script>

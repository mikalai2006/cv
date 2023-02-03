<script setup lang="ts">
import { useUniversalCookies } from "~~/plugins/universal-cookie";

const cookie = useUniversalCookies();

interface IProp {
  blok: {
    id: string;
    title: string;
    link: string;
    linktext: string;
    data: {
      user: any;
    };
  };
}
const props = defineProps<IProp>();

const dark = computed<string>(() => cookie.get("dark") || "light");
</script>

<template>
  <section>
    <h4 class="text-lg font-medium mb-2">
      {{ blok.title }}
    </h4>
    <img
      alt="Badge"
      :src="`https://www.codewars.com/users/${props.blok.id}/badges/large?theme=${dark}`"
    />
    <div v-if="blok.link" class="mt-4">
      <a
        :href="blok.link"
        target="_blank"
        :title="blok.linktext"
        class="underline flex items-center"
      >
        {{ blok.linktext }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { iArrowLeft } from "@/composable/useIcons";

interface IProp {
  blok: {
    textlink: [];
    user: any;
    textonsite: string;
    logo: string;
    title: string;
  };
}
const props = defineProps<IProp>();

const dayjs = inject("dayjs");

const user = computed(() => props.blok.user?.user || {});

// const answers = ref([]);
// const getAnswer = (userId: string) => {
//   return fetch(
//     `https://api.stackexchange.com/2.3/users/${userId}/answers?page=1&pagesize=10&order=desc&sort=votes&site=${props.blok.site}&filter=!LL4*NmZUVzq9es34SwFE-L`
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       answers.value = response;
//       return response;
//     })
//     .catch((e) => console.error(e));
// };
</script>

<template>
  <section>
    <h3 class="mb-2 text-s-500">
      {{ blok.title }}
    </h3>
    <div class="flex items-start gap-2 md:gap-4">
      <div class="flex-none w-24 h-24 rounded-md overflow-hidden">
        <img
          v-if="user.profile_image"
          :src="user.profile_image"
          :alt="user.display_name"
          :title="user.display_name"
        />
        <div v-else class="bg-s-200 dark:bg-s-700 h-full w-full"></div>
      </div>
      <div v-if="user.display_name" class="flex-auto">
        <b>
          {{ user.display_name }}
        </b>
        <div class="text-s-500 text-sm">
          {{ blok?.textonsite }}
          {{ dayjs.unix(user.creation_date).fromNow(true) }}
        </div>
        <div class="flex items-center">
          <div class="font-bold pr-2">
            {{ user.reputation }}
          </div>
          <div class="flex items-center px-2 text-y-500">
            <div class="w-2 h-2 bg-y-400 rounded-full mr-2"></div>
            {{ user.badge_counts?.gold }}
          </div>
          <div class="flex items-center px-2 text-s-400">
            <div class="w-2 h-2 bg-s-300 rounded-full mr-2"></div>
            {{ user.badge_counts?.silver }}
          </div>
          <div class="flex items-center px-2 text-a-300">
            <div class="w-2 h-2 bg-a-300 rounded-full mr-2"></div>
            {{ user.badge_counts?.bronze }}
          </div>
        </div>
        <div>
          <a
            :href="user.link"
            target="_blank"
            :title="`${user.display_name} (${blok.textlink})`"
            class="underline pt-2 text-sm flex items-center text-s-500"
          >
            {{ blok.textlink }}
            <LIcon class="pl-1">
              {{ iArrowLeft }}
            </LIcon>
          </a>
        </div>
      </div>
      <div
        v-else
        class="flex-auto bg-s-200 dark:bg-s-700 h-12 w-1/2 rounded-md"
      ></div>
    </div>
  </section>
</template>

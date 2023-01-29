<template>
  <div class="p-4 md:p-12">
    <div class="max-w-screen-lg mx-auto bg-white dark:bg-s-800 p-4 rounded-md">
      <div class="text-center flex items-center space-x-4">
        <FButton :disabled="disabled" @click="onChangeKeyCurrentQuote">
          Random quote
        </FButton>
        <FButton
          class="rounded-full block !px-2 py-2"
          :disabled="disabled && !autoPlay"
          @click="toggleAutoplay"
        >
          <LIcon v-if="autoPlay" class="text-2xl">
            {{ iStop }}
          </LIcon>
          <LIcon v-else class="text-2xl">
            {{ iPlay }}
          </LIcon>
        </FButton>
        <div class="relative group">
          <div
            class="absolute bg-s-200 rounded-md px-2 text-sm -top-5 hidden group-hover:block"
          >
            {{ duration }}ms
          </div>
          <input
            type="range"
            :disabled="autoPlay || disabled"
            v-model="duration"
            min="1000"
            max="10000"
            step="500"
            class="disabled:cursor-not-allowed h-1 bg-s-200 rounded-lg appearance-none cursor-pointer dark:bg-s-700"
          />
        </div>
      </div>
      <div class="relative overflow-hidden px-4">
        <transition appear name="slidetotop" @after-enter="reInitProgressBar">
          <figure :key="key" class="py-12 px-4">
            <blockquote cite="https://quotesondesign.com/">
              <div class="flex">
                <div class="text-lg md:text-9xl">&#8220;</div>
                <p class="p-6 italic font-bold text-xl md:text-5xl">
                  {{ quote.text }}
                </p>
                <div class="text-lg md:text-9xl">&#8221;</div>
              </div>
            </blockquote>
            <figcaption class="">
              <div class="text-xl font-medium text-p-500">
                — {{ quote.author }}
              </div>
              <cite>{{ quote.cite }}</cite>
              <div>{{ key + 1 }} of {{ quotes.length }}</div>
            </figcaption>
          </figure>
        </transition>
        <div class="relative">
          <div
            :key="key"
            ref="progressBar"
            class="absolute bg-p-500 rounded w-0 top-0 h-1"
          ></div>
          <div class="h-1 bg-s-100 dark:bg-s-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { iPlay, iStop } from "~~/composable/useIcons";

const props = defineProps({
  blok: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
// quotes
const quotes = computed(
  () =>
    props.blok.quotes?.map((x: any) => {
      return {
        cite: x.cite,
        text: x.text,
        author: x.author,
      };
    }) || []
);

// key current quote
const key = ref(0);
// current quote
const quote = computed(() => quotes.value[key.value] || {});

// change key of current quote
const disabled = ref(false);
const onChangeKeyCurrentQuote = () => {
  disabled.value = true;
  let newKey = 0;
  const generateRandom = () => {
    newKey = Math.floor(Math.random() * quotes.value.length);
    if (newKey == key.value) {
      generateRandom();
    } else {
      key.value = newKey;
      toggleDisableBtn();
    }
  };
  generateRandom();
};

const progressBar = ref(null);
const reInitProgressBar = () => {
  if (progressBar.value) {
    progressBar.value.style.width = `100%`;
    progressBar.value.style.transition = `width ${duration.value}ms linear`;
  }
};
const hideProgressBar = () => {
  if (progressBar.value) {
    progressBar.value.style.transition = "";
    progressBar.value.style.width = 0;
  }
};
let myTimeout: ReturnType<typeof setTimeout> | null = null;
const toggleDisableBtn = () => {
  clearTimeout(myTimeout);
  myTimeout = setTimeout(() => {
    disabled.value = false;
    hideProgressBar();
    autoPlay.value && onChangeKeyCurrentQuote();
  }, parseInt(duration.value) + 500);
};

const autoPlay = ref(false);
const toggleAutoplay = () => {
  autoPlay.value = !autoPlay.value;
  if (autoPlay.value) {
    onChangeKeyCurrentQuote();
  } else {
    hideProgressBar();
    disabled.value = false;
  }
};

const duration = ref(2000);
</script>

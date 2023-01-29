<template>
  <div class="p-4 md:p-12">
    <div class="max-w-screen-lg mx-auto">
      <div class="text-center flex items-center space-x-4">
        <LBtn
          class="inline"
          mode="second"
          ringed
          bordered
          :disabled="disabled"
          @click="onChangeKeyCurrentQuote"
        >
          Random quote
        </LBtn>
        <LBtn
          bordered
          :disabled="disabled && !autoPlay"
          @click="toggleAutoplay"
        >
          <LIcon v-if="autoPlay" class="text-2xl">
            M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0
            1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0
            0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z
          </LIcon>
          <LIcon v-else class="text-2xl">
            M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0
            1.392l-6.363 3.692C4.713 12.69 4 12.345 4
            11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z
          </LIcon>
        </LBtn>
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

// [
//   {
//     author: "NEIL GAIMAN",
//     text: "You have to finish things — that’s what you learn from, you learn by finishing things.",
//   },
//   {
//     author: "ABRAHAM LINCOLN",
//     text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
//   },
//   {
//     author: "SHUNRYU SUZUKI",
//     text: "In the beginner’s mind there are many possibilities, but in the expert’s mind there are few.",
//   },
//   {
//     author: "SIMON COLLISON",
//     text: "To attempt mastery of everything inevitably makes us mediocre in many areas.",
//   },
//   {
//     author: "THOMAS MANSS",
//     text: "Decoration is just make-up for the wrinkles of the idea.",
//   },
//   {
//     author: "SHUNRYU SUZUKI",
//     text: "When you do something, you should burn yourself up completely, like a good bonfire, leaving no trace of yourself.",
//   },
//   {
//     author: "SIR KEN ROBINSON",
//     text: "If you’re not prepared to be wrong, you’ll never come up with anything original.",
//   },
// ];
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

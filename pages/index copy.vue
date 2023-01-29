<template>
  <div>
    <div class="bg-s-800 text-s-400">
      <div class="max-w-screen-lg mx-auto px-4 py-6 text-center md:text-left">
        <h1
          class="text-4xl md:text-6xl tracking-wide font-bold text-s-200 underline underline-offset-8 decoration-wavy decoration-p-500"
        >
          Personal page
        </h1>
        <h2 class="pt-6 text-xl font-bold text-s-300">
          mikalai2006 github pages
        </h2>
        <p class="pt-6">
          Welcome to my page, which will introduce you to my favorite pastime
        </p>
        <div class="py-6 flex">
          <Nuxt-Link
            class="text-lg block btn b-rounded btn-second ringed fill"
            to="/projects"
          >
            View projects
          </Nuxt-Link>
          <Nuxt-Link
            class="ml-4 text-lg block btn b-rounded btn-primary ringed fill"
            to="/cv"
          >
            View cv
          </Nuxt-Link>
        </div>
      </div>
    </div>
    <div class="">
      <div class="max-w-screen-lg mx-auto p-4">
        <p class="py-6">
          You may be interested in some quotes of famous people
        </p>
        <VQuoteDay></VQuoteDay>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: "My home page",
});
</script>

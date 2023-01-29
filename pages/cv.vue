<template>
  <div class="page max-w-screen-md mx-auto">
    <div class="flex-auto">
      <!-- title cv -->
      <div
        class="p-4 flex flex-col items-center md:flex-row print:flex-row md:items-start"
      >
        <div class="flex-none">
          <img
            class="w-32 rounded-md"
            src="@/static/cv.jpg"
            alt="Mikalai Parakhnevich"
          />
        </div>
        <div class="flex-auto">
          <section
            class="md:pl-4 print:pl-4 text-center print:text-left md:text-left"
          >
            <h1 class="text-2xl font-bold">Mikalai Parakhnevich</h1>
            <p class="font-medium">Fullstack Javascript developer</p>
            <div class="text-s-500">
              <p class="py-1">Bobruisk, Belarus</p>
            </div>
            <ul class="text-sm list-none leading-5">
              <li>Job type: full-time</li>
              <li>Location: Remote, Relocation</li>
              <li>Salary: USD 1000-2000</li>
            </ul>
          </section>
        </div>
      </div>
      <div
        class="text-sm flex flex-col md:flex-row print:flex-row flex-wrap items-start"
      >
        <!-- Summary -->
        <div class="md:w-1/2 print:w-1/2 p-4">
          <h2 class="pb-2 text-lg font-medium">Summary</h2>
          <p>
            Communicative, responsible. Looking for an opportunity that will
            allow me to use my knowledge in information technology and resource
            management. Passion for programming, creating full-stack web
            applications.
          </p>
        </div>
        <!-- /Summary -->

        <!-- Experience -->
        <div class="md:w-1/2 print:w-1/2 p-4">
          <h2 class="pb-2 text-lg font-medium">Experience</h2>
          <h3 class="font-bold">- Full Stack Web Developer</h3>
          <div>Jun 2019 – Present | Freelance</div>
          <p>
            Active work with clients, development and editing of web interfaces
            for clients,providing comments to improve existing
            functionality,ongoing customer service upon request or when needed.
          </p>
        </div>
        <!-- /Experience -->

        <!-- Education -->
        <div class="md:w-1/2 print:w-1/2 p-4">
          <h2 class="pb-2 text-lg font-medium">Education</h2>
          <h3 class="font-bold">- Mozyr State Pedagogical University</h3>
          <h4 class="font-medium">Faculty of Physics and Mathematics</h4>
          <div>Sep 2002 – Jun 2007 | Bachelor of physics and mathematics</div>
        </div>
        <!-- /Education -->

        <!-- Skills -->
        <div class="md:w-1/2 print:w-1/2 p-4">
          <h2 class="pb-2 text-lg font-medium">Skills</h2>
          <h3 class="font-bold">- Full Stack Web Development</h3>
          <p>
            Javascript, Node.js, Express, Koa, Hapi, NoSQL, MongoDB, Mongoose,
            MySql, Sequelize, Graphql, Vue.js, Vue-router, Vuex, Pinia, Nuxt,
            Quasar, HTML5, CSS3, SCSS, Tailwindcss, Vuetify, LESS, MEVN,
            Feathers
          </p>
          <h3 class="font-bold">- Tools</h3>
          <p>Npm, Vite, Webpack, Docker, Docker-Compose, Git</p>
        </div>
        <!-- /Skills -->
      </div>

      <!-- Contacts information-->
      <div class="md:w-1/2 print:w-1/2 p-4">
        <h2 class="pb-2 text-lg font-medium">Contacts information</h2>
        <div class="">
          Github:
          <a
            href="https://github.com/mikalai2006"
            title="Github Mikalai Parakhnevich"
            target="_blank"
            class="underline decoration-dotted decoration-1"
          >
            mikalai2006 ↗
          </a>
        </div>
        <div class="">
          Stackoverflow:
          <a
            href="https://ru.stackoverflow.com/users/299066/mikalai-parakhnevich"
            title="Stackoverflow Mikalai Parakhnevich"
            target="_blank"
            class="underline decoration-dotted decoration-1"
          >
            Mikalai Parakhnevich ↗
          </a>
        </div>
        <div class="">
          Email:
          <a
            href="mailto:mikalai2000@gmail.com"
            title="Stackoverflow Mikalai Parakhnevich"
            class="underline decoration-dotted decoration-1"
          >
            mikalai2000@gmail.com
          </a>
        </div>
        <div class="">
          Telegram:
          <a
            href="https://telegram.im/@mikalaiP"
            title="Telegram Mikalai Parakhnevich"
            target="_blank"
            class="underline decoration-dotted decoration-1"
          >
            @mikalaiP ↗
          </a>
        </div>
        <div class="">
          Phone:
          <a
            href="tel:+375336291942"
            title="Stackoverflow Mikalai Parakhnevich"
            class="underline decoration-dotted decoration-1"
          >
            +375 (33) 6291942
          </a>
        </div>
      </div>
      <!-- /Contacts information-->

      <!-- Languages -->
      <div class="md:w-1/2 print:w-1/2 p-4">
        <h2 class="pb-2 text-lg font-medium">Languages</h2>
        <p>English - A2</p>
      </div>
      <!-- /Languages -->
    </div>
    <div class="print:hidden">
      <LBtn @click="printPage">Print</LBtn>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: "My cv",
});
const printPage = () => window.print();
</script>

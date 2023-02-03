<template>
  <div class="wrapper bg-white dark:bg-s-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale(ru);

provide("dayjs", dayjs);
</script>

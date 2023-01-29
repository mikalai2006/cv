<template>
  <div class="wrapper min-h-screen flex flex-col items-stretch">
    <div class="header flex-none print:hidden">
      <TheHeader />
    </div>
    <div class="main flex-auto bg-s-100 dark:bg-s-900">
      <slot />
    </div>
    <div class="flex-none print:hidden">
      <TheFooter />
    </div>
  </div>
</template>

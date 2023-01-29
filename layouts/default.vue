<template>
  <div class="wrapper min-h-screen flex flex-col items-stretch">
    <div class="header flex-none bg-slate-200 print:hidden">
      <TheHeader />
    </div>
    <div class="flex-auto bg-slate-100">
      <slot />
    </div>
    <div class="flex-none bg-slate-700 text-white print:hidden">
      <TheFooter />
    </div>
  </div>
</template>

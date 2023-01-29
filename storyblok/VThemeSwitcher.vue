<template>
  <FButton
    mode="link"
    class="text-xl"
    aria-label="change mode"
    @click="uiPinia.onToggleDark"
  >
    <span class="flex items-center">
      <LIcon role="presentation">
        {{ uiPinia.getTheme.dark ? iMoon : iBrightHigh }}
      </LIcon>
    </span>
  </FButton>
</template>

<script lang="ts" setup>
import { iMoon, iBrightHigh } from "@/composable/useIcons";
import { useUI } from "@/stores/useUI";

const uiPinia = useUI();
</script>

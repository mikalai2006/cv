import { LBtn, LIcon, FButton, ripple } from "vueco";

const components = [LBtn, LIcon, FButton];
const directives = { ripple };

export default defineNuxtPlugin((nuxtApp) => {
  components.forEach((element) => {
    nuxtApp.vueApp.component(element.name || element.__name, element);
  });
  Object.entries(directives).forEach(([name, directive]) => {
    nuxtApp.vueApp.directive(name, directive);
  });
});

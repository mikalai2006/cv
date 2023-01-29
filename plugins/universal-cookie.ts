import { createCookies } from "@vueuse/integrations/useCookies";

let useUniversalCookies = createCookies();

const cookiesPlugin = defineNuxtPlugin(() => {
  return ({ req }: { req: any }) => {
    if (req) {
      useUniversalCookies = createCookies(req);
    } else {
      useUniversalCookies = createCookies();
    }
  };
});

export default cookiesPlugin;

export { useUniversalCookies }; // now import and call useUniversalCookies instead of useCookies

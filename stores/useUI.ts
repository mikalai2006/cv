import { defineStore } from "pinia";

import { useUniversalCookies } from "~~/plugins/universal-cookie";

export interface IUIState {
  theme: ITheme;
}

export interface ITheme {
  dark?: boolean;
}

export const useUI = defineStore({
  id: "ui",

  state: () =>
    ({
      theme: {
        dark: false,
      },
    } as IUIState),

  getters: {
    getTheme(state): any {
      return state.theme;
    },
  },

  actions: {
    onSetThemeOption(option: ITheme) {
      this.theme = Object.assign({}, this.theme, option);
    },
    onToggleDark() {
      const cookie = useUniversalCookies();
      const currentDark = this.theme.dark;
      const doc = document.documentElement;

      if (currentDark) {
        doc.classList.remove("dark");
        cookie.set("dark", false);
      } else {
        doc.classList.add("dark");
        cookie.set("dark", true);
      }

      this.onSetThemeOption({ dark: !this.theme.dark });
    },
  },
});

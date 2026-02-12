import type { Action } from "@reduxjs/toolkit";
import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  PULL_FROM_LOCALSTORAGE,
} from "../actions/headerAction";

interface HeaderState {
  language: string;
  theme: string;
}
const initState: HeaderState = {
  language: "EN",
  theme: "LIGHT",
};

const themeKey: string = "theme";
const languageKey: string = "language";

const headerReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      const newLanguage = state.language === "EN" ? "TR" : "EN";
      localStorage.setItem(languageKey, JSON.stringify(newLanguage));
      return { ...state, language: newLanguage };

    case CHANGE_THEME:
      const newTheme = state.theme === "LIGHT" ? "DARK" : "LIGHT";
      localStorage.setItem(themeKey, JSON.stringify(newTheme));
      return { ...state, theme: newTheme };

    case PULL_FROM_LOCALSTORAGE:
      const storedTheme = localStorage.getItem(themeKey);
      let resultTheme: string = "";
      if (storedTheme === null) {
        localStorage.setItem(themeKey, JSON.stringify("LIGHT"));
        resultTheme = "LIGHT";
      } else {
        resultTheme = JSON.parse(storedTheme);
      }

      const storedLanguage = localStorage.getItem(languageKey);
      let resultLanguage: string = "";
      if (storedLanguage === null) {
        localStorage.setItem(languageKey, JSON.stringify("EN"));
        resultLanguage = "EN";
      } else {
        resultLanguage = JSON.parse(storedLanguage);
      }

      return { language: resultLanguage, theme: resultTheme };
    default:
      return state;
  }
};

export default headerReducer;

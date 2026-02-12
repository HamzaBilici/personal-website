import { createSlice } from "@reduxjs/toolkit";
import { getTextDataByLanguage } from "../actions/language-action";

interface LanguageState {
  language: string;
  languageData: object;
}

const initialState = {
  language: localStorage.getItem("language") || "en",
  languageData: {},
} satisfies LanguageState as LanguageState;

const counterSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state) {
      const targetLanguage = state.language === "en" ? "tr" : "en";
      console.log(targetLanguage);
      state.language = targetLanguage;
      localStorage.setItem("language", targetLanguage);
    },
    firstLandOnPage(state) {
      localStorage.setItem("language", state.language);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTextDataByLanguage.fulfilled, (state, action) => {
      state.languageData = action.payload;
    });
  },
});

export const { changeLanguage, firstLandOnPage } = counterSlice.actions;
export default counterSlice.reducer;

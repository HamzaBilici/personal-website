import { createSlice } from "@reduxjs/toolkit";
import { getTextDataByLanguage } from "../actions/language-action";
import { toast } from "react-toastify";

interface LanguageState {
  language: string;
  languageData: object;
}

const initialState = {
  language: localStorage.getItem("language") || "en",
  languageData: {},
} satisfies LanguageState as LanguageState;

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state) {
      const targetLanguage = state.language === "en" ? "tr" : "en";
      console.log(targetLanguage);
      state.language = targetLanguage;
       toast(targetLanguage==='tr'?"Türkçeye geçiliyor":"Switching to English" )
      localStorage.setItem("language", targetLanguage);
    },
    firstLandOnPageLanguage(state) {
      localStorage.setItem("language", state.language);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTextDataByLanguage.fulfilled, (state, action) => {
      state.languageData = action.payload;
    });
  },
});

export const { changeLanguage, firstLandOnPageLanguage } = languageSlice.actions;
export default languageSlice.reducer;

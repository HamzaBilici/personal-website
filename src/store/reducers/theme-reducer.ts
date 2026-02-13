import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface ThemeState {
  theme: string;
}

const initialState = {
  theme: localStorage.getItem("theme") || "light",
} satisfies ThemeState as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      const targetTheme = state.theme !== "light" ? "light" : "dark";
      console.log(targetTheme);
      state.theme = targetTheme;
      if( toast(targetTheme==='light'?"Light Mode":"Dark Mode"))
      localStorage.setItem("theme", targetTheme);
    },
    firstLandOnPageTheme(state) {
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { changeTheme, firstLandOnPageTheme } = themeSlice.actions;
export default themeSlice.reducer;

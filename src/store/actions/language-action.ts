import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { localData } from "../../assets/data";

export const getTextDataByLanguage = createAsyncThunk(
  "getTextDataByLanguage",
  async (_, { getState }) => {
    try {
      const state = getState() as any;
      const currentLanguage = state.language.language;
      const payload = localData[currentLanguage === "en" ? "en" : "tr"];

      const { data } = await axios.post(
        "https://reqres.in/api/workintech",
        payload,
        {
          headers: { "x-api-key": "reqres_fdb427e28b7f424e81dc5a3b7f94b91f" },
        },
      );

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

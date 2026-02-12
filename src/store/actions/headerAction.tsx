import type { Action } from "@reduxjs/toolkit";

export const CHANGE_THEME: string = "CHANGE_THEME";

export const CHANGE_LANGUAGE: string = "CHANGE_LANGUAGE";

export const PULL_FROM_LOCALSTORAGE: string = "PULL_FROM_LOCALSTORAGE";

export const changeTheme = (): Action => {
  return { type: CHANGE_THEME };
};

export const changeLanguage = (): Action => {
  return { type: CHANGE_LANGUAGE };
};

export const pullFromLocalstorage=():Action=>{
    return {type:PULL_FROM_LOCALSTORAGE}
}
import { configureStore, type Store } from "@reduxjs/toolkit";
import headerReducer from "./reducers/headerReducer";
import { pullFromLocalstorage } from "./actions/headerAction";

const myStore: Store = configureStore({
  reducer: {
   header:headerReducer
  },
});

myStore.dispatch(pullFromLocalstorage())

export default myStore;

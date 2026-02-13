import { configureStore, type Store } from "@reduxjs/toolkit";
import { pullFromLocalstorage } from "./actions/headerAction";
import languageSlice from './reducers/language-reducer'
import themeSlice from './reducers/theme-reducer'

const myStore: Store = configureStore({
  reducer: {
   //header:headerReducer,
   theme:themeSlice,
   language:languageSlice
  },
});

myStore.dispatch(pullFromLocalstorage())

export default myStore;
export type RootState = ReturnType<typeof myStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof myStore.dispatch
import { configureStore, type Store } from "@reduxjs/toolkit";
import { pullFromLocalstorage } from "./actions/headerAction";
import counterSlice from './reducers/language-reducer'

const myStore: Store = configureStore({
  reducer: {
   //header:headerReducer,
   language:counterSlice
  },
});

myStore.dispatch(pullFromLocalstorage())

export default myStore;
export type RootState = ReturnType<typeof myStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof myStore.dispatch
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postSlice";
import authorReducer from "./features/users/authorSlice";

const store = configureStore({
  reducer: {
    author: authorReducer,
    posts: postsReducer,
  },
});

export default store;

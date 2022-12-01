import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Title 1", content: "content 1" },
  { id: 2, title: "Title 2", content: "content 2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { savePost } = postSlice.actions;

export default postSlice.reducer;

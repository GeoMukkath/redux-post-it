import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Title 1", content: "content 1" },
  { id: 2, title: "Title 2", content: "content 2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, authorId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            authorId,
          },
        };
      },
    },
  },
});

export const { savePost } = postSlice.actions;

export default postSlice.reducer;

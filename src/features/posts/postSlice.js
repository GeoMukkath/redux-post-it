import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Title 1",
    content: "content 1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Title 2",
    content: "content 2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
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

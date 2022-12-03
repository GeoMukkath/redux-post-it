import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "geo" },
  { id: 2, name: "john" },
  { id: 3, name: "Jenny" },
];

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;

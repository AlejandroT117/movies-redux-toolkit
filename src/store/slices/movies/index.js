import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    value: {},
  },
  reducers: {
    setMovie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default movieSlice.reducer;

export const { setMovie } = movieSlice.actions;

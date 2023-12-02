import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newCategory: null,
  iconicCategory: null,
  criticallyAcclaimed: null,
};

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    setMoviesFunction: (state, action) => {
      state.newCategory = action.payload.newCategory;
      state.iconicCategory = action.payload.iconicCategory;
      state.criticallyAcclaimed = action.payload.criticallyAcclaimed;
    },
  },
});

export const { setMoviesFunction } = movieSlice.actions;

export default movieSlice.reducer;

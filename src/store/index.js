import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../redux/movieSlice";
import userSlice from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    movies: movieSlice,
    user: userSlice,
  },
});

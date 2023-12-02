import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  image: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;

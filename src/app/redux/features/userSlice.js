import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: {},
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userState = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;

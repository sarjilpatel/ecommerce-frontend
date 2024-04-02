import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themeState",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme == "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

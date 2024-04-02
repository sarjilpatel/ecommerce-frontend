import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },

    stopLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

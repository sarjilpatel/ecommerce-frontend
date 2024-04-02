import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice";
import themeSlice from "./features/themeSlice";
import loadingSlice from "./features/loadingSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    sidebarState: sidebarSlice,
    themeState: themeSlice,
    loadingState: loadingSlice,
    userState: userSlice,
  },
});

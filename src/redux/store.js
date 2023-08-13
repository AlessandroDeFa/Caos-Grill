import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./features/cursor-slice";

export const store = configureStore({
  reducer: {
    cursorReducer,
  },
});

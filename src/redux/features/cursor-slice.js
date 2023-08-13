import { createSlice } from "@reduxjs/toolkit";

export const cursor = createSlice({
  name: "cursor",
  initialState: {
    value: { isHover: false },
  },
  reducers: {
    setCursorHover: (state, action) => {
      state.value.isHover = action.payload;
    },
  },
});

export const { setCursorHover } = cursor.actions;
export default cursor.reducer;

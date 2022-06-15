import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    value: 0,
    confirmDialogIsOpen: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = cardSlice.actions;

export const selectScore = (state) => state.card.value;

export default cardSlice.reducer;

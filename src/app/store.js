import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import cardReducer from "../features/cardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer,
  },
});

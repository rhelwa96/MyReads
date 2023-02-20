import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Books";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
export default store;
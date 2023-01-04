import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-Slice";

const store = configureStore({
  reducer :{
      ui : uiSlice,
  }
})

export default store;
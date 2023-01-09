import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "UI",
    initialState:{ cartVisible:false ,notification : null},
    reducers:{
      toggle(state){
          state.cartVisible = !state.cartVisible
      },
      showNotification(state, action){
        state.notification ={
          status : action.payload.status,
          title : action.payload.title,
          message : action.payload.message
        };
      },
    }
});

export const uiSliceAction = uiSlice.actions;

export default uiSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const init ={
    items : [],
    totalQuantity : 0,
    totalAmount : 0,
}
const cartSlice = createSlice({
    name : "Cart Slice",
    initialState :init ,
    reducers :{
        addItemTOCart(state,action){
         const newItem = action.payload
         const existingItem = state.items.find((item)=>item.id === newItem.id);
         state.totalQuantity++;
           if(!existingItem){
                state.items.push({
                  id: newItem.id,
                  title: newItem.title,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price,
                });
            }
           else{
              existingItem.quantity++
              existingItem.totalPrice = existingItem.totalPrice + newItem.price;
           }
        },
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find((item)=> item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1){
                state.items = state.items.filter((item)=> item.id != id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice-existingItem.price
            }
        },
    }
});


export const cartSliceAction = cartSlice.actions;
export default cartSlice.reducer;
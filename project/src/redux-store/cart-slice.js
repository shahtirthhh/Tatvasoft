import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        store_cart: (state, action) => {
            state.cart = action.payload.cart;
        }
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
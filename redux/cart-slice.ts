import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: null,
    },
    reducers: {
        updateCart(state, action: PayloadAction<any>) {
            state.cart = action.payload;
        },
    },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cart-slice";
import uiReducer from "@/redux/ui-slice";
import authReducer from "@/redux/auth-slice";
import paymentReducer from "@/redux/payment-slice";


const rootReducer = combineReducers({
    cart: cartReducer,
    UI: uiReducer,
    auth: authReducer,
    payment: paymentReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

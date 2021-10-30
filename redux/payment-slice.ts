import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
    paymentMethod: null | string;
    country: null | string;
    countryCode: null | string;
};

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        paymentMethod: null,
        country: null,
        countryCode: null,
    },
    reducers: {
        updatePaymentMethod(state: stateType, action: PayloadAction<string>) {
            state.paymentMethod = action.payload;
        },
        updateCountry(
            state: stateType,
            action: PayloadAction<{
                country: string;
                code: string;
            }>,
        ) {
            state.country = action.payload.country;
            state.countryCode = action.payload.code;
        },
    },
});

export const { updatePaymentMethod, updateCountry } = paymentSlice.actions;
export default paymentSlice.reducer;

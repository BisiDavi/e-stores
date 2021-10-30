import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authSliceStateType = {
    loading: null | string | boolean;
    authorized: boolean;
    userId: null | string;
    error: null | boolean;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: null,
        authorized: false,
        userId: null,
        error: null,
    },
    reducers: {
        authRequest(state: authSliceStateType, action: PayloadAction<string>) {
            state.loading = action.payload;
        },
        authorizeUser(
            state: authSliceStateType,
            action: PayloadAction<string>,
        ) {
            state.loading = false;
            state.authorized = true;
            state.userId = action.payload;
        },
        authorizeError(state: authSliceStateType) {
            state.loading = false;
            state.error = true;
        },
        logout(state) {
            state.authorized = false;
            state.userId = null;
        },
    },
});

export const { authRequest, authorizeUser, authorizeError, logout } =
    authSlice.actions;

export default authSlice.reducer;

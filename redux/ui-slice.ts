import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "UI",
    initialState: {
        sidebarCart: false,
        sidebarRight: false,
        modal: false,
        authModal: "AUTHFORM",
        checkoutModal: "SECURE_CHECKOUT",
        displayCheckoutModal: false,
    },
    reducers: {
        toggleSidebarCart(state) {
            state.sidebarCart = !state.sidebarCart;
        },
        toggleSidebarRight(state) {
            state.sidebarRight = !state.sidebarRight;
        },
        toggleModal(state) {
            state.modal = !state.modal;
        },
        authModalForm(state, action: PayloadAction<string>) {
            state.authModal = action.payload;
        },
        checkoutModal(state, action: PayloadAction<string>) {
            state.checkoutModal = action.payload;
        },
        displayCheckoutModalAction(state) {
            state.displayCheckoutModal = !state.displayCheckoutModal;
        },
    },
});

export const {
    toggleSidebarCart,
    toggleSidebarRight,
    toggleModal,
    authModalForm,
    checkoutModal,
    displayCheckoutModalAction,
} = uiSlice.actions;

export default uiSlice.reducer;

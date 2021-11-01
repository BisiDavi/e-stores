import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type payloadType = {
    type: "first" | "second" | "third";
    bg?: string;
    text?: string;
    title?: string;
    description?: string;
};

type stateType = {
    bg?: string;
    text?: string;
    title?: string;
    description?: string;
};
type sliderState = {
    slider: {
        first: stateType;
        second: stateType;
        third: stateType;
    };
};

const cartSlice = createSlice({
    name: "slider",
    initialState: {
        slider: {
            first: {
                img: "/slider-1",
                bg: "rgb(58, 175, 210)",
                text: "Has just arrived",
                title: "Huge Summer Collection",
                description:
                    "Swimwear, Tops, Shorts, Sunglasses & much more...",
            },
            second: {
                img: "/slider-2",
                bg: "rgb(245, 177, 176)",
                text: "Hurry up! Limited time offer",
                title: "Women Sportswear Sale",
                description:
                    "Sneakes, Keds, Sweatshirts, Hoodies & much more...",
            },
            third: {
                img: "/slider-3",
                bg: "rgb(235, 161, 112)",
                text: "Complete your look with",
                title: "New Men's Accessories",
                description: "Hats & Caps, Sunglasses, Bags, & much more...",
            },
        },
    },
    reducers: {
        updateSlider(state: sliderState, action: PayloadAction<payloadType>) {
            const { payload } = action;
            state.slider[payload.type] = payload;
        },
    },
});

export const { updateSlider } = cartSlice.actions;
export default cartSlice.reducer;

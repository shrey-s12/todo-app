import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: [],
};

const filtersSlice = createSlice({
    name: "filterNameInSlice",
    initialState,
    reducers: {
        setColorsFilter: (state, action) => {
            const color = action.payload.color;
            if (state.color.includes(color)) {
                state.color = state.color.filter((ele) => ele !== color);
            } else {
                state.color.push(color);
            }
        },
    },
});

export const { setColorsFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectColorFilter = (state) => state.filtersKeyInStore.color;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "",
};

const filtersSlice = createSlice({
    name: "filterNameInSlice",
    initialState,
    reducers: {
        setColorFilter: (state, action) => {
            state.color = action.payload.color;
        },
    },
});

export const { setColorFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectColorFilter = (state) => state.filtersKeyInStore.color;

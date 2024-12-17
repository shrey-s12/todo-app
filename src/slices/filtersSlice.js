import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "all",
    color: "",
};

const filtersSlice = createSlice({
    name: "filterNameInSlice",
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { } = filtersSlice.actions;
export default filtersSlice.reducer;

export const FilterStatus = (state) => state.filtersKeyInStore.status;
export const FilterColor = (state) => state.filtersKeyInStore.color;

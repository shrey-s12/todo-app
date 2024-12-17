import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
    reducer: {
        todosKeyInStore: todosReducer,
        filtersKeyInStore: filtersReducer,
    }
})
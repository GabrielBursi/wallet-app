import { configureStore } from '@reduxjs/toolkit'
import { SliceReducer } from './slices/slice';

export const store = configureStore({
    reducer: {
        SliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
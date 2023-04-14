import { configureStore } from "@reduxjs/toolkit";

import userReducer, { TournSlice } from "./Auth";

export const store = configureStore({
    reducer: {
        user: userReducer,
        tourn: TournSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




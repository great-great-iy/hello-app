import { configureStore } from "@reduxjs/toolkit";
import userData from "../src/redux/userData";

const rootReducer = {
    userData
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});